'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactImageLightbox = require('react-image-lightbox');

var _reactImageLightbox2 = _interopRequireDefault(_reactImageLightbox);

var _Editable = require('./Editable');

var _Editable2 = _interopRequireDefault(_Editable);

var _ImageUploadEditor = require('../editingTools/ImageUploadEditor');

var _ImageUploadEditor2 = _interopRequireDefault(_ImageUploadEditor);

require('react-image-lightbox/style.css');

require('../assets/css/lightbox.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultStyles = {
  imageContainer: {
    width: '100%',
    position: 'relative'
  },
  image: {
    height: 'auto',
    width: '100%'
  }
};

var EditableLightboxImageUpload = function (_React$Component) {
  _inherits(EditableLightboxImageUpload, _React$Component);

  function EditableLightboxImageUpload(props) {
    _classCallCheck(this, EditableLightboxImageUpload);

    var _this = _possibleConstructorReturn(this, (EditableLightboxImageUpload.__proto__ || Object.getPrototypeOf(EditableLightboxImageUpload)).call(this, props));

    _this.handleSave = function (content) {
      _this.props.onSave(content);
    };

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(EditableLightboxImageUpload, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          styles = _props.styles,
          content = _props.content,
          showCaption = _props.showCaption;
      var isOpen = this.state.isOpen;
      var imageSrc = content.imageSrc,
          caption = content.caption,
          title = content.title;


      return _react2.default.createElement(
        _Editable2.default,
        _extends({
          Editor: _ImageUploadEditor2.default,
          handleSave: this.handleSave,
          content: { imageSrc: imageSrc, caption: caption, title: title }
        }, this.props),
        _react2.default.createElement(
          'div',
          { className: 'lightbox-container ' + classes, style: _extends({}, defaultStyles.imageContainer, styles.container) },
          _react2.default.createElement(
            'div',
            { onClick: function onClick() {
                return _this2.setState({ isOpen: true });
              }, className: 'overlay' },
            _react2.default.createElement(
              'span',
              null,
              'Click to view'
            )
          ),
          _react2.default.createElement('img', { src: imageSrc, alt: caption, style: _extends({}, defaultStyles.image, styles.image) }),
          showCaption && _react2.default.createElement(
            'small',
            null,
            caption
          )
        ),
        isOpen && _react2.default.createElement(_reactImageLightbox2.default, {
          mainSrc: imageSrc,
          onCloseRequest: function onCloseRequest() {
            return _this2.setState({ isOpen: false });
          },
          imageCaption: caption,
          imageTitle: title
        })
      );
    }
  }]);

  return EditableLightboxImageUpload;
}(_react2.default.Component);

exports.default = EditableLightboxImageUpload;
;

EditableLightboxImageUpload.propTypes = {
  content: _propTypes2.default.shape({ imageSrc: _propTypes2.default.string, caption: _propTypes2.default.string, title: _propTypes2.default.string }).isRequired,
  onSave: _propTypes2.default.func.isRequired,
  uploadImage: _propTypes2.default.func.isRequired,
  onDelete: _propTypes2.default.func,
  showCaption: _propTypes2.default.bool,
  maxSize: _propTypes2.default.number,
  styles: _propTypes2.default.shape({ container: _propTypes2.default.object, image: _propTypes2.default.object }),
  classes: _propTypes2.default.string,
  EditorProps: _propTypes2.default.shape({ image: _propTypes2.default.object, caption: _propTypes2.default.object, title: _propTypes2.default.object })
};

EditableLightboxImageUpload.defaultProps = {
  content: { imageSrc: "https://www.nomadiclabs.ca/img/logo-03.png", caption: "", title: "" },
  onSave: function onSave(content) {
    return console.log('Implement a function to save changes!', content);
  },
  showCaption: false,
  maxSize: 1024 * 1024 * 2, // 2MB
  styles: { container: {}, image: {} },
  EditorProps: { image: {}, caption: {}, title: {} }
};