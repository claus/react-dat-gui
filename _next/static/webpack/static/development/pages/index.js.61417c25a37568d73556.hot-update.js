webpackHotUpdate("static/development/pages/index.js",{

/***/ "../dist/index.es.js":
/*!***************************!*\
  !*** ../dist/index.es.js ***!
  \***************************/
/*! exports provided: default, DatBoolean, DatButton, DatColor, DatFolder, DatNumber, DatPresets, DatSelect, DatString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatBoolean", function() { return DatBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatButton", function() { return DatButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatColor", function() { return DatColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatFolder", function() { return DatFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatNumber", function() { return DatNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatPresets", function() { return DatPresets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatSelect", function() { return DatSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatString", function() { return DatString; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash.clonedeep */ "../node_modules/lodash.clonedeep/index.js");
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_isundefined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash.isundefined */ "../node_modules/lodash.isundefined/index.js");
/* harmony import */ var lodash_isundefined__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_isundefined__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash.set */ "../node_modules/lodash.set/index.js");
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_isstring__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash.isstring */ "../node_modules/lodash.isstring/index.js");
/* harmony import */ var lodash_isstring__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_isstring__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_result__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash.result */ "../node_modules/lodash.result/index.js");
/* harmony import */ var lodash_result__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_result__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash_isfinite__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash.isfinite */ "../node_modules/lodash.isfinite/index.js");
/* harmony import */ var lodash_isfinite__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_isfinite__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash.clamp */ "../node_modules/lodash.clamp/index.js");
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash_clamp__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "../node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_color_lib_components_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-color/lib/components/common */ "../node_modules/react-color/lib/components/common/index.js");
/* harmony import */ var react_color_lib_components_common__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_color_lib_components_common__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_color_lib_helpers_color__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-color/lib/helpers/color */ "../node_modules/react-color/lib/helpers/color.js");
/* harmony import */ var react_color_lib_helpers_color__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_color_lib_helpers_color__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_19__);





















var DatString =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(DatString, _Component);

  function DatString() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DatString);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(DatString).call(this));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleChange", function (event) {
      var value = event.target.value;
      var liveUpdate = _this.props.liveUpdate;
      if (liveUpdate) _this.update(value);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleFocus", function () {
      document.addEventListener('keydown', _this.handleKeyDown);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleBlur", function () {
      document.removeEventListener('keydown', _this.handleKeyDown);
      window.getSelection().removeAllRanges();
      var liveUpdate = _this.props.liveUpdate;
      if (!liveUpdate) _this.update();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleKeyDown", function (event) {
      var key = event.keyCode || event.which;
      var liveUpdate = _this.props.liveUpdate;
      if (key === 13 && !liveUpdate) _this.update();
    });

    _this.state = {
      value: null
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DatString, [{
    key: "update",
    value: function update(value) {
      var _this$props = this.props,
          _onUpdateValue = _this$props._onUpdateValue,
          onUpdate = _this$props.onUpdate,
          path = _this$props.path;

      _onUpdateValue(path, value);

      onUpdate(value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          path = _this$props2.path,
          label = _this$props2.label,
          labelWidth = _this$props2.labelWidth,
          className = _this$props2.className,
          style = _this$props2.style;
      var labelText = lodash_isstring__WEBPACK_IMPORTED_MODULE_12___default()(label) ? label : path;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('cr', 'string', className),
        style: style
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "label-text",
        style: {
          width: labelWidth
        }
      }, labelText), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        style: {
          width: "calc(100% - ".concat(labelWidth, ")")
        },
        type: "text",
        value: this.state.value,
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var nextValue = lodash_result__WEBPACK_IMPORTED_MODULE_13___default()(nextProps.data, nextProps.path);
      if (prevState.value === nextValue) return null;
      return {
        value: nextValue
      };
    }
  }]);

  return DatString;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(DatString, "defaultProps", {
  className: null,
  style: null,
  path: null,
  label: null,
  onUpdate: function onUpdate() {
    return null;
  }
});

