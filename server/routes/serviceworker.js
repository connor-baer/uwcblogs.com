import { createReadStream } from 'fs';

export default function serviceworker(req, res) {
  res.set('Content-Type', 'text/javascript');
  return createReadStream('./service-worker.js').pipe(res);
}
