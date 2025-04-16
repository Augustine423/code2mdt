// webpack.config.js
export const module = {
    rules: [
        {
            test: /\.pdf$/,
            type: 'asset/resource'
        },
        {
            test: /pdf\.worker\.min\.js/,
            type: 'asset/resource'
        }
    ]
};