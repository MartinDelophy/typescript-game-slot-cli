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
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js','.jsx']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};