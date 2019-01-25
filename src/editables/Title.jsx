import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

import Editable from "./Editable";
import PlainTextEditor from "../editingTools/PlainTextEditor";

const variantLookup = {
  title: 'title',
  headline: 'headline',
  h1: 'display1',
  h2: 'display2',
  h3: 'display3',
  h4: 'display4',
}

const Title = props => {
  const handleSave = newContent => {
    props.onSave(newContent);
  };

  const { text } = props.content;
  const variant = variantLookup[props.level];

  return (
    <Typography variant={ variant || 'display1' }>
      <Editable
        editor={PlainTextEditor}
        handleSave={handleSave}
        content={{ text: text }}
        {...props}
      >
        { text }
      </Editable>
    </Typography>
  );
};

Title.propTypes = {
  content: PropTypes.shape({ text: PropTypes.string }).isRequired,
  onSave: PropTypes.func.isRequired,
}

Title.defaultProps = {
  content: { text: '' },
  onSave: newContent => console.log('Implement a function to save changes!', newContent),
}

export default Title;
