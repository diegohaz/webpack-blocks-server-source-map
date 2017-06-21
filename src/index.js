// @flow
/**
 * Adds source map support to server bundle.
 * @returns {Function} webpack block
 */
const serverSourceMap = (devtool: string = 'source-map') => ({ webpack }: any) => ({
  devtool,
  plugins: [
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false,
    }),
  ],
})

module.exports = serverSourceMap
