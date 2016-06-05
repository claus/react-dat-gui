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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function toNumber(value) {
    var float = parseFloat(value);
    return isNaN(float) ? 0 : float;
}

var DatNumber = function (_React$Component) {
    _inherits(DatNumber, _React$Component);

    function DatNumber(props, context) {
        _classCallCheck(this, DatNumber);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DatNumber).call(this, props, context));

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleFocus = _this.handleFocus.bind(_this);
        _this.handleBlur = _this.handleBlur.bind(_this);
        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        _this.handleSliderUpdate = _this.handleSliderUpdate.bind(_this);
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
        key: 'getValue',
        value: function getValue() {
            var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

            return this.applyConstraints((0, _lodash4.default)(props.data, props.path));
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

            value = toNumber(value);
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
        key: 'handleSliderUpdate',
        value: function handleSliderUpdate(value, isLive) {
            var _this4 = this;

            value = this.applyConstraints(value);
            this.setState({ value: value }, function () {
                if (!isLive || _this4.props.liveUpdate) {
                    _this4.update();
                }
            });
        }
    }, {
        key: 'update',
        value: function update() {
            var value = this.state.value;

            this.props._onUpdateValue && this.props._onUpdateValue(this.props.path, value);
            this.props.onUpdate && this.props.onUpdate(value);
        }
    }, {
        key: 'renderSlider',
        value: function renderSlider(width) {
            return _react2.default.createElement(Slider, {
                value: this.state.value,
                min: this.props.min,
                max: this.props.max,
                width: width,
                onUpdate: this.handleSliderUpdate });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props;
            var min = _props2.min;
            var max = _props2.max;
            var path = _props2.path;
            var label = _props2.label;
            var labelWidth = _props2.labelWidth;

            var labelText = (0, _lodash8.default)(label) ? label : path;
            var hasSlider = (0, _lodash6.default)(min) && (0, _lodash6.default)(max);
            var controlsWidth = 100 - labelWidth;
            var inputWidth = hasSlider ? Math.round(controlsWidth / 3) : controlsWidth;
            var sliderWidth = controlsWidth - inputWidth;
            return _react2.default.createElement(
                'li',
                { className: 'cr number' },
                _react2.default.createElement(
                    'label',
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: 'label-text', style: { width: labelWidth + '%' } },
                        labelText
                    ),
                    hasSlider ? this.renderSlider(sliderWidth) : null,
                    _react2.default.createElement('input', {
                        type: 'text',
                        inputMode: 'numeric',
                        value: this.state.value,
                        style: { width: inputWidth + '%' },
                        onChange: this.handleChange,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur })
                )
            );
        }
    }]);

    return DatNumber;
}(_react2.default.Component);

DatNumber.propTypes = {
    min: _react.PropTypes.number,
    max: _react.PropTypes.number,
    step: _react.PropTypes.number,
    data: _react.PropTypes.object,
    path: _react.PropTypes.string,
    label: _react.PropTypes.string,
    labelWidth: _react.PropTypes.number,
    liveUpdate: _react.PropTypes.bool,
    onUpdate: _react.PropTypes.func,
    _onUpdateValue: _react.PropTypes.func
};

var Slider = function (_React$Component2) {
    _inherits(Slider, _React$Component2);

    function Slider(props, context) {
        _classCallCheck(this, Slider);

        var _this5 = _possibleConstructorReturn(this, Object.getPrototypeOf(Slider).call(this, props, context));

        _this5.handleMouseDown = _this5.handleMouseDown.bind(_this5);
        _this5.handleMouseMove = _this5.handleMouseMove.bind(_this5);
        _this5.handleMouseUp = _this5.handleMouseUp.bind(_this5);
        return _this5;
    }

    _createClass(Slider, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState({
                value: toNumber(this.props.value)
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                value: toNumber(nextProps.value)
            });
        }
    }, {
        key: 'handleMouseDown',
        value: function handleMouseDown(event) {
            this.update(event.pageX);
            window.addEventListener('mousemove', this.handleMouseMove);
            window.addEventListener('mouseup', this.handleMouseUp);
        }
    }, {
        key: 'handleMouseMove',
        value: function handleMouseMove(event) {
            this.update(event.pageX);
            event.preventDefault();
        }
    }, {
        key: 'handleMouseUp',
        value: function handleMouseUp(event) {
            this.update(event.pageX, false);
            window.removeEventListener('mousemove', this.handleMouseMove);
            window.removeEventListener('mouseup', this.handleMouseUp);
        }
    }, {
        key: 'handleClick',
        value: function handleClick(event) {
            // do not focus input field on slider click
            event.preventDefault();
        }
    }, {
        key: 'update',
        value: function update(pageX) {
            var isLive = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
            var _props3 = this.props;
            var min = _props3.min;
            var max = _props3.max;
            var onUpdate = _props3.onUpdate;

            var rect = _reactDom2.default.findDOMNode(this).getBoundingClientRect();
            var x = pageX - rect.left;
            var w = rect.right - rect.left;
            var value = min + (0, _lodash2.default)(x / w, 0, 1) * (max - min);
            this.setState({ value: value }, function () {
                onUpdate(value, isLive);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props4 = this.props;
            var min = _props4.min;
            var max = _props4.max;
            var width = _props4.width;

            var widthBackground = (0, _lodash2.default)((this.state.value - min) * 100 / (max - min), 0, 100);
            var style = {
                width: width + '%',
                backgroundSize: widthBackground + '% 100%'
            };
            return _react2.default.createElement('span', {
                className: 'slider',
                style: style,
                onClick: this.handleClick,
                onMouseDown: this.handleMouseDown });
        }
    }]);

    return Slider;
}(_react2.default.Component);

Slider.propTypes = {
    value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    min: _react.PropTypes.number,
    max: _react.PropTypes.number,
    width: _react.PropTypes.number,
    onUpdate: _react.PropTypes.func
};
exports.default = DatNumber;
module.exports = exports['default'];
//# sourceMappingURL=DatNumber.js.map