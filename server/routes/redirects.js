import { get } from 'lodash';
import { getPath } from '../lib/helpers';

export default function redirects(req, res, next) {
  const path = getPath(req);

  const redirectsList = {
    'uwc-adriatic': 'college/uwc-adriatic/',
    'uwc-atlantic': 'college/uwc-atlantic/',
    'uwc-changshu': 'college/uwc-changshu/',
    'uwc-costa-rica': 'college/uwc-costa-rica/',
    'uwc-dilijan': 'college/uwc-dilijan/',
    'uwc-isak-japan': 'college/uwc-isak-japan/',
    'uwc-li-po-chun': 'college/uwc-li-po-chun/',
    'uwc-maastricht': 'college/uwc-maastricht/',
    'uwc-mahindra': 'college/uwc-mahindra/',
    'uwc-mostar': 'college/uwc-mostar/',
    'uwc-pearson-college': 'college/uwc-pearson-college/',
    'uwc-red-cross-nordic': 'college/uwc-red-cross-nordic/',
    'uwc-robert-bosch-college': 'college/uwc-robert-bosch-college/',
    'uwc-south-east-asia': 'college/uwc-south-east-asia/',
    'uwc-thailand': 'college/uwc-thailand/',
    'uwc-usa': 'college/uwc-usa/',
    'uwc-waterford-kamhlaba': 'college/uwc-waterford-kamhlaba/'
  };

  const redirectPath = get(redirectsList, path);
  if (redirectPath) {
    res.redirect(301, redirectPath);
    return;
  }
  next();
}
