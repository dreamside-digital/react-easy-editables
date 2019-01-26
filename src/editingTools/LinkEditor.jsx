import React from 'react'

const styles = {
  label: {
    color: 'inherit'
  },
  input: {
    marginLeft: "4px",
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: "rgba(0,0,0,0.8)",
    backgroundColor: "#fff",
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
        <div>
          <label htmlFor="anchor">Link text</label>
          <input
            name='anchor'
            value={ anchor }
            onChange={this.handleAnchorChange}
            style={styles.input}
          />
        </div>
        <div>
          <label htmlFor="link">Link path</label>
          <input
            name='link'
            value={ link }
            onChange={this.handleLinkChange}
            style={styles.input}
          />
        </div>
      </div>
    )
  }
};

export default LinkEditor;