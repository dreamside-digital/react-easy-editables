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

var _Editable = require("./Editable");

var _Editable2 = _interopRequireDefault(_Editable);

var _TimelineEditor = require("../editingTools/TimelineEditor");

var _TimelineEditor2 = _interopRequireDefault(_TimelineEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TIMELINES = ["timeline1", "timeline2", "timeline3"];

var EditableTimeline = function (_React$Component) {
  _inherits(EditableTimeline, _React$Component);

  function EditableTimeline(props) {
    _classCallCheck(this, EditableTimeline);

    var _this = _possibleConstructorReturn(this, (EditableTimeline.__proto__ || Object.getPrototypeOf(EditableTimeline)).call(this, props));

    _this.handleSave = function (newContent) {
      _this.props.onSave(newContent);
    };

    _this.state = {
      events: []
    };
    return _this;
  }

  _createClass(EditableTimeline, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadTimelineData(this.props.content);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      console.log("prevProps.content", prevProps.content);
      console.log("this.props.content", this.props.content);
      if (prevProps.content !== this.props.content) {
        this.setState({ events: [] }, this.loadTimelineData(this.props.content));
      }
    }
  }, {
    key: "loadTimelineData",
    value: function loadTimelineData(content) {
      var _this2 = this;

      var spreadsheetId = content.spreadsheetId;

      TIMELINES.forEach(function (timelineId) {
        if (Boolean(content[timelineId])) {
          var timelineTitle = content[timelineId];
          var url = "https://sheets.googleapis.com/v4/spreadsheets/" + spreadsheetId + "/values/" + timelineTitle + "?key=" + process.env.GATSBY_GOOGLE_API_KEY;
          _axios2.default.get(url).then(function (res) {
            var headings = res.data.values[0];
            var rows = [].concat(_toConsumableArray(res.data.values));
            rows.shift();
            var events = rows.map(function (row) {
              var item = { timelineTitle: timelineTitle, timelineId: timelineId };
              headings.map(function (heading, index) {
                item[heading] = row[index];
              });
              return item;
            });

            _this2.setState({ events: [].concat(_toConsumableArray(_this2.state.events)).concat(events) });
          }).catch(function (err) {
            console.log(err);
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props$content = this.props.content,
          spreadsheetId = _props$content.spreadsheetId,
          timeline1 = _props$content.timeline1,
          timeline2 = _props$content.timeline2,
          timeline3 = _props$content.timeline3;
      var events = this.state.events;

      var orderedEvents = events.sort(function (a, b) {
        return parseInt(a["Year"]) - parseInt(b["Year"]);
      });

      return _react2.default.createElement(
        _Editable2.default,
        _extends({
          Editor: _TimelineEditor2.default,
          handleSave: this.handleSave,
          content: { spreadsheetId: spreadsheetId, timeline1: timeline1, timeline2: timeline2, timeline3: timeline3 }
        }, this.props),
        _react2.default.createElement(
          "div",
          { className: "nl-timeline" },
          _react2.default.createElement(
            "fig",
            { className: "legend" },
            _react2.default.createElement(
              "h3",
              null,
              "Legend"
            ),
            TIMELINES.map(function (timelineId) {
              if (_this3.props.content[timelineId]) {
                return _react2.default.createElement(
                  "p",
                  { className: timelineId },
                  _this3.props.content[timelineId]
                );
              }
            })
          ),
          _react2.default.createElement(
            "fig",
            { className: "timeline" },
            _react2.default.createElement(
              "h3",
              null,
              "Events"
            ),
            _react2.default.createElement(
              "ul",
              null,
              orderedEvents.map(function (event, index) {
                var startDate = new Date(parseInt(event['Year']), parseInt(event['Month']) + 1, parseInt(event['Day']));
                var endDate = new Date(event['End Year'], event['End Month'] + 1, event['End Day']);
                var highlight = event["Highlight"] == "yes" ? "highlight" : "";

                return _react2.default.createElement(
                  "li",
                  { key: "event-" + index, className: "" + event["timelineId"] },
                  _react2.default.createElement(
                    "div",
                    { className: "event " + highlight },
                    _react2.default.createElement(
                      "div",
                      { className: "dates" },
                      _react2.default.createElement(
                        "div",
                        { className: "year" },
                        event['Year']
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "month" },
                        _react2.default.createElement(
                          "span",
                          null,
                          event['Month'] && "" + startDate.toLocaleDateString('default', { month: 'short', day: 'numeric' })
                        )
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "info" },
                      _react2.default.createElement(
                        "div",
                        { className: "headline" },
                        _react2.default.createElement(
                          "strong",
                          null,
                          event['Headline']
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "description" },
                        event['Text']
                      )
                    )
                  )
                );
              })
            )
          )
        )
      );
    }
  }]);

  return EditableTimeline;
}(_react2.default.Component);

;

EditableTimeline.propTypes = {
  content: _propTypes2.default.shape({ spreadsheetId: _propTypes2.default.string.isRequired, timeline1: _propTypes2.default.string.isRequired, timeline2: _propTypes2.default.string, timeline3: _propTypes2.default.string }).isRequired,
  onSave: _propTypes2.default.func.isRequired
};

EditableTimeline.defaultProps = {
  content: {
    spreadsheetId: '1PtqsSJq3wl09Q_IW-pgxSiXSLMYxDcrOeda7AMCM5Js',
    timeline1: "Colonial and company timeline"
  },
  onSave: function onSave(newContent) {
    return console.log('Implement a function to save changes!', newContent);
  }
};

exports.default = EditableTimeline;