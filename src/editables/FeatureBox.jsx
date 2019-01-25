import React from "react";
import Editable from "./Editable";
import PlainTextEditor from "../editingTools/PlainTextEditor";

const FeatureBox = props => {
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
  console.log('FEATURE BOX', content)

  return (
    <div className="col-md-3 col-sm-12 service-sub text-center">
      <i className="icon-tools  icon-extra-large fast-yellow-text margin-seven no-margin-lr no-margin-top"></i>
      <span className="text-medium font-weight-600 letter-spacing-2 text-uppercase black-text margin-one no-margin-lr no-margin-top display-block alt-font">
          <Editable
            editor={PlainTextEditor}
            content={{ text: content.header }}
            handleSave={updateHeader}
          >
              {content.header}
          </Editable>
      </span>

      <Editable
        editor={PlainTextEditor}
        content={{ text: content.description }}
        handleSave={updateDescription}
      >
        <p className="text-medium width-80 center-col">{content.description}</p>
      </Editable>
    </div>
  );
};

export default FeatureBox;
