const fs = require('fs');

// JSONファイルのパス
var dataFile = "./data/users.json"

exports.auth = (email, password) => {
    //TODO: RDBで処理
    var values = this.get();
    return values.find((value) => 
        (value.email == email && value.password == password)
    );
}

exports.get = () => {
    //TODO: RDBで処理
    var values = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    return values;
}

exports.find = (id) => {
    //TODO: RDBで処理
    var values = this.get();
    return values.find((value) => value.id == id);
}

module.exports = this