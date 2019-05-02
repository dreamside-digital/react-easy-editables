import React from "react";
import Input from '@material-ui/core/Input';


const styles = {
  header: {
    display: "flex"
  },
  input: {
    width: "100%",
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: "rgba(0,0,0,0.8)",
    backgroundColor: "#fff",
  }
};

class EmbeddedIframeEditor extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = { content: this.props.content };
    this.handleEditorChange = event => this._handleEditorChange(event);
  }

  _handleEditorChange(event) {
    const src = event.currentTarget.value;
    this.setState({ content: { src } });
  }

  render() {
    const src = Boolean(this.state.content) ? this.state.content.src : '';

    return (
      <Input
        multiline
        style={styles.input}
        value={src}
        onChange={this.handleEditorChange}
      />
    );
  }
}

export default EmbeddedIframeEditor;
