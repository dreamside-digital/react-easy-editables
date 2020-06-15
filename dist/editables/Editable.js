"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _EditorWrapper = _interopRequireDefault(require("../editingTools/EditorWrapper"));

var _EditablesContext = require("./EditablesContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var muiTheme = (0, _styles.createMuiTheme)({
  palette: {
    primary: {
      main: _EditablesContext.theme.primaryColor
    }
  },
  typography: {
    fontFamily: _EditablesContext.theme.fontFamily,
    fontSize: _EditablesContext.theme.fontSize
  }
});

var Editable = /*#__PURE__*/function (_React$Component) {
  _inherits(Editable, _React$Component);

  var _super = _createSuper(Editable);

  function Editable(props) {
    var _this;

    _classCallCheck(this, Editable);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "toggleEditing", function (e) {
      e.stopPropagation();

      _this.setState({
        isEditing: !_this.state.isEditing
      });
    });

    _defineProperty(_assertThisInitialized(_this), "startEditing", function (e) {
      e.stopPropagation();

      _this.setState({
        isEditing: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "stopEditing", function (e) {
      e.stopPropagation();

      _this.setState({
        isEditing: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSave", function (e) {
      _this.stopEditing(e);

      _this.props.handleSave(_this.state.editingContent);
    });

    _defineProperty(_assertThisInitialized(_this), "onDelete", function () {
      if (_this.props.onDelete) {
        return function (e) {
          _this.stopEditing(e);

          _this.props.onDelete();
        };
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "onContentChange", function (updatedContent) {
      _this.setState({
        editingContent: updatedContent
      });
    });

    _this.state = {
      isEditing: false,
      editingContent: _this.props.content
    };
    return _this;
  }

  _createClass(Editable, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Editor = _this$props.Editor,
          fullWidth = _this$props.fullWidth,
          disableDelete = _this$props.disableDelete,
          classes = _this$props.classes,
          children = _this$props.children,
          EditorProps = _this$props.EditorProps,
          content = _this$props.content,
          isContentClickTarget = _this$props.isContentClickTarget,
          rest = _objectWithoutProperties(_this$props, ["Editor", "fullWidth", "disableDelete", "classes", "children", "EditorProps", "content", "isContentClickTarget"]);

      var editingContent = this.state.editingContent;

      if (this.context.showEditingControls) {
        return /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
          theme: muiTheme
        }, /*#__PURE__*/_react["default"].createElement(_EditorWrapper["default"], {
          theme: this.context.theme,
          isEditing: this.state.isEditing,
          toggleEditing: this.toggleEditing,
          startEditing: this.startEditing,
          stopEditing: this.stopEditing,
          handleDelete: this.onDelete(),
          onSave: this.onSave,
          fullWidth: fullWidth,
          disableDelete: disableDelete,
          isContentClickTarget: isContentClickTarget
        }, this.state.isEditing && /*#__PURE__*/_react["default"].createElement(Editor, _extends({
          content: editingContent,
          onContentChange: this.onContentChange,
          classes: classes,
          EditorProps: EditorProps
        }, rest)), (!this.state.isEditing || !!this.props.showChildren) && children));
      } else {
        return children;
      }
    }
  }]);

  return Editable;
}(_react["default"].Component);

Editable.contextType = _EditablesContext.EditablesContext;
Editable.propTypes = {
  Editor: _propTypes["default"].func.isRequired,
  EditorProps: _propTypes["default"].object,
  handleSave: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].node.isRequired,
  onDelete: _propTypes["default"].func,
  content: _propTypes["default"].object,
  fullWidth: _propTypes["default"].bool,
  disableDelete: _propTypes["default"].bool,
  classes: _propTypes["default"].string,
  isContentClickTarget: _propTypes["default"].bool
};
var _default = Editable;
exports["default"] = _default;