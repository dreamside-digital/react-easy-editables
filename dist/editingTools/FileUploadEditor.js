"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _EditablesContext = require("../editables/EditablesContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var styles = {
  container: {
    padding: "0.5rem",
    backgroundColor: "#fff",
    borderRadius: "8px"
  },
  image: {
    marginTop: "0.5rem",
    maxWidth: "250px"
  },
  button: {
    cursor: "pointer",
    background: _EditablesContext.theme.primaryColor,
    display: "inline-flex",
    padding: "6px 12px",
    fontSize: _EditablesContext.theme.fontSize,
    fontFamily: _EditablesContext.theme.fontFamily,
    borderRadius: "2px",
    "&:hover, &:focus": {
      background: _EditablesContext.theme.primaryColor
    }
  },
  hidden: {
    display: "none !important"
  }
};

var FileUploadEditor = /*#__PURE__*/function (_React$Component) {
  _inherits(FileUploadEditor, _React$Component);

  var _super = _createSuper(FileUploadEditor);

  function FileUploadEditor(props) {
    var _this;

    _classCallCheck(this, FileUploadEditor);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleCaptionChange", function (event) {
      var caption = event.currentTarget.value;

      _this.setState({
        content: _objectSpread({}, _this.state.content, {
          caption: caption
        })
      }, function () {
        if (_this.props.handleEditorChange) {
          _this.props.handleEditorChange(_this.state.content);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFileChange", function (event) {
      _this.setState({
        loading: true,
        fileError: false,
        preview: null
      });

      if (!event.target.files) {
        _this.setState({
          loading: false,
          fileError: false,
          preview: null
        });
      }

      var file = event.target.files[0];

      if (file.size > _this.props.maxSize) {
        _this.setState({
          fileError: true,
          loading: false
        });

        return;
      }

      _this.props.uploadFile(file).then(function (fileUrl) {
        _this.setState({
          preview: fileUrl,
          loading: false,
          content: _objectSpread({}, _this.state.content, {
            file: file,
            filename: file.name,
            filepath: fileUrl
          })
        }, function () {
          if (_this.props.handleEditorChange) {
            _this.props.handleEditorChange(_this.state.content);
          }
        });
      });
    });

    _this.state = {
      loading: false,
      content: _this.props.content,
      fileError: false
    };
    return _this;
  }

  _createClass(FileUploadEditor, [{
    key: "render",
    value: function render() {
      var _this$state$content = this.state.content,
          filetype = _this$state$content.filetype,
          filename = _this$state$content.filename,
          filepath = _this$state$content.filepath;
      var _this$props = this.props,
          classes = _this$props.classes,
          EditorProps = _this$props.EditorProps;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classes,
        style: styles.container
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", {
        style: styles.button
      }, "Select file", /*#__PURE__*/_react["default"].createElement("input", _extends({
        type: "file",
        hidden: true,
        style: styles.hidden,
        onChange: this.handleFileChange
      }, EditorProps)))), /*#__PURE__*/_react["default"].createElement("div", null, this.state.fileError && /*#__PURE__*/_react["default"].createElement("div", null, "Your file is too big. Please select a file less than 2MB."), this.state.loading && /*#__PURE__*/_react["default"].createElement("div", {
        className: "loader-container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "loader"
      }, "loading...")), this.state.preview && /*#__PURE__*/_react["default"].createElement("p", null, filename))));
    }
  }]);

  return FileUploadEditor;
}(_react["default"].Component);

_defineProperty(FileUploadEditor, "propTypes", {});

FileUploadEditor.propTypes = {
  content: _propTypes["default"].shape({
    file: _propTypes["default"].string,
    filename: _propTypes["default"].string,
    filepath: _propTypes["default"].string,
    caption: _propTypes["default"].string
  }).isRequired,
  classes: _propTypes["default"].string,
  EditorProps: _propTypes["default"].shape({
    image: _propTypes["default"].object,
    caption: _propTypes["default"].object
  }),
  uploadFile: _propTypes["default"].func
};
FileUploadEditor.defaultProps = {
  content: {
    file: "",
    filename: "",
    filepath: "/",
    caption: ""
  },
  EditorProps: {},
  uploadFile: function uploadFile(file) {
    return console.log('Implement a Promise to save file and return URL.', file);
  }
};
var _default = FileUploadEditor;
exports["default"] = _default;