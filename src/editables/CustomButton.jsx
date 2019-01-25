import React from "react";
import PropTypes from "prop-types";
// import { Link } from "gatsby";

import Editable from "./Editable";
import LinkEditor from "../editingTools/LinkEditor";
import Button from "@material-ui/core/Button";


const BtnComponent = ({ link, anchor, ...rest }) => {
  const externalLink = link.startsWith('https://') || link.startsWith('http://') || link.startsWith('mailto:');

  if (externalLink) {
    return (
      <Button color="secondary" href={ link } {...rest}>
        { anchor }
      </Button>
    )
  }

  return (
    <Button color="secondary" component={Link} to={ link } {...rest}>
      { anchor }
    </Button>
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


