import React from "react";
import PropTypes from "prop-types";

import Editable from "./Editable";
import ImageUploadEditor from "../editingTools/ImageUploadEditor";


const EditableBackgroundImage = ({ content, onSave, children, styles, classes, ...rest }) => {
  const { imageSrc } = content;

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
      Editor={ImageUploadEditor}
      handleSave={handleSave}
      content={{ imageSrc }}
      showCaption={false}
      showChildren
      fullWidth
      { ...rest }
    >
      <div
        className={ classes }
        style={{...defaultStyles, ...styles }}
      >
        {children}
      </div>
    </Editable>
  );
};

EditableBackgroundImage.propTypes = {
  content: PropTypes.shape({ imageSrc: PropTypes.string }).isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  maxSize: PropTypes.number,
  styles: PropTypes.object,
  classes: PropTypes.string,
  EditorProps: PropTypes.shape({ image: PropTypes.object }),
}

EditableBackgroundImage.defaultProps = {
  content: { imageSrc: "https://placebear.com/300/200" },
  onSave: content => console.log('Implement a function to save changes!', content),
  maxSize: 1024 * 1024 * 2, // 2MB
  styles: {},
  EditorProps: { image: {} },
}

export default EditableBackgroundImage;