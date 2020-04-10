import React from "react";
import PropTypes from "prop-types";
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const styles = {
  header: {
    display: "flex"
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
  },
};

const EmbeddedIframeEditor = ({ content, onContentChange }) => {

  const handleChange = id => event => {
    event.preventDefault()
    event.stopPropagation()
    onContentChange({
      ...content,
      [id]: event.currentTarget.value
    })
  }

  const src = Boolean(content) ? content.src : '';
  const title = Boolean(content) ? content.title : '';
  const height = Boolean(content) ? content.height : '';
  const width = Boolean(content) ? content.width : '';

  return (
    <Grid container spacing={1} style={styles.container}>
      <Grid item xs={12}>
        <TextField
          id="iframe-src"
          label="Iframe source URL"
          style={styles.textField}
          value={src}
          onChange={handleChange('src')}
          helperText="In the embed code, look for the 'src' attribute and copy that URL."
          required
          variant="outlined"
          size="small"
          margin="dense"
          InputProps={{ style: styles.input }}
        />
      </Grid>

      <Grid item xs={12} sm={12} md={4}>
        <TextField
          id="iframe-title"
          label="Title"
          style={styles.textField}
          value={title}
          onChange={handleChange('title')}
          required
          variant="outlined"
          size="small"
          margin="dense"
          InputProps={{ style: styles.input }}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <TextField
          id="iframe-height"
          label="Height (optional)"
          style={styles.textField}
          value={height}
          onChange={handleChange('height')}
          variant="outlined"
          size="small"
          margin="dense"
          InputProps={{ style: styles.input }}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <TextField
          id="iframe-width"
          label="Width (optional)"
          style={styles.textField}
          value={width}
          onChange={handleChange('width')}
          variant="outlined"
          size="small"
          margin="dense"
          InputProps={{ style: styles.input }}
        />
      </Grid>
    </Grid>
  );
}

EmbeddedIframeEditor.propTypes = {
  content: PropTypes.shape({ src: PropTypes.string, title: PropTypes.string, height: PropTypes.string, width: PropTypes.string }).isRequired,
  onContentChange: PropTypes.func.isRequired,
}

EmbeddedIframeEditor.defaultProps = {
  content: { src: "", title: "", height: "300px", width: "560px" },
  onContentChange: updated => console.log('Implement a function to save content changes.', updated)
}

export default EmbeddedIframeEditor;
