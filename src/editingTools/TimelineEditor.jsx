import React from "react";
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';


const styles = {
  header: {
    display: "flex"
  },
  textField: {
    width: "100%",
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: "rgba(0,0,0,0.8)",
    backgroundColor: "#fff",
  },
  input: {
    borderRadius: '0'
  },
  container: {
    padding: '0.5rem'
  },
  radioFormLabel: {
    paddingBottom: '4px'
  },
  radioButton: {
    padding: '4px',
    paddingLeft: '9px'
  }
};

const TimelineEditor =  ({ content, onContentChange }) => {

  const handleChange = id => event => {
    const value = event.currentTarget.value;
    onContentChange({
      ...content,
      [id]: value
    })
  }

  const spreadsheetId = Boolean(content) ? content.spreadsheetId : '';
  const apiKey = Boolean(content) ? content.apiKey : '';
  const timelines = Boolean(content) ? content.timelines : '';
  const alignment = Boolean(content) ? content.alignment : 'left';
  const interval = Boolean(content) ? content.interval : '';
  const startYear = Boolean(content) ? content.startYear : '';

  return (
    <Grid container spacing={1} style={styles.container}>
      <Grid item xs={12}>
        <TextField
          id="spreadsheetId"
          label="Google spreadsheet ID"
          style={styles.textField}
          value={spreadsheetId}
          onChange={handleChange(spreadsheetId)}
          helperText="Enter the ID of the Google Spreadsheet (the part of the url that comes after https://docs.google.com/spreadsheets/d/)"
          required
          variant="outlined"
          size="small"
          margin="dense"
          InputProps={{ style: styles.input }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          id="timelines"
          label="Sheet titles"
          style={styles.textField}
          value={timelines}
          onChange={handleChange('timelines')}
          helperText="Enter the titles of the spreadsheet tabs, separated by commas."
          placeholder="Sheet1, Sheet2, Sheet3"
          required
          variant="outlined"
          size="small"
          margin="dense"
          InputProps={{ style: styles.input }}
        />
      </Grid>


      <Grid item xs={12} sm={6} md={4}>
        <TextField
          id="interval"
          type="number"
          label="Time marker interval (optional)"
          style={styles.textField}
          value={interval}
          onChange={handleChange('interval')}
          helperText="Enter the interval in years. Leave it blank to omit the time markers."
          variant="outlined"
          size="small"
          margin="dense"
          InputProps={{ style: styles.input }}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <TextField
          id="startYear"
          label="Start year (optional)"
          type="number"
          style={styles.textField}
          value={startYear}
          onChange={handleChange('startYear')}
          helperText="Enter the start year for the time markers."
          variant="outlined"
          size="small"
          margin="dense"
          InputProps={{ style: styles.input }}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <FormControl component="fieldset">
          <FormLabel component="legend" style={styles.radioFormLabel}>Alignment</FormLabel>
          <RadioGroup aria-label="alignment" name="alignment" value={alignment} onChange={handleChange('alignment')} required>
            <FormControlLabel value="left" control={<Radio size="small" style={styles.radioButton} />} label="Left" />
            <FormControlLabel value="right" control={<Radio size="small" style={styles.radioButton} />} label="Right" />
            <FormControlLabel value="center" control={<Radio size="small" style={styles.radioButton} />} label="Center" />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
}

TimelineEditor.propTypes = {
  content: PropTypes.object.isRequired,
  onContentChange: PropTypes.func.isRequired,
}

TimelineEditor.defaultProps = {
  content: {
    spreadsheetId: '1vieT0gVrDOHAvAUW8uUWQZj2heeJr8Xg6bZbvKkFFbQ',
    timelines: "Toy Story Movies, Jurassic Park Movies, Spiderman Movies",
    apiKey: ""
  },
  onContentChange: updated => console.log('Implement a function to save content changes.', updated),
}

export default TimelineEditor;
