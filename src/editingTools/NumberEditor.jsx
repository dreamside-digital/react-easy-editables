import React from "react";

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

export default NumberEditor;
