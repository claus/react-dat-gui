import React, { Component, cloneElement } from 'react';

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

  renderChildren() {
    // Disable this rule to take title out of the props so nested folders can have unique titles.
    // eslint-disable-next-line no-unused-vars
    const { children, title, ...rest } = this.props;

    return React.Children.map(children, child => cloneElement(child, {...rest}));
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
