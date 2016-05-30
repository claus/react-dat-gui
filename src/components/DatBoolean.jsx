import { isFinite, isString, result } from 'lodash';
import React, { PropTypes } from 'react';

class DatBoolean extends React.Component {

    static propTypes = {
        id: PropTypes.string,
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
            value: this.getValue()
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            value: this.getValue(nextProps)
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.id !== this.props.id ||
               nextProps.path !== this.props.path ||
               nextProps.label !== this.props.label ||
               nextState.value !== this.state.value;
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
        const { id } = this.props;
        const { value } = this.state;
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
                    <div className="checkbox" />
                </div>
            </li>
        );
    }

}

export default DatBoolean;
