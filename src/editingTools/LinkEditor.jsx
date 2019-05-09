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

class LinkEditor extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = { content: this.props.content };
  }

  handleAnchorChange = event => {
    const newContent = { anchor: event.currentTarget.value }

    this.setState({
      content: {
        ...this.state.content,
        ...newContent
      }
    }, () => {
      if (this.props.handleEditorChange) {
        this.props.handleEditorChange(this.state.content);
      }
    });
  }

  handleLinkChange = event => {
    const newContent = { link: event.currentTarget.value }

    if (this.props.handleEditorChange) {
      this.props.handleEditorChange(newContent);
    }

    this.setState({
      content: {
        ...this.state.content,
        ...newContent
      }
    }, () => {
      if (this.props.handleEditorChange) {
        this.props.handleEditorChange(this.state.content);
      }
    });
  }

  render() {
    const { anchor, link } = this.state.content;
    const { classes, EditorProps } = this.props;

    return (
      <div className={classes}>
        <div>
          <label htmlFor="anchor">Link text</label>
          <input
            name='anchor'
            value={ anchor }
            onChange={this.handleAnchorChange}
            style={styles.input}
            { ...EditorProps.anchor }
          />
        </div>
        <div>
          <label htmlFor="link">Link path</label>
          <input
            name='link'
            value={ link }
            onChange={this.handleLinkChange}
            style={styles.input}
            { ...EditorProps.link }
          />
        </div>
      </div>
    )
  }
};

LinkEditor.propTypes = {
  content: PropTypes.shape({ anchor: PropTypes.string, link: PropTypes.string }).isRequired,
  classes: PropTypes.string,
  EditorProps: PropTypes.shape({ anchor: PropTypes.object, link: PropTypes.object }),
}

LinkEditor.defaultProps = {
  content: { anchor: '', link: '' },
  classes: "",
  EditorProps: { anchor: {}, link: {}},
}


export default LinkEditor;