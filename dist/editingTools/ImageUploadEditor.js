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
  },
  label: {
    color: 'inherit',
    marginTop: '10px'
  },
  input: {
    marginLeft: "4px",
    marginTop: "8px",
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: "rgba(0,0,0,0.8)",
    backgroundColor: "#fff"
  }
};

var ImageUploadEditor = function (_React$Component) {
  _inherits(ImageUploadEditor, _React$Component);

  function ImageUploadEditor(props) {
    _classCallCheck(this, ImageUploadEditor);

    var _this = _possibleConstructorReturn(this, (ImageUploadEditor.__proto__ || Object.getPrototypeOf(ImageUploadEditor)).call(this, props));

    _this.state = {
      loading: false,
      content: _this.props.content,
      imageError: false
    };
    _this.handleImageChange = function (image) {
      return _this._handleImageChange(image);
    };
    _this.handleCaptionChange = function (val) {
      return _this._handleCaptionChange(val);
    };
    return _this;
  }

  _createClass(ImageUploadEditor, [{
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
    key: "_handleImageChange",
    value: function _handleImageChange(event) {
      var _this2 = this;

      this.setState({ loading: true, imageError: false, preview: null });

      if (!event.target.files) {
        this.setState({ loading: false, imageError: false, preview: null });
      }

      var image = event.target.files[0];

      console.log('image', image);

      if (image.size > this.props.maxSize) {
        this.setState({
          imageError: true,
          loading: false
        });
        return;
      }

      this.props.uploadImage(image).then(function (imageUrl) {
        console.log('imageUrl', imageUrl);
        _this2.setState({
          preview: imageUrl,
          loading: false,
          content: _extends({}, _this2.state.content, {
            image: image,
            imageSrc: imageUrl
          })
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          showCaption = _props.showCaption,
          maxSize = _props.maxSize,
          classes = _props.classes,
          EditorProps = _props.EditorProps;
      var _state$content = this.state.content,
          caption = _state$content.caption,
          imageSrc = _state$content.imageSrc;


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
              "Select image",
              _react2.default.createElement("input", _extends({
                type: "file",
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
        showCaption && _react2.default.createElement(
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
      );
    }
  }]);

  return ImageUploadEditor;
}(_react2.default.Component);

ImageUploadEditor.propTypes = {};


ImageUploadEditor.propTypes = {
  content: _propTypes2.default.shape({ imageSrc: _propTypes2.default.string, caption: _propTypes2.default.string }).isRequired,
  classes: _propTypes2.default.string,
  EditorProps: _propTypes2.default.shape({ image: _propTypes2.default.object, caption: _propTypes2.default.object }),
  uploadImage: _propTypes2.default.func
};

ImageUploadEditor.defaultProps = {
  content: { imageSrc: "https://placebear.com/300/200", caption: "" },
  EditorProps: { image: {}, caption: {} },
  uploadImage: function uploadImage(image) {
    return console.log('Implement a Promise to save file and return URL.', image);
  }
};

exports.default = ImageUploadEditor;