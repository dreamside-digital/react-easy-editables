"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

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

    _this.state = {
      loading: false,
      content: _this.props.content,
      fileError: false
    };
    _this.handleFileChange = function (file) {
      return _this._handleFileChange(file);
    };
    _this.handleCaptionChange = function (val) {
      return _this._handleCaptionChange(val);
    };
    return _this;
  }

  _createClass(FileUploadEditor, [{
    key: "_handleCaptionChange",
    value: function _handleCaptionChange(event) {
      var caption = event.currentTarget.value;
      this.setState({
        content: _extends({}, this.state.content, {
          caption: caption
        })
      });
    }
  }, {
    key: "_handleFileChange",
    value: function _handleFileChange(event) {
      this.setState({ loading: true, fileError: false, preview: null });

      if (!event.target.files) {
        this.setState({ loading: false, fileError: false, preview: null });
      }

      var file = event.target.files[0];

      if (file.size > this.props.maxSize) {
        this.setState({
          fileError: true,
          loading: false
        });
        return;
      }
      var fileUrl = URL.createObjectURL(file);

      this.setState({
        preview: fileUrl,
        loading: false,
        content: _extends({}, this.state.content, {
          file: file,
          filename: file.name,
          filepath: fileUrl
        })
      });
    }
  }, {
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
exports.default = FileUploadEditor;