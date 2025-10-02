type D1Database = import('@cloudflare/workers-types').D1Database;
type ENV = {
  DB: D1Database;
};

type Runtime = import('@astrojs/cloudflare').Runtime<ENV>;

// biome-ignore lint/style/noNamespace: Namespace augmentation
declare namespace App {
  interface Locals extends Runtime {}
}
