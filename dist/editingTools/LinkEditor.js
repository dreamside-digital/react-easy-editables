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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  label: {
    color: 'inherit',
    marginRight: "4px"
  },
  input: {
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: "rgba(0,0,0,0.8)",
    backgroundColor: "#fff",
    maxWidth: "100%"
  }
};

var LinkEditor = function (_React$Component) {
  _inherits(LinkEditor, _React$Component);

  function LinkEditor(props) {
    _classCallCheck(this, LinkEditor);

    var _this = _possibleConstructorReturn(this, (LinkEditor.__proto__ || Object.getPrototypeOf(LinkEditor)).call(this, props));

    _this.handleAnchorChange = function (event) {
      var newContent = { anchor: event.currentTarget.value };

      _this.setState({
        content: _extends({}, _this.state.content, newContent)
      }, function () {
        if (_this.props.handleEditorChange) {
          _this.props.handleEditorChange(_this.state.content);
        }
      });
    };

    _this.handleLinkChange = function (event) {
      var newContent = { link: event.currentTarget.value };

      if (_this.props.handleEditorChange) {
        _this.props.handleEditorChange(newContent);
      }

      _this.setState({
        content: _extends({}, _this.state.content, newContent)
      }, function () {
        if (_this.props.handleEditorChange) {
          _this.props.handleEditorChange(_this.state.content);
        }
      });
    };

    _this.state = { content: _this.props.content };
    return _this;
  }

  _createClass(LinkEditor, [{
    key: 'render',
    value: function render() {
      var _state$content = this.state.content,
          anchor = _state$content.anchor,
          link = _state$content.link;
      var _props = this.props,
          classes = _props.classes,
          EditorProps = _props.EditorProps;


      return _react2.default.createElement(
        'div',
        { className: classes },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'label',
            { htmlFor: 'anchor' },
            'Link text'
          ),
          _react2.default.createElement('input', _extends({
            name: 'anchor',
            value: anchor,
            onChange: this.handleAnchorChange,
            style: styles.input
          }, EditorProps.anchor))
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'label',
            { htmlFor: 'link' },
            'Link path'
          ),
          _react2.default.createElement('input', _extends({
            name: 'link',
            value: link,
            onChange: this.handleLinkChange,
            style: styles.input
          }, EditorProps.link))
        )
      );
    }
  }]);

  return LinkEditor;
}(_react2.default.Component);

LinkEditor.propTypes = {};
;

LinkEditor.propTypes = {
  content: _propTypes2.default.shape({ anchor: _propTypes2.default.string, link: _propTypes2.default.string }).isRequired,
  classes: _propTypes2.default.string,
  EditorProps: _propTypes2.default.shape({ anchor: _propTypes2.default.object, link: _propTypes2.default.object })
};

LinkEditor.defaultProps = {
  content: { anchor: '', link: '' },
  classes: "",
  EditorProps: { anchor: {}, link: {} }
};

exports.default = LinkEditor;