import React from 'react'
import TextEditor, { createValueFromString } from 'react-rte';

const styles = {
  input: {
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: "rgba(0,0,0,0.8)",
    backgroundColor: "#fff",
  }
};

class RichTextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: this.props.content, editorValue: null }
  }

  componentDidMount() {
    this.initializeEditorState();
  }

  initializeEditorState = () => {
    const text = Boolean(this.state.content) ? this.state.content.text : '';
    const editorValue = createValueFromString(text, 'html');
    this.setState({ editorValue });
  }

  onChange = (editorValue) => {
    const text = editorValue.toString('html')
    this.setState({ editorValue, content: { text } })
  }


  render() {
    const { editorValue } = this.state;

    if (editorValue) {
      return (
        <div style={styles.input}>
          <TextEditor value={editorValue} onChange={this.onChange} />
        </div>
      )
    }

    return (<div />)
  }
};

export default RichTextEditor;