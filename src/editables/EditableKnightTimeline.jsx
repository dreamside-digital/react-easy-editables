import React from "react";
import PropTypes from "prop-types";

import Editable from "./Editable";
import KnightTimelineEditor from "../editingTools/KnightTimelineEditor";

import "../assets/css/timeline.css";

const isClient = typeof window !== 'undefined';
let TL = isClient ? window.TL : {};


class KnightTimeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scriptLoaded: false }
  }

  loadScript = () => {
    const existingScript = document.getElementById('timeline-script');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js';
      script.id = 'timeline-script';
      document.body.appendChild(script);

      script.onload = () => {
        this.setState({ scriptLoaded: true }, () => {
          this.instantiateTimeline()
        })
      };
    } else {
      this.setState({ scriptLoaded: true }, () => {
        this.instantiateTimeline()
      })
    }
  };

  instantiateTimeline = () => {
    if (isClient && this.state.scriptLoaded) {
      const timeline = new TL.Timeline('timeline-embed', this.props.content.src, this.props.options)
    }
  }

  componentDidMount() {
    if (isClient) {
      this.loadScript();
    }
  }

  componentDidUpdate() {
    this.instantiateTimeline();
  }

  handleSave = newContent => {
    this.props.onSave(newContent);
  };

  render() {
    const { src } = this.props.content;

    return (
      <Editable
        Editor={KnightTimelineEditor}
        handleSave={this.handleSave}
        content={{ src: src }}
        {...this.props}
      >
        <div className="knight-timeline">
          <div id='timeline-embed' style={{width: "100%", height: "600px"}} />
        </div>
      </Editable>
    );
  }
};

KnightTimeline.propTypes = {
  content: PropTypes.shape({ src: PropTypes.string }).isRequired,
  onSave: PropTypes.func.isRequired,
}

KnightTimeline.defaultProps = {
  content: { src: 'https://docs.google.com/spreadsheets/d/1KHAFOibwGI5gqfn9uPGsIRaYUoqB48jtZLJkJhBW_SQ/pubhtml' },
  onSave: newContent => console.log('Implement a function to save changes!', newContent),
}

export default KnightTimeline;

