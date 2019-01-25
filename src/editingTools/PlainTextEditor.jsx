import React from "react";

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

class PlainTextEditor extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = { content: this.props.content };
    this.handleEditorChange = event => this._handleEditorChange(event);
  }

  _handleEditorChange(event) {
    const text = event.currentTarget.value;
    this.setState({ content: { text } });
  }

  render() {
    const text = Boolean(this.state.content) ? this.state.content.text : '';

    return (
      <input
        multiline
        type="text"
        style={styles.input}
        value={text}
        onChange={this.handleEditorChange}
      />
    );
  }
}

export default PlainTextEditor;
