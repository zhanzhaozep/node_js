const fs = require('fs');
const values = JSON.parse(fs.readFileSync('./data/items.json', 'utf8'));

// すべてのデータ取得
exports.get = () => {
    return values
}

// IDからデータ取得
exports.find = (id) => {
    return values.find((value) => value.id == id)
}