import React from "react";
import PropTypes from "prop-types";
// import { Link } from "gatsby";

import Editable from "./Editable";
import LinkEditor from "../editingTools/LinkEditor";


const BtnComponent = ({ link, anchor, ...rest }) => {
  // const externalLink = link.startsWith('https://') || link.startsWith('http://') || link.startsWith('mailto:');
  return (
    <button href={ link } {...rest}>
      { anchor }
    </button>
  )
}


const CustomButton = ({ className, ...props }) => {
  const handleSave = newContent => {
    props.onSave(newContent);
  };

  const { link, anchor } = props.content;

  return (
    <Editable
      editor={LinkEditor}
      handleSave={handleSave}
      content={{ link, anchor }}
      {...props}
    >
      <BtnComponent link={link} anchor={anchor} className={className} />
    </Editable>
  );
};

CustomButton.propTypes = {
  content: PropTypes.shape({ anchor: PropTypes.string, link: PropTypes.string }).isRequired,
  onSave: PropTypes.func.isRequired,
}

CustomButton.defaultProps = {
  content: { anchor: 'Button text', link: 'https://www.nomadiclabs.ca' },
  onSave: newContent => console.log('Implement a function to save changes!', newContent),
}

export default CustomButton;


