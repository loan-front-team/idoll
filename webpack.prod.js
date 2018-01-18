const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const common = require('./webpack.common.js');

 let webpackConfig = merge(common, {
	devtool: 'source-map',
	plugins: [
	// 会自动生成一个html文件
	new HtmlwebpackPlugin({
		filename: 'dbox.html',
		template: 'index.html',
		inject: true,
		minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // 更多选项:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        // 必须通过 CommonsChunkPlugin一致地处理多个 chunks
        chunksSortMode: 'dependency'
	}),
	// webpack 复制文件和文件夹的插件
    // https://github.com/kevlened/copy-webpack-plugin
	new CopyWebpackPlugin([
		{
			from: path.resolve(__dirname, 'assets'),
			to: path.resolve(__dirname, 'dist/assets'),
			ignore: ['.*']
		}
	]),
	// 压缩js文件
	new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false
		},
		comments: false,
		sourceMap: true
	}),
	new UglifyJSPlugin({
		sourceMap: true
	}),
	// definePlugin 接收字符串插入到代码当中, 所以你需要的话可以写上 JS 的字符串
	// 此处，插入适当的环境
	// https://webpack.js.org/plugins/define-plugin/
	new webpack.DefinePlugin({
		'process.env': {
		 'NODE_ENV': JSON.stringify('production')
		}
	})
	]
})

// 开启包分析的情况时， 给 webpack plugins添加 webpack-bundle-analyzer 插件
// `npm run build --report`
if (process.env.npm_config_report) {
    // https://github.com/th0r/webpack-bundle-analyzer
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig;
