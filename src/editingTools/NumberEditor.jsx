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

class NumberEditor extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = { content: this.props.content };
    this.handleEditorChange = event => this._handleEditorChange(event);
  }

  _handleEditorChange(event) {
    const number = event.currentTarget.value;
    this.setState({ content: { number } });
  }

  render() {
    const number = Boolean(this.state.content) ? this.state.content.number : '';

    return (
      <input
        type="number"
        style={styles.input}
        value={number}
        onChange={this.handleEditorChange}
      />
    );
  }
}

export default NumberEditor;
