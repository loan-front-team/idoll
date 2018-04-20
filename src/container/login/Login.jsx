import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Form from 'components/form';
import LoginItem from './LoginItem';
import LoginSubmit from './LoginSubmit';

import './login.less';

// 经 Form.create() 包装过的组件会自带 this.props.form 属性，直接传给 Form 即可
@Form.create()
class Login extends React.Component {
  state = {
    active: {},
  }
  static defaultProps = {
    className: '',
    onSubmit: () => {},
  };
  static propTypes = {
    className: PropTypes.string,
    onSubmit: PropTypes.func,
  };
  static childContextTypes = {
	  form: PropTypes.object,
	};
	getChildContext() {
    return {
    	form: this.props.form,
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // 校验并获取一组输入域的值与 Error，若 fieldNames 参数为空，则校验全部组件
    // fieldNames
    // options: force对已经校验过的表单域，在 validateTrigger 再次被触发时是否再次校验
    // callback
    this.props.form.validateFields('', { force: true },
      (err, values) => {
        this.props.onSubmit(err, values);
      }
    );
  }
	render() {
		const { className, children } = this.props;
    // const FormChildren = [];
    // React.Children.forEach(children, (item) => {
    //   // eslint-disable-next-line
    //     // FormChildren.push(item)
    //   }
    // });
    return (
      <div className={classNames(className, 'main')}>
        <Form onSubmit={this.handleSubmit}>
          {
            children
          }
        </Form>
      </div>
    );
	}
}
Login.Submit = LoginSubmit;
Object.keys(LoginItem).forEach((item) => {
  Login[item] = LoginItem[item];
});
export default Login;
