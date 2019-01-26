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

class ImageEditor extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      content: this.props.content,
      imageError: false,
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
    this.setState({ loading: true, imageError: false, preview: null });

    if (!event.target.files) {
      this.setState({ loading: false, imageError: false, preview: null });
    }

    const image = event.target.files[0];

    if (image.size > this.props.maxSize) {
      this.setState({
        imageError: true,
        loading: false
      });
      return;
    }
    const imageUrl = URL.createObjectURL(image);

    this.setState({
      preview: imageUrl,
      loading: false,
      content: {
        ...this.state.content,
        image: image,
        imageSrc: imageUrl,
      }
    });
  }

  render() {
    return (
      <div className="image-uploader-container" style={styles.container}>
        <div>
          <div>
            <label style={styles.button}>
              Select image
              <input
                type="file"
                hidden={true}
                style={styles.hidden}
                onChange={this.handleImageChange}
              />
            </label>
          </div>
          <div>
            {
              this.state.imageError &&
              <div>Your file is too big. Please select a file less than 2MB.</div>
            }
            {this.state.loading && (
              <div className="loader-container">
                <div className="loader">loading...</div>
              </div>
            )}
            {this.state.preview && (
              <div>
                <img src={this.state.preview} alt={`upload preview`} style={styles.image} />
              </div>
            )}
          </div>
        </div>
        {this.props.editCaption && (
          <div style={styles.formGroup}>
            Caption:{" "}
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

export default ImageEditor;
