import React from "react";
import PropTypes from "prop-types";
import axios from 'axios';

import Timeline from "react-gsheets-timeline";

import Editable from "./Editable";
import TimelineEditor from "../editingTools/TimelineEditor";


class EditableTimeline extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleSave = newContent => {
    this.props.onSave(newContent);
  };

  render() {
    const { orderedEvents } = this.state;
    const sheets = this.props.content.timelines.split(",").map(s => s.trim())

    return (
      <Editable
        Editor={TimelineEditor}
        handleSave={this.handleSave}
        content={this.props.content}
        {...this.props}
      >
        <Timeline
          spreadsheetId={this.props.content.spreadsheetId}
          sheets={sheets}
          alignment={this.props.content.alignment}
          interval={this.props.content.interval}
          startYear={this.props.content.startYear}
          apiKey={this.props.apiKey}
          config={this.props.config}
        />
      </Editable>
    );
  }
};

EditableTimeline.propTypes = {
  content: PropTypes.shape({ spreadsheetId: PropTypes.string.isRequired, timeline1: PropTypes.string.isRequired, timeline2: PropTypes.string, timeline3: PropTypes.string }).isRequired,
  onSave: PropTypes.func.isRequired,
  apiKey: PropTypes.string.isRequired,
}

EditableTimeline.defaultProps = {
  content: {
    spreadsheetId: '1vieT0gVrDOHAvAUW8uUWQZj2heeJr8Xg6bZbvKkFFbQ',
    timelines: ["Toy Story Movies"],
    apiKey: ""
  },
  onSave: newContent => console.log('Implement a function to save changes!', newContent),
}

export default EditableTimeline;

