import React from "react";
import PropTypes from "prop-types";
import { theme } from "../editables/EditablesContext";


const styles = {
  container: {
    padding: "0.5rem",
    backgroundColor: "#fff",
    borderRadius: "8px",
    textAlign: "center",
  },
  image: {
    marginTop: "0.5rem",
    width: "100%",
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
  },
  label: {
    color: 'inherit',
    marginTop: '10px'
  },
  input: {
    marginLeft: "4px",
    marginTop: "8px",
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: "rgba(0,0,0,0.8)",
    backgroundColor: "#fff",
  }
};

class ImageUploadEditor extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      content: this.props.content,
      imageError: false,
    };
  }

  handleCaptionChange = (event) => {
    const caption = event.currentTarget.value;

    this.setState({
      content: {
        ...this.state.content,
        caption: caption
      }
    }, () => {
      if (this.props.handleEditorChange) {
        this.props.handleEditorChange(this.state.content);
      }
    });
  }

  handleTitleChange = (event) => {
    const title = event.currentTarget.value;

    this.setState({
      content: {
        ...this.state.title,
        title: title
      }
    }, () => {
      if (this.props.handleEditorChange) {
        this.props.handleEditorChange(this.state.content);
      }
    });
  }

  handleImageChange = (event) => {
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

    this.props.uploadImage(image).then(imageUrl => {
      this.setState({
        preview: imageUrl,
        loading: false,
        content: {
          ...this.state.content,
          image: image,
          imageSrc: imageUrl,
        }
      }, () => {
        if (this.props.handleEditorChange) {
          this.props.handleEditorChange(this.state.content);
        }
      });
    })
  }

  render() {
    const { showCaption, maxSize, EditorProps } = this.props;
    const { caption, imageSrc, title } = this.state.content;

    return (
      <div style={styles.container}>
        <div>
          <div>
            <label style={styles.button}>
              Select image
              <input
                type="file"
                accept="image/gif, image/jpeg, image/png, image/svg"
                hidden={true}
                style={styles.hidden}
                onChange={this.handleImageChange}
                {...EditorProps.image}
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
        <div className="text-left">
          <div>
            <label htmlFor="title" style={ styles.label }>Title (alt text)</label>
            <input
              name='title'
              value={ title }
              style={ styles.input }
              onChange={this.handleTitleChange}
              { ...EditorProps.title }
            />
          </div>
          {showCaption && (
            <div>
              <label htmlFor="caption" style={ styles.label }>Caption</label>
              <input
                name='caption'
                value={ caption }
                style={ styles.input }
                onChange={this.handleCaptionChange}
                { ...EditorProps.caption }
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

ImageUploadEditor.propTypes = {
  content: PropTypes.shape({ imageSrc: PropTypes.string, caption: PropTypes.string, title: PropTypes.string }).isRequired,
  classes: PropTypes.string,
  EditorProps: PropTypes.shape({ image: PropTypes.object, caption: PropTypes.object, title: PropTypes.object }),
  uploadImage: PropTypes.func
}

ImageUploadEditor.defaultProps = {
  content: { imageSrc: "https://placebear.com/300/200", caption: "", title: "" },
  EditorProps: { image: {}, caption: {}, title: {} },
  uploadImage: image => console.log('Implement a Promise to save file and return URL.', image),
}


export default ImageUploadEditor;
