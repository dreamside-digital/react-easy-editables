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

var _Editable = require("./Editable");

var _Editable2 = _interopRequireDefault(_Editable);

var _KnightTimelineEditor = require("../editingTools/KnightTimelineEditor");

var _KnightTimelineEditor2 = _interopRequireDefault(_KnightTimelineEditor);

require("../assets/css/timeline.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KnightTimeline = function (_React$Component) {
  _inherits(KnightTimeline, _React$Component);

  function KnightTimeline(props) {
    _classCallCheck(this, KnightTimeline);

    var _this = _possibleConstructorReturn(this, (KnightTimeline.__proto__ || Object.getPrototypeOf(KnightTimeline)).call(this, props));

    _this.loadScript = function () {
      var existingScript = document.getElementById('timeline-script');

      if (!existingScript) {
        var script = document.createElement('script');
        script.src = 'https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js';
        script.id = 'timeline-script';
        document.body.appendChild(script);

        script.onload = function () {
          _this.setState({ scriptLoaded: true }, function () {
            _this.instantiateTimeline();
          });
        };
      } else {
        _this.setState({ scriptLoaded: true }, function () {
          _this.instantiateTimeline();
        });
      }
    };

    _this.instantiateTimeline = function () {
      if (_this.state.scriptLoaded) {
        var timeline = new TL.Timeline('timeline-embed', _this.props.content.src, _this.props.options);
      }
    };

    _this.handleSave = function (newContent) {
      _this.props.onSave(newContent);
    };

    _this.state = { scriptLoaded: false };
    return _this;
  }

  _createClass(KnightTimeline, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadScript();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.instantiateTimeline();
    }
  }, {
    key: "render",
    value: function render() {
      var src = this.props.content.src;


      return _react2.default.createElement(
        _Editable2.default,
        _extends({
          Editor: _KnightTimelineEditor2.default,
          handleSave: this.handleSave,
          content: { src: src }
        }, this.props),
        _react2.default.createElement(
          "div",
          { className: "knight-timeline" },
          _react2.default.createElement("div", { id: "timeline-embed", style: { width: "100%", height: "600px" } })
        )
      );
    }
  }]);

  return KnightTimeline;
}(_react2.default.Component);

;

KnightTimeline.propTypes = {
  content: _propTypes2.default.shape({ src: _propTypes2.default.string }).isRequired,
  onSave: _propTypes2.default.func.isRequired
};

KnightTimeline.defaultProps = {
  content: { src: 'https://docs.google.com/spreadsheets/d/1KHAFOibwGI5gqfn9uPGsIRaYUoqB48jtZLJkJhBW_SQ/pubhtml' },
  onSave: function onSave(newContent) {
    return console.log('Implement a function to save changes!', newContent);
  }
};

exports.default = KnightTimeline;