import React from "react";
import PropTypes from "prop-types";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import CancelIcon from "@material-ui/icons/Close";


const EditorWrapper = ({ theme, startEditing, stopEditing, isEditing, fullWidth, onSave, handleDelete, disableDelete, isContentClickTarget, children }) => {
  let styles = theme

  if (fullWidth) {
    styles = {
      ...styles,
      editContainer: {
        ...styles.editContainer,
        padding: "0",
        marginBottom: "0"
      },
      actions: {
        ...styles.actions,
        top: "6px",
      }
    };
  }

  return (
    <div
      onClick={isContentClickTarget ? startEditing : null}
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
      {children}
      {isEditing && (
        <div className="actions" style={styles.actions}>
          <button
            className="cancel-icon"
            style={styles.button}
            onClick={stopEditing}
          >
            <CancelIcon style={styles.icon} />
          </button>
          {handleDelete &&
            !disableDelete && (
              <div
                className="delete-icon"
                style={styles.button}
                onClick={handleDelete}
              >
                <DeleteIcon style={styles.icon} />
              </div>
            )}
          <button
            className="save-icon"
            type="submit"
            style={{...styles.button, ...styles.saveButton}}
            onClick={onSave}
          >
            <CheckIcon style={styles.icon} />
          </button>
        </div>
      )}
      {!isEditing && (
        <div className="actions" style={{...styles.actions, backgroundColor: 'none'}}>
          <button
            className="edit-icon"
            style={styles.button}
            onClick={startEditing}
          >
            <EditIcon style={styles.icon} />
          </button>
        </div>
      )}
    </div>
  );
};


EditorWrapper.propTypes = {
  theme: PropTypes.object,
  startEditing: PropTypes.func,
  stopEditing: PropTypes.func,
  onSave: PropTypes.func,
  handleDelete: PropTypes.func,
  isEditing: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disableDelete: PropTypes.bool,
  isContentClickTarget: PropTypes.bool,
}

EditorWrapper.defaultProps = {
  isEditing: false,
  fullWidth: false,
  disableDelete: false,
  isContentClickTarget: true
}

export default EditorWrapper;
