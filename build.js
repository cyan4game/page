const Config = require('./config')
const fs = require('fs')


fs.readdir('./pages', (err, files) => {
    if (err) {
        console.log('读取文件夹失败', err)
        return
    } else {
        files.forEach(e => {
            addVersion('./pages/' + e)
        })
    }
})

// 为page引用的js和css文件添加版本号
function addVersion (url) {
    fs.readdir(url, (err, files) => {
        if (err) {
            console.log('读取文件夹失败', err)
            return
        } else {
            console.log(files)
            files.forEach(e => {
                if (e.includes('.css')) {
                    fs.rename(url + '/' + e, url + '/index.' + Config.version + '.css', err => {
                        if (err) {
                            console.log('修改' + url + '/index.css 失败！！！！！', err)
                        } else {
                            console.log('修改' + url + '/index.css 成功！')
                        }
                    })
                }
                if (e.includes('.js')) {
                    fs.rename(url + '/' + e, url + '/index.' + Config.version + '.js', err => {
                        if (err) {
                            console.log('修改' + url + '/index.js 失败！！！！！', err)
                        } else {
                            console.log('修改' + url + '/index.js 成功！')
                        }
                    })
                }
                if (e.includes('.html')) {
                    fs.readFile(url + '/' + e, 'utf8', (err, files) => {
                        if (err) {
                            console.log('读取' + url + '/' + e + ' 文件失败！！！！！')
                            return
                        }
                        let result = files.replace(`<link rel="stylesheet" href="./index.${Config.lastVersion}.css" type="text/css">`, `<link rel="stylesheet" href="./index.${Config.version}.css" type="text/css">`)
                        result = result.replace(`<script src="./index.${Config.lastVersion}.js"></script>`, `<script src="./index.${Config.version}.js"></script>`)
                        fs.writeFile(url + '/index.html', result, 'utf8', (err) => {
                            if (err) {
                                console.log('修改' + url + '/' + e + ' 失败！！！！！')
                            } else {
                                console.log('修改' + url + '/' + e + ' 成功！')
                            }
                        })
                    })
                }
            })
        }
    })
}