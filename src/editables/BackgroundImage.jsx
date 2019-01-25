import React from "react";
import PropTypes from "prop-types";

import Editable from "./Editable";
import ImageEditor from "../editingTools/ImageEditor";


const BackgroundImage = ({ content, onSave, children, ...rest }) => {
  const { imageSrc } = content;

  const styles = {
    background: {
      backgroundImage: `url('${imageSrc}')`,
      backgroundColor: "#ccc",
      height: 'inherit',
    }
  };

  const handleSave = newContent => {
    onSave(newContent);
  };

  return (
    <Editable
      editor={ImageEditor}
      handleSave={handleSave}
      content={{ imageSrc }}
      editCaption={false}
      showChildren
      fullWidth
    >
      <div
        style={styles.background}
        {...rest}
      >
        {children}
      </div>
    </Editable>
  );
};

BackgroundImage.propTypes = {
  content: PropTypes.shape({ imageSrc: PropTypes.string }).isRequired,
  onSave: PropTypes.func.isRequired,
}

BackgroundImage.defaultProps = {
  content: { imageSrc: '/images/camera.svg' },
  onSave: content => console.log('Implement a function to save changes!', content),
}

export default BackgroundImage;