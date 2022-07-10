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
