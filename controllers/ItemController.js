// models/itemモジュール読み込み
// １つ上のフォルダ「../」
const item = require('../models/item')

exports.index =  (req, res) => {
    //データをすべて取得
    var data = {
        items: item.get()
    }
    // views/item/index.ejs に dataを渡して表示
    res.render('item/index', data)
}

exports.detail = (req, res) => {
    const id = req.params.id
    // データを検索して用意
    var data = {
        item: item.find(id)
    }
    // views/item/detail.ejs に dataを渡して表示
    res.render('item/detail', data)
}