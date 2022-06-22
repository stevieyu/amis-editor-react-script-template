import {useState} from 'react'
import { render } from 'react-dom';
import Editor from './editor'

window._AMIS_ORIGIN = new URL(document.currentScript.src).origin

const iframeMsg = () => {
  const el = window;
  let argCb;
  const MSG_TYPE = 'iframe-message'

  const cb = (event) => {
    if(typeof argCb !== 'function') return;
    const {data} = event;
    if(typeof data !== 'object' || data.type !== MSG_TYPE) return;
    argCb(data.data)
  }

  return {
    in: window.self !== window.top,
    listener(listener){
      argCb = listener
      el.addEventListener('message', cb)
    },
    unListener(){
      el.removeEventListener('message', cb)
    },
    send(message){
      el.parent.postMessage({
        type: MSG_TYPE,
        data: message,
      }, '*');
    },
    iSend(iframe, message){
      iframe.contentWindow.postMessage({
        type: MSG_TYPE,
        data: message,
      }, '*')
    }
  }
}

function IframeEditor() {
  const [val, setVal] = useState(null)

  const im = iframeMsg()
  if(im.in){
    im.listener((data) => {
      console.log('child', data);
      setVal(data)
    })
  }
  const save = (value) => {
    im.send({
      ac: 'save',
      value
    })
  }
  const cancel = () => {
    im.send({
      ac: 'cancel'
    })
  }
  return <Editor value={val} onSave={save} onCancel={cancel}/>
}

render(<IframeEditor/>, document.querySelector('#root'));


