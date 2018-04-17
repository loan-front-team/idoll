import React from 'react';
import classNames from 'classnames';
import Button from 'components/button';
import Form from 'components/form';

import styles from './login.less';

const FormItem = Form.Item;

export default ({ className, ...rest }) => {
	const classString = classNames(className, styles.submit);
	return (
  <FormItem>
    <Button size='large' className={classString} type='primary' htmlType='submit' {...rest} />
  </FormItem>
		)
}
