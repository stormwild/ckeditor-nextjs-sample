import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic'
// import CustomEditor from '@ckeditor/ckeditor5-build-custom'

const ClassicEditor = () => {
  return (
    <CKEditor
      editor={ClassicEditorBuild}
      data='<p>Hello from CKEditor 5!</p>'
      onReady={(editor) => {
        // You can store the "editor" and use when it is needed.
        console.log('Editor is ready to use!', editor)
      }}
      onChange={(event, editor) => {
        const data = editor.getData()
        console.log({ event, editor, data })
      }}
      onBlur={(event, editor) => {
        console.log('Blur.', editor)
      }}
      onFocus={(event, editor) => {
        console.log('Focus.', editor)
      }}
    />
  )
}

export default ClassicEditor
