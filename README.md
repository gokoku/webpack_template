[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/gokoku/webpack_template) 

# Webpack 入門テンプレート

Webpack2 で React ES2015 及び PostCSS を手軽にいじれるように用意しました。
細かいことは飛ばしてとにかく動かして React ES2015 PostCSS を使えるようにするのが目的。
設定は逐次更新してください。

## セットアップ
Homebrew Nodebrew をインストールして yarn と node の新しいものをインストールしていること。

```
$ cd webpack_template
$ yarn
```
## 開発
ファイルのウォッチとブラウザのライブリロードを出来るようにする。

```
$ yarn run start
```
ブラウザで localhost:3000 をアクセスする。

## パブリッシュ
トランスパイルしてファイルを生成する。
```
$ yarn run product
or
$ yarn run develop
```

dist ファイル以下を丸ごとコピーして設置する。
