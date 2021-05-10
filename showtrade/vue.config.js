const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    configureWebpack: {
        plugins: [
            new CopyWebpackPlugin(
                {
                    patterns: [
                        {from: __dirname+"static",
                            to:__dirname+"dist"
                        },
                    ],
                    options: {
                        concurrency: 100,
                    },
                }),
        ]
    }
}