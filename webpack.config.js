const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// entry point!
// output to bundle file!

module.exports = (env, argv) => {
    console.log('env ', env);
    const isProd = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
       entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                {
                    test: /\.s?css$/,
                    use: CSSExtract.extract({
                        use: [
                            { 
                                loader: 'css-loader',
                                'options': {
                                 sourceMap: true
                                }
                            },
                            { 
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    })
                }
            ]
        },
        plugins: [CSSExtract],
        devtool: isProd ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    };
}

