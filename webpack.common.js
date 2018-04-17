const path = require('path');

// 定义了一些文件夹的路径
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

// 判断当前是否处于开发环境
const _DEV_ = (process.env.NODE_ENV || 'development') === 'development';
// 判断当前是否处于测试环境
const _STG_ = (process.env.NODE_ENV || 'staging') === 'staging';
// 判断当前是否处于生产环境
const _PRD_ = (process.env.NODE_ENV || 'production') === 'production';



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
      'components': path.resolve(__dirname, 'components'),
      'component': path.resolve(__dirname, 'src/component'),
      'container': path.resolve(__dirname, 'src/container'),
      'reduxes': path.resolve(__dirname, 'src/reduxes'),
      'utils': path.resolve(__dirname, 'src/utils'),
    }
  },
  // devserver 配置
  devServer: {
    historyApiFallback: true,
    inline: true,
    progress: true
  },
  // css 处理
  module: {
    rules: [
      // exclude 排除，不需要编译的目录
      {
        test: /\.(jsx|js)$/,
        use: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.(css)$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }]
        // exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.(less)$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'less-loader',
          options: {
            modules: true
          }
        }]
        // exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.(png|svg|jpg|gif|webp|ico)$/,
        use: [
           'file-loader'
         ],
         exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          query: {
            limit: 10000
          }
        }],
        include: path.resolve(__dirname, 'assets/fonts')
      },
      {
        test: /\.(jsx|js)$/,
        use: 'eslint-loader',
        exclude: path.resolve(__dirname, 'node_modules')
      }
    ]
  }

};
