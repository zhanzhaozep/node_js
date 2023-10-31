## Node.jsプロジェクト初期化
```
npm init -y 
```

## インストール
```
npm i express dotenv nodemon fs
```

## スクリプト設定
package.json

```
...
scripts {
    "dev": "node server",
    ...
}
...
```

## サーバ起動
```
npm run dev
```

## EJS
### インストール
```
npm i ejs
```

### View（EJS テンプレート）
- viewsフォルダに .ejs ファイルを作成

### 表示
##### views/index.ejs
```
res.render('index')
```

##### views/profile.ejs
- Viewにデータを渡す
```
res.render('index', data)
```

## レイアウト
### インストール
```
npm i express-ejs-layouts
```