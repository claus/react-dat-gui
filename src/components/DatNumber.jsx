import cx from 'classnames';
import clamp from 'lodash.clamp';
import result from 'lodash.result';
import isFinite from 'lodash.isfinite';
import isString from 'lodash.isstring';
import React, { PropTypes } from 'react';

class DatNumber extends React.Component {

    static propTypes = {
        id: PropTypes.string,
        data: PropTypes.object,
        path: PropTypes.string,
        label: PropTypes.string,
        liveUpdate: PropTypes.bool,
        onUpdate: PropTypes.func,
        _onUpdateValue: PropTypes.func,
        _labelWidth: PropTypes.number,
        min: PropTypes.number,
        max: PropTypes.number,
        step: PropTypes.number,
    };

    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
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

    getValue(props = this.props) {
        return this.applyConstraints(result(props.data, props.path));
    }

    toNumber(value) {
        const float = parseFloat(value);
        return isNaN(float) ? 0 : float;
    }

    applyConstraints(value) {
        const { min, max, step } = this.props;
        const [ hasMin, hasMax, hasStep ] = [ isFinite(min), isFinite(max), isFinite(step) ];
        let [ isMin, isMax ] = [ false, false ];
        value = this.toNumber(value);
        if (hasMin && value <= min) {
            value = min;
            isMin = true;
        }
        if (hasMax && value >= max) {
            value = max;
            isMax = true;
        }
        if (!isMin && !isMax) {
            if (hasStep && step !== 0) {
                value = Math.round(value / step) * step;
            }
        }
        return value;
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleFocus(event) {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    handleBlur(event) {
        document.removeEventListener('keydown', this.handleKeyDown);
        window.getSelection().removeAllRanges();
        const value = this.applyConstraints(event.target.value);
        this.setState({ value }, () => {
            this.update();
        });
    }

    handleKeyDown(event) {
        const key = event.keyCode || event.which;
        if (key === 13) {
            const value = this.applyConstraints(this.state.value);
            this.setState({ value }, () => {
                this.update();
            });
        }
    }

    handleMouseDown(event) {
        const value = this.getSliderValue(event);
        this.setState({ value, isSliderActive: true }, () => {
            this.props.liveUpdate && this.update();
        });
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mouseup', this.handleMouseUp);
    }

    handleMouseMove(event) {
        const value = this.getSliderValue(event);
        this.setState({ value }, () => {
            this.props.liveUpdate && this.update();
        });
        event.preventDefault();
    }

    handleMouseUp(event) {
        !this.props.liveUpdate && this.update();
        this.setState({ isSliderActive: false });
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);
    }

    getSliderValue(mouseEvent) {
        const { min, max } = this.props;
        const sliderRect = this.refs.slider.getBoundingClientRect();
        const x = mouseEvent.pageX - sliderRect.left;
        const w = sliderRect.width;
        return this.applyConstraints(min + clamp(x / w, 0, 1) * (max - min));
    }

    update() {
        const { value } = this.state;
        this.props._onUpdateValue && this.props._onUpdateValue(this.props.path, value);
        this.props.onUpdate && this.props.onUpdate(value);
    }

    render() {
        const { id, min, max, _labelWidth } = this.props;
        const { value, isSliderActive } = this.state;
        const label = isString(this.props.label) ? this.props.label : this.props.path;
        const hasSlider = isFinite(min) && isFinite(min);
        const labelStyle = _labelWidth ? { width: `${_labelWidth}%` } : {};
        const sliderStyle = _labelWidth ? { width: `${2 * (100 - _labelWidth) / 3}%` } : {};
        const inputStyle = _labelWidth ? { width: `${hasSlider ? (100 - _labelWidth) / 3 : 100 - _labelWidth}%` } : {};
        const sliderPercent = (this.applyConstraints(value) - min) * 100 / (max - min);
        const sliderBarStyle = hasSlider ? { maxWidth: `${sliderPercent}%` } : {};
        const sliderClassName = cx('slider', { 'is-active': isSliderActive })
        const className = cx('cr', 'number', { 'has-slider': hasSlider });
        return (
            <li className={className}>
                <label htmlFor={id} style={labelStyle}>{label}</label>
                <div className={sliderClassName} style={sliderStyle} ref="slider" onMouseDown={this.handleMouseDown}>
                    <div className="slider-bar" style={sliderBarStyle} />
                </div>
                <input
                    type="text"
                    inputMode="numeric"
                    style={inputStyle}
                    id={id}
                    value={value}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur} />
            </li>
        );
    }

}

export default DatNumber;
