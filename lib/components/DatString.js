'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash.result');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.isstring');

var _lodash4 = _interopRequireDefault(_lodash3);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatString = function (_React$Component) {
    _inherits(DatString, _React$Component);

    function DatString(props, context) {
        _classCallCheck(this, DatString);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DatString).call(this, props, context));

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleBlur = _this.handleBlur.bind(_this);
        return _this;
    }

    _createClass(DatString, [{
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

            return (0, _lodash2.default)(props.data, props.path);
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            var _this2 = this;

            var value = event.target.value;
            this.setState({ value: value }, function () {
                _this2.props.liveUpdate && _this2.update();
            });
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus(event) {
            document.addEventListener('keydown', this.handleKeyDown);
        }
    }, {
        key: 'handleBlur',
        value: function handleBlur(event) {
            document.removeEventListener('keydown', this.handleKeyDown);
            window.getSelection().removeAllRanges();
            !this.props.liveUpdate && this.update();
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(event) {
            var key = event.keyCode || event.which;
            if (key === 13) {
                !this.props.liveUpdate && this.update();
            }
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
            var _props = this.props;
            var path = _props.path;
            var label = _props.label;
            var labelWidth = _props.labelWidth;

            var labelText = (0, _lodash4.default)(label) ? label : path;
            return _react2.default.createElement(
                'li',
                { className: 'cr string' },
                _react2.default.createElement(
                    'label',
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: 'label-text', style: { width: labelWidth + '%' } },
                        labelText
                    ),
                    _react2.default.createElement('input', {
                        type: 'text',
                        value: this.state.value,
                        style: { width: 100 - labelWidth + '%' },
                        onChange: this.handleChange,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur })
                )
            );
        }
    }]);

    return DatString;
}(_react2.default.Component);

DatString.propTypes = {
    data: _react.PropTypes.object,
    path: _react.PropTypes.string,
    label: _react.PropTypes.string,
    labelWidth: _react.PropTypes.number,
    liveUpdate: _react.PropTypes.bool,
    onUpdate: _react.PropTypes.func,
    _onUpdateValue: _react.PropTypes.func
};
exports.default = DatString;
module.exports = exports['default'];
//# sourceMappingURL=DatString.js.map