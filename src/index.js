import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import isUndefined from 'lodash.isundefined';
import './style/dat.scss';

export default class DatGui extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    onUpdate: PropTypes.func.isRequired,
    liveUpdate: PropTypes.bool,
    labelWidth: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
  };

  static defaultProps = {
    liveUpdate: true,
    className: null,
    style: null,
    labelWidth: '40%'
  };

  handleUpdateValue = (path, value) => {
    const { onUpdate } = this.props;
    const dataUpdated = {};
    dataUpdated[path] = value;

    onUpdate(dataUpdated);
  };

  renderChildren() {
    const { children, data } = this.props;

    return React.Children.toArray(children).map((child, i) => {
      const liveUpdate = isUndefined(child.props.liveUpdate)
        ? this.props.liveUpdate
        : child.props.liveUpdate;
      const labelWidth = isUndefined(child.props.labelWidth)
        ? this.props.labelWidth
        : child.props.labelWidth;

      return cloneElement(child, {
        key: i,
        data,
        liveUpdate,
        labelWidth,
        _onUpdateValue: this.handleUpdateValue
      });
    });
  }

  render() {
    const { style, className } = this.props;
    const classNames = cx('react-dat-gui', className);

    return (
      <div className={classNames} style={style}>
        <ul className="dg main">{this.renderChildren()}</ul>
      </div>
    );
  }
}

export { default as DatString } from './components/DatString';
export { default as DatNumber } from './components/DatNumber';
export { default as DatBoolean } from './components/DatBoolean';
export { default as DatButton } from './components/DatButton';
export { default as DatFolder } from './components/DatFolder';
export { default as DatSelect } from './components/DatSelect';
export { default as DatColor } from './components/DatColor';
export { default as DatPresets } from './components/DatPresets';
