import React from 'react'
import PropTypes from 'prop-types'

import Editable from './Editable'
import ImageEditor from '../editingTools/ImageEditor'

const styles = {
  imageContainer: {
    width: '100%',
  },
  image: {
    height: 'auto',
    width: '100%'
  }
}


const Image = (props) => {
  const handleSave = content => {
    props.onSave(content)
  }

  const { imageSrc, caption } = props.content;

  return (
    <Editable
      editor={ImageEditor}
      handleSave={handleSave}
      content={{ imageSrc: imageSrc, caption: caption }}
      { ...props }
    >
      <div className='img edit-container' style={{...styles.imageContainer, ...props.styles.container}}>
        <img src={imageSrc} alt={caption} style={{...styles.image, ...props.styles.image}} />
        { props.showCaption && <small>{caption}</small> }
      </div>
    </Editable>
  );
};

Image.propTypes = {
  content: PropTypes.shape({ imageSrc: PropTypes.string.isRequired, caption: PropTypes.string }).isRequired,
  onSave: PropTypes.func.isRequired,
  maxSize: PropTypes.number,
}

Image.defaultProps = {
  content: { imageSrc: '/images/camera.svg' },
  onSave: content => console.log('Implement a function to save changes!', content),
  maxSize: 1024 * 1024 * 2, // 2MB
  styles: {},
}

export default Image;