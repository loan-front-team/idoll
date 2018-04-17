/*
* @Author: lulu27753
* @Date:   2018-04-17 09:42:10
* @Last Modified by:   lulu27753
* @Last Modified time: 2018-04-17 13:40:56
*/
import React from 'react';

import Input from 'components/input';
import Icon from 'components/icon';

import styles from './login.less';

const map = {
	UserName: {
		component: Input,
		props: {
			size: 'large',
			prefix: <Icon type='user' className={styles.prefixIcon} />,
			placeholder: '用户名',
		},
		rules: [{
			required: true,
			message: '请输入账户名！',
		}],
	},
	Password: {
		component: Input,
		props: {
			size: 'large',
			prefix: <Icon type='unlock' className={styles.prefixIcon} />,
			type: 'password',
			placeholder: '密码',
		},
		rules: [{
			required: true,
			message: '请输入密码！',
		}],
	}
}

 export default map;
