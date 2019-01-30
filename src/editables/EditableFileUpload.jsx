import React from "react";
import PropTypes from 'prop-types'

import Editable from "./Editable";
import FileUploadEditor from "../editingTools/FileUploadEditor";

const styles = {
  action: {
    display: 'flex',
  },
  icon: {
    marginRight: "10px",
    color: "#e70094"
  }
};

const EditableFileUpload = props => {
  const handleSave = content => {
    props.onSave(content)
  }

  const { filename, filepath, filetype } = props.content;

  return (
    <Editable
      Editor={FileUploadEditor}
      handleSave={handleSave}
      content={{
        filepath: filepath,
        filename: filename,
        filetype: filetype
      }}
      {...props}
    >
      <div className="action-link" style={styles.action}>
        <a href={filepath} target="_blank" rel="noopener noreferrer">
          {filename} {filetype && `(${filetype})`}
        </a>
      </div>
    </Editable>
  );
};


EditableFileUpload.propTypes = {
  content: PropTypes.shape({ filepath: PropTypes.string.isRequired, filename: PropTypes.string, filetype: PropTypes.string }).isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  maxSize: PropTypes.number,
  classes: PropTypes.string,
  EditorProps: PropTypes.object,
}

EditableFileUpload.defaultProps = {
  content: { filepath: '#', filename: "Placeholder" },
  onSave: content => console.log('Implement a function to save changes!', content),
  maxSize: 1024 * 1024 * 2, // 2MB
}

export default EditableFileUpload;