/* eslint-disable no-restricted-globals */
function toNumber(value) {
  var _float = parseFloat(value);

  return isNaN(_float) ? 0 : _float;
}
/**
 * Polyfill for isInteger.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger#Polyfill
 * @param {number} value
 * @return {bool}
 */

var isInteger = Number.isInteger || // eslint-disable-next-line func-names
function (value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Slider =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Slider, _Component);

  function Slider() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Slider);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Slider).call(this));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleMouseDown", function (event) {
      _this.update(event.pageX);

      window.addEventListener('mousemove', _this.handleMouseMove);
      window.addEventListener('mouseup', _this.handleMouseUp);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleMouseMove", function (event) {
      _this.update(event.pageX);

      event.preventDefault();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleMouseUp", function (event) {
      _this.update(event.pageX, false);

      window.removeEventListener('mousemove', _this.handleMouseMove);
      window.removeEventListener('mouseup', _this.handleMouseUp);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleClick", function (event) {
      // do not focus input field on slider click
      event.preventDefault();
    });

    _this.state = {
      value: null
    };
    _this.sliderRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Slider, [{
    key: "update",
    value: function update(pageX) {
      var isLive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var _this$props = this.props,
          min = _this$props.min,
          max = _this$props.max,
          onUpdate = _this$props.onUpdate;
      var rect = this.sliderRef.current.getBoundingClientRect();
      var x = pageX - rect.left;
      var w = rect.right - rect.left;
      var value = min + lodash_clamp__WEBPACK_IMPORTED_MODULE_15___default()(x / w, 0, 1) * (max - min);
      this.setState({
        value: value
      }, function () {
        onUpdate(value, isLive);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          min = _this$props2.min,
          max = _this$props2.max,
          width = _this$props2.width,
          className = _this$props2.className,
          style = _this$props2.style;
      var value = this.state.value;
      var widthBackground = lodash_clamp__WEBPACK_IMPORTED_MODULE_15___default()((value - min) * 100 / (max - min), 0, 100);

      var sliderStyles = _objectSpread({
        width: "".concat(width, "%"),
        backgroundSize: "".concat(widthBackground, "% 100%")
      }, style);

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        ref: this.sliderRef,
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('slider', className),
        style: sliderStyles,
        onClick: this.handleClick,
        onMouseDown: this.handleMouseDown,
        role: "slider",
        tabIndex: 0,
        "aria-valuenow": value,
        "aria-valuemin": min,
        "aria-valuemax": max
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var nextValue = toNumber(nextProps.value);
      if (prevState.value === nextValue) return null;
      return {
        value: nextValue
      };
    }
  }]);

  return Slider;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Slider, "defaultProps", {
  className: null,
  style: null,
  value: null,
  min: null,
  max: null,
  width: null
});

var applyConstraints = function applyConstraints(_ref) {
  var value = _ref.value,
      min = _ref.min,
      max = _ref.max,
      step = _ref.step;
  var _ref2 = [lodash_isfinite__WEBPACK_IMPORTED_MODULE_14___default()(min), lodash_isfinite__WEBPACK_IMPORTED_MODULE_14___default()(max), lodash_isfinite__WEBPACK_IMPORTED_MODULE_14___default()(step)],
      hasMin = _ref2[0],
      hasMax = _ref2[1],
      hasStep = _ref2[2];
  var decimalPlaces = hasStep && !isInteger(step) ? step.toString().split('.')[1].length : 0;
  var isMin = false,
      isMax = false;
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

  return value.toFixed(decimalPlaces);
};

