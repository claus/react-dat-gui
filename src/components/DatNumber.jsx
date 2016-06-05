import cx from 'classnames';
import clamp from 'lodash.clamp';
import result from 'lodash.result';
import isFinite from 'lodash.isfinite';
import isString from 'lodash.isstring';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

class DatNumber extends React.Component {

    static propTypes = {
        min: PropTypes.number,
        max: PropTypes.number,
        step: PropTypes.number,
        data: PropTypes.object,
        path: PropTypes.string,
        label: PropTypes.string,
        labelWidth: PropTypes.number,
        liveUpdate: PropTypes.bool,
        onUpdate: PropTypes.func,
        _onUpdateValue: PropTypes.func,
    };

    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleSliderUpdate = this.handleSliderUpdate.bind(this);
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

    toNumber(value) {
        const float = parseFloat(value);
        return isNaN(float) ? 0 : float;
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

    handleSliderUpdate(value, isLive) {
        value = this.applyConstraints(value);
        this.setState({ value }, () => {
            if (!isLive || this.props.liveUpdate) {
                this.update();
            }
        });
    }

    update() {
        const { value } = this.state;
        this.props._onUpdateValue && this.props._onUpdateValue(this.props.path, value);
        this.props.onUpdate && this.props.onUpdate(value);
    }

    renderSlider(width) {
        return (
            <Slider
                value={this.state.value}
                min={this.props.min}
                max={this.props.max}
                width={width}
                onUpdate={this.handleSliderUpdate} />
        );
    }

    render() {
        const { min, max, path, label, labelWidth } = this.props;
        const labelText = isString(label) ? label : path;
        const hasSlider = isFinite(min) && isFinite(max);
        const controlsWidth = 100 - labelWidth;
        const inputWidth = hasSlider ? Math.round(controlsWidth / 3) : controlsWidth;
        const sliderWidth = controlsWidth - inputWidth;
        return (
            <li className="cr number">
                <label>
                    <span className="label-text" style={{ width: `${labelWidth}%` }}>{labelText}</span>
                    {hasSlider ? this.renderSlider(sliderWidth) : null}
                    <input
                        type="text"
                        inputMode="numeric"
                        value={this.state.value}
                        style={{ width: `${inputWidth}%` }}
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur} />
                </label>
            </li>
        );
    }

}

class Slider extends React.Component {

    static propTypes = {
        value: PropTypes.number,
        min: PropTypes.number,
        max: PropTypes.number,
        width: PropTypes.number,
        onUpdate: PropTypes.func,
    };

    constructor(props, context) {
        super(props, context);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    handleMouseDown(event) {
        this.update(event.pageX);
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mouseup', this.handleMouseUp);
    }

    handleMouseMove(event) {
        this.update(event.pageX);
        event.preventDefault();
    }

    handleMouseUp(event) {
        this.update(event.pageX, false);
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);
    }

    handleClick(event) {
        // do not focus input field on slider click
        event.preventDefault();
    }

    update(pageX, isLive = true) {
        const { min, max, onUpdate } = this.props;
        const rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
        const x = pageX - rect.left;
        const w = rect.right - rect.left;
        onUpdate(min + clamp(x / w, 0, 1) * (max - min), isLive);
    }

    render() {
        const { value, min, max, width } = this.props;
        const widthBg = (value - min) * 100 / (max - min);
        const style = {
            width: `${width}%`,
            backgroundSize: `${widthBg}% 100%`
        };
        return (
            <span
                className="slider"
                style={style}
                onClick={this.handleClick}
                onMouseDown={this.handleMouseDown} />
        );
    }

}

export default DatNumber;
