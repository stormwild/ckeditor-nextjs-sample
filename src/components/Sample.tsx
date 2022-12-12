// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
// import CKEditor from '@ckeditor/ckeditor5-react'
// import React, { useEffect, useState } from 'react'
// import './custom.css'

// // Exporting the z-index value of CKEditor's stick panel/toolbar, in case other elements want to refer to it.
// export const EDITOR_STICKY_PANEL_Z_INDEX = 1000

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export type EditorType = any // Typings are not published for ckeditor

// export interface RichTextEditorProps {
//   content: string
//   updatedContent: (content: string) => void
//   borderLess?: boolean
//   maxHeight?: number
//   onBlurAction?: (eventInfo: Event, editor: EditorType) => void
//   setEditor?: React.Dispatch<React.SetStateAction<{}>>
//   stickyPanelTopOffset?: number
// }

// export const RichTextEditor: React.FC<RichTextEditorProps> = ({
//   content,
//   updatedContent,
//   borderLess,
//   maxHeight,
//   onBlurAction,
//   setEditor: setEditorInParent,
//   stickyPanelTopOffset = 0,
// }) => {
//   const [editor, setEditor] = useState<EditorType>(null)

//   useEffect(() => {
//     if (editor != null) {
//       editor.ui.view.stickyPanel.viewportTopOffset = stickyPanelTopOffset
//     }
//   }, [stickyPanelTopOffset, editor])

//   return (
//     <CKEditor
//       editor={ClassicEditor}
//       data={content}
//       config={{
//         // ckfinder: {
//         //   // Upload the images to the server using the CKFinder QuickUpload command
//         //   // You have to change this address to your server that has the ckfinder php connector
//         //   uploadUrl:
//         //     'https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json',
//         // },
//         toolbar: [
//           'bold',
//           'italic',
//           'link',
//           'bulletedList',
//           'numberedList',
//           '|',
//           'indent',
//           'outdent',
//           '|',
//           // TODO: Add image upload
//           // 'ImageUpload',
//           // 'blockQuote',
//           'undo',
//           'redo',
//         ],
//       }}
//       onInit={(editor: EditorType) => {
//         editor.setData(content)
//         editor.editing.view.change(
//           (writer: {
//             setStyle: (arg0: string, arg1: string, arg2: unknown) => void
//           }) => {
//             writer.setStyle(
//               'min-height',
//               '200px',
//               editor.editing.view.document.getRoot(),
//             )
//             writer.setStyle(
//               'max-height',
//               `${maxHeight}px`,
//               editor.editing.view.document.getRoot(),
//             )
//           },
//         )
//         setEditor(editor)
//         if (setEditorInParent) {
//           setEditorInParent(editor)
//         }
//         // TODO: improve with proper style customization
//         editor.ui.view.element.style.width = '100%'
//         if (borderLess) {
//           editor.ui.view.element.classList.add('rtb-borderless')
//         }
//       }}
//       onChange={(__: Event, editor: EditorType) => {
//         const data = editor.getData()
//         updatedContent(data)
//       }}
//       onBlur={(eventInfo: Event, editor: EditorType) => {
//         if (onBlurAction) {
//           onBlurAction(eventInfo, editor)
//         }
//       }}
//     />
//   )
// }
