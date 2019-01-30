import React from "react";
import PropTypes from "prop-types";

import Editable from "./Editable";
import TextAreaEditor from "../editingTools/TextAreaEditor";

const styles = {
  whiteSpace: "pre-wrap",
}

const EditableTextArea = ({ classes, content, ...props }) => {
  const handleSave = newContent => {
    props.onSave(newContent);
  };

  const { text } = content;

  return (
    <Editable
      Editor={TextAreaEditor}
      handleSave={handleSave}
      content={content}
      classes={classes}
      {...props}
    >
      <span className={classes} style={styles}>{ text }</span>
    </Editable>
  );
};

EditableTextArea.propTypes = {
  content: PropTypes.shape({ text: PropTypes.string }).isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  classes: PropTypes.string,
  EditorProps: PropTypes.object,
}

EditableTextArea.defaultProps = {
  content: { text: '' },
  onSave: newContent => console.log('Implement a function to save changes!', newContent),
}

export default EditableTextArea;
