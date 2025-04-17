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

// export const module = {
//     // ...
//     module: {
//       rules: [
//         {
//           test: /pdf\.worker\.min\.js/,
//           type: 'asset/resource',
//           generator: {
//             filename: '[name][ext]'
//           }
//         }
//       ]
//     }
//   }