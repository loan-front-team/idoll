import React from 'react'
import PropTypes from 'prop-types'

import Pager from './Pager'
import Options from './Options'
import KEYCODE from './KeyCode'
import LOCALE from './local/zh_CN'

function noop() {
}

function isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

function defaultItemRender(page, type, element) {
    return element;
}

export default class RcPagination extends React.Component {
    static propTypes = {
        current: PropTypes.number,
        defaultCurrent: PropTypes.number,
        total: PropTypes.number,
        pageSize: PropTypes.number,
        defaultPageSize: PropTypes.number,
        onChange: PropTypes.func,
        hideOnSinglePage: PropTypes.bool,
        showSizeChanger: PropTypes.bool,
        showLessItems: PropTypes.bool,
        onShowSizeChange: PropTypes.func,
        selectComponentClass: PropTypes.func,
        showQuickJumper: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        showTitle: PropTypes.bool,
        pageSizeOptions: PropTypes.arrayOf(PropTypes.string),
        showTotal: PropTypes.func,
        locale: PropTypes.object,
        style: PropTypes.object,
        itemRender: PropTypes.func,
    };
    static defaultProps = {
        defaultCurrent: 1,
        total: 0,
        defaultPageSize: 10,
        onChange: noop,
        className: '',
        selectPrefixCls: 'rc-select',
        prefixCls: 'rc-pagination',
        selectComponentClass: null,
        hideOnSinglePage: false,
        showQuickJumper: false,
        showSizeChanger: false,
        showLessItems: false,
        showTitle: true,
        onShowSizeChange: noop,
        locale: LOCALE,
        style: {},
        itemRender: defaultItemRender
    };
    constructor(props) {
        super(props);

        const hasOnChange = props.onChange !== noop;
        const hasCurrent = ('current' in props);
        if (hasCurrent && !hasOnChange) {
            console.warn('警告：你提供了‘current’的prop，但是没有提供‘onChange’的处理函数，这将会渲染一个只读组件'); // eslint-disable-line
        }

        let current = props.defaultCurrent;
        if ('current' in props) {
            current = props.current;
        }
        let pageSize = props.defaultPageSize;
        if ('pageSize' in props) {
            pageSize = props.pageSize;
        }
        this.state = {
            current,
            currentInputValue: current,
            pageSize,
        }
    }
    componentWillReceiveProps(nextProps) {
        if ('current' in nextProps) {
            this.setState({
                current: nextProps.current,
                currentInputValue: nextProps.current,
            })
        }
        if ('pageSize' in nextProps) {
            const newState = {};
            let current = this.state.current;
            const newCurrent = this.calculatePage(nextProps.pageSize);
            current = current > newCurrent ? newCurrent : current;
            if (!('current' in nextProps)) {
                newState.current = current;
                newState.currentInputValue = current;
            }
            newState.pageSize = nextProps.pageSize;
            this.setState(newState);
        }
    }
    calculatePage = (p) => {
        let pageSize = p;
        if (typeof pageSize === 'undefined') {
            pageSize = this.state.pageSize;
        }
        return Math.floor((this.props.total - 1) / pageSize) + 1;
    }
    hasPrev = () => {
    	return this.state.current > 1;
    }
    hasNext = () => {
    	return this.state.current < this.calculatePage();
    }
    isValid = (page) => {
    	return isInteger(page) && page >= 1 && page !== this.state.current;
    }
    handleChange = (p) => {
    	let page = p;
    	if (this.isValid(page)) {
    		if (page > this.calculatePage()) {
    			page = this.calculatePage();
    		}
    		if (!('current' in this.props)) {
    			this.setState({
    				current: page,
    				currentInputValue: page,
    			});
    		}
    		const pageSize = this.state.pageSize;
    		this.props.onChange(page, pageSize);
    		return page;
    	}
    	return this.state.current;
    }
    prev = () => {
    	if (this.hasPrev()) {
    		this.handleChange(this.state.current - 1)
    	}
    }
    next = () => {
    	if (this.hasNext) {
    		this.handleChange(this.state.current + 1)
    	}
    }
    getJumpPrevPage() {
        return Math.max(1, this.state.current - (this.props.showLessItems ? 3 : 5));
    }
    getJumpNextPage() {
    	return Math.min(this.calculatePage(), this.state.current + (this.props.showLessItems ? 3 : 5));
    }
    handleKeyUp = e => {

    }
    handleKeyDown = e => {

    }
    handlerGoTo = e => {

    }
    runIfEnter = (event, callback, ...restParams) => {
    	if (event.key === 'Enter' || event.charCode === 13) {
    		callback(...restParams);
    	}
    }

