import * as core from '@actions/core';
import PQueue from 'p-queue';
import ky from 'ky';

async function run() {
  const queue = new PQueue({ concurrency: 5 });
  const blogs = await ky.get('https://uwcblogs.com/blogs.json').json();

  core.startGroup('Verifying links');

  const responses = await Promise.all(
    blogs.map(async (blog) =>
      queue.add(async () => {
        if (!URL.canParse(blog.url)) {
          core.error(`Failed to parse ${blog.url}`);
          return { ...blog, status: 400 };
        }
        core.debug(`Fetching ${blog.url}`);
        const response = await ky
          .get(blog.url, { throwHttpErrors: false })
          .catch((error) => {
            let status = 500;
            if (
              error instanceof TypeError &&
              error.cause &&
              typeof value === 'object' &&
              error.cause.code === 'ENOTFOUND'
            ) {
              status = 404;
            }
            core.error(`Failed to fetch ${blog.url}`);
            console.error(error);
            return { status };
          });
        return { ...blog, status: response.status };
      }),
    ),
  );

  await queue.onIdle();

  core.endGroup();

  const successes = responses.filter(
    (response) => response && response.status >= 200 && response.status < 300,
  );
  const failures = responses.filter(
    (response) => !response || response.status >= 300,
  );

  core.info(`${successes.length} urls responded successfully`);

  if (failures.length > 0) {
    core.setFailed(`${failures.length} urls returned errors`);
  }
}

run().catch((error) => {
  if ('message' in error) {
    core.setFailed(error.message);
  } else {
    core.setFailed('Unknown error: ' + JSON.stringify(error));
  }
});
