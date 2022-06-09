import { render } from 'react-dom';
import {Editor} from 'amis-editor';

import amisStyle from '!file-loader!amis/lib/themes/default.css'
import amisEditorStyle from '!file-loader!amis-editor/dist/style.css'


const defaultProps = {
    value: {
      "type": "page",
      "title": "xxx",
      "body": [
        {
          "type": "tpl",
          "tpl": "这是你刚刚新增的页面。",
          "inline": false
        }
      ]
    },
    onChange: () => {
    },
    preview: false,
    autoFocus: true,
    plugins: []
}


const amisEditor = window.amisEditor = (el, props = {}) => {
  Object.assign(props, defaultProps, props)
  if(typeof el === 'string') el = document.querySelector(el)
  return render(<div>
    <link rel="stylesheet" href={amisStyle}/>
    <link rel="stylesheet" href={amisEditorStyle}/>
    <Editor {...props}/>
  </div>, el);
}

const el = document.querySelector('amis-editor')
if(el) amisEditor(el)


