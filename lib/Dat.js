'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DatButton = exports.DatBoolean = exports.DatNumber = exports.DatString = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DatString = require('./components/DatString');

Object.defineProperty(exports, 'DatString', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_DatString).default;
    }
});

var _DatNumber = require('./components/DatNumber');

Object.defineProperty(exports, 'DatNumber', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_DatNumber).default;
    }
});

var _DatBoolean = require('./components/DatBoolean');

Object.defineProperty(exports, 'DatBoolean', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_DatBoolean).default;
    }
});

var _DatButton = require('./components/DatButton');

Object.defineProperty(exports, 'DatButton', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_DatButton).default;
    }
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash.set');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.clonedeep');

var _lodash4 = _interopRequireDefault(_lodash3);

var _lodash5 = require('lodash.isundefined');

var _lodash6 = _interopRequireDefault(_lodash5);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dat = function (_React$Component) {
    _inherits(Dat, _React$Component);

    function Dat(props, context) {
        _classCallCheck(this, Dat);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dat).call(this, props, context));

        _this.handleUpdateValue = _this.handleUpdateValue.bind(_this);
        return _this;
    }

    _createClass(Dat, [{
        key: 'handleUpdateValue',
        value: function handleUpdateValue(path, value) {
            var _props = this.props;
            var data = _props.data;
            var onUpdate = _props.onUpdate;

            var dataUpdated = (0, _lodash2.default)((0, _lodash4.default)(data), path, value);
            onUpdate(dataUpdated);
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var _this2 = this;

            var _props2 = this.props;
            var children = _props2.children;
            var data = _props2.data;
            var labelWidth = _props2.labelWidth;

            return _react2.default.Children.toArray(children).map(function (child, i) {
                var liveUpdate = (0, _lodash6.default)(child.props.liveUpdate) ? _this2.props.liveUpdate : child.props.liveUpdate;
                return (0, _react.cloneElement)(child, {
                    id: '__react_dat_gui_' + i + '__',
                    key: i,
                    data: data,
                    liveUpdate: liveUpdate,
                    _labelWidth: labelWidth,
                    _onUpdateValue: _this2.handleUpdateValue
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props$style = this.props.style;
            var style = _props$style === undefined ? {} : _props$style;

            var className = (0, _classnames2.default)('react-dat-gui', this.props.className);
            return _react2.default.createElement(
                'div',
                { className: className, style: style },
                _react2.default.createElement(
                    'ul',
                    { className: 'dg main' },
                    this.renderChildren()
                )
            );
        }
    }]);

    return Dat;
}(_react2.default.Component);

Dat.propTypes = {
    data: _react.PropTypes.object.isRequired,
    children: _react.PropTypes.node.isRequired,
    onUpdate: _react.PropTypes.func.isRequired,
    liveUpdate: _react.PropTypes.bool,
    className: _react.PropTypes.string,
    style: _react.PropTypes.object,
    labelWidth: _react.PropTypes.number
};
Dat.defaultProps = {
    liveUpdate: true
};
exports.default = Dat;
//# sourceMappingURL=Dat.js.map