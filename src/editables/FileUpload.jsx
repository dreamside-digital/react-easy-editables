import React from "react";
import FileIcon from "@material-ui/icons/Assignment"

import Editable from "./Editable";
import FileUploadEditor from "../editingTools/FileUploadEditor";

const styles = {
  action: {
    display: 'flex',
  },
  text: {
    fontWeight: "bold"
  },
  icon: {
    marginRight: "10px",
    color: "#e70094"
  }
};

const FileUpload = props => {
  const handleSave = content => () => {
    props.updateContent(props.sectionIndex, props.index, content);
  };

  return (
    <Editable
      editor={FileUploadEditor}
      handleSave={handleSave}
      content={{
        filepath: props.filepath,
        title: props.title,
        filetype: props.filetype
      }}
      {...props}
    >
      <div className="action-link" style={styles.action}>
        <span style={styles.icon}>
          <FileIcon />
        </span>
        <a href={props.filepath} style={styles.text} target="_blank" rel="noopener noreferrer">
          {props.title} {props.filetype && `(${props.filetype})`}
        </a>
      </div>
    </Editable>
  );
};

export default FileUpload;
