import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { Component, cloneElement } from 'react';
import cx from 'classnames';
import isUndefined from 'lodash.isundefined';
import isString from 'lodash.isstring';
import result from 'lodash.result';
import isFinite$1 from 'lodash.isfinite';
import clamp from 'lodash.clamp';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import { EditableInput, ColorWrap, Saturation, Hue } from 'react-color/lib/components/common';
import color from 'react-color/lib/helpers/color';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import cloneDeep from 'lodash.clonedeep';

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var DatString = /*#__PURE__*/function (_Component) {
  _inherits(DatString, _Component);

  var _super = _createSuper(DatString);

  function DatString() {
    var _this;

    _classCallCheck(this, DatString);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var value = event.target.value;
      var liveUpdate = _this.props.liveUpdate;
      if (liveUpdate) _this.update(value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function () {
      document.addEventListener('keydown', _this.handleKeyDown);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      document.removeEventListener('keydown', _this.handleKeyDown);
      window.getSelection().removeAllRanges();
      var liveUpdate = _this.props.liveUpdate;
      if (!liveUpdate) _this.update();
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      var key = event.keyCode || event.which;
      var liveUpdate = _this.props.liveUpdate;
      if (key === 13 && !liveUpdate) _this.update();
    });

    _this.state = {
      value: null
    };
    return _this;
  }

  _createClass(DatString, [{
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
      var labelText = isString(label) ? label : path;
      return /*#__PURE__*/React.createElement("li", {
        className: cx('cr', 'string', className),
        style: style
      }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", {
        className: "label-text",
        style: {
          width: labelWidth
        }
      }, labelText), /*#__PURE__*/React.createElement("input", {
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
      var nextValue = result(nextProps.data, nextProps.path);
      if (prevState.value === nextValue) return null;
      return {
        value: nextValue
      };
    }
  }]);

  return DatString;
}(Component);

