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
  const { imageSrc, caption, title } = content;

  return (
    <Editable
      Editor={ImageUploadEditor}
      handleSave={handleSave}
      content={{ imageSrc: imageSrc, caption: caption, title: title }}
      { ...props }
    >
      <div className={classes} style={{...defaultStyles.imageContainer, ...styles.container}}>
        <img src={imageSrc} alt={title} style={{...defaultStyles.image, ...styles.image}} />
        { showCaption && <small>{caption}</small> }
      </div>
    </Editable>
  );
};

EditableImageUpload.propTypes = {
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

EditableImageUpload.defaultProps = {
  content: { imageSrc: "https://www.nomadiclabs.ca/img/logo-03.png", caption: "", title: "" },
  onSave: content => console.log('Implement a function to save changes!', content),
  showCaption: false,
  maxSize: 1024 * 1024 * 2, // 2MB
  styles: { container: {}, image: {} },
  EditorProps: { image: {}, caption: {}, title: {} },
}

export default EditableImageUpload;