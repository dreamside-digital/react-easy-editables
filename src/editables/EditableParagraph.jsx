import React from "react";
import PropTypes from "prop-types";

import Editable from "./Editable";
import RichTextEditor from '../editingTools/RichTextEditor'

const EditableParagraph = props => {
  const handleSave = newContent => {
    props.onSave(newContent);
  };

  const { text } = props.content;

  return (
    <Editable
      Editor={RichTextEditor}
      handleSave={handleSave}
      content={{ text: text }}
      { ...props }
    >
      <div className={props.classes} dangerouslySetInnerHTML={ {__html: text} }>
      </div>
    </Editable>
  );
};

EditableParagraph.propTypes = {
  content: PropTypes.shape({ text: PropTypes.string }).isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  classes: PropTypes.string,
  EditorProps: PropTypes.object,
  placeholder: PropTypes.string,
}

EditableParagraph.defaultProps = {
  content: { text: 'Placeholder' },
  onSave: newContent => console.log('Implement a function to save changes!', newContent),
}

export default EditableParagraph;
