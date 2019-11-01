import React from "react";
import PropTypes from "prop-types";
import axios from 'axios'

import Editable from "./Editable";
import TimelineEditor from "../editingTools/TimelineEditor";

const TIMELINES = ["timeline1", "timeline2", "timeline3"]
const initialState = {
  timeline1: {
    show: true,
    events: []
  },
  timeline2: {
    show: true,
    events: []
  },
  timeline3: {
    show: true,
    events: []
  },
  orderedEvents: []
}

class EditableTimeline extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  componentDidMount() {
    this.loadTimelineData(this.props.content)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.content !== this.props.content) {
      this.setState({ ...initialState }, this.loadTimelineData(this.props.content))
    }

    if (prevState.timeline1 !== this.state.timeline1 || prevState.timeline2 !== this.state.timeline2 || prevState.timeline3 !== this.state.timeline3) {
      this.orderEvents()
    }
  }

  handleShowTimeline(timelineId) {
    return () => this.setState({ [timelineId]: {...this.state[timelineId], show: true} })
  }

  handleHideTimeline(timelineId) {
    return () => this.setState({ [timelineId]: {...this.state[timelineId], show: false} })
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

          this.setState({ [timelineId]: { ...this.state[timelineId], events } })
        })
        .catch(err => {
          console.log(err)
        })
      }
    })
  }

  orderEvents() {
    let allEvents = []
    TIMELINES.forEach(timelineId => {
      if (this.state[timelineId].show) {
        allEvents = allEvents.concat(this.state[timelineId].events)
      }
    })

    const orderedEvents = allEvents.sort((a,b) => (parseInt(a["Year"]) - parseInt(b["Year"])))
    this.setState({ orderedEvents })
  }

  handleSave = newContent => {
    this.props.onSave(newContent);
  };

  render() {
    const { orderedEvents } = this.state;

    return (
      <Editable
        Editor={TimelineEditor}
        handleSave={this.handleSave}
        content={this.props.content}
        {...this.props}
      >
        <div className="nl-timeline">
          <fig className="legend">
            <h3>Legend</h3>
            {
              TIMELINES.map(timelineId => {
                if (this.props.content[timelineId]) {
                  return (
                    <p className={`${timelineId}`} key={timelineId}>
                      <span className={`${this.state[timelineId].show ? "" : "text-muted"}`}>{this.props.content[timelineId]}</span>
                      {this.state[timelineId].show ?
                        <span className={`toggle-timeline text-muted`} onClick={this.handleHideTimeline(timelineId)}>(hide)</span>:
                        <span className="toggle-timeline" onClick={this.handleShowTimeline(timelineId)}>(show)</span>
                      }
                    </p>
                  )
                }
              })
            }
          </fig>

          <fig className="timeline">
            <h3>Events</h3>
            <ul>
            {orderedEvents.map((event, index) => {
              if (!event['Year']) {
                return null
              }

              const year = parseInt(event['Year'])
              const month = Boolean(event['Month']) ? parseInt(event['Month']) + 1 : null
              const day = Boolean(event['Day']) ? parseInt(event['Day']) : null

              const endYear = Boolean(event['End Year']) ? parseInt(event['End Year']) : null
              const endMonth = Boolean(event['End Month']) ? parseInt(event['End Month']) + 1 : null
              const endDay = Boolean(event['End Day']) ? parseInt(event['End Day']) : null

              const startDate = new Date(year, month, day)
              const endDate = endYear ? new Date(endYear, endMonth, endDay) : null
              const highlight = event["Highlight"] == "TRUE" ? "highlight" : ""


              return(
                <li key={`event-${index}`} className={`${event["timelineId"]}`}>
                  <div className={`event ${highlight}`}>
                    <div className="dates">
                      <div className="year">{startDate.getFullYear()}</div>
                      <div className="month">
                        <span>{(Boolean(event['Month']) && Boolean(event["Day"])) && `${startDate.toLocaleDateString('default', {month: 'short', day: 'numeric'})}` || Boolean(event['Month']) && `${startDate.toLocaleDateString('default', {month: 'short'})}` || null}</span>
                      </div>
                      {
                        endDate &&
                        <div>
                          <div className="hyphen"><i className="fas fa-caret-down"></i></div>
                          <div className="year">{endDate.getFullYear()}</div>
                          <div className="month">
                            <span>{(Boolean(event['End Month']) && Boolean(event["End Day"])) && `${endDate.toLocaleDateString('default', {month: 'short', day: 'numeric'})}` || Boolean(event['End Month']) && `${endDate.toLocaleDateString('default', {month: 'short'})}` || null}</span>
                          </div>
                        </div>
                      }
                    </div>

                    <div className="info">
                      <div className="headline">
                        <strong>{event['Headline']}</strong>
                      </div>
                      <div className="description">
                        {event['Text']}
                      </div>

                      {
                        event["Link"] &&
                        <div className="description">
                          <a href={event["Link"]} target="_blank" rel="noopener"><i className="fas fa-external-link-alt"></i>{Boolean(event['Link text']) ? event['Link text'] : "More information"}</a>
                        </div>
                      }
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

