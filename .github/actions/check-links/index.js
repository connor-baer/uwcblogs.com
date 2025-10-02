import * as core from '@actions/core';
import ky, { TimeoutError } from 'ky';
import pMap from 'p-map';

async function run() {
  /**
   * @type {{ url: string }[]}
   */
  const blogs = await ky.get('https://uwcblogs.com/blogs.json').json();

  core.startGroup('Verifying links');

  const responses = await pMap(
    blogs,
    async (blog) => {
      core.debug(`Validating ${blog.url}`);
      if (!URL.canParse(blog.url)) {
        core.error(`Failed to parse ${blog.url}`);
        return { ...blog, status: 400 };
      }
      core.debug(`Fetching ${blog.url}`);
      const response = await ky
        .get(blog.url, { throwHttpErrors: false, timeout: 30000 })
        .catch((error) => {
          core.error(`Failed to fetch ${blog.url}`);
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          core.error(error);

          let status = 500;
          if (error instanceof TimeoutError) {
            status = 504;
          }
          if (
            error instanceof TypeError &&
            error.cause &&
            typeof error.cause === 'object' &&
            error.cause.code === 'ENOTFOUND'
          ) {
            status = 404;
          }
          return { status };
        });
      return { ...blog, status: response.status };
    },
    { concurrency: 5 },
  );

  core.endGroup();

  const successes = responses.filter(
    (response) => response && response.status >= 200 && response.status < 300,
  );
  const failures = responses.filter(
    (response) => !response || response.status >= 300,
  );

  core.info(`${successes.length} urls responded successfully`);

  if (failures.length > 0) {
    core.info(JSON.stringify(failures, null, 2));
    core.setFailed(`${failures.length} urls returned errors`);
  }
}

run().catch((error) => {
  if ('message' in error) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    core.setFailed(error.message);
  } else {
    core.setFailed(`Unknown error: ${JSON.stringify(error)}`);
  }
});
