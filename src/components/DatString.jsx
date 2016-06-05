import result from 'lodash.result';
import isString from 'lodash.isstring';
import React, { PropTypes } from 'react';
import { createId } from '../utils';

class DatString extends React.Component {

    static propTypes = {
        data: PropTypes.object,
        path: PropTypes.string,
        label: PropTypes.string,
        liveUpdate: PropTypes.bool,
        onUpdate: PropTypes.func,
        _onUpdateValue: PropTypes.func,
        _labelWidth: PropTypes.number,
    };

    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    componentWillMount() {
        this.setState({
            id: createId(),
            value: this.getValue()
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            value: this.getValue(nextProps)
        });
    }

    getValue(props = this.props) {
        return result(props.data, props.path);
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({ value }, () => {
            this.props.liveUpdate && this.update();
        });
    }

    handleBlur(event) {
        window.getSelection().removeAllRanges();
        !this.props.liveUpdate && this.update();
    }

    update() {
        const { value } = this.state;
        this.props._onUpdateValue && this.props._onUpdateValue(this.props.path, value);
        this.props.onUpdate && this.props.onUpdate(value);
    }

    render() {
        const { _labelWidth } = this.props;
        const { value, id } = this.state;
        const label = isString(this.props.label) ? this.props.label : this.props.path;
        const labelStyle = _labelWidth ? { width: `${_labelWidth}%` } : {};
        const inputStyle = _labelWidth ? { width: `${100 - _labelWidth}%` } : {};
        return (
            <li className="cr string">
                <label htmlFor={id} style={labelStyle}>{label}</label>
                <input
                    type="text"
                    id={id}
                    value={value}
                    style={inputStyle}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur} />
            </li>
        );
    }

}

export default DatString;
