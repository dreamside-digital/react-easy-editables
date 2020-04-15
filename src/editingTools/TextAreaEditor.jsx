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
    display: "flex",
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
      rows="4"
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
  onContentChange: PropTypes.func.isRequired,
  classes: PropTypes.string,
  EditorProps: PropTypes.object,
  placeholder: PropTypes.string
}

TextAreaEditor.defaultProps = {
  content: { text: "" },
  onContentChange: updated => console.log('Implement a function to save content changes.', updated),
  classes: "",
  placeholder: "",
  EditorProps: {},
}

export default TextAreaEditor;
