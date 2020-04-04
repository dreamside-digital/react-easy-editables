import React from 'react'
import PropTypes from "prop-types";

const styles = {
  label: {
    color: 'inherit',
    marginRight: "4px",
  },
  input: {
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: "rgba(0,0,0,0.8)",
    backgroundColor: "#fff",
    maxWidth: "100%",
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
    <div className={classes}>
    {
      editAnchorText &&
      <div>
        <label htmlFor="anchor" style={styles.label}>Link text</label>
        <input
          name='anchor'
          value={ anchor }
          onChange={handleChange('anchor')}
          style={styles.input}
          autoFocus={true}
          { ...EditorProps.anchor }
        />
      </div>
    }
      <div>
        <label htmlFor="link" style={styles.label}>Link path</label>
        <input
          name='link'
          value={ link }
          onChange={handleChange('link')}
          style={styles.input}
          { ...EditorProps.link }
        />
      </div>
    </div>
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