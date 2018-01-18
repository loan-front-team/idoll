const webpack = require('webpack')
const path = require('path')


const library = '[name]_[chunkhash]'
const vendors = [
  'antd',
  'react',
  'react-dom'
];

module.exports = {
	entry: {
		vendors: vendors
	},

	output: {
		filename: '[name].dll.js',
		path: path.resolve(__dirname, 'build'),
		library
	},

	plugins: [
		new webpack.DllPlugin({
			// manifest文件的输出路径
			path: path.join(__dirname, 'build/[name]-manifest.json'),
			// 这里必须匹配上面的output.library中的值,dll暴露的对象名
			name: library,
			// 解析包路径的上下文，这个要跟配置的dll user一致
			context: __dirname
		})
	]
}
