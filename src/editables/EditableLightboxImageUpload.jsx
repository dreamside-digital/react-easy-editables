import React from 'react'
import PropTypes from 'prop-types'
import Lightbox from "react-image-lightbox"

import Editable from './Editable'
import ImageUploadEditor from '../editingTools/ImageUploadEditor'

import 'react-image-lightbox/style.css';
import '../assets/css/lightbox.css'

const defaultStyles = {
  imageContainer: {
    width: '100%',
    position: 'relative',
  },
  image: {
    height: 'auto',
    width: '100%'
  }
}


export default class EditableLightboxImageUpload extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  handleSave = content => {
    this.props.onSave(content)
  };

  render() {
    const { classes, styles, content, showCaption } = this.props;
    const { isOpen } = this.state;
    const { imageSrc, caption, title } = content;

    return (
      <Editable
        Editor={ImageUploadEditor}
        handleSave={this.handleSave}
        content={{ imageSrc: imageSrc, caption: caption, title: title }}
        { ...this.props }
      >
        <div className={`lightbox-container ${classes}`} style={{...defaultStyles.imageContainer, ...styles.container}}>
          <div onClick={() => this.setState({ isOpen: true })} className="overlay">
            <span>Click to view</span>
          </div>
          <img src={imageSrc} alt={caption} style={{...defaultStyles.image, ...styles.image}} />
          { showCaption && <small>{caption}</small> }
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={imageSrc}
            onCloseRequest={() => this.setState({ isOpen: false })}
            imageCaption={caption}
            imageTitle={title}
          />
        )}
      </Editable>
    );
  }
};

EditableLightboxImageUpload.propTypes = {
  content: PropTypes.shape({ imageSrc: PropTypes.string, caption: PropTypes.string, title: PropTypes.string }).isRequired,
  onSave: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  showCaption: PropTypes.bool,
  maxSize: PropTypes.number,
  styles: PropTypes.shape({ container: PropTypes.object, image: PropTypes.object }),
  classes: PropTypes.string,
  EditorProps: PropTypes.shape({ image: PropTypes.object, caption: PropTypes.object, title: PropTypes.object }),
}

EditableLightboxImageUpload.defaultProps = {
  content: { imageSrc: "https://www.nomadiclabs.ca/img/logo-03.png", caption: "", title: "" },
  onSave: content => console.log('Implement a function to save changes!', content),
  showCaption: false,
  maxSize: 1024 * 1024 * 2, // 2MB
  styles: { container: {}, image: {} },
  EditorProps: { image: {}, caption: {}, title: {} },
}
