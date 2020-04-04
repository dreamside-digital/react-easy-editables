import React from "react";
import PropTypes from "prop-types";

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
  }
};

const TextAreaEditor = ({ content, onContentChange, classes, EditorProps, placeholder }) => {

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
    <textarea
      multiline="true"
      wrap="on"
      style={styles.input}
      value={text}
      onChange={handleChange}
      className={classes}
      autoFocus={true}
      {...EditorProps}
    />
  );
}

TextAreaEditor.propTypes = {
  content: PropTypes.shape({ text: PropTypes.string }).isRequired,
  classes: PropTypes.string
}

export default TextAreaEditor;
