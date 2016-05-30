import { isString, result } from 'lodash';
import React, { PropTypes } from 'react';

class DatString extends React.Component {

    static propTypes = {
        id: PropTypes.string,
        data: PropTypes.object,
        path: PropTypes.string,
        label: PropTypes.string,
        liveUpdate: PropTypes.bool,
        onUpdate: PropTypes.func,
        _onUpdateValue: PropTypes.func,
    };

    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
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
        return nextProps.path !== this.props.path ||
               nextProps.label !== this.props.label ||
               nextState.value !== this.state.value;
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
        const { id } = this.props;
        const { value } = this.state;
        const label = isString(this.props.label) ? this.props.label : this.props.path;
        return (
            <li className="cr string">
                <label htmlFor={id}>{label}</label>
                <input
                    type="text"
                    id={id}
                    value={value}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur} />
            </li>
        );
    }

}

export default DatString;