var DatNumber =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(DatNumber, _Component);

  function DatNumber() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DatNumber);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(DatNumber).call(this));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleChange", function (event) {
      var value = event.target.value;

      _this.update(value);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleSliderUpdate", function (value) {
      var _this$props = _this.props,
          min = _this$props.min,
          max = _this$props.max,
          step = _this$props.step;

      _this.update(applyConstraints({
        value: value,
        min: min,
        max: max,
        step: step
      }));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "update", function (value) {
      var _this$props2 = _this.props,
          _onUpdateValue = _this$props2._onUpdateValue,
          path = _this$props2.path;

      _onUpdateValue(path, toNumber(value));
    });

    _this.state = {
      value: null
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DatNumber, [{
    key: "renderSlider",
    value: function renderSlider(width) {
      var _this$props3 = this.props,
          min = _this$props3.min,
          max = _this$props3.max;
      var value = this.state.value;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Slider, {
        value: value,
        min: min,
        max: max,
        width: width,
        onUpdate: this.handleSliderUpdate
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          min = _this$props4.min,
          max = _this$props4.max,
          path = _this$props4.path,
          label = _this$props4.label,
          labelWidth = _this$props4.labelWidth,
          step = _this$props4.step,
          disableSlider = _this$props4.disableSlider,
          className = _this$props4.className,
          style = _this$props4.style;
      var labelText = lodash_isstring__WEBPACK_IMPORTED_MODULE_12___default()(label) ? label : path;
      var hasSlider = lodash_isfinite__WEBPACK_IMPORTED_MODULE_14___default()(min) && lodash_isfinite__WEBPACK_IMPORTED_MODULE_14___default()(max);
      var controlsWidth = 100;
      var inputWidth = hasSlider && disableSlider !== true ? Math.round(controlsWidth / 3) : controlsWidth;
      var sliderWidth = controlsWidth - inputWidth;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('cr', 'number', className),
        style: style
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "label-text",
        style: {
          width: labelWidth
        }
      }, labelText), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        style: {
          display: 'inherit',
          width: "calc(100% - ".concat(labelWidth, ")")
        }
      }, hasSlider && disableSlider !== true ? this.renderSlider(sliderWidth) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "number",
        step: step,
        min: min,
        max: max,
        inputMode: "numeric",
        value: this.state.value,
        style: {
          width: "".concat(inputWidth, "%")
        },
        onChange: this.handleChange
      }))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      var min = nextProps.min,
          max = nextProps.max,
          step = nextProps.step;
      var nextValue = applyConstraints({
        value: lodash_result__WEBPACK_IMPORTED_MODULE_13___default()(nextProps.data, nextProps.path),
        min: min,
        max: max,
        step: step
      });
      return {
        value: nextValue
      };
    }
  }]);

  return DatNumber;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(DatNumber, "defaultProps", {
  className: null,
  style: null,
  min: null,
  max: null,
  step: null,
  path: null,
  label: null,
  disableSlider: null
});

var DatBoolean =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(DatBoolean, _Component);

  function DatBoolean(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DatBoolean);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(DatBoolean).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleChange", function (event) {
      var value = event.target.checked;
      var _this$props = _this.props,
          _onUpdateValue = _this$props._onUpdateValue,
          path = _this$props.path;

      _onUpdateValue(path, value);
    });

    console.log('jey');
    _this.state = {
      value: null
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DatBoolean, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          path = _this$props2.path,
          label = _this$props2.label,
          labelWidth = _this$props2.labelWidth,
          className = _this$props2.className,
          style = _this$props2.style;
      var labelText = lodash_isstring__WEBPACK_IMPORTED_MODULE_12___default()(label) ? label : path;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('cr', 'boolean', className),
        style: style
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "label-text",
        style: {
          width: labelWidth
        }
      }, labelText), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "checkbox-container",
        style: {
          width: "calc(100% - ".concat(labelWidth, ")")
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        checked: this.state.value,
        onChange: this.handleChange
      }))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var nextValue = lodash_result__WEBPACK_IMPORTED_MODULE_13___default()(nextProps.data, nextProps.path);
      if (prevState.value === nextValue) return null;
      return {
        value: nextValue
      };
    }
  }]);

  return DatBoolean;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(DatBoolean, "defaultProps", {
  className: null,
  style: null,
  path: null,
  label: null
});

