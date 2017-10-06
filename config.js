const isDev = process.env.NODE_ENV !== 'production';

const CONFIG = {
  contentful: {
    spaceId: 'wgin2u9ggvsy',
    managementToken:
      'CFPAT-af61ef5cdec125aaa4a3642f6001d51aebde746e92ff752a562951ead2d9146e',
    clientToken: isDev
      ? '10a014cad4fa86c2ee9f01b580fc0101648eaec92003292fa63e16f4ef5408cd'
      : '26b5afb0d5d42db497841fd3a56492b195116337432cb0eea0252c7d08d4247e',
    host: isDev ? 'preview.contentful.com' : 'cdn.contentful.com',
    ttl: isDev ? 360 : 3600,
    ids: {
      site: 'wL0L3aRGsSsCGqOOSGmUE'
    }
  },
  next: {
    ttl: isDev ? 10 : 300
  }
};

export default CONFIG;
