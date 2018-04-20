import React from 'react';
import { Spin } from 'components/spin';

export default class PromiseRender extends React.PureComponent {
	state = {
		component: false,
	}
	async componentDidMount() {
		this.props.promise.then(() => {
			this.setState({component: this.props.ok});
		}).catch(() => {
			this.setState({component: this.props.error});
		})
	}
	render() {
		const component = this.state.component;
		const styleComp = {
			width: '100%',
	    height: '100%',
      margin: 'auto',
      paddingTop: 50,
      textAlign: 'center',
		}
		return component ? <component {...this.props} /> : (
  <div style={styleComp}>
    <Spin size='large' />
  </div>
		);
	}
}
