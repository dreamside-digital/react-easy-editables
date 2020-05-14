"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Container = _interopRequireDefault(require("@material-ui/core/Container"));

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
  inner: {
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  image: {
    marginTop: "0.5rem",
    maxWidth: "250px"
  },
  button: {
    cursor: "pointer",
    background: _EditablesContext.theme.primaryColor,
    border: "1px solid ".concat(_EditablesContext.theme.primaryColor),
    color: '#000000',
    display: "inline-flex",
    padding: "6px 12px",
    fontSize: "".concat(_EditablesContext.theme.fontSize, "px"),
    fontFamily: _EditablesContext.theme.fontFamily,
    borderRadius: "2px",
    "&:hover, &:focus": {
      background: _EditablesContext.theme.primaryColor
    }
  },
  hidden: {
    display: "none !important"
  },
  preview: {
    margin: '5px',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
    wordBreak: 'break-word',
    hyphens: 'auto',
    color: "#000"
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

      _this.props.onContentChange(_objectSpread({}, _this.props.content, {
        caption: caption
      }));
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

      if (!file) {
        _this.setState({
          loading: false
        });

        return;
      }

      if (file.size > _this.props.maxSize) {
        _this.setState({
          fileError: true,
          loading: false
        });

        return;
      }

      _this.props.uploadFile(file).then(function (fileUrl) {
        _this.props.onContentChange(_objectSpread({}, _this.props.content, {
          file: file,
          filename: file.name,
          filepath: fileUrl
        }));

        _this.setState({
          preview: fileUrl,
          loading: false
        });
      });
    });

    _this.state = {
      loading: false,
      fileError: false
    };
    return _this;
  }

  _createClass(FileUploadEditor, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          EditorProps = _this$props.EditorProps,
          content = _this$props.content,
          mimetypes = _this$props.mimetypes;
      var filetype = content.filetype,
          filename = content.filename,
          filepath = content.filepath;
      return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        spacing: 1,
        style: styles.container
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 12
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.inner
      }, /*#__PURE__*/_react["default"].createElement("label", {
        style: this.state.preview ? _objectSpread({}, styles.button, {
          background: '#fff'
        }) : styles.button
      }, this.state.preview ? 'Change file' : 'Select file', /*#__PURE__*/_react["default"].createElement("input", _extends({
        type: "file",
        hidden: true,
        style: styles.hidden,
        accept: mimetypes,
        onChange: this.handleFileChange
      }, EditorProps))), this.state.fileError && /*#__PURE__*/_react["default"].createElement("div", null, "Your file is too big. Please select a file less than ".concat(parseInt(this.props.maxSize) / (1024 * 1024), "MB.")), this.state.loading && /*#__PURE__*/_react["default"].createElement("div", {
        className: "loader-container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "loader"
      }, "loading...")), this.state.preview && /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.preview
      }, filename))));
    }
  }]);

  return FileUploadEditor;
}(_react["default"].Component);

FileUploadEditor.propTypes = {
  content: _propTypes["default"].shape({
    file: _propTypes["default"].object,
    filename: _propTypes["default"].string,
    filepath: _propTypes["default"].string,
    caption: _propTypes["default"].string
  }).isRequired,
  uploadFile: _propTypes["default"].func.isRequired,
  onContentChange: _propTypes["default"].func.isRequired,
  classes: _propTypes["default"].string,
  EditorProps: _propTypes["default"].object,
  mimetypes: _propTypes["default"].string
};
FileUploadEditor.defaultProps = {
  content: {
    file: {},
    filename: "",
    filepath: "/",
    caption: ""
  },
  EditorProps: {},
  uploadFile: function uploadFile(file) {
    return console.log('Implement a Promise to save file and return URL.', file);
  },
  onContentChange: function onContentChange(url) {
    return console.log('Implement a function to save content changes.', url);
  },
  mimetypes: "application/pdf,application/msword,application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.openxmlformats-officedocument.presentationml.slideshow, .csv"
};
var _default = FileUploadEditor;
exports["default"] = _default;