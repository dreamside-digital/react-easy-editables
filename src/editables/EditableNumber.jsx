import React from "react";
import PropTypes from "prop-types";

import Editable from "./Editable";
import NumberEditor from "../editingTools/NumberEditor";


const EditableNumber = ({ className, ...props }) => {
  const handleSave = newContent => {
    props.onSave(newContent);
  };

  const { number } = props.content;

  return (
    <Editable
      Editor={NumberEditor}
      handleSave={handleSave}
      content={{ number: number }}
      {...props}
    >
      <span className={className}>{ number }</span>
    </Editable>
  );
};

EditableNumber.propTypes = {
  content: PropTypes.shape({ number: PropTypes.number }).isRequired,
  onSave: PropTypes.func.isRequired,
  classes: PropTypes.string,
  EditorProps: PropTypes.object,
}

EditableNumber.defaultProps = {
  content: { number: '' },
  onSave: newContent => console.log('Implement a function to save changes!', newContent),
}

export default EditableNumber;
