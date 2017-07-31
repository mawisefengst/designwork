var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractCSS = new ExtractTextPlugin({
    filename: "style.webpack.css"
});

module.exports = {
  context: __dirname,
  devtool: "inline-sourcemap",
  entry: "./js/scripts.js",
  output: {
    path: __dirname + "/dist",
    filename: "scripts.webpack.js"
  },
  module:{
    rules:[
          {
            test: /\.html$/,
            loader: [
              "raw-loader"
            ]
          },
          {
              test: /\.(jpe?g|png|gif)$/i,
              use: [
                  {
                    loader: 'file-loader',
                    query: {
                       name:'[name].[ext]',
                       publicPath:"../",
                       outputPath:"images/"
                    }
                  }]
          },
          {
            test: /\.(eot|ttf|woff|woff2)$/,
            use: [
                  {
                    loader: 'file-loader',
                    query: {
                       name:'[name].[ext]',
                       publicPath:"../",
                       outputPath:"fonts/"
                    }
                  }
              ]
          },
          {
              test: /\.css$/,
              use: ExtractTextPlugin.extract({
                      use: [{
                          loader: "css-loader"
                      }],
                      fallback: "style-loader"
                   })
          }
    ]
  },
  plugins: [
        extractCSS
  ],
  devServer: {
    inline: true, // you missed this line which will reload the browser
    port : 7777,
    contentBase: __dirname + '/dist'
  }
};