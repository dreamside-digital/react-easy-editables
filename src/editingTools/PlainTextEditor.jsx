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

const PlainTextEditor = ({ content, onContentChange, classes, EditorProps, placeholder }) => {

  const handleChange = event => {
    event.preventDefault()
    event.stopPropagation()
    onContentChange({
      ...content,
      text: event.currentTarget.value
    })
  }

  const text = Boolean(content) ? content.text : '';

  return (
    <input
      type="text"
      style={styles.input}
      value={text}
      onChange={handleChange}
      className={classes}
      placeholder={placeholder}
      autoFocus={true}
      {...EditorProps}
    />
  );
}

PlainTextEditor.propTypes = {
  content: PropTypes.shape({ text: PropTypes.string }).isRequired,
  onContentChange: PropTypes.func.isRequired,
  classes: PropTypes.string,
  placeholder: PropTypes.string,
}

PlainTextEditor.defaultProps = {
  content: { text: "" },
  onContentChange: updated => console.log('Implement a function to save content changes.', updated)
}

export default PlainTextEditor;
