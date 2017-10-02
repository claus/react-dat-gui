import React, { Component, cloneElement } from 'react';

import PropTypes from 'prop-types';
import cx from 'classnames';

export default class DatFolder extends Component {
  state = {
    closed: true,
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  handleClick = () => {
    const closed = !this.state.closed;

    this.setState({ closed });
  }

  renderChildren() {
    return React.Children.map(this.props.children, child => cloneElement(child, {...this.props}));
  }

  render() {
    const { closed } = this.state;
    const { title } = this.props;

    return (
      <li className={cx('folder', { 'closed': closed })}>
        <div className='dg'>
          <div className='title' onClick={this.handleClick}>
            {title}
          </div>
          <ul>
            {this.renderChildren()}
          </ul>
        </div>
      </li>
    );
  }
}
