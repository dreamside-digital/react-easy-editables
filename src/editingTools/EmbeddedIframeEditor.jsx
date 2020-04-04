import React from "react";
import Input from '@material-ui/core/Input';


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

const EmbeddedIframeEditor = ({ content, onContentChange, classes, EditorProps }) => {

  const handleChange = event => {
    event.preventDefault()
    event.stopPropagation()
    onContentChange({
      ...content,
      src: event.currentTarget.value
    })
  }

  const src = Boolean(content) ? content.src : '';

  return (
    <input
      placeholder="iframe embed code"
      multiline={true}
      style={styles.input}
      value={src}
      onChange={handleChange}
    />
  );
}

export default EmbeddedIframeEditor;
