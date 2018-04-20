/*
* @Author: lulu27753
* @Date:   2018-04-16 14:42:32
* @Last Modified by:   lulu27753
* @Last Modified time: 2018-04-17 16:50:15
* 用于统一管理域名
*/
function initHostname() {
	if (_DEV_) {
		// 用于本地开发测试
		return {
			domainName: `http://${_IP_}:3000`,
			suffix: '.json',
			// mock数据中间地址
			mockAdd: '',
			userUrl: '',
		}
	}
	if (_PRD_) {
		// 用于生产环境
		return {
			domainName: `http://iqsh-d9539:8080/loancloud-manage`,
			suffix: '',
			// mock数据中间地址
			mockAdd: '',
			userUrl: '',
		}
	}
}
const api = [{
		name: systemLogin, method: getSession
	}, {
		name: systemLogin, method: getSession
	}
]

// 初始化域名
const hostname = initHostname();

export default {
	queryUserInfo: hostname.domainName + '/' + (hostname.suffix || '')
}
