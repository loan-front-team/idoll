export function getRedirectPath({role, avatar}) {
	// 根据用户信息，返回跳转页面地址
	// user.role 分别跳转到'/custom' | '/service'
	// user.avator 分别跳转到'/custominfo' | '/serviceinfo'
	let url = `/${role}`;
	if (!avatar) {
		url = `/${role}info`;
	}
	console.log(url);
	return url;
}


