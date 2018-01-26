import React from 'react';
import PropTypes from 'prop-types';
import KEYCODE from './KeyCode';

export default class Options extends React.Component {
	static propTypes = {
		changeSize: PropTypes.func,
	    quickGo: PropTypes.func,
	    selectComponentClass: PropTypes.func,
	    current: PropTypes.number,
	    pageSizeOptions: PropTypes.arrayOf(PropTypes.string),
	    pageSize: PropTypes.number,
	    buildOptionText: PropTypes.func,
	    locale: PropTypes.object,
	}
	static defaultProps = {
	    pageSizeOptions: ['10', '20', '30', '40'],
	};
	constructor(props) {
		super(props);
		this.state = {
			current: props.current,
			goInputText: '',
		}
	}
	go = (e) => {
		let val = this.state.goInputText;
		if (val === '') { return; }
		val = Number(val);
		if (isNaN(val)) {
			val = this.state.current;
		}
		if (e.KeyCode === KEYCODE.ENTER || e.type === 'click') {
			this.setState({
				goInputText: '',
				current: this.props.quickGo(val),
			});
		}
	}
	buildOptionText = (value) => {
		return `${value} ${this.props.locale.items_per_page}`;
	}

	changeSize = (value) => {
		this.props.changeSize(Number(value));
	}

	handleChange = (e) => {
		this.setState({
			goInputText: e.target.value,
		})
	}
	render() {
		const {locale, changeSize, quickGo, selectComponentClass, buildOptionText, pageSize, pageSizeOptions, selectPrefixCls } = this.props;

	    const prefixCls = `${props.rootPrefixCls}-options`;
	    const buildOptionText = buildOptionText || this.buildOptionText;
	    let changeSelect = null;
	    let goInput = null;
	    let gotoButton = null;

	    if (changeSize && selectComponentClass) {
	    	const Option = Select.Option;
	    	const pageSize = pageSize || pageSizeOptions[0];
	    	const options = pageSizeOptions.map((opt, i) => (
  <Option key={i} value={opt}>{buildOptionText(opt)}</Option>
	    		))
	    };

	    changeSelect = (
  <selectComponentClass
    prefixCls={selectPrefixCls}
    showSearch={false}
    className={`${prefixCls}-size-changer`}
    optionLabelProp='children'
    dropdownMatchSelectWidth={false}
    value={pageSize.toString()}
    onChange={this.changeSize}
    getPopupContainer={triggerNode => triggerNode.parentNode}
	    	>
    {options}
  </selectComponentClass>
	    )

	    if (quickGo) {
	    	if (goButton) {
	    		if (typeof goButton === 'boolean') {
	    			gotoButton = (
  <button type='button' onClick={this.go} onKeyUp={this.go}>
    {locale.jump_to_confirm}
  </button>
	    				);
	    		} else {
	    			gotoButton = goButton;
	    		}
	    	}
	    	goInput = (
  <div className={`${prefixCls}-quick-jumper`}>
    {locale.jump_to}
    <input type='text' value={state.goInputText} onChange={this.handleChange} onKeyUp={this.go} />
    {locale.page}
    {gotoButton}
  </div>
	    		);
	    }
	    return (
  <li className={`${prefixCls}`}>
    {changeSelect}
    {goInput}
  </li>
	    	)
	}
}
