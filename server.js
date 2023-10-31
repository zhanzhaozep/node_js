// Express MVCフレームワーク（Webフレームワーク）
// expressモジュール読み込み
const express = require('express')
// dotenvモジュール読み込み
const dotenv = require('dotenv')
// routesモジュール読み込み
const routes = require('./routes')

//設定読み込み
dotenv.config()
const HOST = process.env.HOST
const PORT = process.env.PORT

//Webサーバ作成
const app = express()

// Middlewareの利用
// staticコンテンツの設定
// publicフォルダをWebルートとしてブラウザからアクセスできるようにする
app.use(express.static(__dirname + '/public'))

// URLエンコード（マルチバイト文字の対策）
app.use(express.urlencoded({ extended: true }))

//テンプレートエンジンをEJSで設定
app.set('view engine', 'ejs')

//レイアウトの設定
const layouts = require('express-ejs-layouts');
// views/layouts/default.ejs 使う
app.set('layout', 'layouts/default');
app.set('view engine', 'ejs');
// Middlewareに登録
app.use(layouts);

//Express Sessionのミドルウェア追加
const session = require('express-session')
app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitalized: false,
}))

// Routerの利用
app.use(routes)

// サーバー待機（たいき） wait 
app.listen(PORT, HOST, () => {
    console.log(HOST)
    console.log(PORT)
    console.log('wait...')
})
