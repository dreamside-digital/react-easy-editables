"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactImageLightbox = _interopRequireDefault(require("react-image-lightbox"));

var _Editable = _interopRequireDefault(require("./Editable"));

var _ImageUploadEditor = _interopRequireDefault(require("../editingTools/ImageUploadEditor"));

require("react-image-lightbox/style.css");

require("../assets/css/lightbox.css");

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

var EditableLightboxImageUpload = /*#__PURE__*/function (_React$Component) {
  _inherits(EditableLightboxImageUpload, _React$Component);

  var _super = _createSuper(EditableLightboxImageUpload);

  function EditableLightboxImageUpload(props) {
    var _this;

    _classCallCheck(this, EditableLightboxImageUpload);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleSave", function (content) {
      _this.props.onSave(content);
    });

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(EditableLightboxImageUpload, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          styles = _this$props.styles,
          content = _this$props.content,
          showCaption = _this$props.showCaption;
      var isOpen = this.state.isOpen;
      var imageSrc = content.imageSrc,
          caption = content.caption,
          title = content.title;
      return /*#__PURE__*/_react["default"].createElement(_Editable["default"], _extends({
        Editor: _ImageUploadEditor["default"],
        handleSave: this.handleSave,
        content: {
          imageSrc: imageSrc,
          caption: caption,
          title: title
        },
        isContentClickTarget: false
      }, this.props), /*#__PURE__*/_react["default"].createElement("div", {
        className: "lightbox-container ".concat(classes),
        style: _objectSpread({}, defaultStyles.imageContainer, {}, styles.container)
      }, /*#__PURE__*/_react["default"].createElement("div", {
        onClick: function onClick() {
          return _this2.setState({
            isOpen: true
          });
        },
        className: "overlay"
      }, /*#__PURE__*/_react["default"].createElement("span", null, "Click to view")), /*#__PURE__*/_react["default"].createElement("img", {
        src: imageSrc,
        alt: caption,
        style: _objectSpread({}, defaultStyles.image, {}, styles.image)
      })), showCaption && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("small", null, caption)), isOpen && /*#__PURE__*/_react["default"].createElement(_reactImageLightbox["default"], {
        mainSrc: imageSrc,
        onCloseRequest: function onCloseRequest() {
          return _this2.setState({
            isOpen: false
          });
        },
        imageCaption: caption,
        imageTitle: title
      }));
    }
  }]);

  return EditableLightboxImageUpload;
}(_react["default"].Component);

exports["default"] = EditableLightboxImageUpload;
;
EditableLightboxImageUpload.propTypes = {
  content: _propTypes["default"].shape({
    imageSrc: _propTypes["default"].string,
    caption: _propTypes["default"].string,
    title: _propTypes["default"].string
  }).isRequired,
  onSave: _propTypes["default"].func.isRequired,
  uploadImage: _propTypes["default"].func.isRequired,
  onDelete: _propTypes["default"].func,
  showCaption: _propTypes["default"].bool,
  maxSize: _propTypes["default"].number,
  styles: _propTypes["default"].shape({
    container: _propTypes["default"].object,
    image: _propTypes["default"].object
  }),
  classes: _propTypes["default"].string,
  EditorProps: _propTypes["default"].shape({
    image: _propTypes["default"].object,
    caption: _propTypes["default"].object,
    title: _propTypes["default"].object
  })
};
EditableLightboxImageUpload.defaultProps = {
  content: {
    imageSrc: "https://www.nomadiclabs.ca/img/logo-03.png",
    caption: "",
    title: ""
  },
  onSave: function onSave(content) {
    return console.log('Implement a function to save changes!', content);
  },
  showCaption: false,
  maxSize: 1024 * 1024 * 2,
  // 2MB
  styles: {
    container: {},
    image: {}
  },
  EditorProps: {
    image: {},
    caption: {},
    title: {}
  }
};