import React from "react";
import TextField from '@material-ui/core/TextField';


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

class KnightTimelineEditor extends React.Component {
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
      <TextField
        style={styles.input}
        value={src}
        onChange={this.handleEditorChange}
        helperText="Enter the URL of the published Google Sheet"
        placeholder="https://docs.google.com/spreadsheets/d/1KHAFOibwGI5gqfn9uPGsIRaYUoqB48jtZLJkJhBW_SQ/pubhtml"
      />
    );
  }
}

export default KnightTimelineEditor;
