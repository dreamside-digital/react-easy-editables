import React from "react";
import PropTypes from "prop-types";

import Editable from "./Editable";
import PlainTextEditor from "../editingTools/PlainTextEditor";


const EditableText = ({ classes, ...props }) => {
  const handleSave = newContent => {
    props.onSave(newContent);
  };

  const { text } = props.content;

  return (
    <Editable
      Editor={PlainTextEditor}
      handleSave={handleSave}
      content={{ text: text }}
      classes={classes}
      {...props}
    >
      <span className={classes}>{ text }</span>
    </Editable>
  );
};

EditableText.propTypes = {
  content: PropTypes.shape({ text: PropTypes.string }).isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  classes: PropTypes.string,
  EditorProps: PropTypes.object,
}

EditableText.defaultProps = {
  content: { text: '' },
  onSave: newContent => console.log('Implement a function to save changes!', newContent),
}

export default EditableText;
