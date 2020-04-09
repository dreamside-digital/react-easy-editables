"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditablesContext = exports.theme = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var theme = {
  primaryColor: "#FF6C45",
  fontFamily: "sans-serif",
  fontSize: 14,
  editContainer: {
    backgroundColor: "rgba(255,255,255,0.3)",
    outline: "1px dashed rgba(0,0,0,0.5)",
    position: "relative",
    cursor: "pointer",
    margin: '0'
  },
  editContainerHighlight: {
    backgroundColor: "rgba(255,255,255,0.9)",
    zIndex: "2500",
    outline: "1px solid #FF6C45"
  },
  actions: {
    position: "absolute",
    right: "6px",
    bottom: "-12px",
    display: "flex",
    alignItems: "center",
    zIndex: "99",
    backgroundColor: "#FF6C45",
    borderRadius: "30px",
    padding: '2px',
    width: "fit-content",
    height: "fit-content"
  },
  button: {
    margin: '1px',
    border: "1px solid #000",
    color: "black",
    backgroundColor: "#fff",
    height: "18px",
    width: "18px",
    borderRadius: "30px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#eee"
    }
  },
  icon: {
    fontSize: "14px"
  }
};
exports.theme = theme;

var EditablesContext = _react["default"].createContext({
  showEditingControls: true,
  theme: theme
});

exports.EditablesContext = EditablesContext;