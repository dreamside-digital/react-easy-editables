import React from "react";
import PropTypes from "prop-types";

import Editable from "./Editable";
import EmbeddedIframeEditor from "../editingTools/EmbeddedIframeEditor";

const ResponsiveIframe = ({ className, ...props }) => {
  const handleSave = newContent => {
    props.onSave(newContent);
  };

  const { src, height, width, allowFullScreen, title } = props.content;

  const styles = {
    iframeContainer: {
      position: "relative",
      height: height,
      overflow: "hidden",
      width: width,
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
          height="100%"
          width="100%"
          title={ title }
          {...props.iframeProps}
        />
      </div>
    </Editable>
  );
};

ResponsiveIframe.propTypes = {
  content: PropTypes.shape({
    src: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    allowFullScreen: PropTypes.boolean,
    title: PropTypes.string
  }).isRequired,
  onSave: PropTypes.func.isRequired,
}

ResponsiveIframe.defaultProps = {
  content: {
    src: 'https://www.youtube.com/embed/5qap5aO4i9A',
    height: '315px',
    width: '560px',
    title: 'lofi hip hop radio',
  },
  onSave: newContent => console.log('Implement a function to save changes!', newContent),
  iframeProps: {},
}

export default ResponsiveIframe;
