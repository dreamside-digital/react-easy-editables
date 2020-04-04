import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import CancelIcon from "@material-ui/icons/Close";


const EditorWrapper = ({ theme, startEditing, stopEditing, isEditing, fullWidth, onSave, handleDelete, children }) => {
  let styles = theme;

  if (fullWidth) {
    styles = {
      ...styles,
      editContainer: {
        ...styles.editContainer,
        padding: "0",
      },
      actions: {
        ...styles.actions,
        top: "6px",
      }
    };
  }

  return (
    <div
      onClick={startEditing}
      className="edit-container"
      style={
        isEditing
          ? {
              ...styles.editContainer,
              ...styles.editContainerHighlight
            }
          : styles.editContainer
      }
    >
      {isEditing && (
        <div className="actions" style={styles.actions}>
          <div
            className="cancel-icon"
            style={styles.button}
            onClick={stopEditing}
          >
            <CancelIcon style={styles.icon} />
          </div>
          <div
            className="save-icon"
            style={{...styles.button, ...styles.saveButton}}
            onClick={onSave}
          >
            <CheckIcon style={styles.icon} />
          </div>
          {handleDelete &&
            disableDelete !== true && (
              <div
                className="delete-icon"
                style={styles.button}
                onClick={handleDelete}
              >
                <DeleteIcon style={styles.icon} />
              </div>
            )}
        </div>
      )}
      {!isEditing && (
        <div className="actions" style={styles.actions}>
          <div
            className="edit-icon"
            style={styles.button}
            onClick={startEditing}
          >
            <EditIcon style={styles.icon} />
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default EditorWrapper;
