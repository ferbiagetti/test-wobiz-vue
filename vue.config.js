module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/wobizBackend': {
        target: 'https://powerful-crag-90877.herokuapp.com',
        secure: true,
        pathRewrite: { '^/wobizBackend': '' }
      }
    }
  }
}
