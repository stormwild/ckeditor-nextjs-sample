# CKEditor 5 with React and NextJs Notes

```
yarn add @ckeditor/ckeditor5-react @ckeditor/ckeditor5-build-classic
```

[React component - CKEditor 5 Documentation](https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/frameworks/react.html)

## Yarn

When using latest Yarn 3 (Berry)

Add the following to `.gitginore`

```
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
```

[Which files should be gitignored? - Questions & Answers | Yarn - Package Manager](https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored)

Add `.yarnrc.yml` file:

```
# enableGlobalCache: false
nodeLinker: node-modules
```

[PnP Compatibility Table](https://yarnpkg.com/features/pnp#compatibility-table)


## VSCode

```
yarn dlx @yarnpkg/sdks vscode
```

[Editor SDKs | Yarn - Package Manager](https://yarnpkg.com/getting-started/editor-sdks)

## TypeScript

[https://github.com/ckeditor/ckeditor5-react/issues/140#issuecomment-655453105](https://github.com/ckeditor/ckeditor5-react/issues/140#issuecomment-655453105)

> you ned create file "./types/ckeditor/index.d.ts" and write to
> 
> ```ts
> declare module '@ckeditor/ckeditor5-build-classic';
> declare module '@ckeditor/ckeditor5-react';
> ```
> 
> it is work for me

[https://github.com/ckeditor/ckeditor5-react/issues/253](https://github.com/ckeditor/ckeditor5-react/issues/253)

```ts
declare module '@ckeditor/ckeditor5-react' {
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    import Event from '@ckeditor/ckeditor5-utils/src/eventinfo'
    import { EditorConfig } from '@ckeditor/ckeditor5-core/src/editor/editorconfig'
    import * as React from 'react';
    const CKEditor: React.FunctionComponent<{
        disabled?: boolean;
        editor: typeof ClassicEditor;
        data?: string;
        id?: string;
        config?: EditorConfig;
        onReady?: (editor: ClassicEditor) => void;
        onChange?: (event: Event, editor: ClassicEditor) => void;
        onBlur?: (event: Event, editor: ClassicEditor) => void;
        onFocus?: (event: Event, editor: ClassicEditor) => void;
        onError?: (event: Event, editor: ClassicEditor) => void;
    }>
    export { CKEditor };
}
```

## Errors

```
const Editor = dynamic(() => import("../components/Editor"), { ssr: false });
```

[nextjs-ckeditor5](https://github.com/nghiaht/nextjs-ckeditor5)

[Why am I getting ReferenceError: self is not defined when I import a client-side library?](https://stackoverflow.com/questions/66096260/why-am-i-getting-referenceerror-self-is-not-defined-when-i-import-a-client-side)

[next-dynamic-modules | Next.js](https://nextjs.org/docs/messages/next-dynamic-modules)

[Exploring Dynamic Imports in Next.js](https://javascript.plainenglish.io/exploring-next-js-dynamic-import-ccb28a03e7f9)