    render() {
        const { hideOnSinglePage, total, locale, prefixCls, showQuickJumper, showLessItems, simple, showTitle, itemRender, showTotal, className } = this.props;

        // 当hideOnSinglePage的值为true时，只有一页，隐藏pager
        if (hideOnSinglePage === true && total <= this.state.pageSize) {
            return null;
        }

        const { current, pageSize } = this.state;
        const allPages = this.calculatePage();
        const pagerList = [];
        let jumpPrev = null;
        let jumpNext = null;
        let firstPager = null;
        let lastPager = null;
        let gotoButton = null;
        let totalText = null;

        const goButton = (showQuickJumper && showQuickJumper.goButton);
        const pageBufferSize = showLessItems ? 1 : 2;

        const prevPage = current - 1 > 0 ? current - 1 : 0;
        const nextPage = current + 1 < allPages ? current + 1 : allPages;

        const prevDisabled = !this.hasPrev();
        const nextDisabled = !this.hasNext();

        const notSimple = !simple;

        if (showTotal) {
        	totalText = (
          <li>
            {showTotal(total, [(current - 1) * pageSize + 1, current * pageSize > total ? total : current * pageSize, ])}
          </li>
        		)
        }

        if (simple) {
            if (goButton) {
                if (typeof goButton === 'boolean') {
                    gotoButton = (
                      <li
                        title={showTitle ? `${locale.jump_to}${this.state.current}/${allPages}` : null}
                        className={`${precixCls}-simple-pager`}
                      >
                        <button type='button' onClick={this.handlerGoTo} onKeyUp={this.handleGoTO}>
                          {locale.jump_to_confirm}
                        </button>
                      </li>
                    )
                } else {
                	gotoButton = goButton;
                }
            }
            return (
              <ul>
                <li>{itemRender(prevPage, 'prev', <a className={`${prefixCls}-item-lick`} />)}</li>
                <li>
                  <input type='text' value={this.state.currentInputValue} onKeyUp={this.handleKeyUp} handleKeyDown={this.handleKeyDown} onChange={this.handleKeyUp} size='3' />
                  <span className={`${prefixCls}-slash`}>/</span>
                  {allPages}
                </li>
                <li>
                  {itemRender(nextPage, 'next', <a className={`${prefixCls}-item-link`} />)}
                </li>
                {gotoButton}
              </ul>

            	)
        }
        if (allPages <= 5 + pageBufferSize * 2) {
        	for (var i = 0; i < allPages; i++) {
        		const active = this.state.current === i;
        		pagerList.push(
          <Pager
            locale={locale}
            rootPrefixCls={prefixCls}
            onClick={this.handleChange}
            onKeyPress={this.runIfEnter}
            key={i}
            page={i}
            active={active}
            showTitle={showTitle}
            itemRender={itemRender}
        			 />
        			);
        	}
        } else {
        	const prevItemTitle = showLessItems ? locale.prev_3 : locale.prev_5;
        	const nextItemTitle = showLessItems ? locale.next_3 : locale.next_5;
        	jumpPrev = (
          <li>
            {itemRender(this.getJumpPrevPage(), 'jump-prev', <a className={`${prefixCls}-item-link`} />)}
          </li>
        		);
        	jumpNext = (
          <li>{itemRender(this.getJumpNextPage(), 'jump-next', <a className={`${prefixCls}-item-link`} />)}</li>
        		);
        	firstPager = (
          <Pager
            locale={locale}
            rootPrefixCls={prefixCls}
            onClick={this.handleChange}
            onKeyPress={this.runIfEnter}
            key={1}
            page={1}
            active={false}
            showTitle={showTitle}
            itemRender={itemRender}
        		 />
        		);
        	lastPager = (
          <Pager
            locale={locale}
            last
            rootPrefixCls={prefixCls}
            onClick={this.handleChange}
            onKeyPress={this.runIfEnter}
            key={allPages}
            page={allPages}
            active={false}
            showTitle={showTitle}
            itemRender={itemRender}
        		 />
        		);

        	let left = Math.max(1, current - pageBufferSize);
        	let right = Math.min(current + pageBufferSize, allPages);

        	if (current - 1 <= pageBufferSize) {
        		right = 1 + pageBufferSize * 2;
        	}

        	if (allPages - current <= pageBufferSize) {
        		left = allPages - pageBufferSize * 2;
        	}

        	for (let i = left; i <= right; i++) {
        		const active = current === i;
        		pagerList.push(
          <Pager
            locale={locale}
            rootPrefixCls={prefixCls}
            onClick={this.handleChange}
            onKeyPress={this.runIfEnter}
            key={i}
            page={i}
            active={active}
            showTitle={showTitle}
            itemRender={itemRender}
        			 />
        			);
        	}

        	if (current - 1 >= pageBufferSize * 2 && current !== 1 + 2) {
        		pagerList[0] = React.cloneElement(pagerList[0], {
        			className: `${prefixCls}-item-after-jump-prev`,
        		});
        		pagerList.unshift(jumpPrev);
        	}

        	if (allPages - current >= pageBufferSize * 2 && current !== allPages - 2) {
        		pagerList[pagerList.length - 1] = React.cloneElement(pagerList[pagerList.length - 1], {className: prefixCls + '-item-before-jump-next'}, );
        		pagerList.push(jumpNext);
        	}
        	if (left !== 1) {
        		pagerList.unshift(firstPager);
        	}
        	if (right !== allPages) {
        		pagerList.push(lastPager);
        	}
        }

        // 通过设置 showTotal 展示总共有多少数据。
        let totalText = null;

	    if (props.showTotal) {
	      totalText = (
  <li className={`${prefixCls}-total-text`}>
    {props.showTotal(
	            props.total,
	            [
	              (current - 1) * pageSize + 1,
	              current * pageSize > props.total ? props.total : current * pageSize,
	            ]
	          )}
	        </li>
	      );
	    }
	    const prevDisabled = !this.hasPrev();
	    const nextDisabled = !this.hasNext();
        return (
          <ul
            className={`${prefixCls} ${className}`}
            style={style}
            unselectable='unselectable'
          >
            {totalText}
            <li
              title={showTitle ? locale.prev_page : null}
              onClick={this.prev}
              tabIndex='0'
              onKeyPress={this.runIfEnterPrev}
              className={!prevDisabled ? '' : `${prefixCls}-disabled`}
            >{itemRender(prevPage, 'prev', <a className={`${prefixCls}-item-link`} />)}</li>
            {pagerList}
            <li>{itemRender(nextPage, 'next', <a className={`${prefixCls}-item-link`} />)}</li>
            <Options
              locale={locale}
              rootPrefixCls={prefixCls}
              selectComponentClass={selectComponentClass}
              selectPrefixCls={selectPrefixCls}
              changeSize={showSizeChanger ? changePageSize : null}
              current={this.state.current}
              pageSize={this.state.pageSize}
              pageSizeOptions={pageSizeOptions}
              quickGo={showQuickJumper ? handleChange : null}
              goButton={goButton}
             />
          </ul>
        	)
    }
}
