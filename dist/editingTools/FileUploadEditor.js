"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _EditablesContext = require("../editables/EditablesContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var FileUploadEditor = function (_React$Component) {
  _inherits(FileUploadEditor, _React$Component);

  function FileUploadEditor(props) {
    _classCallCheck(this, FileUploadEditor);

    var _this = _possibleConstructorReturn(this, (FileUploadEditor.__proto__ || Object.getPrototypeOf(FileUploadEditor)).call(this, props));

    _this.handleCaptionChange = function (event) {
      var caption = event.currentTarget.value;

      _this.setState({
        content: _extends({}, _this.state.content, {
          caption: caption
        })
      }, function () {
        if (_this.props.handleEditorChange) {
          _this.props.handleEditorChange(_this.state.content);
        }
      });
    };

    _this.handleFileChange = function (event) {
      _this.setState({ loading: true, fileError: false, preview: null });

      if (!event.target.files) {
        _this.setState({ loading: false, fileError: false, preview: null });
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
          content: _extends({}, _this.state.content, {
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
    };

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
      var _state$content = this.state.content,
          filetype = _state$content.filetype,
          filename = _state$content.filename,
          filepath = _state$content.filepath;
      var _props = this.props,
          classes = _props.classes,
          EditorProps = _props.EditorProps;

      return _react2.default.createElement(
        "div",
        { className: classes, style: styles.container },
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "label",
              { style: styles.button },
              "Select file",
              _react2.default.createElement("input", _extends({
                type: "file",
                hidden: true,
                style: styles.hidden,
                onChange: this.handleFileChange
              }, EditorProps))
            )
          ),
          _react2.default.createElement(
            "div",
            null,
            this.state.fileError && _react2.default.createElement(
              "div",
              null,
              "Your file is too big. Please select a file less than 2MB."
            ),
            this.state.loading && _react2.default.createElement(
              "div",
              { className: "loader-container" },
              _react2.default.createElement(
                "div",
                { className: "loader" },
                "loading..."
              )
            ),
            this.state.preview && _react2.default.createElement(
              "p",
              null,
              filename
            )
          )
        )
      );
    }
  }]);

  return FileUploadEditor;
}(_react2.default.Component);

FileUploadEditor.propTypes = {};


FileUploadEditor.propTypes = {
  content: _propTypes2.default.shape({ file: _propTypes2.default.string, filename: _propTypes2.default.string, filepath: _propTypes2.default.string, caption: _propTypes2.default.string }).isRequired,
  classes: _propTypes2.default.string,
  EditorProps: _propTypes2.default.shape({ image: _propTypes2.default.object, caption: _propTypes2.default.object }),
  uploadFile: _propTypes2.default.func
};

FileUploadEditor.defaultProps = {
  content: { file: "", filename: "", filepath: "/", caption: "" },
  EditorProps: {},
  uploadFile: function uploadFile(file) {
    return console.log('Implement a Promise to save file and return URL.', file);
  }
};

exports.default = FileUploadEditor;