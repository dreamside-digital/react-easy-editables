"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _EditablesContext = require("./EditablesContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var EditableCollection = /*#__PURE__*/function (_React$Component) {
  _inherits(EditableCollection, _React$Component);

  var _super = _createSuper(EditableCollection);

  function EditableCollection() {
    var _this;

    _classCallCheck(this, EditableCollection);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onSaveItem", function (itemId) {
      return function (item) {
        var newCollection = _objectSpread({}, _this.props.content, _defineProperty({}, itemId, {
          content: _objectSpread({}, _this.props.content[itemId].content, {}, item)
        }));

        _this.props.onSave(newCollection);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onDeleteItem", function (itemId) {
      return function () {
        var newCollection = _objectSpread({}, _this.props.content);

        delete newCollection[itemId];

        _this.props.onSave(newCollection);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onAddItem", function () {
      var newItemId = "".concat(_this.props.name, "-").concat(Date.now());

      var newCollection = _objectSpread({}, _this.props.content, _defineProperty({}, newItemId, _this.props.defaultContent));

      _this.props.onSave(newCollection);
    });

    return _this;
  }

  _createClass(EditableCollection, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          content = _this$props.content,
          Component = _this$props.Component,
          classes = _this$props.classes,
          reverseOrder = _this$props.reverseOrder,
          rest = _objectWithoutProperties(_this$props, ["content", "Component", "classes", "reverseOrder"]);

      var itemsKeys = Object.keys(content);
      var orderedItems = itemsKeys.sort();

      if (reverseOrder) {
        orderedItems = orderedItems.reverse();
      }

      if (!this.context.showEditingControls && itemsKeys.length < 1) {
        return /*#__PURE__*/_react["default"].createElement("p", null, "Coming soon!");
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "collection ".concat(classes)
      }, orderedItems.map(function (key, index) {
        var componentContent = content[key].content;
        return /*#__PURE__*/_react["default"].createElement(Component, {
          key: "collection-item-".concat(key),
          index: index,
          content: componentContent,
          onSave: _this2.onSaveItem(key),
          onDelete: _this2.props.onDeleteItem ? _this2.props.onDeleteItem(key) : _this2.onDeleteItem(key)
        });
      }), this.context.showEditingControls && /*#__PURE__*/_react["default"].createElement("div", {
        className: "row mt-4"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        onClick: this.props.onAddItem || this.onAddItem
      }, /*#__PURE__*/_react["default"].createElement(_Add["default"], null)))));
    }
  }]);

  return EditableCollection;
}(_react["default"].Component);

EditableCollection.contextType = _EditablesContext.EditablesContext;
EditableCollection.propTypes = {
  items: _propTypes["default"].object,
  isEditingPage: _propTypes["default"].bool,
  options: _propTypes["default"].object,
  onSave: _propTypes["default"].func.isRequired,
  onAddItem: _propTypes["default"].func,
  onDeleteItem: _propTypes["default"].func,
  defaultContent: _propTypes["default"].object,
  name: _propTypes["default"].string,
  reverseOrder: _propTypes["default"].bool
};
EditableCollection.defaultProps = {
  items: {},
  isEditingPage: false,
  options: {},
  onSave: function onSave(newCollection) {
    console.log("Implement save function!", newCollection);
  },
  defaultContent: {},
  name: 'item',
  reverseOrder: true
};
var _default = EditableCollection;
exports["default"] = _default;