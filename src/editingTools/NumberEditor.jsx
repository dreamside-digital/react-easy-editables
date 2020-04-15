import React from "react";
import PropTypes from "prop-types";
import { theme } from "../editables/EditablesContext";

const styles = {
  header: {
    display: "flex"
  },
  input: {
    width: "100%",
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: "rgba(0,0,0,0.8)",
    backgroundColor: "#fff",
    border: `1px solid ${theme.lightColor}`,
  }
};

const NumberEditor = ({ content, onContentChange, classes, EditorProps, placeholder }) => {

  const handleChange = event => {
    event.preventDefault()
    event.stopPropagation()
    onContentChange({
      ...content,
      number: event.currentTarget.value
    })
  }

  const number = Boolean(content) ? content.number : '';

  return (
    <input
      type="number"
      style={styles.input}
      value={number}
      onChange={handleChange}
      className={classes}
      placeholder={placeholder}
      autoFocus={true}
      {...EditorProps}
    />
  );
}

NumberEditor.propTypes = {
  content: PropTypes.shape({ number: PropTypes.number }).isRequired,
  onContentChange: PropTypes.func.isRequired,
  classes: PropTypes.string,
  placeholder: PropTypes.string,
  EditorProps: PropTypes.object,
}

NumberEditor.defaultProps = {
  content: { text: "" },
  onContentChange: updated => console.log('Implement a function to save content changes.', updated),
  classes: "",
  EditorProps: {}
}


export default NumberEditor;
