import { Loading, Message, MessageBox, Notification } from 'element-ui'

const loading = () => Loading.service({
  background: 'rgba(0, 0, 0, 0.1)'
})

const message = Message
const messageBox = MessageBox
const alert = MessageBox.alert
const confirm = MessageBox.confirm
const prompt = MessageBox.prompt
const notification = Notification

export { loading, message, messageBox, alert, confirm, prompt, notification }

// export function msg(message) {
//   message({
//     message,
//     type: 'success'
//   })
// }
