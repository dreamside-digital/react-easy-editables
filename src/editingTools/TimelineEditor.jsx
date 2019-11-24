import React from "react";
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';



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
    marginBottom: "1.5rem",
  }
};

class TimelineEditor extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = { content: this.props.content };
  }

  handleChange = id => event => {
    const value = event.currentTarget.value;
    this.setState({ content: { ...this.state.content, [id]: value }})
  }

  handleSpreadsheetIdChange = (event) => {
    const spreadsheetId = event.currentTarget.value;
    this.setState({ content: { ...this.state.content, spreadsheetId } });
  }

  handleTimelinesChange = (event) => {
    const timelines = event.currentTarget.value;
    this.setState({ content: { ...this.state.content, timelines } });
  }

  handleAlignmentChange = (event) => {
    const alignment = event.currentTarget.value;
    this.setState({ content: { ...this.state.content, alignment } });
  }

  render() {
    const spreadsheetId = Boolean(this.state.content) ? this.state.content.spreadsheetId : '';
    const timelines = Boolean(this.state.content) ? this.state.content.timelines : '';
    const alignment = Boolean(this.state.content) ? this.state.content.alignment : 'left';
    const interval = Boolean(this.state.content) ? this.state.content.interval : '';
    const startYear = Boolean(this.state.content) ? this.state.content.startYear : '';

    return (
      <div>
        <FormLabel component="label" htmlFor="speadsheetId">Google spreadsheet ID</FormLabel>
        <TextField
          id="spreadsheetId"
          style={styles.input}
          value={spreadsheetId}
          onChange={this.handleChange(spreadsheetId)}
          helperText="Enter the ID of the Google Spreadsheet (the part of the url that comes after https://docs.google.com/spreadsheets/d/)"
          required
        />

        <FormLabel component="label" htmlFor="timelines">Sheet titles</FormLabel>
        <TextField
          id="timelines"
          style={styles.input}
          value={timelines}
          onChange={this.handleChange('timelines')}
          helperText="Enter the titles of the spreadsheet tabs, separated by commas."
          placeholder="Sheet1, Sheet2, Sheet3"
          required
        />

        <FormLabel component="label" htmlFor="interval">Time marker interval (optional)</FormLabel>
        <TextField
          id="interval"
          type="number"
          style={styles.input}
          value={interval}
          onChange={this.handleChange('interval')}
          helperText="Enter the interval in years. Leave it blank to omit the time markers."
        />

        <FormLabel component="label" htmlFor="startYear">Start year (optional)</FormLabel>
        <TextField
          id="startYear"
          type="number"
          style={styles.input}
          value={startYear}
          onChange={this.handleChange('startYear')}
          helperText="Enter the start year for the time markers."
        />

        <FormLabel component="legend">Alignment</FormLabel>
        <RadioGroup aria-label="alignment" name="alignment" value={alignment} onChange={this.handleAlignmentChange} required>
          <FormControlLabel value="left" control={<Radio />} label="Left" />
          <FormControlLabel value="right" control={<Radio />} label="Right" />
          <FormControlLabel value="centre" control={<Radio />} label="Centre" />
        </RadioGroup>

      </div>
    );
  }
}

export default TimelineEditor;
