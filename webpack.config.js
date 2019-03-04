var path=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const CleanWebpackPlugin = require('clean-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  mode:'development',
  entry:{
      main:'./src/index.js'
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    chunkFilename: '[name].[hash:8].js',
    filename:'[name].[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
         
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),
    new CleanWebpackPlugin('dist'),
    //new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      template:'index.template.html'
    }),
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: "[name].css",
    //   chunkFilename: "[id].css"
    // })
  ],
  resolve: {
    alias: {
      '@':path.resolve('./src'),
      'vue$': 'vue/dist/vue.common.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  }
}