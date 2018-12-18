import React, { Component } from 'react';

import PropTypes from 'prop-types';
import cx from 'classnames';

export default class DatFolder extends Component {
  state = {
    closed: this.props.closed,
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  static defaultProps = {
    title: 'Folder',
    closed: true
  }

  handleClick = () => {
    const closed = !this.state.closed;

    this.setState({ closed });
  }

  render() {
    const { closed } = this.state;
    const { title, children } = this.props;

    return (
      <li className={cx('folder', { 'closed': closed })}>
        <div className='dg'>
          <div className='title' onClick={this.handleClick}>
            {title}
          </div>
          <ul>
            {children}
          </ul>
        </div>
      </li>
    );
  }
}
