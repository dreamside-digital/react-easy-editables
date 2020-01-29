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

var _EditorWrapper = require("../editingTools/EditorWrapper");

var _EditorWrapper2 = _interopRequireDefault(_EditorWrapper);

var _EditablesContext = require("./EditablesContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Editable = function (_React$Component) {
  _inherits(Editable, _React$Component);

  function Editable(props) {
    _classCallCheck(this, Editable);

    var _this = _possibleConstructorReturn(this, (Editable.__proto__ || Object.getPrototypeOf(Editable)).call(this, props));

    _this.toggleEditing = function (e) {
      e.stopPropagation();
      _this.setState({ isEditing: !_this.state.isEditing });
    };

    _this.handleSave = function (e) {
      _this.toggleEditing(e);
      _this.props.handleSave(_this.editor.state.content);
    };

    _this.state = { isEditing: false };
    return _this;
  }

  _createClass(Editable, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          Editor = _props.Editor,
          onDelete = _props.onDelete,
          fullWidth = _props.fullWidth,
          disableDelete = _props.disableDelete,
          content = _props.content,
          classes = _props.classes,
          children = _props.children,
          EditorProps = _props.EditorProps,
          rest = _objectWithoutProperties(_props, ["Editor", "onDelete", "fullWidth", "disableDelete", "content", "classes", "children", "EditorProps"]);

      if (this.context.showEditingControls) {
        return _react2.default.createElement(
          _EditorWrapper2.default,
          {
            theme: this.context.theme,
            isEditing: this.state.isEditing,
            toggleEditing: this.toggleEditing,
            handleDelete: onDelete,
            handleSave: this.handleSave,
            fullWidth: fullWidth,
            disableDelete: disableDelete
          },
          this.state.isEditing && _react2.default.createElement(Editor, _extends({
            ref: function ref(editor) {
              return _this2.editor = editor;
            },
            content: content,
            classes: classes,
            EditorProps: EditorProps
          }, rest)),
          (!this.state.isEditing || !!this.props.showChildren) && children
        );
      } else {
        return children;
      }
    }
  }]);

  return Editable;
}(_react2.default.Component);

Editable.contextType = _EditablesContext.EditablesContext;

Editable.propTypes = {
  Editor: _propTypes2.default.func.isRequired,
  EditorProps: _propTypes2.default.object,
  handleSave: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.node.isRequired,
  onDelete: _propTypes2.default.func,
  content: _propTypes2.default.object,
  fullWidth: _propTypes2.default.bool,
  disableDelete: _propTypes2.default.bool,
  classes: _propTypes2.default.string
};

exports.default = Editable;