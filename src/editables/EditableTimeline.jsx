import React from "react";
import PropTypes from "prop-types";
import axios from 'axios';

import Timeline from "react-gsheets-timeline/dist/es/Timeline";

import Editable from "./Editable";
import TimelineEditor from "../editingTools/TimelineEditor";


const EditableTimeline = ({ content, onSave, apiKey, config, ...rest }) => {

  const handleSave = newContent => {
    onSave(newContent);
  };

  const sheets = content.timelines ? content.timelines.split(",").map(s => s.trim()) : [];

  return (
    <Editable
      Editor={TimelineEditor}
      handleSave={handleSave}
      content={content}
      {...rest}
    >
      <Timeline
        spreadsheetId={content.spreadsheetId}
        sheets={sheets}
        alignment={content.alignment}
        interval={content.interval}
        startYear={content.startYear}
        apiKey={apiKey}
        config={config}
      />
    </Editable>
  );
};

EditableTimeline.propTypes = {
  content: PropTypes.shape({
    spreadsheetId: PropTypes.string.isRequired,
    timelines: PropTypes.string.isRequired,
    alignment: PropTypes.string,
    interval: PropTypes.string,
    startYear: PropTypes.string }).isRequired,
  config: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  apiKey: PropTypes.string.isRequired,
}

EditableTimeline.defaultProps = {
  content: {
    spreadsheetId: '1vieT0gVrDOHAvAUW8uUWQZj2heeJr8Xg6bZbvKkFFbQ',
    timelines: "Toy Story Movies, Jurassic Park Movies, Spiderman Movies",
  },
  onSave: newContent => console.log('Implement a function to save changes!', newContent),
}

export default EditableTimeline;

