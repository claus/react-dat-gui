import cx from 'classnames';
import set from 'lodash.set';
import cloneDeep from 'lodash.clonedeep';
import isUndefined from 'lodash.isundefined';
import React, { PropTypes, cloneElement } from 'react';

class Dat extends React.Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        children: PropTypes.node.isRequired,
        onUpdate: PropTypes.func.isRequired,
        liveUpdate: PropTypes.bool,
        className: PropTypes.string,
        style: PropTypes.object,
        labelWidth: PropTypes.number,
    };

    static defaultProps = {
        liveUpdate: true,
    };

    constructor(props, context) {
        super(props, context);
        this.handleUpdateValue = this.handleUpdateValue.bind(this);
    }

    handleUpdateValue(path, value) {
        const { data, onUpdate } = this.props;
        const dataUpdated = set(cloneDeep(data), path, value);
        onUpdate(dataUpdated);
    }

    renderChildren() {
        const { children, data, labelWidth } = this.props;
        return React.Children.toArray(children).map((child, i) => {
            const liveUpdate = isUndefined(child.props.liveUpdate) ? this.props.liveUpdate : child.props.liveUpdate;
            return cloneElement(child, {
                id: `__react_dat_gui_${i}__`,
                key: i,
                data,
                liveUpdate,
                _labelWidth: labelWidth,
                _onUpdateValue: this.handleUpdateValue,
            });
        });
    }

    render() {
        const { style = {} } = this.props;
        const className = cx('react-dat-gui', this.props.className);
        return (
            <div className={className} style={style}>
                <ul className="dg main">
                    {this.renderChildren()}
                </ul>
            </div>
        );
    }

}

export default Dat;

export { default as DatString } from './components/DatString';
export { default as DatNumber } from './components/DatNumber';
export { default as DatBoolean } from './components/DatBoolean';
export { default as DatButton } from './components/DatButton';
