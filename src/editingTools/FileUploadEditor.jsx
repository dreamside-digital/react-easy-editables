import React from "react";
import PropTypes from "prop-types";
import { theme } from "../editables/EditablesContext";


const styles = {
  container: {
    padding: "0.5rem",
    backgroundColor: "#fff",
    borderRadius: "8px",
  },
  image: {
    marginTop: "0.5rem",
    maxWidth: "250px",
  },
  button: {
    cursor: "pointer",
    background: theme.primaryColor,
    display: "inline-flex",
    padding: "6px 12px",
    fontSize: theme.fontSize,
    fontFamily: theme.fontFamily,
    borderRadius: "2px",
    "&:hover, &:focus": {
      background: theme.primaryColor,
    },
  },
  hidden: {
    display: "none !important"
  }
};

class FileUploadEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      fileError: false,
    };
  }

  handleCaptionChange = event => {
    const caption = event.currentTarget.value;

    this.props.onContentChange({
      ...this.props.content,
      caption: caption
    })
  }

  handleFileChange = event => {
    this.setState({ loading: true, fileError: false, preview: null });

    if (!event.target.files) {
      this.setState({ loading: false, fileError: false, preview: null });
    }

    const file = event.target.files[0];

    if (!file) {
      this.setState({
        loading: false
      });
      return;
    }

    if (file.size > this.props.maxSize) {
      this.setState({
        fileError: true,
        loading: false
      });
      return;
    }

    this.props.uploadFile(file).then(fileUrl => {
      this.props.onContentChange({
        ...this.props.content,
        file: file,
        filename: file.name,
        filepath: fileUrl,
      })

      this.setState({
        preview: fileUrl,
        loading: false
      })
    })
  }

  render() {
    const { classes, EditorProps, content } = this.props;
    const { filetype, filename, filepath } = content;

    return (
      <div className={ classes } style={styles.container}>
        <div>
          <div>
            <label style={styles.button}>
              Select file
              <input
                type="file"
                hidden={true}
                style={styles.hidden}
                onChange={this.handleFileChange}
                { ...EditorProps }
              />
            </label>
          </div>
          <div>
            {
              this.state.fileError &&
              <div>Your file is too big. Please select a file less than 2MB.</div>
            }
            {this.state.loading && (
              <div className="loader-container">
                <div className="loader">loading...</div>
              </div>
            )}
            {this.state.preview && (
              <p>{filename}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

FileUploadEditor.propTypes = {
  content: PropTypes.shape({ file: PropTypes.string, filename: PropTypes.string, filepath: PropTypes.string, caption: PropTypes.string }).isRequired,
  classes: PropTypes.string,
  EditorProps: PropTypes.object,
  uploadFile: PropTypes.func
}

FileUploadEditor.defaultProps = {
  content: { file: "", filename: "", filepath: "/", caption: "" },
  EditorProps: {},
  uploadFile: file => console.log('Implement a Promise to save file and return URL.', file),
}

export default FileUploadEditor;


