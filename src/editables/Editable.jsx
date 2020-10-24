import React from "react";
import PropTypes from 'prop-types';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import EditorWrapper from "../editingTools/EditorWrapper";
import { EditablesContext, theme } from "./EditablesContext";

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: theme.primaryColor,
    }
  },
  typography: {
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize
  }
})

class Editable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      editingContent: this.props.content
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.content !== this.props.content) {
      this.setState({ editingContent: this.props.content })
    }
  }

  toggleEditing = (e) => {
    e.stopPropagation();
    this.setState({ isEditing: !this.state.isEditing });
  };

  startEditing = e => {
    e.stopPropagation();
    this.setState({ isEditing: true });
  }

  stopEditing = e => {
    e.stopPropagation();
    this.setState({ isEditing: false });
  }

  onSave = e => {
    this.stopEditing(e);
    this.props.handleSave(this.state.editingContent);
  };

  onDelete = () => {
    if (this.props.onDelete) {
      return (e) => {
        this.stopEditing(e)
        this.props.onDelete()
      }
    }

    return null
  }

  onContentChange = updatedContent => {
    this.setState({ editingContent: updatedContent })
  }

  render() {
    const { Editor, fullWidth, disableDelete, classes, children, EditorProps, content, isContentClickTarget, ...rest } = this.props;
    const { editingContent } = this.state;

    if (this.context.showEditingControls) {
      return (
        <ThemeProvider theme={muiTheme}>
          <EditorWrapper
            theme={this.context.theme}
            isEditing={this.state.isEditing}
            toggleEditing={this.toggleEditing}
            startEditing={this.startEditing}
            stopEditing={this.stopEditing}
            handleDelete={this.onDelete()}
            onSave={this.onSave}
            fullWidth={fullWidth}
            disableDelete={disableDelete}
            isContentClickTarget={isContentClickTarget}
            WrapperProps={WrapperProps}
          >
            {this.state.isEditing && (
              <Editor
                content={editingContent}
                onContentChange={this.onContentChange}
                classes={classes}
                EditorProps={EditorProps}
                {...rest}
              />
            )}
            {(!this.state.isEditing || !!this.props.showChildren) && children}
          </EditorWrapper>
        </ThemeProvider>
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
  isContentClickTarget: PropTypes.bool,
};

export default Editable;
