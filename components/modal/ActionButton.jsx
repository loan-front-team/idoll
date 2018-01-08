import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from '../button';
import PropTypes from 'prop-types';

export default class ActionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
    this.onClick = () => {
      const { actionFn, closeModal } = this.props;
      if (actionFn) {
        let ret;
        if (actionFn.length) {
          ret = actionFn(closeModal);
        } else {
          ret = actionFn();
          if (!ret) {
            closeModal();
          }
        }
        if (ret && ret.then) {
          this.setState({ loading: true });
          ret.then((...args) => {
            // It's unnecessary to set loading=false, for the Modal will be unmounted after close.
            // this.setState({ loading: false });
            closeModal(...args);
          }, () => {
            // See: https://github.com/ant-design/ant-design/issues/6183
            this.setState({ loading: false });
          })
        }
      } else {
        closeModal();
      }
    }
  }
  componentDidMount() {
    if (this.props.autoFocus) {
      const $this = ReactDOM.findDOMNode(this);
      this.timeoutId = setTimeout(() => $this.focus());
    }
  }
  conponentWillUnmount() {
    clearTimeout(this.timeoutId);
  }
  render() {
    const { type, children } = this.props;
    const loading = this.state.loading;
    return (
      <Button type={type} onClick={this.onClick} loading={loading}>
        {children}
      </Button>
    );
  }
}

ActionButton.propTypes = {
  actionFn: PropTypes.node,
  closeModal: PropTypes.func,
  autoFocus: PropTypes.bool,
  children: PropTypes.node,
  type: PropTypes.string
};
