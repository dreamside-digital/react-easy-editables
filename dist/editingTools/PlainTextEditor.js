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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  header: {
    display: "flex"
  },
  input: {
    width: "100%",
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: "rgba(0,0,0,0.8)",
    backgroundColor: "#fff"
  }
};

var PlainTextEditor = function (_React$Component) {
  _inherits(PlainTextEditor, _React$Component);

  function PlainTextEditor(props) {
    _classCallCheck(this, PlainTextEditor);

    var _this = _possibleConstructorReturn(this, (PlainTextEditor.__proto__ || Object.getPrototypeOf(PlainTextEditor)).call(this, props));

    _this.state = { content: _this.props.content };
    _this.handleEditorChange = function (event) {
      return _this._handleEditorChange(event);
    };
    return _this;
  }

  _createClass(PlainTextEditor, [{
    key: "_handleEditorChange",
    value: function _handleEditorChange(event) {
      var text = event.currentTarget.value;
      this.setState({ content: { text: text } });
    }
  }, {
    key: "render",
    value: function render() {
      var text = Boolean(this.state.content) ? this.state.content.text : '';
      var _props = this.props,
          classes = _props.classes,
          EditorProps = _props.EditorProps;


      return _react2.default.createElement("input", _extends({
        type: "text",
        style: styles.input,
        value: text,
        onChange: this.handleEditorChange,
        className: classes
      }, EditorProps));
    }
  }]);

  return PlainTextEditor;
}(_react2.default.Component);

PlainTextEditor.propTypes = {
  content: _propTypes2.default.shape({ text: _propTypes2.default.string }).isRequired,
  classes: _propTypes2.default.string
};

exports.default = PlainTextEditor;