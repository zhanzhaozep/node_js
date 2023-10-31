// models/user.js モジュールを読み込む
const user = require('../models/user')

// ログイントップ
exports.index =  (req, res) => {
    // views/login/index.ejs
    res.render('login/index')
}

// 認証処理
exports.auth = (req, res) => {
    var email = req.body.login_name
    var password = req.body.password

    var authUser = user.auth(email, password);
    console.log(authUser)
    if (authUser) {
        // 認証が成功したら、ユーザトップにリダイレクト
        res.redirect('/user')
    } else {
        // 認証が失敗したら、ログインにリダイレクト
        res.redirect('/login')
    }

    // var loginName = req.body.login_name
    // var password = req.body.password
    // var message = "ログイン失敗..."
    // if (loginName == process.env.LOGIN_NAME
    //     && password == process.env.PASSWORD) {
    //     message = "ログイン成功！"
    // }
    // console.log(loginName)
    // console.log(password)
    // res.send(message)
}