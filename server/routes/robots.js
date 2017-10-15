export default function robots(req, res) {
  return res
    .set('Content-Type', 'text/plain')
    .send('User-agent: * \nDisallow:');
}
