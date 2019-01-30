import React from "react";
import PropTypes from 'prop-types';
import EditorWrapper from "../editingTools/EditorWrapper";
import { EditablesContext } from "./EditablesContext";

class Editable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };
  }

  toggleEditing = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleSave = () => {
    this.toggleEditing();
    this.props.handleSave(this.editor.state.content);
  };

  render() {
    const { Editor, onDelete, fullWidth, disableDelete, content, classes, children, EditorProps, ...rest } = this.props;

    if (this.context.showEditingControls) {
      return (
        <EditorWrapper
          theme={this.context.theme}
          isEditing={this.state.isEditing}
          toggleEditing={this.toggleEditing}
          handleDelete={onDelete}
          handleSave={this.handleSave}
          fullWidth={fullWidth}
          disableDelete={disableDelete}
        >
          {this.state.isEditing && (
            <Editor
              ref={editor => (this.editor = editor)}
              content={content}
              classes={classes}
              EditorProps={EditorProps}
              {...rest}
            />
          )}
          {(!this.state.isEditing || !!this.props.showChildren) && children}
        </EditorWrapper>
      );
    } else {
      return children;
    }
  }
}


Editable.contextType = EditablesContext;

Editable.propTypes = {
  Editor: PropTypes.func.isRequired,
  EditorProps: PropTypes.object,
  handleSave: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  onDelete: PropTypes.func,
  content: PropTypes.object,
  fullWidth: PropTypes.bool,
  disableDelete: PropTypes.bool,
  classes: PropTypes.string,
};

export default Editable;
