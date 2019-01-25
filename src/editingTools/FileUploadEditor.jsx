import React from "react";
import firebase from "../../firebase/init";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
// eslint-disable-next-line
import { theme, withStyles } from "@material-ui/core/styles";
import { MAXIMUM_IMAGE_SIZE } from "../../utils/constants"

import "../../assets/sass/image_uploader.scss";


const styles = theme => ({
  header: {
    display: "flex"
  },
  button: {
    cursor: "pointer",
    background: theme.palette.secondary.main,
    display: "flex",
    padding: "8px 16px",
    borderRadius: "2px",
    "&:hover, &:focus": {
      background: theme.palette.secondary.dark
    },
    marginBottom: "1rem",
  },
  action: {
    display: "flex"
  },
  text: {
    fontWeight: "bold",
    marginLeft: "4px"
  },
  icon: {
    marginRight: "10px",
    color: "#e70094"
  },
  hidden: {
    display: 'none !important'
  },
});

class FileUploadEditor extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = { content: this.props.content, loading: false };
    this.toggleEditing = () => this._toggleEditing();
    this.handleFileChange = image => this._handleFileChange(image);
    this.handleCaptionChange = val => this._handleCaptionChange(val);
    this.handleDoneEditing = () => this._handleDoneEditing();
  }

  _handleCaptionChange(event) {
    const title = event.currentTarget.value;
    this.setState({
      content: {
        ...this.state.content,
        title: title
      }
    });
  }

  _handleFileChange(event) {
    this.setState({ loading: true });
    const file = event.target.files[0];
    if (file.size > MAXIMUM_IMAGE_SIZE) {
      this.setState({
        imageError: true,
        loading: false
      });
      return;
    }

    const filename = file.name;

    const fileRef = firebase
      .storage()
      .ref()
      .child(`files/${filename}`);

    fileRef.put(file).then(snapshot => {
      this.setState({
        content: {
          ...this.state.content,
          filepath: snapshot.downloadURL,
          filename: filename,
        },
        preview: snapshot.downloadURL,
        loading: false
      });

      this.props.handleChange({ target: { value: snapshot.downloadURL }})
    });
  }

  render() {
    const { title, filename, filepath } = this.state.content;

    return (
      <div className="image-uploader-container">
        <Grid container justify="flex-start">
          <Grid item xs={12}>
            <p>Upload a file such as a project report or description (max 2MB)</p>
          </Grid>
          <Grid item>
            <label className={this.props.classes.button}>
              <Typography variant="button">Select file</Typography>
              <input
                type="file"
                hidden={true}
                onChange={this.handleFileChange}
                className={this.props.classes.hidden}
              />
            </label>
          </Grid>
          <Grid item xs={12}>
            {this.state.loading && (
              <div className="loader-container">
                <div className="loader">loading...</div>
              </div>
            )}
            {this.state.preview && (
              <div
                className={this.props.classes.action}
              >
                <span>{`File: `}</span>
                <a
                  href={filepath}
                  className={this.props.classes.text}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {filename}
                </a>
              </div>
            )}
            {
              this.state.imageError &&
              <div>Your file is too big. Please select a file less than 2MB.</div>
            }
          </Grid>
          { title &&
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <TextField
                  className="form-control"
                  name="title"
                  value={title || ""}
                  label={"Title to display"}
                  onChange={this.handleCaptionChange}
                />
              </FormControl>
            </Grid>
          }
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(FileUploadEditor);
