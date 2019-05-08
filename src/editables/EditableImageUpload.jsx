import React from 'react'
import PropTypes from 'prop-types'

import Editable from './Editable'
import ImageUploadEditor from '../editingTools/ImageUploadEditor'

const defaultStyles = {
  imageContainer: {
    width: '100%',
  },
  image: {
    height: 'auto',
    width: '100%'
  }
}


const EditableImageUpload = (props) => {
  const handleSave = content => {
    props.onSave(content)
  }

  const { classes, styles, content, showCaption } = props;
  const { imageSrc, caption } = content;

  return (
    <Editable
      Editor={ImageUploadEditor}
      handleSave={handleSave}
      content={{ imageSrc: imageSrc, caption: caption }}
      { ...props }
    >
      <div className={classes} style={{...defaultStyles.imageContainer, ...styles.container}}>
        <a href={imageSrc} target="_blank">
          <img src={imageSrc} alt={caption} style={{...defaultStyles.image, ...styles.image}} />
        </a>
        { showCaption && <small>{caption}</small> }
      </div>
    </Editable>
  );
};

EditableImageUpload.propTypes = {
  content: PropTypes.shape({ imageSrc: PropTypes.string, caption: PropTypes.string }).isRequired,
  onSave: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  showCaption: PropTypes.bool,
  maxSize: PropTypes.number,
  styles: PropTypes.shape({ container: PropTypes.object, image: PropTypes.object }),
  classes: PropTypes.string,
  EditorProps: PropTypes.shape({ image: PropTypes.object, caption: PropTypes.object }),
}

EditableImageUpload.defaultProps = {
  content: { imageSrc: "https://www.nomadiclabs.ca/img/logo-03.png", caption: "" },
  onSave: content => console.log('Implement a function to save changes!', content),
  showCaption: false,
  maxSize: 1024 * 1024 * 2, // 2MB
  styles: { container: {}, image: {} },
  EditorProps: { image: {}, caption: {} },
}

export default EditableImageUpload;