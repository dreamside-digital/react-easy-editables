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

const TimelineEditor =  ({ content, onChangeContent }) => {

  const handleChange = id => event => {
    const value = event.currentTarget.value;
    onChangeContent({
      ...content,
      [id]: value
    })
  }

  const spreadsheetId = Boolean(content) ? content.spreadsheetId : '';
  const timelines = Boolean(content) ? content.timelines : '';
  const alignment = Boolean(content) ? content.alignment : 'left';
  const interval = Boolean(content) ? content.interval : '';
  const startYear = Boolean(content) ? content.startYear : '';

  return (
    <div>
      <FormLabel component="label" htmlFor="speadsheetId">Google spreadsheet ID</FormLabel>
      <TextField
        id="spreadsheetId"
        style={styles.input}
        value={spreadsheetId}
        onChange={handleChange(spreadsheetId)}
        helperText="Enter the ID of the Google Spreadsheet (the part of the url that comes after https://docs.google.com/spreadsheets/d/)"
        required
      />

      <FormLabel component="label" htmlFor="timelines">Sheet titles</FormLabel>
      <TextField
        id="timelines"
        style={styles.input}
        value={timelines}
        onChange={handleChange('timelines')}
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
        onChange={handleChange('interval')}
        helperText="Enter the interval in years. Leave it blank to omit the time markers."
      />

      <FormLabel component="label" htmlFor="startYear">Start year (optional)</FormLabel>
      <TextField
        id="startYear"
        type="number"
        style={styles.input}
        value={startYear}
        onChange={handleChange('startYear')}
        helperText="Enter the start year for the time markers."
      />

      <FormLabel component="legend">Alignment</FormLabel>
      <RadioGroup aria-label="alignment" name="alignment" value={alignment} onChange={handleChange('alignment')} required>
        <FormControlLabel value="left" control={<Radio />} label="Left" />
        <FormControlLabel value="right" control={<Radio />} label="Right" />
        <FormControlLabel value="center" control={<Radio />} label="Center" />
      </RadioGroup>

    </div>
  );
}

export default TimelineEditor;
