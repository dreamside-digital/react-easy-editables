import React from "react";
import PropTypes from 'prop-types';
// import { connect } from "react-redux";
// import { showNotification } from "../../redux/actions";
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

  // handleDelete = () => {
  //   this.props.deleteContent(this.props.sectionIndex, this.props.index);
  // };

  handleSave = () => {
    this.toggleEditing();
    this.props.handleSave(this.editor.state.content);
  };

  handleError = (err) => {
    this.toggleEditing();
    this.props.showNotification(err)
  }

  render() {
    if (this.context.showEditingControls) {
      const Editor = this.props.editor;

      return (
        <EditorWrapper
          theme={this.context.theme}
          isEditing={this.state.isEditing}
          toggleEditing={this.toggleEditing}
          handleDelete={this.handleDelete}
          handleSave={this.handleSave}
          fullWidth={this.props.fullWidth}
          disableDelete={this.props.disableDelete}
        >
          {this.state.isEditing && (
            <Editor
              handleChange={this.props.handleChange}
              handleError={this.handleError}
              ref={editor => (this.editor = editor)}
              content={this.props.content}
              { ...this.props }
            />
          )}
          {(!this.state.isEditing || !!this.props.showChildren) && this.props.children}
        </EditorWrapper>
      );
    } else {
      return this.props.children;
    }
  }
}

// const mapStateToProps = state => {
//   return {
//     isEditingPage: state.adminTools.isEditingPage
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     showNotification: message => {
//       dispatch(showNotification(message))
//     }
//   }
// }

Editable.contextType = EditablesContext;


Editable.propTypes = {
  editor: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleChange: PropTypes.func,
  content: PropTypes.object,
};

export default Editable;
