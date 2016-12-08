var pkg = require('./package.json');

module.exports = {
    title: "壹耘 Server SDK 参考文档",
    language: "zh",
    gitbook: '3.2.2',
    plugins: [
        '-sharing',
        'toc',
        'codetabs',
        "theme-api"
    ],
    variables: {
        version: pkg.version
    },
    pluginsConfig: {
        "theme-api": {
            "theme": "dark",
            "languages": [{
                "lang": "js",
                "name": "Node.js",
                "default": true
            }, {
                "lang": "php",
                "name": "PHP"
            }]
        }
    }
};
