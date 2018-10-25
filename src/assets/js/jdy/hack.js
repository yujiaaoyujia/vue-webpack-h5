import { isIOS } from './env'

// 动态设置当前页面的标题
export default function setTitle(title) {
  if (!title) { return }
  document.title = title

  if (isIOS) {
    const $iframe = document.createElement('iframe')
    $iframe.setAttribute('src', 'about:blank')
    $iframe.style.display = 'none'
    const iframeCallback = () => {
      setTimeout(() => {
        $iframe.removeEventListener('load', iframeCallback)
        document.body.removeChild($iframe)
      }, 0)
    }
    $iframe.addEventListener('load', iframeCallback)
    document.body.appendChild($iframe)
  }
}
