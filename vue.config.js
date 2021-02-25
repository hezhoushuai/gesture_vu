const basePath = process.env.NODE_ENV === 'development' ? '/' : '/gesture_vu/'

module.exports = {
  publicPath: basePath,
  outputDir: 'docs',
  devServer: {
    port: 8088
  }
}