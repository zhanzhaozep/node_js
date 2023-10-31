
// トップページ
exports.index = (req, res) => {
    //views/index.ejsを表示
    res.render('index')
}

// プロフィールページ
exports.profile = (req, res) => {
    // res.send('プロフィールページ')
    // TODO: データベースからユーザ情報を取得
    var user = {
        id: 1,
        name: "YSE",
        birthplace: "横浜",
        hobby: ['旅行', 'グルメ', 'スポーツ'],
    }
    var data = {
        title: 'プロフィール',
        user: user,
    }
    // views/profile.ejs に dataを渡して表示
    res.render('profile', data)
}