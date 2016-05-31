"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatButton = function (_React$Component) {
    _inherits(DatButton, _React$Component);

    function DatButton(props, context) {
        _classCallCheck(this, DatButton);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DatButton).call(this, props, context));

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(DatButton, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextProps.label !== this.props.label;
        }
    }, {
        key: "handleClick",
        value: function handleClick(event) {}
    }, {
        key: "render",
        value: function render() {
            var label = this.props.label;

            return _react2.default.createElement(
                "li",
                { className: "cr button" },
                _react2.default.createElement(
                    "span",
                    { onClick: this.props.onClick },
                    label
                )
            );
        }
    }]);

    return DatButton;
}(_react2.default.Component);

DatButton.propTypes = {
    label: _react.PropTypes.string,
    onClick: _react.PropTypes.func
};
exports.default = DatButton;
module.exports = exports["default"];
//# sourceMappingURL=DatButton.js.map