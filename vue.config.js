const basePath = process.env.NODE_ENV === 'development' ? '/' : '/gesture_vue/'

module.exports = {
  publicPath: basePath,
  outputDir: 'docs',
  devServer: {
    port: 8088
  }
}