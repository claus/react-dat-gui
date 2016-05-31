'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatBoolean = function (_React$Component) {
    _inherits(DatBoolean, _React$Component);

    function DatBoolean(props, context) {
        _classCallCheck(this, DatBoolean);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DatBoolean).call(this, props, context));

        _this.handleChange = _this.handleChange.bind(_this);
        _this.state = {
            value: 0,
            isSliderActive: false
        };
        return _this;
    }

    _createClass(DatBoolean, [{
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
            return nextProps.id !== this.props.id || nextProps.path !== this.props.path || nextProps.label !== this.props.label || nextState.value !== this.state.value;
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

            return (0, _lodash.result)(props.data, props.path);
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            var _this2 = this;

            this.setState({ value: event.target.checked }, function () {
                _this2.update();
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
        key: 'render',
        value: function render() {
            var id = this.props.id;
            var value = this.state.value;

            var label = (0, _lodash.isString)(this.props.label) ? this.props.label : this.props.path;
            return _react2.default.createElement(
                'li',
                { className: 'cr boolean' },
                _react2.default.createElement(
                    'label',
                    { htmlFor: id },
                    label
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'checkbox-wrapper' },
                    _react2.default.createElement('input', {
                        type: 'checkbox',
                        id: id,
                        checked: value,
                        onChange: this.handleChange }),
                    _react2.default.createElement(
                        'div',
                        { className: 'checkbox' },
                        _react2.default.createElement(
                            'svg',
                            { className: 'checkmark', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 50 50' },
                            _react2.default.createElement('path', { d: 'M0,0L50,50M50,0L0,50Z' })
                        )
                    )
                )
            );
        }
    }]);

    return DatBoolean;
}(_react2.default.Component);

DatBoolean.propTypes = {
    id: _react.PropTypes.string,
    data: _react.PropTypes.object,
    path: _react.PropTypes.string,
    label: _react.PropTypes.string,
    onUpdate: _react.PropTypes.func,
    _onUpdateValue: _react.PropTypes.func
};
exports.default = DatBoolean;
module.exports = exports['default'];
//# sourceMappingURL=DatBoolean.js.map