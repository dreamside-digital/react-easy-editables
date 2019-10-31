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

class TimelineEditor extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = { content: this.props.content };
    this.handleSpreadsheetIdChange = event => this._handleSpreasheetIdChange(event);
    this.handleSheetIdChange = id => event => this._handleSheetIdChange(id, event);
  }

  _handleSpreasheetIdChange(event) {
    const spreadsheetId = event.currentTarget.value;
    this.setState({ content: { ...this.state.content, spreadsheetId } });
  }

  _handleSheetIdChange(id, event) {
    const timelineTitle = event.currentTarget.value;
    this.setState({ content: { ...this.state.content, [id]: timelineTitle } });
  }

  render() {
    const spreadsheetId = Boolean(this.state.content) ? this.state.content.spreadsheetId : '';
    const timeline1 = Boolean(this.state.content) ? this.state.content.timeline1 : '';
    const timeline2 = Boolean(this.state.content) ? this.state.content.timeline2 : '';
    const timeline3 = Boolean(this.state.content) ? this.state.content.timeline3 : '';

    return (
      <div>
        <TextField
          label={"Google spreadsheet ID"}
          style={styles.input}
          value={spreadsheetId}
          onChange={this.handleSpreadsheetIdChange}
          helperText="Enter the ID of the Google Spreadsheet (the part of the url that comes after https://docs.google.com/spreadsheets/d/)"
          placeholder="1PtqsSJq3wl09Q_IW-pgxSiXSLMYxDcrOeda7AMCM5Js"
          required
        />

        <TextField
          label={"First timeline"}
          style={styles.input}
          value={timeline1}
          onChange={this.handleSheetIdChange('timeline1')}
          helperText="Enter the title of the timeline sheet tab"
          placeholder="Colonial timeline"
          required
        />

        <TextField
          label={"Second timeline (optional)"}
          style={styles.input}
          value={timeline2}
          onChange={this.handleSheetIdChange('timeline2')}
          helperText="Enter the title of the timeline sheet tab"
          placeholder="Colonial timeline"
        />

        <TextField
          label={"Third timeline (optional)"}
          style={styles.input}
          value={timeline3}
          onChange={this.handleSheetIdChange('timeline3')}
          helperText="Enter the title of the timeline sheet tab"
          placeholder="Colonial timeline"
        />
      </div>
    );
  }
}

export default TimelineEditor;
