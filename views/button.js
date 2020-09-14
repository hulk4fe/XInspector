export default (onclick) => {
  const body = document.querySelector('body'),
        button = document.createElement('div')
  button.style = 'position:fixed;bottom:110px;left:10px;width:56px;height:25px;background:gray;font-size:12px;text-align:center;line-height:23px;'
  button.appendChild(document.createTextNode('Inspector'))
  button.onclick = onclick
  body && body.appendChild(button)
}