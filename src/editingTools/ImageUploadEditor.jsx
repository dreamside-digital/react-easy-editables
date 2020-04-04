import React from "react";
import PropTypes from "prop-types";
import { theme } from "../editables/EditablesContext";


const styles = {
  container: {
    padding: "8px 4px",
    backgroundColor: "#fff",
    borderRadius: "8px",
  },
  image: {
    marginTop: "0.5rem",
    width: "100%",
    maxWidth: "250px",
  },
  button: {
    cursor: "pointer",
    background: theme.primaryColor,
    color: '#000000',
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
    color: '#000000',
    marginRight: "4px",
    marginTop: '10px'
  },
  input: {
    marginTop: "8px",
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: "rgba(0,0,0,0.8)",
    backgroundColor: "#fff",
    width: "100%",
  }
};

class ImageUploadEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      imageError: false,
      preview: null,
    };
  }

  handleCaptionChange = event => {
    const caption = event.currentTarget.value;

    this.props.onContentChange({
      ...this.props.content,
      caption: caption
    })
  }

  handleTitleChange = event => {
    const title = event.currentTarget.value;

    this.props.onContentChange({
      ...this.props.content,
      title: title
    })
  }

  handleImageChange = event => {
    this.setState({ loading: true, imageError: false, preview: null });

    if (!event.target.files) {
      this.setState({ loading: false, imageError: false, preview: null });
    }

    const image = event.target.files[0];

    if (!image) {
      this.setState({
        loading: false
      });
      return;
    }

    if (image.size > this.props.maxSize) {
      this.setState({
        imageError: true,
        loading: false
      });
      return;
    }

    this.props.uploadImage(image).then(imageUrl => {
      this.props.onContentChange({
        ...this.props.content,
        image: image,
        imageSrc: imageUrl
      })

      this.setState({
        preview: imageUrl,
        loading: false
      })
    })
  }

  render() {
    const { showCaption, editCaption, maxSize, EditorProps, content } = this.props;
    const { caption, imageSrc, title } = content;

    return (
      <div style={styles.container}>
        <div>
          <div>
            <label style={styles.button}>
              Select image
              <input
                className="hidden"
                hidden={true}
                type="file"
                accept="image/*"
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
          {(showCaption || editCaption) && (
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
