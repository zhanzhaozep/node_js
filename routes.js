// Expressモジュール読み込み
const express = require('express')
// models/itemモジュール読み込み
const item = require('./models/item')

// Routerの利用
const router = express.Router()

router.get('/', (req, res) => {
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)

    res.send('トップページ')
})

router.get('/profile', (req, res) => {
    res.send('プロフィールページ')
})

// 商品IDから商品取得(URLパラメータ)（「id」をプレースホルダー）
router.get('/item/:id', (req, res) => {
    const id = req.params.id
    var selectItem = item.find(id)
    var message = "商品名:" + selectItem.name
    res.send(message)
})

// ログイン認証（POST）
router.post('/auth', (req, res) => {
    var loginName = req.body.login_name
    var password = req.body.password

    var message = "ログインできませんでした"
    if (loginName == process.env.LOGIN_NAME
        && password == process.env.PASSWORD) {
        message = "ログインできました"
    }
    console.log(loginName)
    console.log(password)

    res.send(message)
})

module.exports = router