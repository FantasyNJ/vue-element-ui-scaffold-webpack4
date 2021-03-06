module.exports = {
    LOGIN_PATH: './',
    title: '信息服务平台',
    description: '信息服务平台',

    themeColor: '#f67a17',
    themeFile: 'css/theme-colors.css',

    //具体配置在prod.env.js 和 dev.env.js 里面
    API_SERVER: process.env.API_SERVER,
    API_NODE_SERVER: process.env.API_NODE_SERVER,
}
