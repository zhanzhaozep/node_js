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

// Routerの利用
app.use(routes)


// サーバー待機（たいき） wait 
app.listen(PORT, HOST, () => {
    console.log(HOST)
    console.log(PORT)
    console.log('wait...')
})