//credit goes to https://github.com/ckeditor/ckeditor5/issues
declare module '@ckeditor/ckeditor5-react' {
  const CKEditor: any
  export default CKEditor
}

declare module '@ckeditor/ckeditor5-build-classic' {
  const ClassicEditor: any
  export = ClassicEditor
}

declare module '@ckeditor/ckeditor5-build-custom' {
  const CustomEditor: ClassicEditor

  export = CustomEditor
}
