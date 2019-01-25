import React from "react";
import Editable from "./Editable";
import PlainTextEditor from "../editingTools/PlainTextEditor";

const Phase = props => {
  const handleSave = newContent => {
    props.updateContent(props.sectionIndex, props.index, newContent);
  };

  const updateHeader = updated => {
    handleSave({ header: updated.text });
  };

  const updateDescription = updated => {
    handleSave({ description: updated.text });
  };

  const { content } = props;
  console.log('PHASE', content)

  return (
    <div
      className="col-md-3 col-sm-4 testimonial-style1 text-left wow fadeInUp xs-margin-nineteen xs-no-margin-top xs-no-margin-lr"
      data-wow-duration="300ms"
    >
      <span className="name yellow-text">
        <h4 className="alt-font text-italic font-weight-600 title-thick-underline border-color-fast-yellow display-inline-block letter-spacing-1 margin-seven no-margin-lr no-margin-top xs-margin-eleven xs-no-margin-lr xs-no-margin-top">
          <Editable
            editor={PlainTextEditor}
            content={{ text: content.header }}
            handleSave={updateHeader}
          >
              {content.header}
          </Editable>
        </h4>
      </span>

      <Editable
        editor={PlainTextEditor}
        content={{ text: content.description }}
        handleSave={updateDescription}
      >
        <p className="center-col width-90">{content.description}</p>
      </Editable>

      <i className="fa fa-arrow-circle-right icon-small yellow-text display-block margin-fifteen no-margin-bottom xs-margin-two xs-no-margin-bottom" />
    </div>
  );
};

export default Phase;