_defineProperty(DatString, "defaultProps", {
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$1(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$1()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Slider = /*#__PURE__*/function (_Component) {
  _inherits(Slider, _Component);

  var _super = _createSuper$1(Slider);

  function Slider() {
    var _this;

    _classCallCheck(this, Slider);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "handleMouseDown", function (event) {
      _this.update(event.pageX);

      window.addEventListener('mousemove', _this.handleMouseMove);
      window.addEventListener('mouseup', _this.handleMouseUp);
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseMove", function (event) {
      _this.update(event.pageX);

      event.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseUp", function (event) {
      _this.update(event.pageX, false);

      window.removeEventListener('mousemove', _this.handleMouseMove);
      window.removeEventListener('mouseup', _this.handleMouseUp);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      // do not focus input field on slider click
      event.preventDefault();
    });

    _this.state = {
      value: null
    };
    _this.sliderRef = React.createRef();
    return _this;
  }

  _createClass(Slider, [{
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
      var value = min + clamp(x / w, 0, 1) * (max - min);
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
      var widthBackground = clamp((value - min) * 100 / (max - min), 0, 100);

      var sliderStyles = _objectSpread({
        width: "".concat(width, "%"),
        backgroundSize: "".concat(widthBackground, "% 100%")
      }, style);

      return /*#__PURE__*/React.createElement("span", {
        ref: this.sliderRef,
        className: cx('slider', className),
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
}(Component);

_defineProperty(Slider, "defaultProps", {
  className: null,
  style: null,
  value: null,
  min: null,
  max: null,
  width: null
});

function _createSuper$2(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$2()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var applyConstraints = function applyConstraints(_ref) {
  var value = _ref.value,
      min = _ref.min,
      max = _ref.max,
      step = _ref.step;
  var _ref2 = [isFinite$1(min), isFinite$1(max), isFinite$1(step)],
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

var DatNumber = /*#__PURE__*/function (_Component) {
  _inherits(DatNumber, _Component);

  var _super = _createSuper$2(DatNumber);

  function DatNumber() {
    var _this;

    _classCallCheck(this, DatNumber);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var value = event.target.value;

      _this.update(value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSliderUpdate", function (value) {
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

    _defineProperty(_assertThisInitialized(_this), "update", function (value) {
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

  _createClass(DatNumber, [{
    key: "renderSlider",
    value: function renderSlider(width) {
      var _this$props3 = this.props,
          min = _this$props3.min,
          max = _this$props3.max;
      var value = this.state.value;
      return /*#__PURE__*/React.createElement(Slider, {
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
      var labelText = isString(label) ? label : path;
      var hasSlider = isFinite$1(min) && isFinite$1(max);
      var controlsWidth = 100;
      var inputWidth = hasSlider && disableSlider !== true ? Math.round(controlsWidth / 3) : controlsWidth;
      var sliderWidth = controlsWidth - inputWidth;
      return /*#__PURE__*/React.createElement("li", {
        className: cx('cr', 'number', className),
        style: style
      }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", {
        className: "label-text",
        style: {
          width: labelWidth
        }
      }, labelText), /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inherit',
          width: "calc(100% - ".concat(labelWidth, ")")
        }
      }, hasSlider && disableSlider !== true ? this.renderSlider(sliderWidth) : null, /*#__PURE__*/React.createElement("input", {
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
        value: result(nextProps.data, nextProps.path),
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
}(Component);

_defineProperty(DatNumber, "defaultProps", {
  className: null,
  style: null,
  min: null,
  max: null,
  step: null,
  path: null,
  label: null,
  disableSlider: null
});

function _createSuper$3(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$3()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var DatBoolean = /*#__PURE__*/function (_Component) {
  _inherits(DatBoolean, _Component);

  var _super = _createSuper$3(DatBoolean);

  function DatBoolean(props) {
    var _this;

    _classCallCheck(this, DatBoolean);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var value = event.target.checked;
      var _this$props = _this.props,
          _onUpdateValue = _this$props._onUpdateValue,
          path = _this$props.path;

      _onUpdateValue(path, value);
    });

    _this.state = {
      value: null
    };
    return _this;
  }

  _createClass(DatBoolean, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          path = _this$props2.path,
          label = _this$props2.label,
          labelWidth = _this$props2.labelWidth,
          className = _this$props2.className,
          style = _this$props2.style;
      var labelText = isString(label) ? label : path;
      return /*#__PURE__*/React.createElement("li", {
        className: cx('cr', 'boolean', className),
        style: style
      }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", {
        className: "label-text",
        style: {
          width: labelWidth
        }
      }, labelText), /*#__PURE__*/React.createElement("span", {
        className: "checkbox-container",
        style: {
          width: "calc(100% - ".concat(labelWidth, ")")
        }
      }, /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        checked: this.state.value,
        onChange: this.handleChange
      }))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var nextValue = result(nextProps.data, nextProps.path);
      if (prevState.value === nextValue) return null;
      return {
        value: nextValue
      };
    }
  }]);

  return DatBoolean;
}(Component);

_defineProperty(DatBoolean, "defaultProps", {
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
  return /*#__PURE__*/React.createElement("li", {
    className: cx('cr', 'button', className),
    style: style
  }, /*#__PURE__*/React.createElement("span", {
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

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$4(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$4()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var DatFolder = /*#__PURE__*/function (_Component) {
  _inherits(DatFolder, _Component);

  var _super = _createSuper$4(DatFolder);

  function DatFolder(props) {
    var _this;

    _classCallCheck(this, DatFolder);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
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

  _createClass(DatFolder, [{
    key: "renderChildren",
    value: function renderChildren() {
      // Disable this rule to take title out of the props so nested folders can have unique titles.
      // eslint-disable-next-line no-unused-vars
      var _this$props = this.props,
          children = _this$props.children,
          title = _this$props.title,
          rest = _objectWithoutProperties(_this$props, ["children", "title"]);

      return React.Children.map(children, function (child) {
        return cloneElement(child, _objectSpread$1({}, rest));
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
      return /*#__PURE__*/React.createElement("li", {
        className: cx('folder', {
          closed: closed
        }, className),
        style: style
      }, /*#__PURE__*/React.createElement("div", {
        className: "dg"
      }, /*#__PURE__*/React.createElement("div", {
        className: "title",
        onClick: this.handleClick,
        onKeyPress: this.handleClick,
        role: "button",
        tabIndex: 0
      }, title), /*#__PURE__*/React.createElement("ul", null, this.renderChildren())));
    }
  }]);

  return DatFolder;
}(Component);

_defineProperty(DatFolder, "defaultProps", {
  className: null,
  style: null,
  title: 'Folder',
  closed: true
});

function _createSuper$5(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$5()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var DatSelect = /*#__PURE__*/function (_Component) {
  _inherits(DatSelect, _Component);

  var _super = _createSuper$5(DatSelect);

  function DatSelect() {
    var _this;

    _classCallCheck(this, DatSelect);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
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

  _createClass(DatSelect, [{
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
      var labelText = isString(label) ? label : path;
      return /*#__PURE__*/React.createElement("li", {
        className: cx('cr', 'select', className),
        style: style
      }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", {
        className: "label-text",
        style: {
          width: labelWidth
        }
      }, labelText), /*#__PURE__*/React.createElement("select", {
        value: value,
        onChange: this.handleChange,
        style: {
          width: "calc(100% - ".concat(labelWidth, ")")
        }
      }, options.map(function (item, index) {
        return (
          /*#__PURE__*/
          // eslint-disable-next-line react/no-array-index-key
          React.createElement("option", {
            key: index,
            value: item
          }, optionLabels ? optionLabels[index] : item)
        );
      }))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      var nextValue = result(nextProps.data, nextProps.path);
      return {
        value: nextValue,
        options: nextProps.options
      };
    }
  }]);

  return DatSelect;
}(Component);

_defineProperty(DatSelect, "defaultProps", {
  className: null,
  style: null,
  path: null,
  label: null,
  optionLabels: null,
  onUpdate: function onUpdate() {
    return null;
  }
});

function _createSuper$6(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$6()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Fields = /*#__PURE__*/function (_Component) {
  _inherits(Fields, _Component);

  var _super = _createSuper$6(Fields);

  function Fields() {
    var _this;

    _classCallCheck(this, Fields);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (value, e) {
      var onChange = _this.props.onChange;
      if (color.isValidHex(value)) onChange({
        hex: value,
        source: 'hex'
      }, e);
    });

    return _this;
  }

  _createClass(Fields, [{
    key: "render",
    value: function render() {
      var hex = this.props.hex;
      return /*#__PURE__*/React.createElement("div", {
        className: "flexbox-fix fields-wrap"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flexbox-fix fields"
      }, /*#__PURE__*/React.createElement("div", {
        className: "field"
      }, /*#__PURE__*/React.createElement(EditableInput, {
        value: hex,
        onChange: this.handleChange
      }))));
    }
  }]);

  return Fields;
}(Component);

var Pointer = function Pointer() {
  return /*#__PURE__*/React.createElement("div", {
    className: "pointer"
  });
};

var PointerCircle = function PointerCircle() {
  return /*#__PURE__*/React.createElement("div", {
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
  return /*#__PURE__*/React.createElement("div", {
    className: "picker ".concat(className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "saturation-wrap"
  }, /*#__PURE__*/React.createElement(Saturation, {
    className: "saturation",
    hsl: hsl,
    hsv: hsv,
    pointer: PointerCircle,
    onChange: onChange
  })), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "toggles"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hue-wrap"
  }, /*#__PURE__*/React.createElement(Hue, {
    className: "hue",
    hsl: hsl,
    pointer: Pointer,
    onChange: onChange
  })))), /*#__PURE__*/React.createElement(Fields, {
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
var ColorPicker = ColorWrap(Picker);

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$7(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$7()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var DatColor = /*#__PURE__*/function (_Component) {
  _inherits(DatColor, _Component);

  var _super = _createSuper$7(DatColor);

  function DatColor() {
    var _this;

    _classCallCheck(this, DatColor);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "handleClickColorPicker", function () {
      return _this.setState(function (prevState) {
        return _objectSpread$2({}, prevState, {
          displayColorPicker: !prevState.displayColorPicker
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCloseColorPicker", function () {
      return _this.setState({
        displayColorPicker: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeColor", function (color) {
      var value = isString(color) ? color : color.hex;
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

  _createClass(DatColor, [{
    key: "renderPicker",
    value: function renderPicker() {
      var _this$state = this.state,
          value = _this$state.value,
          displayColorPicker = _this$state.displayColorPicker;
      return !displayColorPicker ? null : /*#__PURE__*/React.createElement("div", {
        className: "popover"
      }, /*#__PURE__*/React.createElement("div", {
        className: "cover",
        onClick: this.handleCloseColorPicker,
        onKeyPress: this.handleCloseColorPicker,
        role: "button",
        tabIndex: 0
      }), /*#__PURE__*/React.createElement(ColorPicker, {
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
      var labelText = isString(label) ? label : path;
      return /*#__PURE__*/React.createElement("li", {
        className: cx('cr', 'color', className),
        style: _objectSpread$2({
          borderLeftColor: "".concat(value)
        }, style)
      }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", {
        className: "label-text",
        style: {
          width: labelWidth
        }
      }, labelText), /*#__PURE__*/React.createElement("div", {
        style: {
          backgroundColor: value,
          width: "calc(100% - ".concat(labelWidth, ")")
        }
      }, /*#__PURE__*/React.createElement("div", {
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
      var nextValue = result(nextProps.data, nextProps.path);
      return _objectSpread$2({}, prevState, {
        value: nextValue
      });
    }
  }]);

  return DatColor;
}(Component);

_defineProperty(DatColor, "defaultProps", {
  className: null,
  style: null,
  path: null,
  label: null
});

function _createSuper$8(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$8()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var DEFAULT_PRESET_KEY = 'Default';

var DatPresets = /*#__PURE__*/function (_Component) {
  _inherits(DatPresets, _Component);

  var _super = _createSuper$8(DatPresets);

  function DatPresets() {
    var _this;

    _classCallCheck(this, DatPresets);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
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

  _createClass(DatPresets, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          path = _this$props2.path,
          label = _this$props2.label,
          labelWidth = _this$props2.labelWidth,
          className = _this$props2.className,
          style = _this$props2.style;
      var options = this.state.options;
      var labelText = isString(label) ? label : path;
      return /*#__PURE__*/React.createElement("li", {
        className: cx('cr', 'presets', className),
        style: style
      }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", {
        className: "label-text",
        style: {
          width: labelWidth
        }
      }, labelText), /*#__PURE__*/React.createElement("select", {
        onChange: this.handleChange,
        style: {
          width: "calc(100% - ".concat(labelWidth, ")")
        }
      }, options.map(function (preset) {
        return Object.keys(preset).map(function (key) {
          return /*#__PURE__*/React.createElement("option", {
            key: key,
            value: JSON.stringify(preset[key])
          }, key);
        });
      }))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var nextValue = cloneDeep(nextProps.data);
      var defaultPreset = prevState.defaultPreset ? prevState.defaultPreset : nextValue;
      return {
        defaultPreset: defaultPreset,
        options: [_defineProperty({}, DEFAULT_PRESET_KEY, defaultPreset)].concat(_toConsumableArray(nextProps.options.filter(function (preset) {
          return Object.keys(preset)[0] !== DEFAULT_PRESET_KEY;
        })))
      };
    }
  }]);

  return DatPresets;
}(Component);

_defineProperty(DatPresets, "defaultProps", {
  className: null,
  style: null,
  path: null
});

function _createSuper$9(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$9()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$9() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var DatGui = /*#__PURE__*/function (_Component) {
  _inherits(DatGui, _Component);

  var _super = _createSuper$9(DatGui);

  function DatGui() {
    var _this;

    _classCallCheck(this, DatGui);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleUpdateValue", function (path, value) {
      var onUpdate = _this.props.onUpdate;
      var dataUpdated = {};
      dataUpdated[path] = value;
      onUpdate(dataUpdated);
    });

    return _this;
  }

  _createClass(DatGui, [{
    key: "renderChildren",
    value: function renderChildren() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          data = _this$props.data;
      return React.Children.toArray(children).map(function (child, i) {
        var liveUpdate = isUndefined(child.props.liveUpdate) ? _this2.props.liveUpdate : child.props.liveUpdate;
        var labelWidth = isUndefined(child.props.labelWidth) ? _this2.props.labelWidth : child.props.labelWidth;
        return cloneElement(child, {
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
      var _this$props2 = this.props,
          style = _this$props2.style,
          className = _this$props2.className;
      var classNames = cx('react-dat-gui', className);
      return /*#__PURE__*/React.createElement("div", {
        className: classNames,
        style: style
      }, /*#__PURE__*/React.createElement("ul", {
        className: "dg main"
      }, this.renderChildren()));
    }
  }]);

  return DatGui;
}(Component);

_defineProperty(DatGui, "defaultProps", {
  liveUpdate: true,
  className: null,
  style: null,
  labelWidth: '40%'
});

export default DatGui;
export { DatBoolean, DatButton, DatColor, DatFolder, DatNumber, DatPresets, DatSelect, DatString };
//# sourceMappingURL=index.es.js.map
