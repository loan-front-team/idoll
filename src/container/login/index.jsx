import React from 'react';

import Login from './Login';
import Alert from 'components/alert';
import Checkbox from 'components/checkbox';
import Image from 'assets/images/logo.png';
// import styles from './login.less';


const { UserName, Password, Submit } = Login;
export default class LoginPage extends React.Component {
	state = {
		notice: '',
		autoLogin: true,
	}
	componentDidMount() {
		console.log(this.props.history);
	}
	onSubmit = (err, values) => {
		console.log('value collected', {...values, autoLogin: this.state.autoLogin});
		this.setState({
			notice: '',
		},
		() => {
			if (!err && (values.username !== 'admin' || values.password !== 'admin')) {
				setTimeout(() => {
					this.setState({
						notice: '账号或密码错误！',
					});
				}, 500);
			}
		}
		)
		// @TODO 将用户名密码保存到redux及localstorage 并进行后台验证
			this.props.history.push('/dashboard')
	}
	changeAutoLogin = (e) => {
	    this.setState({
	      autoLogin: e.target.checked,
	    });
	}
	render() {
		return (
  <div className='loginpage'>
    <div className='header'>
      <img src={Image} alt='' />
      <span>贷款组自动化测试平台</span>
    </div>
    <Login
      onSubmit={this.onSubmit}
      className='content'
			>
      {
						this.state.notice &&
						<Alert style={{ marginBottom: 24 }} message={this.state.notice} type='error' showIcon closable />
				}
      <UserName name='username' />
      <Password name='password' />
      <div>
        <Checkbox checked={this.state.autoLogin} onChange={this.changeAutoLogin}>自动登录</Checkbox>
        <a style={{ float: 'right' }} href=''>忘记密码</a>
      </div>
      <Submit className='loginButton'>登录</Submit>
    </Login>

  </div>
		);
	}
};
