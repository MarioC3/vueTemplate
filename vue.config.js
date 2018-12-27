const path = require("path");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob-all");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/scss/_variables.scss";'
      }
    },
    sourceMap: true
  },

  configureWebpack: {
    plugins: [
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, "./public/index.html"),
          path.join(__dirname, "./src/**/*.vue"),
          path.join(__dirname, "./src/**/*.js")
        ])
      })
    ]
  },

  baseUrl: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined
};