var DatButton = function DatButton(_ref) {
  var label = _ref.label,
      onClick = _ref.onClick,
      className = _ref.className,
      style = _ref.style;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('cr', 'button', className),
    style: style
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
    className: "label-text",
    onClick: onClick,
    onKeyPress: onClick,
    role: "button",
    tabIndex: 0
  }, label));
};

DatButton.defaultProps = {
  className: null,
  style: null,
  label: null
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DatFolder =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(DatFolder, _Component);

  function DatFolder(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DatFolder);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(DatFolder).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleClick", function () {
      return _this.setState(function (prevState) {
        return {
          closed: !prevState.closed
        };
      });
    });

    _this.state = {
      closed: props.closed
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DatFolder, [{
    key: "renderChildren",
    value: function renderChildren() {
      // Disable this rule to take title out of the props so nested folders can have unique titles.
      // eslint-disable-next-line no-unused-vars
      var _this$props = this.props,
          children = _this$props.children,
          title = _this$props.title,
          rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_16___default()(_this$props, ["children", "title"]);

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.Children.map(children, function (child) {
        return Object(react__WEBPACK_IMPORTED_MODULE_7__["cloneElement"])(child, _objectSpread$1({}, rest));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var closed = this.state.closed;
      var _this$props2 = this.props,
          title = _this$props2.title,
          className = _this$props2.className,
          style = _this$props2.style;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('folder', {
          closed: closed
        }, className),
        style: style
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "dg"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "title",
        onClick: this.handleClick,
        onKeyPress: this.handleClick,
        role: "button",
        tabIndex: 0
      }, title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", null, this.renderChildren())));
    }
  }]);

  return DatFolder;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(DatFolder, "defaultProps", {
  className: null,
  style: null,
  title: 'Folder',
  closed: true
});

var DatSelect =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(DatSelect, _Component);

  function DatSelect() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DatSelect);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(DatSelect).call(this));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleChange", function (event) {
      var value = event.target.value;
      var _this$props = _this.props,
          liveUpdate = _this$props.liveUpdate,
          _onUpdateValue = _this$props._onUpdateValue,
          onUpdate = _this$props.onUpdate,
          path = _this$props.path;

      _onUpdateValue(path, value);

      if (liveUpdate) onUpdate(value);
    });

    _this.state = {
      value: null,
      options: null
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DatSelect, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          path = _this$props2.path,
          label = _this$props2.label,
          labelWidth = _this$props2.labelWidth,
          optionLabels = _this$props2.optionLabels,
          className = _this$props2.className,
          style = _this$props2.style;
      var _this$state = this.state,
          value = _this$state.value,
          options = _this$state.options;
      var labelText = lodash_isstring__WEBPACK_IMPORTED_MODULE_12___default()(label) ? label : path;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('cr', 'select', className),
        style: style
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "label-text",
        style: {
          width: labelWidth
        }
      }, labelText), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        value: value,
        onChange: this.handleChange,
        style: {
          width: "calc(100% - ".concat(labelWidth, ")")
        }
      }, options.map(function (item, index) {
        return (// eslint-disable-next-line react/no-array-index-key
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            key: index,
            value: item
          }, optionLabels ? optionLabels[index] : item)
        );
      }))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      var nextValue = lodash_result__WEBPACK_IMPORTED_MODULE_13___default()(nextProps.data, nextProps.path);
      return {
        value: nextValue,
        options: nextProps.options
      };
    }
  }]);

  return DatSelect;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(DatSelect, "defaultProps", {
  className: null,
  style: null,
  path: null,
  label: null,
  optionLabels: null,
  onUpdate: function onUpdate() {
    return null;
  }
});

