import React from "react";

export const theme = {
  primaryColor: "#FF6C45",
  fontFamily: "sans-serif",
  fontSize: "14px",
  editContainer: {
    backgroundColor: "rgba(255,255,255,0.3)",
    border: "1px solid black",
    position: "relative",
    padding: "8px",
  },
  editContainerHighlight: {
    backgroundColor: "rgba(255,255,255,0.9)",
    border: "1px solid #FF6C45",
    zIndex: "2500",
  },
  actions: {
    position: "absolute",
    left: "2px",
    top: "2px",
    display: "flex",
    alignItems: "center",
    zIndex: "99",
  },
  button: {
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
    marginRight: "4px",
    "&:hover": {
      backgroundColor: "#eee"
    }
  },
  saveButton: {
    backgroundColor: "#FF6C45",
  },
  cancelButton: {
    backgroundColor: "#FF6C45",
  },
  icon: {
    fontSize: "14px"
  }
};

export const EditablesContext = React.createContext({ showEditingControls: true, theme: theme });
