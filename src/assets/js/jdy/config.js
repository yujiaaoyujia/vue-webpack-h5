// import { getRootPath } from './location'

export default {
  devStatus: 'release', // dev | release,
  devApi: '//' + window.location.host + '/abc/',
  api: '//' + window.location.host + '/abc/',
  apiPrefix: { default: 'api-prefix' },
  apiSuffix: { default: '.aspx' },
  version: '1.0.3',
  storageGUID: 'productGuid',
  authCookie: 'Auth',
  authToken: 'Auth',
}