var Fields =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Fields, _Component);

  function Fields() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Fields);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Fields)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleChange", function (value, e) {
      var onChange = _this.props.onChange;
      if (react_color_lib_helpers_color__WEBPACK_IMPORTED_MODULE_18___default.a.isValidHex(value)) onChange({
        hex: value,
        source: 'hex'
      }, e);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Fields, [{
    key: "render",
    value: function render() {
      var hex = this.props.hex;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "flexbox-fix fields-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "flexbox-fix fields"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "field"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_color_lib_components_common__WEBPACK_IMPORTED_MODULE_17__["EditableInput"], {
        value: hex,
        onChange: this.handleChange
      }))));
    }
  }]);

  return Fields;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var Pointer = function Pointer() {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "pointer"
  });
};

var PointerCircle = function PointerCircle() {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "pointer-circle"
  });
};

var Picker = function Picker(_ref) {
  var onChange = _ref.onChange,
      hsl = _ref.hsl,
      hsv = _ref.hsv,
      hex = _ref.hex,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "picker ".concat(className)
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "saturation-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_color_lib_components_common__WEBPACK_IMPORTED_MODULE_17__["Saturation"], {
    className: "saturation",
    hsl: hsl,
    hsv: hsv,
    pointer: PointerCircle,
    onChange: onChange
  })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "body"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "controls"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "toggles"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "hue-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_color_lib_components_common__WEBPACK_IMPORTED_MODULE_17__["Hue"], {
    className: "hue",
    hsl: hsl,
    pointer: Pointer,
    onChange: onChange
  })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Fields, {
    hex: hex,
    onChange: onChange
  })));
};

Picker.defaultProps = {
  hsl: null,
  hsv: null,
  hex: null,
  className: null,
  disableAlpha: false
};
var ColorPicker = Object(react_color_lib_components_common__WEBPACK_IMPORTED_MODULE_17__["ColorWrap"])(Picker);

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DatColor =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(DatColor, _Component);

  function DatColor() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DatColor);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(DatColor).call(this));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleClickColorPicker", function () {
      return _this.setState(function (prevState) {
        return _objectSpread$2({}, prevState, {
          displayColorPicker: !prevState.displayColorPicker
        });
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleCloseColorPicker", function () {
      return _this.setState({
        displayColorPicker: false
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleChangeColor", function (color) {
      var value = lodash_isstring__WEBPACK_IMPORTED_MODULE_12___default()(color) ? color : color.hex;
      var _this$props = _this.props,
          _onUpdateValue = _this$props._onUpdateValue,
          path = _this$props.path;

      _onUpdateValue(path, value);
    });

    _this.state = {
      value: null,
      displayColorPicker: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DatColor, [{
    key: "renderPicker",
    value: function renderPicker() {
      var _this$state = this.state,
          value = _this$state.value,
          displayColorPicker = _this$state.displayColorPicker;
      return !displayColorPicker ? null : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "popover"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "cover",
        onClick: this.handleCloseColorPicker,
        onKeyPress: this.handleCloseColorPicker,
        role: "button",
        tabIndex: 0
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ColorPicker, {
        color: value,
        onChange: this.handleChangeColor
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          path = _this$props2.path,
          label = _this$props2.label,
          labelWidth = _this$props2.labelWidth,
          className = _this$props2.className,
          style = _this$props2.style;
      var value = this.state.value;
      var labelText = lodash_isstring__WEBPACK_IMPORTED_MODULE_12___default()(label) ? label : path;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('cr', 'color', className),
        style: _objectSpread$2({
          borderLeftColor: "".concat(value)
        }, style)
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "label-text",
        style: {
          width: labelWidth
        }
      }, labelText), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          backgroundColor: value,
          width: "calc(100% - ".concat(labelWidth, ")")
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "swatch",
        onClick: this.handleClickColorPicker,
        onKeyPress: this.handleClickColorPicker,
        role: "button",
        tabIndex: 0
      }, value), this.renderPicker())));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var nextValue = lodash_result__WEBPACK_IMPORTED_MODULE_13___default()(nextProps.data, nextProps.path);
      return _objectSpread$2({}, prevState, {
        value: nextValue
      });
    }
  }]);

  return DatColor;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(DatColor, "defaultProps", {
  className: null,
  style: null,
  path: null,
  label: null
});

