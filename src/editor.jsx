import {useState, useEffect} from 'react'
import {Editor as AmisEditor} from 'amis-editor';
import {Button} from 'amis';
import {schemaJsonUrl} from './monacoEditorDefineLoad.js'

// import 'amis/lib/themes/default.css'
// import 'amis/lib/helper.css'
// import 'amis/sdk/iconfont.css'
import 'amis-editor/dist/style.css'

const defaultValue = {
    "type": "page",
    "title": "默认标题",
    "body": [
        {
            "type": "tpl",
            "tpl": "这是你刚刚新增的页面。",
            "inline": false
        }
    ]
}

export default function Editor(props) {
    const {value = null, onSave, onCancel} = props;
    useEffect(() => {
        if(value) setStateAssign({value})
    }, [value]);

    const defaultProps = {
        // value: defaultValue,
        autoFocus: true,
        // preview: false,
        $schemaUrl: schemaJsonUrl(),
        plugins: [],
        onChange: (val) => setStateAssign({value: val})
    }
    const [state, setState] = useState({
        preview: false,
        value: value || defaultValue
    })
    const setStateAssign = (obj) => setState((prevState) => ({...prevState, ...obj}))

    const PreviewBtn = () => {
        const setPreview = () => setStateAssign({
            preview: !state.preview,
        })
        return <Button level="info" onClick={setPreview}>{state.preview && '取消'}预览</Button>
    }
    const SaveBtn = () => {
        const on = () => onSave(state.value)
        return <Button level="success" onClick={on}>保存</Button>
    }
    const CancelBtn = () => {
        const on = () => onCancel()
        return <Button onClick={on}>取消</Button>
    }

    const Header = () => {
        const style = {
            display: 'flex',
            padding: '.4rem .8rem',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #e8e9eb',
            background: '#fff'
        }
        return (
            <div style={style}>
                <div>xx</div>
                <div>
                    <SaveBtn />&nbsp;
                    <PreviewBtn />&nbsp;
                    <CancelBtn />
                </div>
            </div>
        )
    }

    const style = {
        height: '100vh',
        minHeight: '600px',
        display: 'flex',
        flexDirection: 'column'
    }
    const editorProps = {...defaultProps, ...state}
    return (
        <div style={style}>
            <Header />
            <AmisEditor {...editorProps}/>
        </div>
    )
}
