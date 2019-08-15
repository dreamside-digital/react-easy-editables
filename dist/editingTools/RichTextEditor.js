'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRte = require('react-rte');

var _reactRte2 = _interopRequireDefault(_reactRte);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  input: {
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: "rgba(0,0,0,0.8)",
    backgroundColor: "#fff"
  }
};

var RichTextEditor = function (_React$Component) {
  _inherits(RichTextEditor, _React$Component);

  function RichTextEditor(props) {
    _classCallCheck(this, RichTextEditor);

    var _this = _possibleConstructorReturn(this, (RichTextEditor.__proto__ || Object.getPrototypeOf(RichTextEditor)).call(this, props));

    _this.initializeEditorState = function () {
      var text = Boolean(_this.state.content) ? _this.state.content.text : '';
      var editorValue = (0, _reactRte.createValueFromString)(text, 'html');
      _this.setState({ editorValue: editorValue });
    };

    _this.onChange = function (editorValue) {
      var text = editorValue.toString('html');

      _this.setState({ editorValue: editorValue, content: { text: text } }, function () {
        if (_this.props.handleEditorChange) {
          _this.props.handleEditorChange(_this.state.content);
        }
      });
    };

    _this.state = { content: _this.props.content, editorValue: null };
    return _this;
  }

  _createClass(RichTextEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initializeEditorState();
    }
  }, {
    key: 'render',
    value: function render() {
      var editorValue = this.state.editorValue;
      var _props = this.props,
          classes = _props.classes,
          EditorProps = _props.EditorProps,
          placeholder = _props.placeholder;


      if (editorValue) {
        return _react2.default.createElement(
          'div',
          { style: styles.input, className: classes },
          _react2.default.createElement(_reactRte2.default, _extends({
            placeholder: placeholder,
            value: editorValue,
            onChange: this.onChange
          }, EditorProps))
        );
      }

      return _react2.default.createElement('div', null);
    }
  }]);

  return RichTextEditor;
}(_react2.default.Component);

;

exports.default = RichTextEditor;