import React from "react";
import PropTypes from "prop-types";

import Editable from "./Editable";
import PlainTextEditor from "../editingTools/PlainTextEditor";


const EditableText = ({ classes, content, ...props }) => {
  const handleSave = newContent => {
    props.onSave(newContent);
  };

  const { text } = content;

  return (
    <Editable
      Editor={PlainTextEditor}
      handleSave={handleSave}
      content={content}
      {...props}
    >
      { text }
    </Editable>
  );
};

EditableText.propTypes = {
  content: PropTypes.shape({ text: PropTypes.string }).isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  classes: PropTypes.string,
  EditorProps: PropTypes.object,
  placeholder: PropTypes.string,
}

EditableText.defaultProps = {
  content: { text: '' },
  onSave: newContent => console.log('Implement a function to save changes!', newContent),
}

export default EditableText;
