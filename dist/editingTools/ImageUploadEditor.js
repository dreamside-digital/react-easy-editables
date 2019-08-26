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
    padding: "8px 4px",
    backgroundColor: "#fff",
    borderRadius: "8px"
  },
  image: {
    marginTop: "0.5rem",
    width: "100%",
    maxWidth: "250px"
  },
  button: {
    cursor: "pointer",
    background: _EditablesContext.theme.primaryColor,
    color: '#000000',
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
  },
  label: {
    color: '#000000',
    marginRight: "4px",
    marginTop: '10px'
  },
  input: {
    marginTop: "8px",
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: "rgba(0,0,0,0.8)",
    backgroundColor: "#fff",
    width: "100%"
  }
};

var ImageUploadEditor = function (_React$Component) {
  _inherits(ImageUploadEditor, _React$Component);

  function ImageUploadEditor(props) {
    _classCallCheck(this, ImageUploadEditor);

    var _this = _possibleConstructorReturn(this, (ImageUploadEditor.__proto__ || Object.getPrototypeOf(ImageUploadEditor)).call(this, props));

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

    _this.handleTitleChange = function (event) {
      var title = event.currentTarget.value;

      _this.setState({
        content: _extends({}, _this.state.content, {
          title: title
        })
      }, function () {
        if (_this.props.handleEditorChange) {
          _this.props.handleEditorChange(_this.state.content);
        }
      });
    };

    _this.handleImageChange = function (event) {
      _this.setState({ loading: true, imageError: false, preview: null });

      if (!event.target.files) {
        _this.setState({ loading: false, imageError: false, preview: null });
      }

      var image = event.target.files[0];

      if (!image) {
        _this.setState({
          loading: false
        });
        return;
      }

      if (image.size > _this.props.maxSize) {
        _this.setState({
          imageError: true,
          loading: false
        });
        return;
      }

      _this.props.uploadImage(image).then(function (imageUrl) {
        _this.setState({
          preview: imageUrl,
          loading: false,
          content: _extends({}, _this.state.content, {
            image: image,
            imageSrc: imageUrl
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
      imageError: false
    };
    return _this;
  }

  _createClass(ImageUploadEditor, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          showCaption = _props.showCaption,
          editCaption = _props.editCaption,
          maxSize = _props.maxSize,
          EditorProps = _props.EditorProps;
      var _state$content = this.state.content,
          caption = _state$content.caption,
          imageSrc = _state$content.imageSrc,
          title = _state$content.title;


      return _react2.default.createElement(
        "div",
        { style: styles.container },
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "label",
              { style: styles.button },
              "Select image",
              _react2.default.createElement("input", _extends({
                type: "file",
                accept: "image/gif, image/jpeg, image/png, image/svg",
                hidden: true,
                style: styles.hidden,
                onChange: this.handleImageChange
              }, EditorProps.image))
            )
          ),
          _react2.default.createElement(
            "div",
            null,
            this.state.imageError && _react2.default.createElement(
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
              "div",
              null,
              _react2.default.createElement("img", { src: this.state.preview, alt: "upload preview", style: styles.image })
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "text-left" },
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "label",
              { htmlFor: "title", style: styles.label },
              "Title (alt text)"
            ),
            _react2.default.createElement("input", _extends({
              name: "title",
              value: title,
              style: styles.input,
              onChange: this.handleTitleChange
            }, EditorProps.title))
          ),
          (showCaption || editCaption) && _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "label",
              { htmlFor: "caption", style: styles.label },
              "Caption"
            ),
            _react2.default.createElement("input", _extends({
              name: "caption",
              value: caption,
              style: styles.input,
              onChange: this.handleCaptionChange
            }, EditorProps.caption))
          )
        )
      );
    }
  }]);

  return ImageUploadEditor;
}(_react2.default.Component);

ImageUploadEditor.propTypes = {};


ImageUploadEditor.propTypes = {
  content: _propTypes2.default.shape({ imageSrc: _propTypes2.default.string, caption: _propTypes2.default.string, title: _propTypes2.default.string }).isRequired,
  classes: _propTypes2.default.string,
  EditorProps: _propTypes2.default.shape({ image: _propTypes2.default.object, caption: _propTypes2.default.object, title: _propTypes2.default.object }),
  uploadImage: _propTypes2.default.func
};

ImageUploadEditor.defaultProps = {
  content: { imageSrc: "https://placebear.com/300/200", caption: "", title: "" },
  EditorProps: { image: {}, caption: {}, title: {} },
  uploadImage: function uploadImage(image) {
    return console.log('Implement a Promise to save file and return URL.', image);
  }
};

exports.default = ImageUploadEditor;