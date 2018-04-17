import Axios from 'axios';
import { getRedirectPath } from '../util.jsx';

// 定义常量

const AUTH_SUCCESS = 'AUTH_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const LOAD_DATA = 'LOAD_DATA';
const LOGOUT = 'LOGOUT';

// 用户的初始状态
const initState = {
	redirectTo: '', // 页面跳转
	isAuth: false, // 是否有被授权访问权限，取决于是否登录成功
	msg: '', // 当前是否有报错信息
	nickName: '', // 昵称
	userName: '', // 用户名
	pwd: '', // 密码
	role: '', // 身份角色
};

// reducer
export function user(state = initState, action) {
	console.log(`action.type: ${action.type}`);
	if (action) {
		switch (action.type) {
			case AUTH_SUCCESS:

			case LOAD_DATA:

			case LOGOUT:

			case ERROR_MSG:

			default:
				return state;
		}
	} else {
		return state;
	}
}

// 定义action

export function login({user, pwd}) {
	if (!user || !pwd) {
		return errorMsg('必须输入账号密码')
	}
	// 发送异步消息
	return dispatch => {
		console.log(`logindispatch: ${dispatch}`); // @TODO SHANCHU
		Axios.post('/user/login', {user, pwd}).then(res => {
			// 数据成功传入后台
			if (res.status === 200 && res.data.code === 0) {
				//
				dispatch(authSuccess(res.data.data))
			} else {
				dispatch(errorMsg(res.data.msg))
			}
		})
	}
}
export function userinfo() {
	// 获取用户信息
	return dispatch => {
		// 获取用户信息
		Axios.get('user/info').then(res => {
			if (res.status === 200) {
				console.log(res.data)// @TODO SHANCHU
				// 是否登录
				if (res.data.code === 0) {
					// 已登录
				} else {
					// 未登录
					this.props.loadData(res.data.data);
					this.props.history.push('/login');
				}
			}
		});
	}
}
export function update(serviceinfo) {
	return dispatch => {
		Axios.post('/user/update', serviceinfo).then(res => {
			// 数据成功传入后台
			if (res.status === 200 && res.data.code === 0) {
				//
				dispatch(authSuccess(res.data.data))
			} else {
				dispatch(errorMsg(res.data.msg))
			}
		})
	}
}
export function loadData(userinfo) {
	return { type: LOAD_DATA, payload: userinfo }
}


export function logoutSubmit() {
	return { type: LOGOUT }
}
function authSuccess(obj) {
	// 过滤掉pwd，只传入其他的data
	const { pwd, ...data } = obj;
	console.log(data)
	return { type: AUTH_SUCCESS, payload: data }
}
function errorMsg(msg) {
	return { type: ERROR_MSG, msg: msg }
}


