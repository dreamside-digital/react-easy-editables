import React from "react";
import PropTypes from "prop-types";

import Editable from "./Editable";
import EmbeddedIframeEditor from "../editingTools/EmbeddedIframeEditor";

const EmbeddedIframe = ({ className, ...props }) => {
  const handleSave = newContent => {
    props.onSave(newContent);
  };

  const { src, height, width, allowFullScreen, title, iframeProps } = props.content;
  const ratio = (height / width) * 100

  const styles = {
    iframeContainer: {
      position: "relative",
      paddingBottom: `${ratio}%`,
      height: 0,
      overflow: "hidden",
      width: "100%",
      maxWidth: "100%",
    },
    iframe: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    }
  }

  return (
    <Editable
      Editor={EmbeddedIframeEditor}
      handleSave={handleSave}
      content={{ src: src }}
      {...props}
    >
      <div className="embedded-iframe" style={{ ...styles.iframeContainer, ...props.containerStyles }}>
        <iframe
          title="iframe"
          src={ src }
          style={styles.iframe}
          frameBorder="0"
          allowFullScreen={ true }
          height={ height }
          width={ width }
          title={ title }
          {...props.iframeProps}
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
    src: 'https://www.youtube.com/embed/5qap5aO4i9A',
    height: '315',
    width: '560',
    title: 'lofi hip hop radio',
  },
  onSave: newContent => console.log('Implement a function to save changes!', newContent),
  iframeProps: {},
}

export default EmbeddedIframe;
