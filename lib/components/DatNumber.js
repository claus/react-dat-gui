'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash.clamp');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.result');

var _lodash4 = _interopRequireDefault(_lodash3);

var _lodash5 = require('lodash.isfinite');

var _lodash6 = _interopRequireDefault(_lodash5);

var _lodash7 = require('lodash.isstring');

var _lodash8 = _interopRequireDefault(_lodash7);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatNumber = function (_React$Component) {
    _inherits(DatNumber, _React$Component);

    function DatNumber(props, context) {
        _classCallCheck(this, DatNumber);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DatNumber).call(this, props, context));

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleFocus = _this.handleFocus.bind(_this);
        _this.handleBlur = _this.handleBlur.bind(_this);
        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        _this.handleMouseDown = _this.handleMouseDown.bind(_this);
        _this.handleMouseMove = _this.handleMouseMove.bind(_this);
        _this.handleMouseUp = _this.handleMouseUp.bind(_this);
        _this.state = {
            value: 0,
            isSliderActive: false
        };
        return _this;
    }

    _createClass(DatNumber, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState({
                value: this.getValue()
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                value: this.getValue(nextProps)
            });
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextProps.id !== this.props.id || nextProps.path !== this.props.path || nextProps.label !== this.props.label || nextProps._labelWidth !== this.props._labelWidth || nextProps.min !== this.props.value || nextProps.max !== this.props.value || nextProps.step !== this.props.value || nextState.value !== this.state.value;
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

            return this.applyConstraints((0, _lodash4.default)(props.data, props.path));
        }
    }, {
        key: 'toNumber',
        value: function toNumber(value) {
            var float = parseFloat(value);
            return isNaN(float) ? 0 : float;
        }
    }, {
        key: 'applyConstraints',
        value: function applyConstraints(value) {
            var _props = this.props;
            var min = _props.min;
            var max = _props.max;
            var step = _props.step;
            var hasMin = (0, _lodash6.default)(min);
            var hasMax = (0, _lodash6.default)(max);
            var hasStep = (0, _lodash6.default)(step);
            var isMin = false;
            var isMax = false;

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
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus(event) {
            document.addEventListener('keydown', this.handleKeyDown);
        }
    }, {
        key: 'handleBlur',
        value: function handleBlur(event) {
            var _this2 = this;

            document.removeEventListener('keydown', this.handleKeyDown);
            window.getSelection().removeAllRanges();
            var value = this.applyConstraints(event.target.value);
            this.setState({ value: value }, function () {
                _this2.update();
            });
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(event) {
            var _this3 = this;

            var key = event.keyCode || event.which;
            if (key === 13) {
                var value = this.applyConstraints(this.state.value);
                this.setState({ value: value }, function () {
                    _this3.update();
                });
            }
        }
    }, {
        key: 'handleMouseDown',
        value: function handleMouseDown(event) {
            var _this4 = this;

            var value = this.getSliderValue(event);
            this.setState({ value: value, isSliderActive: true }, function () {
                _this4.props.liveUpdate && _this4.update();
            });
            window.addEventListener('mousemove', this.handleMouseMove);
            window.addEventListener('mouseup', this.handleMouseUp);
        }
    }, {
        key: 'handleMouseMove',
        value: function handleMouseMove(event) {
            var _this5 = this;

            var value = this.getSliderValue(event);
            this.setState({ value: value }, function () {
                _this5.props.liveUpdate && _this5.update();
            });
            event.preventDefault();
        }
    }, {
        key: 'handleMouseUp',
        value: function handleMouseUp(event) {
            !this.props.liveUpdate && this.update();
            this.setState({ isSliderActive: false });
            window.removeEventListener('mousemove', this.handleMouseMove);
            window.removeEventListener('mouseup', this.handleMouseUp);
        }
    }, {
        key: 'getSliderValue',
        value: function getSliderValue(mouseEvent) {
            var _props2 = this.props;
            var min = _props2.min;
            var max = _props2.max;

            var sliderRect = this.refs.slider.getBoundingClientRect();
            var x = mouseEvent.pageX - sliderRect.left;
            var w = sliderRect.width;
            return this.applyConstraints(min + (0, _lodash2.default)(x / w, 0, 1) * (max - min));
        }
    }, {
        key: 'update',
        value: function update() {
            var value = this.state.value;

            this.props._onUpdateValue && this.props._onUpdateValue(this.props.path, value);
            this.props.onUpdate && this.props.onUpdate(value);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props;
            var id = _props3.id;
            var min = _props3.min;
            var max = _props3.max;
            var _labelWidth = _props3._labelWidth;
            var _state = this.state;
            var value = _state.value;
            var isSliderActive = _state.isSliderActive;

            var label = (0, _lodash8.default)(this.props.label) ? this.props.label : this.props.path;
            var hasSlider = (0, _lodash6.default)(min) && (0, _lodash6.default)(min);
            var labelStyle = _labelWidth ? { width: _labelWidth + '%' } : {};
            var sliderStyle = _labelWidth ? { width: 2 * (100 - _labelWidth) / 3 + '%' } : {};
            var inputStyle = _labelWidth ? { width: (hasSlider ? (100 - _labelWidth) / 3 : 100 - _labelWidth) + '%' } : {};
            var sliderPercent = (this.applyConstraints(value) - min) * 100 / (max - min);
            var sliderBarStyle = hasSlider ? { maxWidth: sliderPercent + '%' } : {};
            var sliderClassName = (0, _classnames2.default)('slider', { 'is-active': isSliderActive });
            var className = (0, _classnames2.default)('cr', 'number', { 'has-slider': hasSlider });
            return _react2.default.createElement(
                'li',
                { className: className },
                _react2.default.createElement(
                    'label',
                    { htmlFor: id, style: labelStyle },
                    label
                ),
                _react2.default.createElement(
                    'div',
                    { className: sliderClassName, style: sliderStyle, ref: 'slider', onMouseDown: this.handleMouseDown },
                    _react2.default.createElement('div', { className: 'slider-bar', style: sliderBarStyle })
                ),
                _react2.default.createElement('input', {
                    type: 'text',
                    inputMode: 'numeric',
                    style: inputStyle,
                    id: id,
                    value: value,
                    onChange: this.handleChange,
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur })
            );
        }
    }]);

    return DatNumber;
}(_react2.default.Component);

DatNumber.propTypes = {
    id: _react.PropTypes.string,
    data: _react.PropTypes.object,
    path: _react.PropTypes.string,
    label: _react.PropTypes.string,
    liveUpdate: _react.PropTypes.bool,
    onUpdate: _react.PropTypes.func,
    _onUpdateValue: _react.PropTypes.func,
    _labelWidth: _react.PropTypes.number,
    min: _react.PropTypes.number,
    max: _react.PropTypes.number,
    step: _react.PropTypes.number
};
exports.default = DatNumber;
module.exports = exports['default'];
//# sourceMappingURL=DatNumber.js.map