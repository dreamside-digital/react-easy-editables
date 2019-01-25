import React from 'react'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

const styles = {
  label: {
    color: 'inherit'
  },
  input: {
    marginLeft: '10px'
  }
}

class LinkEditor extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = { content: this.props.content };
    this.handleAnchorChange = (event) => this._handleAnchorChange(event)
    this.handleLinkChange = (event) => this._handleLinkChange(event)
  }

  _handleAnchorChange (event) {
    const anchor = event.currentTarget.value;
    this.setState({
      content: {
        ...this.state.content,
        anchor: anchor
      }
    });
  };

  _handleLinkChange (event) {
    const link = event.currentTarget.value;
    this.setState({
      content: {
        ...this.state.content,
        link: link
      }
    });
  };

  render() {
    const { anchor, link } = this.state.content;

    return (
      <div>
        <FormControl fullWidth margin="normal">
          <TextField
            name='anchor'
            value={ anchor }
            onChange={this.handleAnchorChange}
            style={styles.input}
            label="Link text"
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField
            name='link'
            value={ link }
            onChange={this.handleLinkChange}
            style={styles.input}
            label="Link path"
          />
        </FormControl>
      </div>
    )
  }
};

export default LinkEditor;