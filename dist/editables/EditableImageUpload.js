'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Editable = require('./Editable');

var _Editable2 = _interopRequireDefault(_Editable);

var _ImageUploadEditor = require('../editingTools/ImageUploadEditor');

var _ImageUploadEditor2 = _interopRequireDefault(_ImageUploadEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStyles = {
  imageContainer: {
    width: '100%'
  },
  image: {
    height: 'auto',
    width: '100%'
  }
};

var EditableImageUpload = function EditableImageUpload(props) {
  var handleSave = function handleSave(content) {
    props.onSave(content);
  };

  var classes = props.classes,
      styles = props.styles,
      content = props.content,
      showCaption = props.showCaption;
  var imageSrc = content.imageSrc,
      caption = content.caption;


  return _react2.default.createElement(
    _Editable2.default,
    _extends({
      Editor: _ImageUploadEditor2.default,
      handleSave: handleSave,
      content: { imageSrc: imageSrc, caption: caption }
    }, props),
    _react2.default.createElement(
      'div',
      { className: classes, style: _extends({}, defaultStyles.imageContainer, styles.container) },
      _react2.default.createElement(
        'a',
        { href: imageSrc, target: '_blank' },
        _react2.default.createElement('img', { src: imageSrc, alt: caption, style: _extends({}, defaultStyles.image, styles.image) })
      ),
      showCaption && _react2.default.createElement(
        'small',
        null,
        caption
      )
    )
  );
};

EditableImageUpload.propTypes = {
  content: _propTypes2.default.shape({ imageSrc: _propTypes2.default.string, caption: _propTypes2.default.string }).isRequired,
  onSave: _propTypes2.default.func.isRequired,
  uploadImage: _propTypes2.default.func.isRequired,
  onDelete: _propTypes2.default.func,
  showCaption: _propTypes2.default.bool,
  maxSize: _propTypes2.default.number,
  styles: _propTypes2.default.shape({ container: _propTypes2.default.object, image: _propTypes2.default.object }),
  classes: _propTypes2.default.string,
  EditorProps: _propTypes2.default.shape({ image: _propTypes2.default.object, caption: _propTypes2.default.object })
};

EditableImageUpload.defaultProps = {
  content: { imageSrc: "https://www.nomadiclabs.ca/img/logo-03.png", caption: "" },
  onSave: function onSave(content) {
    return console.log('Implement a function to save changes!', content);
  },
  showCaption: false,
  maxSize: 1024 * 1024 * 2, // 2MB
  styles: { container: {}, image: {} },
  EditorProps: { image: {}, caption: {} }
};

exports.default = EditableImageUpload;