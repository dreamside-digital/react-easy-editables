import React from "react";
import PropTypes from "prop-types";

import Editable from "./Editable";
import RichTextEditor from '../editingTools/RichTextEditor'

const Paragraph = props => {
  const handleSave = newContent => {
    props.onSave(newContent);
  };

  const { text } = props.content;

  return (
    <Editable
      editor={RichTextEditor}
      handleSave={handleSave}
      content={{ text: text }}
      { ...props }
    >
      <div dangerouslySetInnerHTML={ {__html: text} }>
      </div>
    </Editable>
  );
};

Paragraph.propTypes = {
  content: PropTypes.shape({ text: PropTypes.string }).isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func
}

Paragraph.defaultProps = {
  content: { text: '' },
  onSave: newContent => console.log('Implement a function to save changes!', newContent),
}

export default Paragraph;
