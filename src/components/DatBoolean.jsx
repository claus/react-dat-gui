import result from 'lodash.result';
import isFinite from 'lodash.isfinite';
import isString from 'lodash.isstring';
import React, { PropTypes } from 'react';
import { createId } from '../utils';

class DatBoolean extends React.Component {

    static propTypes = {
        data: PropTypes.object,
        path: PropTypes.string,
        label: PropTypes.string,
        onUpdate: PropTypes.func,
        _onUpdateValue: PropTypes.func,
    };

    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: 0,
            isSliderActive: false,
        };
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
        this.setState({ value: event.target.checked }, () => {
            this.update();
        });
    }

    update() {
        const { value } = this.state;
        this.props._onUpdateValue && this.props._onUpdateValue(this.props.path, value);
        this.props.onUpdate && this.props.onUpdate(value);
    }

    render() {
        const { value, id } = this.state;
        const label = isString(this.props.label) ? this.props.label : this.props.path;
        return (
            <li className="cr boolean">
                <label htmlFor={id}>{label}</label>
                <div className="checkbox-wrapper">
                    <input
                        type="checkbox"
                        id={id}
                        checked={value}
                        onChange={this.handleChange} />
                    <div className="checkbox">
                        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path d="M0,0L50,50M50,0L0,50Z" />
                        </svg>
                    </div>
                </div>
            </li>
        );
    }

}

export default DatBoolean;
