import React from 'react'
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const styles = {
  label: {
    color: 'inherit',
  },
  container: {
    padding: '0.5rem'
  },
  textField: {
    width: "100%",
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: "rgba(0,0,0,0.8)",
    backgroundColor: "#fff",
  },
  input: {
    borderRadius: '0'
  }
}

const LinkEditor = ({ content, onContentChange, classes, EditorProps, editAnchorText }) => {

  const handleChange = id => event => {
    event.preventDefault()
    event.stopPropagation()
    onContentChange({
      ...content,
      [id]: event.currentTarget.value
    })
  }

  const { anchor, link } = content;

  return (
    <Grid container spacing={1} className={classes} style={styles.container}>
    {
      editAnchorText &&
      <Grid item xs={12} sm={6}>
        <TextField
          id="link-text"
          label="Link text"
          value={ anchor }
          onChange={handleChange('anchor')}
          autoFocus={true}
          variant="outlined"
          size="small"
          margin="dense"
          InputProps={{ style: styles.input }}
          style={styles.textField}
          required
          { ...EditorProps.anchor }
        />
      </Grid>
    }
      <Grid item xs={12} sm={6}>
        <TextField
          id="link-url"
          label="Link URL"
          variant="outlined"
          value={ link }
          onChange={handleChange('link')}
          size="small"
          margin="dense"
          InputProps={{ style: styles.input }}
          style={styles.textField}
          required
          { ...EditorProps.link }
        />
      </Grid>
    </Grid>
  )
};

LinkEditor.propTypes = {
  content: PropTypes.shape({ anchor: PropTypes.string, link: PropTypes.string }).isRequired,
  classes: PropTypes.string,
  EditorProps: PropTypes.shape({ anchor: PropTypes.object, link: PropTypes.object }),
  editAnchorText: PropTypes.bool,
}

LinkEditor.defaultProps = {
  content: { anchor: '', link: '' },
  editAnchorText: true,
  classes: "",
  EditorProps: { anchor: {}, link: {}},
}


export default LinkEditor;