import React from "react";
import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { theme } from "../editables/EditablesContext";


const styles = {
  container: {
    padding: "0.5rem",
    backgroundColor: "#fff",
    borderRadius: "8px",
  },
  inner: {
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  image: {
    marginTop: "0.5rem",
    maxWidth: "250px",
  },
  button: {
    cursor: "pointer",
    background: theme.primaryColor,
    border: `1px solid ${theme.primaryColor}`,
    color: '#000000',
    display: "inline-flex",
    padding: "6px 12px",
    fontSize: `${theme.fontSize}px`,
    fontFamily: theme.fontFamily,
    borderRadius: "2px",
    "&:hover, &:focus": {
      background: theme.primaryColor,
    },
  },
  hidden: {
    display: "none !important"
  },
  preview: {
    margin: '5px',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
    wordBreak: 'break-word',
    hyphens: 'auto',
    color: "#000"
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
    const { classes, EditorProps, content, mimetypes } = this.props;
    const { filetype, filename, filepath } = content;

    return (
        <Grid container spacing={1} style={styles.container}>
          <Grid item xs={12}>
            <div style={styles.inner}>
              <label style={this.state.preview ? {...styles.button, background: '#fff' } : styles.button} >
                {this.state.preview ? 'Change file' : 'Select file'}
                <input
                  type="file"
                  hidden={true}
                  style={styles.hidden}
                  accept={mimetypes}
                  onChange={this.handleFileChange}
                  { ...EditorProps }
                />
              </label>
              {
                this.state.fileError &&
                <div>{`Your file is too big. Please select a file less than ${parseInt(this.props.maxSize) / (1024*1024)}MB.`}</div>
              }
              {this.state.loading && (
                <div className="loader-container">
                  <div className="loader">loading...</div>
                </div>
              )}
              {this.state.preview && (
                <div style={styles.preview}>{filename}</div>
              )}
            </div>
          </Grid>
        </Grid>
    );
  }
}

FileUploadEditor.propTypes = {
  content: PropTypes.shape({ file: PropTypes.object, filename: PropTypes.string, filepath: PropTypes.string, caption: PropTypes.string }).isRequired,
  uploadFile: PropTypes.func.isRequired,
  onContentChange: PropTypes.func.isRequired,
  classes: PropTypes.string,
  EditorProps: PropTypes.object,
  mimetypes: PropTypes.string,
}

FileUploadEditor.defaultProps = {
  content: { file: {}, filename: "", filepath: "/", caption: "" },
  EditorProps: {},
  uploadFile: file => console.log('Implement a Promise to save file and return URL.', file),
  onContentChange: url => console.log('Implement a function to save content changes.', url),
  mimetypes: "application/pdf,application/msword,application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.openxmlformats-officedocument.presentationml.slideshow, .csv"
}

export default FileUploadEditor;


