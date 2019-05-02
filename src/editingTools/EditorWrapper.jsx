import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import CancelIcon from "@material-ui/icons/Close";


const EditorWrapper = props => {
  let styles = props.theme;

  if (props.fullWidth) {
    styles = {
      ...styles,
      editContainer: {
        ...styles.editContainer,
        padding: "0",
      },
      actions: {
        ...styles.actions,
        top: "5px",
      }
    };
  }

  return (
    <div
      className="edit-container"
      style={
        props.isEditing
          ? {
              ...styles.editContainer,
              ...styles.editContainerHighlight
            }
          : styles.editContainer
      }
    >
      {props.isEditing && (
        <div className="actions" style={props.fullWidth ? {...styles.actions, position: "relative" } : styles.actions}>
          <div
            className="cancel-icon"
            style={styles.button}
            onClick={props.toggleEditing}
          >
            <CancelIcon style={styles.icon} />
          </div>
          <div
            className="save-icon"
            style={{...styles.button, ...styles.saveButton}}
            onClick={props.handleSave}
          >
            <CheckIcon style={styles.icon} />
          </div>
        </div>
      )}
      {!props.isEditing && (
        <div className="actions" style={styles.actions}>
          {props.handleDelete &&
            props.disableDelete !== true && (
              <div
                className="delete-icon"
                style={styles.button}
                onClick={props.handleDelete}
              >
                <DeleteIcon style={styles.icon} />
              </div>
            )}
          <div
            className="edit-icon"
            style={styles.button}
            onClick={props.toggleEditing}
          >
            <EditIcon style={styles.icon} />
          </div>
        </div>
      )}
      {props.children}
    </div>
  );
};

export default EditorWrapper;
