import config from './config'
import { device, isWeiXin, isYzjApp, isAndroid, isIOS, isMobile } from './env'
import { getParam, setParam, delParam, setObj, getRootPath } from './location'
import setTitle from './hack'
import cookie from './cookie'
import { pureStore, store, pureSession, session } from './storage'
import { loading, message, messageBox, alert, confirm, prompt, notification } from './ui'
import { ajax, urlGet, urlPost, get, post, xhrs, params, upParams, setAuthToken } from './ajax'

// 工具函数库
export default {
  // 通用配置
  version: config.version,
  config,

  // 环境变量
  device,
  isWeiXin,
  isYzjApp,
  isAndroid,
  isIOS,
  isMobile,

  // 通用工具
  noop: () => {},

  // 常用工具
  getParam,
  setParam,
  delParam,
  setObj,
  getRootPath,
  setTitle,

  // 数据存储
  cookie,
  pureStore,
  store,
  pureSession,
  session,

  // UI 组件
  loading,
  message,
  messageBox,
  alert,
  confirm,
  prompt,
  notification,

  // ajax
  ajax,
  urlGet,
  urlPost,
  get,
  post,
  xhrs,
  params,
  upParams,
  setAuthToken,
}
