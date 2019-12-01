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

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _reactGsheetsTimeline = require("react-gsheets-timeline");

var _reactGsheetsTimeline2 = _interopRequireDefault(_reactGsheetsTimeline);

var _Editable = require("./Editable");

var _Editable2 = _interopRequireDefault(_Editable);

var _TimelineEditor = require("../editingTools/TimelineEditor");

var _TimelineEditor2 = _interopRequireDefault(_TimelineEditor);

require("react-gsheets-timeline/dist/timeline.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditableTimeline = function (_React$Component) {
  _inherits(EditableTimeline, _React$Component);

  function EditableTimeline(props) {
    _classCallCheck(this, EditableTimeline);

    var _this = _possibleConstructorReturn(this, (EditableTimeline.__proto__ || Object.getPrototypeOf(EditableTimeline)).call(this, props));

    _this.handleSave = function (newContent) {
      _this.props.onSave(newContent);
    };

    _this.state = {};
    return _this;
  }

  _createClass(EditableTimeline, [{
    key: "render",
    value: function render() {
      var orderedEvents = this.state.orderedEvents;

      var sheets = this.props.content.timelines ? this.props.content.timelines.split(",").map(function (s) {
        return s.trim();
      }) : [];

      return _react2.default.createElement(
        _Editable2.default,
        _extends({
          Editor: _TimelineEditor2.default,
          handleSave: this.handleSave,
          content: this.props.content
        }, this.props),
        _react2.default.createElement(_reactGsheetsTimeline2.default, {
          spreadsheetId: this.props.content.spreadsheetId,
          sheets: sheets,
          alignment: this.props.content.alignment,
          interval: this.props.content.interval,
          startYear: this.props.content.startYear,
          apiKey: this.props.apiKey,
          config: this.props.config
        })
      );
    }
  }]);

  return EditableTimeline;
}(_react2.default.Component);

;

EditableTimeline.propTypes = {
  content: _propTypes2.default.shape({
    spreadsheetId: _propTypes2.default.string.isRequired,
    timelines: _propTypes2.default.array.isRequired,
    alignment: _propTypes2.default.string,
    interval: _propTypes2.default.string,
    startYear: _propTypes2.default.string }).isRequired,
  config: _propTypes2.default.object,
  onSave: _propTypes2.default.func.isRequired,
  apiKey: _propTypes2.default.string.isRequired
};

EditableTimeline.defaultProps = {
  content: {
    spreadsheetId: '1vieT0gVrDOHAvAUW8uUWQZj2heeJr8Xg6bZbvKkFFbQ',
    timelines: ["Toy Story Movies"]
  },
  onSave: function onSave(newContent) {
    return console.log('Implement a function to save changes!', newContent);
  }
};

exports.default = EditableTimeline;