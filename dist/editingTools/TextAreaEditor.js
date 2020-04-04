"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = {
  header: {
    display: "flex"
  },
  input: {
    width: "100%",
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: "rgba(0,0,0,0.8)",
    backgroundColor: "#fff"
  }
};

var TextAreaEditor = /*#__PURE__*/function (_React$Component) {
  _inherits(TextAreaEditor, _React$Component);

  var _super = _createSuper(TextAreaEditor);

  function TextAreaEditor(props) {
    var _this;

    _classCallCheck(this, TextAreaEditor);

    _this = _super.call(this, props);
    _this.state = {
      content: _this.props.content
    };

    _this.handleEditorChange = function (event) {
      return _this._handleEditorChange(event);
    };

    return _this;
  }

  _createClass(TextAreaEditor, [{
    key: "_handleEditorChange",
    value: function _handleEditorChange(event) {
      var text = event.currentTarget.value;
      this.setState({
        content: {
          text: text
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var text = Boolean(this.state.content) ? this.state.content.text : '';
      var _this$props = this.props,
          classes = _this$props.classes,
          EditorProps = _this$props.EditorProps;
      return /*#__PURE__*/_react["default"].createElement("textarea", _extends({
        multiline: "true",
        wrap: "on",
        style: styles.input,
        value: text,
        onChange: this.handleEditorChange,
        className: classes
      }, EditorProps));
    }
  }]);

  return TextAreaEditor;
}(_react["default"].Component);

TextAreaEditor.propTypes = {
  content: _propTypes["default"].shape({
    text: _propTypes["default"].string
  }).isRequired,
  classes: _propTypes["default"].string
};
var _default = TextAreaEditor;
exports["default"] = _default;