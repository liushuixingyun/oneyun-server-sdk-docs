var pkg = require('./package.json')

module.exports = {
    title: "壹耘 Server SDK 参考文档",
    language: "zh",
    gitbook: '3.1.1',
    plugins: [
        '-sharing',
				'toc',
        'sitemap',
        'codetabs',
        "theme-api"
    ],
    variables: {
        version: pkg.version
    },
    pluginsConfig: {
        sitemap: {
            hostname: "https://github.com/liushuixingyun/yunhuni-server-api-docs"
        },
        atoc: {
            "addClass": true,
            "className": "atoc"
        },
        "theme-api": {
            "theme": "dark",
            "languages": [{
                "lang": "js",
                "name": "NodeJs",
            }, {
                "lang": "php",
                "name": "PHP"
            }]
        }
    }
}
