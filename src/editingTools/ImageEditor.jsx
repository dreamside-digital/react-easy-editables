import React from "react";
import firebase from "../../firebase/init";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// eslint-disable-next-line
import { theme, withStyles } from "@material-ui/core/styles";

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
    marginBottom: "1rem"
  },
  hidden: {
    display: "none !important"
  }
});

const StyledImageEditor = withStyles(styles)(props => {
  return (
    <div className="image-uploader-container">
      <Grid container justify="center">
        <Grid item>
          <label className={props.classes.button}>
            <Typography variant="button">Select image</Typography>
            <input
              type="file"
              hidden={true}
              className={props.classes.hidden}
              onChange={props.handleImageChange}
            />
          </label>
        </Grid>
        <Grid item xs={12}>
          {props.loading && (
            <div className="loader-container">
              <div className="loader">loading...</div>
            </div>
          )}
          {props.preview && (
            <div className="image-container">
              <img src={props.preview} alt={`upload preview`} />
            </div>
          )}
        </Grid>
      </Grid>
      {props.editCaption && (
        <div className="form-group">
          Caption:{" "}
          <input
            className="form-control"
            name="caption"
            value={props.content.caption || ""}
            onChange={props.handleCaptionChange}
          />
        </div>
      )}
    </div>
  );
});

class ImageEditor extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      content: this.props.content
    };
    this.handleImageChange = image => this._handleImageChange(image);
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

  _handleImageChange(event) {
    this.setState({ loading: true });
    const image = event.target.files[0];
    const storage = firebase.storage().ref();

    const fileRef = storage.child(`images/${image.name}`);

    fileRef
      .put(image)
      .then(snapshot => {
        this.setState({
          preview: snapshot.downloadURL,
          loading: false,
          content: {
            ...this.state.content,
            imageSrc: snapshot.downloadURL
          }
        });
      })
      .catch(err => {
        console.log(err)
        this.props.handleError(err.message)
      })
  }

  render() {
    return (
      <StyledImageEditor
        {...this.state}
        {...this.props}
        handleCaptionChange={this.handleCaptionChange}
        handleImageChange={this.handleImageChange}
      />
    );
  }
}

export default ImageEditor;
