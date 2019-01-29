# React Easy Editables

**Editable fields for inline content editing**

Currently the package includes the following types of editable fields:

| Content type | Editor type |
| ----------- | ----------- |
| Plain text  | Text input |
| Paragraph   | Rich text editor |
| Number   | Number input |
| Image   | Image uploader with preview|
| Background Image   | Image uploader with preview |
| File  | File uploader |
| Link  | Text inputs for URL and anchor |


Check out the (demo page)[https://www.github.com/s-kennedy] to see the different types of editable fields in action.

## Usage

```
import React from 'react';
import { EditablesContext, theme } from '../../src/editables/EditablesContext';

import PlainText from '../../src/editables/PlainText';

class App extends React.Component {
  state = {
    showEditingControls: true,
    theme: theme,
    title: { text: "Editable title" },
  }

  handleSave = text => {
    this.setState({ title: { text } })
  }

  render() {
    const { title } = this.state;

    return(
      <EditablesContext.Provider value={ {...this.state} }>
        <h1>
          <PlainText content={title} onSave={this.handleSave} />
        </h1>
      </EditablesContext.Provider>
    );
  }
}
```

## Theme

You can update the appearance of the editable fields by updating the `theme` object. These are the defaults:
```
export const theme = {
  primaryColor: "#FF6C45",
  fontFamily: "sans-serif",
  fontSize: "14px",
  editContainer: {
    backgroundColor: "rgba(255,255,255,0.3)",
    border: "1px solid black",
    position: "relative",
    padding: "8px",
  },
  editContainerHighlight: {
    backgroundColor: "rgba(255,255,255,0.9)",
    border: "1px solid #FF6C45",
    zIndex: "2500",
  },
  actions: {
    position: "absolute",
    left: "4px",
    top: "-10px",
    display: "flex",
    alignItems: "center",
    zIndex: "99",
  },
  button: {
    border: "1px solid #000",
    color: "black",
    backgroundColor: "#fff",
    height: "18px",
    width: "18px",
    borderRadius: "30px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "4px",
    "&:hover": {
      backgroundColor: "grey"
    }
  },
  saveButton: {
    backgroundColor: "#FF6C45",
  },
  cancelButton: {
    backgroundColor: "#FF6C45",
  },
  icon: {
    fontSize: "14px"
  }
};
```

## Custom editable fields

You can create custom editable fields by using the generic `Editable` component. The `Editable` component does the following:
- reads from `context` whether or not to show the editing controls
- renders the content wrapped in the editing controls or just the content according to the `showEditingControls` property on the `context`
- toggles the `isEditing` state which then renders the editor component
- passes a content object to the editor component
- passes the updated content object from the editor component back to the parent component when the save button is clicked

### Example

```
import React from "react";
import Editable from "./Editable";
import PlainTextEditor from "../editingTools/PlainTextEditor";

const EditalbleFeatureCard = props => {
  const handleSave = field => newContent => {
    props.updateContent(field, newContent);
  };

  const { content } = props;

  return (
    <div className="col-md-3 col-sm-12 service-sub text-center">
      <i className="icon-tools  icon-extra-large fast-yellow-text margin-seven no-margin-lr no-margin-top"></i>
      <span className="text-medium font-weight-600 letter-spacing-2 text-uppercase black-text margin-one no-margin-lr no-margin-top display-block alt-font">
          <Editable
            editor={PlainTextEditor}
            content={{ text: content.header }}
            handleSave={ handleSave("header") }
          >
            {content.header}
          </Editable>
      </span>

      <Editable
        editor={PlainTextEditor}
        content={{ text: content.description }}
        handleSave={ handleSave("description") }
      >
        <p className="text-medium width-80 center-col">{content.description}</p>
      </Editable>
    </div>
  );
};

export default EditalbleFeatureCard;
```


