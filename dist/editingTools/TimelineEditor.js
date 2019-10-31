"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _TextField = require("@material-ui/core/TextField");

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var TimelineEditor = function (_React$Component) {
  _inherits(TimelineEditor, _React$Component);

  function TimelineEditor(props) {
    _classCallCheck(this, TimelineEditor);

    var _this = _possibleConstructorReturn(this, (TimelineEditor.__proto__ || Object.getPrototypeOf(TimelineEditor)).call(this, props));

    _this.state = { content: _this.props.content };
    _this.handleSpreadsheetIdChange = function (event) {
      return _this._handleSpreasheetIdChange(event);
    };
    _this.handleSheetIdChange = function (id) {
      return function (event) {
        return _this._handleSheetIdChange(id, event);
      };
    };
    return _this;
  }

  _createClass(TimelineEditor, [{
    key: "_handleSpreasheetIdChange",
    value: function _handleSpreasheetIdChange(event) {
      var spreadsheetId = event.currentTarget.value;
      this.setState({ content: _extends({}, this.state.content, { spreadsheetId: spreadsheetId }) });
    }
  }, {
    key: "_handleSheetIdChange",
    value: function _handleSheetIdChange(id, event) {
      var timelineTitle = event.currentTarget.value;
      this.setState({ content: _extends({}, this.state.content, _defineProperty({}, id, timelineTitle)) });
    }
  }, {
    key: "render",
    value: function render() {
      var spreadsheetId = Boolean(this.state.content) ? this.state.content.spreadsheetId : '';
      var timeline1 = Boolean(this.state.content) ? this.state.content.timeline1 : '';
      var timeline2 = Boolean(this.state.content) ? this.state.content.timeline2 : '';
      var timeline3 = Boolean(this.state.content) ? this.state.content.timeline3 : '';

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_TextField2.default, {
          label: "Google spreadsheet ID",
          style: styles.input,
          value: spreadsheetId,
          onChange: this.handleSpreadsheetIdChange,
          helperText: "Enter the ID of the Google Spreadsheet (the part of the url that comes after https://docs.google.com/spreadsheets/d/)",
          placeholder: "1PtqsSJq3wl09Q_IW-pgxSiXSLMYxDcrOeda7AMCM5Js",
          required: true
        }),
        _react2.default.createElement(_TextField2.default, {
          label: "First timeline",
          style: styles.input,
          value: timeline1,
          onChange: this.handleSheetIdChange('timeline1'),
          helperText: "Enter the title of the timeline sheet tab",
          placeholder: "Colonial timeline",
          required: true
        }),
        _react2.default.createElement(_TextField2.default, {
          label: "Second timeline (optional)",
          style: styles.input,
          value: timeline2,
          onChange: this.handleSheetIdChange('timeline2'),
          helperText: "Enter the title of the timeline sheet tab",
          placeholder: "Colonial timeline"
        }),
        _react2.default.createElement(_TextField2.default, {
          label: "Third timeline (optional)",
          style: styles.input,
          value: timeline3,
          onChange: this.handleSheetIdChange('timeline3'),
          helperText: "Enter the title of the timeline sheet tab",
          placeholder: "Colonial timeline"
        })
      );
    }
  }]);

  return TimelineEditor;
}(_react2.default.Component);

TimelineEditor.propTypes = {};
exports.default = TimelineEditor;