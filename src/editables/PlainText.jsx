import React from "react";
import PropTypes from "prop-types";

import Editable from "./Editable";
import PlainTextEditor from "../editingTools/PlainTextEditor";


const PlainText = ({ className, ...props }) => {
  const handleSave = newContent => {
    props.onSave(newContent);
  };

  const { text } = props.content;

  return (
    <Editable
      editor={PlainTextEditor}
      handleSave={handleSave}
      content={{ text: text }}
      {...props}
    >
      <span className={className}>{ text }</span>
    </Editable>
  );
};

PlainText.propTypes = {
  content: PropTypes.shape({ text: PropTypes.string }).isRequired,
  onSave: PropTypes.func.isRequired,
}

PlainText.defaultProps = {
  content: { text: '' },
  onSave: newContent => console.log('Implement a function to save changes!', newContent),
}

export default PlainText;
