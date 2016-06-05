"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatButton = function DatButton(_ref) {
    var label = _ref.label;
    var onClick = _ref.onClick;
    return _react2.default.createElement(
        "li",
        { className: "cr button", onClick: onClick },
        _react2.default.createElement(
            "span",
            { className: "label-text" },
            label
        )
    );
};

DatButton.propTypes = {
    label: _react.PropTypes.string,
    onClick: _react.PropTypes.func
};

exports.default = DatButton;
module.exports = exports["default"];
//# sourceMappingURL=DatButton.js.map