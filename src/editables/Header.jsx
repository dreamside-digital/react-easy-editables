import React from "react";
import Editable from "./Editable";
import PlainTextEditor from "../editingTools/PlainTextEditor";


const Header = (props) => {
  const handleSave = content => () => {
    props.updateContent(props.sectionIndex, props.index, content)
  }

  return (
    <div className="col-md-12 col-sm-12">
      <h2 className="alt-font text-italic font-weight-600 title-thick-underline border-color-fast-yellow display-inline-block letter-spacing-1 margin-seven no-margin-lr no-margin-top xs-margin-eleven xs-no-margin-lr xs-no-margin-top">
        <Editable
          editor={PlainTextEditor}
          handleSave={handleSave}
          content={{ text: props.text }}
          {...props}
        >
          { props.text }
        </Editable>
      </h2>
    </div>
  );
}

export default Header;
