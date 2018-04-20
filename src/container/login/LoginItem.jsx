import React from 'react';
import PropTypes from 'prop-types';

import Form from 'components/form';
import map from './map.js';


import './login.less';

const FormItem = Form.Item;

function generator({ defaultProps, defaultRules, type }) {
	return (WrappedComponent) => {
		return class BasicComponent extends React.Component {
			static contextTypes = {
				form: PropTypes.object,
			}
			componentDidMount() {

			}
			render() {
				// getFieldDecorator用于和表单进行双向绑定,要传入两个参数
				// id:必填输入控件唯一标志
				// options：
					// rules: 校验规则
					// initialValue: 子节点的初始值，类型、可选值均由子节点决定
				const { getFieldDecorator } = this.context.form;
				const { onChange, defaultValue, rules, name, ...restProps } = this.props;
				const options = {};
				let otherProps = {};
				options.rules = rules || defaultRules;
				if (onChange) {
					options.onChange = onChange;
				}
				if (defaultValue) {
					options.initialValue = defaultValue;
				}
				otherProps = restProps || otherProps;

				return (
  <FormItem>
    {
			getFieldDecorator(name, options)(
  <WrappedComponent {...defaultProps} {...otherProps} />
			)
		}
  </FormItem>
				);
			}
		}
	}
}
const LoginItem = {};
Object.keys(map).forEach((item) => {
	LoginItem[item] = generator({
		defaultProps: map[item].props,
		defaultRules: map[item].rules,
		type: item,
	})(map[item].component)
})
export default LoginItem;
