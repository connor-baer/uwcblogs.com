import * as core from '@actions/core';
import PQueue from 'p-queue';
import ky from 'ky';

async function run() {
  try {
    const queue = new PQueue({ concurrency: 5 });
    const blogs = await ky.get('https://uwcblogs.com/blogs.json').json();

    core.startGroup('Verifying links');

    const responses = await Promise.all(
      blogs.map(async (blog) =>
        queue.add(async () => {
          if (!URL.canParse(blog.url)) {
            return { ...blog, status: 400 };
          }
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
              core.error(blog.url, error);
              return { status };
            });
          return { ...blog, status: response.status };
        }),
      ),
    );

    core.endGroup();

    const successes = responses.filter(
      (response) => response && response.status >= 200 && response.status < 300,
    );
    const failures = responses.filter(
      (response) => !response || response.status >= 300,
    );

    core.info(`${successes.length} urls responded successfully`, successes);
    core.warning(`${failures.length} urls responded with an error`, failures);

    if (failures.length > 0) {
      core.setFailed(`Some urls returned errors`);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
