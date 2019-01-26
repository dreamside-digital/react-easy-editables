import React from "react";
import { theme } from "../editables/EditablesContext";


const styles = {
  container: {
    padding: "0.5rem",
    backgroundColor: "#fff",
    borderRadius: "8px",
  },
  formGroup: {
    alignItems: "center",
    textAlign: "center",
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
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      content: this.props.content,
      fileError: false,
    };
    this.handleFileChange = file => this._handleFileChange(file);
    this.handleCaptionChange = val => this._handleCaptionChange(val);
  }

  _handleCaptionChange(event) {
    const caption = event.currentTarget.value;
    this.setState({
      content: {
        ...this.state.content,
        caption: caption
      }
    });
  }

  _handleFileChange(event) {
    this.setState({ loading: true, fileError: false, preview: null });

    if (!event.target.files) {
      this.setState({ loading: false, fileError: false, preview: null });
    }

    const file = event.target.files[0];
    console.log("file", file)

    if (file.size > this.props.maxSize) {
      this.setState({
        fileError: true,
        loading: false
      });
      return;
    }
    const fileUrl = URL.createObjectURL(file);

    this.setState({
      preview: fileUrl,
      loading: false,
      content: {
        ...this.state.content,
        file: file,
        filename: file.name,
        filepath: fileUrl,
      }
    });
  }

  render() {
    const { filetype, filename, filepath } = this.state.content;
    return (
      <div className="image-uploader-container" style={styles.container}>
        <div>
          <div>
            <label style={styles.button}>
              Select file
              <input
                type="file"
                hidden={true}
                style={styles.hidden}
                onChange={this.handleFileChange}
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
        {this.props.editCaption && (
          <div style={styles.formGroup}>
            Title:{" "}
            <input
              className="form-control"
              name="caption"
              value={this.props.content.caption || ""}
              onChange={this.handleCaptionChange}
            />
          </div>
        )}
      </div>
    );
  }
}

export default FileUploadEditor;


