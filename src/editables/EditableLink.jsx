import React from "react";
import PropTypes from "prop-types";

import Editable from "./Editable";
import LinkEditor from "../editingTools/LinkEditor";


const EditableLink = ({ content, onSave, classes, ...props }) => {
  const handleSave = newContent => {
    onSave(newContent);
  };

  const { link, anchor } = content;

  return (
    <Editable
      Editor={LinkEditor}
      handleSave={handleSave}
      content={{ link, anchor }}
      {...props}
    >
      <a href={ link } className={classes}>
        { anchor }
      </a>
    </Editable>
  );
};

EditableLink.propTypes = {
  content: PropTypes.shape({ anchor: PropTypes.string, link: PropTypes.string }).isRequired,
  onSave: PropTypes.func.isRequired,
  classes: PropTypes.string,
  EditorProps: PropTypes.shape({ anchor: PropTypes.object, link: PropTypes.object }),
}

EditableLink.defaultProps = {
  content: { anchor: '', link: '' },
  onSave: newContent => console.log('Implement a function to save changes!', newContent),
  EditorProps: { anchor: {}, link: {}},
}

export default EditableLink;
