import {useState} from 'react'
import { render } from 'react-dom';
import Editor from './editor'
import messageEventListener from './utils/messageEventListener'

if (!window.location.port && typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {}
}


window._AMIS_ORIGIN = new URL(document.currentScript.src).origin
const url = new URL(window.location)

function IframeEditor() {
  const [val, setVal] = useState(null)

  const im = messageEventListener(url.searchParams.get('event_name') || 'amis.editor')
  if(im.in){
    im.on((data) => {
      console.log('child', data);
      setVal(data)
    })
  }
  const save = (value) => {
    im.emit({
      ac: 'save',
      value
    })
  }
  const cancel = () => {
    im.emit({
      ac: 'cancel'
    })
  }
  return <Editor value={val} onSave={save} onCancel={cancel}/>
}

render(<IframeEditor/>, document.querySelector('#root'));


