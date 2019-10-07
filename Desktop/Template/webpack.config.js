const miniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const htmlWebPackPlugin = require('html-webpack-plugin')

module.exports ={
    entry : './src/app/index.js',
    output: {
        path: __dirname + '/src/public',
        filename:'bundle.js'
    },
    module: {
        rules:[
            {
                use:'babel-loader',
                test:/\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss)$/,
                use:[
                    'style-loader',
                    miniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options:{
                            sourceMap:true
                        }
                    },
                    {
                        loader:'postcss-loader',
                        options:{
                            autoprefixer: {
                                browser :['last 2 versions']
                            },
                            sourceMap : true,
                            plugins: () =>[autoprefixer]
                        }
                    },
                    'resolve-url-loader',
                    {
                        loader:'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new miniCssExtractPlugin(),
        new htmlWebPackPlugin({
            template:'./src/app/template.html'
        })
    ]

}