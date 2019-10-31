import React from "react";
import PropTypes from "prop-types";
import axios from 'axios'

import Editable from "./Editable";
import TimelineEditor from "../editingTools/TimelineEditor";

const TIMELINES = ["timeline1", "timeline2", "timeline3"]


class EditableTimeline extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    this.loadTimelineData(this.props.content)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.content !== this.props.content) {
      this.setState({ events: [] }, this.loadTimelineData(this.props.content))
    }
  }

  loadTimelineData(content) {
    const spreadsheetId = content.spreadsheetId

    TIMELINES.forEach(timelineId => {
      if (Boolean(content[timelineId])) {
        const timelineTitle = content[timelineId]
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${timelineTitle}?key=${process.env.GATSBY_GOOGLE_API_KEY}`
        axios.get(url)
        .then(res => {
          const headings = res.data.values[0]
          let rows = [...res.data.values]
          rows.shift()
          const events = rows.map(row => {
            let item = { timelineTitle: timelineTitle, timelineId: timelineId }
            headings.map((heading, index) => {
              item[heading] = row[index]
            })
            return item
          })

          this.setState({ events: [...this.state.events].concat(events) })
        })
        .catch(err => {
          console.log(err)
        })
      }
    })
  }

  handleSave = newContent => {
    this.props.onSave(newContent);
  };

  render() {
    const { spreadsheetId, timeline1, timeline2, timeline3 } = this.props.content;
    const { events } = this.state;
    const orderedEvents = events.sort((a,b) => (parseInt(a["Year"]) - parseInt(b["Year"])))

    return (
      <Editable
        Editor={TimelineEditor}
        handleSave={this.handleSave}
        content={{ spreadsheetId, timeline1, timeline2, timeline3 }}
        {...this.props}
      >
        <div className="nl-timeline">
          <fig className="legend">
            <h3>Legend</h3>
            {
              TIMELINES.map(timelineId => {
                if (this.props.content[timelineId]) {
                  return <p className={timelineId}>{this.props.content[timelineId]}</p>
                }
              })
            }
          </fig>

          <fig className="timeline">
            <h3>Events</h3>
            <ul>
            {orderedEvents.map((event, index) => {
              const startDate = new Date(parseInt(event['Year']), parseInt(event['Month']) + 1, parseInt(event['Day']))
              const endDate = new Date(event['End Year'], event['End Month'] + 1, event['End Day'])
              const highlight = event["Highlight"] == "yes" ? "highlight" : ""

              return(
                <li key={`event-${index}`} className={`${event["timelineId"]}`}>
                  <div className={`event ${highlight}`}>
                    <div className="dates">
                      <div className="year">{event['Year']}</div>
                      <div className="month">
                        <span>{event['Month'] && `${startDate.toLocaleDateString('default', {month: 'short', day: 'numeric'})}`}</span>
                      </div>
                    </div>

                    <div className="info">
                      <div className="headline">
                        <strong>{event['Headline']}</strong>
                      </div>
                      <div className="description">
                        {event['Text']}
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
            </ul>
          </fig>
        </div>
      </Editable>
    );
  }
};

EditableTimeline.propTypes = {
  content: PropTypes.shape({ spreadsheetId: PropTypes.string.isRequired, timeline1: PropTypes.string.isRequired, timeline2: PropTypes.string, timeline3: PropTypes.string }).isRequired,
  onSave: PropTypes.func.isRequired,
}

EditableTimeline.defaultProps = {
  content: {
    spreadsheetId: '1PtqsSJq3wl09Q_IW-pgxSiXSLMYxDcrOeda7AMCM5Js',
    timeline1: "Colonial and company timeline",
  },
  onSave: newContent => console.log('Implement a function to save changes!', newContent),
}

export default EditableTimeline;

