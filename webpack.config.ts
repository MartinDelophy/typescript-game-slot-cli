const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    { loader: 'babel-loader' },
                    { loader: 'ts-loader'}
                    
                ]
            },
            {
                test: /\.(less|css)$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: true,
                    }
                }, {
                        loader: 'less-loader', options: {
                        sourceMap: true,
                        javascriptEnabled: true,
                        importLoaders: 2,
                        modules: true,
                    }
                }]
            } ,
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }

        ]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js','.jsx']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
    ]

};