var DEFAULT_PRESET_KEY = 'Default';

var DatPresets =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(DatPresets, _Component);

  function DatPresets() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DatPresets);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(DatPresets).call(this));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleChange", function (event) {
      var value = JSON.parse(event.target.value);
      var _this$props = _this.props,
          liveUpdate = _this$props.liveUpdate,
          onUpdate = _this$props.onUpdate;
      if (liveUpdate) onUpdate(value);
    });

    _this.state = {
      defaultPreset: null,
      options: null
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DatPresets, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          path = _this$props2.path,
          label = _this$props2.label,
          labelWidth = _this$props2.labelWidth,
          className = _this$props2.className,
          style = _this$props2.style;
      var options = this.state.options;
      var labelText = lodash_isstring__WEBPACK_IMPORTED_MODULE_12___default()(label) ? label : path;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('cr', 'presets', className),
        style: style
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "label-text",
        style: {
          width: labelWidth
        }
      }, labelText), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        onChange: this.handleChange,
        style: {
          width: "calc(100% - ".concat(labelWidth, ")")
        }
      }, options.map(function (preset) {
        return Object.keys(preset).map(function (key) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            key: key,
            value: JSON.stringify(preset[key])
          }, key);
        });
      }))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var nextValue = lodash_clonedeep__WEBPACK_IMPORTED_MODULE_8___default()(nextProps.data);
      var defaultPreset = prevState.defaultPreset ? prevState.defaultPreset : nextValue;
      return {
        defaultPreset: defaultPreset,
        options: [_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()({}, DEFAULT_PRESET_KEY, defaultPreset)].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_19___default()(nextProps.options.filter(function (preset) {
          return Object.keys(preset)[0] !== DEFAULT_PRESET_KEY;
        })))
      };
    }
  }]);

  return DatPresets;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(DatPresets, "defaultProps", {
  className: null,
  style: null,
  path: null
});

var DatGui =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(DatGui, _Component);

  function DatGui() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DatGui);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(DatGui)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleUpdateValue", function (path, value) {
      var _this$props = _this.props,
          data = _this$props.data,
          onUpdate = _this$props.onUpdate;
      var dataUpdated = lodash_set__WEBPACK_IMPORTED_MODULE_11___default()(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_8___default()(data), path, value);
      onUpdate(dataUpdated);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DatGui, [{
    key: "renderChildren",
    value: function renderChildren() {
      var _this2 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          data = _this$props2.data;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.Children.toArray(children).map(function (child, i) {
        var liveUpdate = lodash_isundefined__WEBPACK_IMPORTED_MODULE_10___default()(child.props.liveUpdate) ? _this2.props.liveUpdate : child.props.liveUpdate;
        var labelWidth = lodash_isundefined__WEBPACK_IMPORTED_MODULE_10___default()(child.props.labelWidth) ? _this2.props.labelWidth : child.props.labelWidth;
        return Object(react__WEBPACK_IMPORTED_MODULE_7__["cloneElement"])(child, {
          key: i,
          data: data,
          liveUpdate: liveUpdate,
          labelWidth: labelWidth,
          _onUpdateValue: _this2.handleUpdateValue
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          style = _this$props3.style,
          className = _this$props3.className;
      var classNames = classnames__WEBPACK_IMPORTED_MODULE_9___default()('react-dat-gui', className);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classNames,
        style: style
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "dg main"
      }, this.renderChildren()));
    }
  }]);

  return DatGui;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(DatGui, "defaultProps", {
  liveUpdate: true,
  className: null,
  style: null,
  labelWidth: '40%'
});

/* harmony default export */ __webpack_exports__["default"] = (DatGui);

//# sourceMappingURL=index.es.js.map


/***/ })

})
//# sourceMappingURL=index.js.61417c25a37568d73556.hot-update.js.map