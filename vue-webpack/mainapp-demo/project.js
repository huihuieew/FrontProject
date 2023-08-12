let path = require('path');
let glob = require('glob');
// 配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
    let entries = {};
    let basename;
    let tmp;
    let pathname;
    let files = glob.sync(globPath);
    console.log('files', files);
    files.forEach(function (entry) {
        basename = path.basename(entry, path.extname(entry));
        console.log('path.extname(entry)', path.extname(entry));
        console.log('basename', basename);
        tmp = entry.split('/').splice(-3);
        pathname = basename; // 正确输出js和html的路径

        entries[pathname] = {
            entry: 'src/' + tmp[0] + '/' + tmp[1] + '/main.js',
            template: `src/${tmp[0]}/${tmp[1]}/${tmp[2]}`,
            title: tmp[2],
            filename: tmp[2], // 如projectA.html
        }
    })
    return entries;
}

let pages = getEntry('./src/apps/**?/*.html');
console.log('pages', pages);
pages['index'] = {
    // page 的入口
    entry: 'src/main.js',
    // 模板来源
    template: 'public/index.html',
    // 在dist/index.html的输出
    filename: 'index.html',
    // 当使用title选项时，
    // template中的title标签需要是<title><%= htmlWebpackPlugin.options.title %></title>
    title: '公共首页',
    // 在这个页面中包含的块，默认情况下会包含
    // 提取出来的通用 chunk 和 vendor chunk,
    // chunks: ['chunk-vendors','chunk-common','index']
}

const config = {
    all: {
        pages,
    },
    projectA: {
        pages: {
            index: {
                entry: "src/apps/projectA/main.js",
                template: "src/apps/projectA/index1.html",
                filename: "index1.html"
            }
        },
        outputDir: "dist/projectA/"
    },
    projectB: {},
    projectC: {},
    projectD: {},

}
console.log('config.all', config.all);
console.log('config.projectA', config.projectA);

module.exports = config;