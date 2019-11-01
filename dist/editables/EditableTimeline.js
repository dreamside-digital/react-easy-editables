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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TIMELINES = ["timeline1", "timeline2", "timeline3"];
var initialState = {
  timeline1: {
    show: true,
    events: []
  },
  timeline2: {
    show: true,
    events: []
  },
  timeline3: {
    show: true,
    events: []
  },
  orderedEvents: []
};

var EditableTimeline = function (_React$Component) {
  _inherits(EditableTimeline, _React$Component);

  function EditableTimeline(props) {
    _classCallCheck(this, EditableTimeline);

    var _this = _possibleConstructorReturn(this, (EditableTimeline.__proto__ || Object.getPrototypeOf(EditableTimeline)).call(this, props));

    _this.handleSave = function (newContent) {
      _this.props.onSave(newContent);
    };

    _this.state = initialState;
    return _this;
  }

  _createClass(EditableTimeline, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadTimelineData(this.props.content);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.content !== this.props.content) {
        this.setState(_extends({}, initialState), this.loadTimelineData(this.props.content));
      }

      if (prevState.timeline1 !== this.state.timeline1 || prevState.timeline2 !== this.state.timeline2 || prevState.timeline3 !== this.state.timeline3) {
        this.orderEvents();
      }
    }
  }, {
    key: "handleShowTimeline",
    value: function handleShowTimeline(timelineId) {
      var _this2 = this;

      return function () {
        return _this2.setState(_defineProperty({}, timelineId, _extends({}, _this2.state[timelineId], { show: true })));
      };
    }
  }, {
    key: "handleHideTimeline",
    value: function handleHideTimeline(timelineId) {
      var _this3 = this;

      return function () {
        return _this3.setState(_defineProperty({}, timelineId, _extends({}, _this3.state[timelineId], { show: false })));
      };
    }
  }, {
    key: "loadTimelineData",
    value: function loadTimelineData(content) {
      var _this4 = this;

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

            _this4.setState(_defineProperty({}, timelineId, _extends({}, _this4.state[timelineId], { events: events })));
          }).catch(function (err) {
            console.log(err);
          });
        }
      });
    }
  }, {
    key: "orderEvents",
    value: function orderEvents() {
      var _this5 = this;

      var allEvents = [];
      TIMELINES.forEach(function (timelineId) {
        if (_this5.state[timelineId].show) {
          allEvents = allEvents.concat(_this5.state[timelineId].events);
        }
      });

      var orderedEvents = allEvents.sort(function (a, b) {
        return parseInt(a["Year"]) - parseInt(b["Year"]);
      });
      this.setState({ orderedEvents: orderedEvents });
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var orderedEvents = this.state.orderedEvents;


      return _react2.default.createElement(
        _Editable2.default,
        _extends({
          Editor: _TimelineEditor2.default,
          handleSave: this.handleSave,
          content: this.props.content
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
              if (_this6.props.content[timelineId]) {
                return _react2.default.createElement(
                  "p",
                  { className: "" + timelineId, key: timelineId },
                  _react2.default.createElement(
                    "span",
                    { className: "" + (_this6.state[timelineId].show ? "" : "text-muted") },
                    _this6.props.content[timelineId]
                  ),
                  _this6.state[timelineId].show ? _react2.default.createElement(
                    "span",
                    { className: "toggle-timeline text-muted", onClick: _this6.handleHideTimeline(timelineId) },
                    "(hide)"
                  ) : _react2.default.createElement(
                    "span",
                    { className: "toggle-timeline", onClick: _this6.handleShowTimeline(timelineId) },
                    "(show)"
                  )
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
                if (!event['Year']) {
                  return null;
                }

                var year = parseInt(event['Year']);
                var month = Boolean(event['Month']) ? parseInt(event['Month']) + 1 : null;
                var day = Boolean(event['Day']) ? parseInt(event['Day']) : null;

                var endYear = Boolean(event['End Year']) ? parseInt(event['End Year']) : null;
                var endMonth = Boolean(event['End Month']) ? parseInt(event['End Month']) + 1 : null;
                var endDay = Boolean(event['End Day']) ? parseInt(event['End Day']) : null;

                var startDate = new Date(year, month, day);
                var endDate = endYear ? new Date(endYear, endMonth, endDay) : null;
                var highlight = event["Highlight"] == "TRUE" ? "highlight" : "";

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
                        startDate.getFullYear()
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "month" },
                        _react2.default.createElement(
                          "span",
                          null,
                          Boolean(event['Month']) && Boolean(event["Day"]) && "" + startDate.toLocaleDateString('default', { month: 'short', day: 'numeric' }) || Boolean(event['Month']) && "" + startDate.toLocaleDateString('default', { month: 'short' }) || null
                        )
                      ),
                      endDate && _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(
                          "div",
                          { className: "hyphen" },
                          _react2.default.createElement("i", { className: "fas fa-caret-down" })
                        ),
                        _react2.default.createElement(
                          "div",
                          { className: "year" },
                          endDate.getFullYear()
                        ),
                        _react2.default.createElement(
                          "div",
                          { className: "month" },
                          _react2.default.createElement(
                            "span",
                            null,
                            Boolean(event['End Month']) && Boolean(event["End Day"]) && "" + endDate.toLocaleDateString('default', { month: 'short', day: 'numeric' }) || Boolean(event['End Month']) && "" + endDate.toLocaleDateString('default', { month: 'short' }) || null
                          )
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