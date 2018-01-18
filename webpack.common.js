const path = require('path');
const webpack = require('webpack');

// 定义了一些文件夹的路径
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
  // 项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: APP_PATH,
  // 输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    filename: 'build.js'
  },

  resolve: {
    // 自动补全的拓展名
    extensions: ['.js', '.jsx', '.json', '.less'],
    // 路径别名
    alias: {
      'assets': path.resolve(__dirname, 'assets'),
      'templates': path.resolve(__dirname, 'src/templates'),
      'components': path.resolve(__dirname, 'components')
    }
  },
  // devserver 配置
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  // Dll user的配置
  // 分割公共 js 到独立的文件并缓存
  // node_modules中的任何所需模块都提取到vendor
  // 这里的路径要和 webpack.dll.config.js 里面的对应。
  plugins: [
    new webpack.DllReferencePlugin({
      // 需要和webpack.dll.config.js中配置的context保持一致，用来指导webpack匹配manifest中库的路径
      context: __dirname,
      // 用来引入webpack.dll.config.js中输出的manifest文件
      manifest: path.resolve(__dirname, './dist/dll/vendors-manifest.json')
    })
  ],
  // css 处理
  module: {
    rules: [
      // exclude 排除，不需要编译的目录
      {
        test: /\.(jsx|js)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(less|css)$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
           'file-loader'
         ],
         exclude: /node_modules/
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          query: {
            limit: 10000
          }
        }]
      },
      {
        test: /\.js$/,
        use: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  }

};
