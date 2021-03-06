const isProd = process.env.NODE_ENV === 'production'

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.(js)$/i,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  //
  optimization: {
    minimize: isProd,
    splitChunks: {
      cacheGroups: {
        js: {
          test: m => m.constructor.name === 'NormalModule',
          name: 'commons',
          chunks: 'initial',
          minChunks: 2,
          minSize: 0,
        },
      },
    },
    runtimeChunk: {
      name: 'boilerplate',
    },
  },
})
