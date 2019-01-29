import React from "react";
import PropTypes from "prop-types";

import Editable from "./Editable";
import ImageEditor from "../editingTools/ImageEditor";


const BackgroundImage = ({ content, onSave, children, styles, ...rest }) => {
  const { imageSrc } = content;
  console.log(styles)

  const defaultStyles = {
    backgroundImage: `url('${imageSrc}')`,
    backgroundColor: "#ccc",
    height: 'inherit',
    display: "flex",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
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
        style={{...defaultStyles, ...styles }}
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
  styles: PropTypes.object
}

BackgroundImage.defaultProps = {
  content: { imageSrc: '/images/camera.svg' },
  onSave: content => console.log('Implement a function to save changes!', content),
  styles: {},
}

export default BackgroundImage;