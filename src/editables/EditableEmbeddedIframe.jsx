import React from "react";
import PropTypes from "prop-types";

import Editable from "./Editable";
import EmbeddedIframeEditor from "../editingTools/EmbeddedIframeEditor";

const EmbeddedIframe = ({ className, ...props }) => {
  const handleSave = newContent => {
    props.onSave(newContent);
  };

  const { src, height, width, allowFullScreen, title } = props.content;

  return (
    <Editable
      Editor={EmbeddedIframeEditor}
      handleSave={handleSave}
      content={{ src: src }}
      {...props}
    >
      <div className="embedded-iframe">
        <iframe
          title="iframe"
          src={ src }
          frameBorder="0"
          allowFullScreen={ true }
          height={ height }
          width={ width }
          title={ title }
        />
      </div>
    </Editable>
  );
};

EmbeddedIframe.propTypes = {
  content: PropTypes.shape({
    src: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    allowFullScreen: PropTypes.boolean,
    title: PropTypes.string
  }).isRequired,
  onSave: PropTypes.func.isRequired,
}

EmbeddedIframe.defaultProps = {
  content: {
    src: 'https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1KHAFOibwGI5gqfn9uPGsIRaYUoqB48jtZLJkJhBW_SQ&font=Default&lang=en&initial_zoom=2&height=650',
    height: '300px',
    width: '560px',
    title: 'Timeline',
  },
  onSave: newContent => console.log('Implement a function to save changes!', newContent),
}

export default EmbeddedIframe;
