import React from 'react';
import { render} from 'react-dom';
import { EditablesContext, theme } from '../../src/editables/EditablesContext';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';

import Paragraph from '../../src/editables/Paragraph';
import PlainText from '../../src/editables/PlainText';
import EditableNumber from '../../src/editables/EditableNumber';
import CustomLink from "../../src/editables/CustomLink";
import Image from "../../src/editables/Image";
import FileUpload from "../../src/editables/FileUpload";
import BackgroundImage from "../../src/editables/BackgroundImage";

class App extends React.Component {
  state = {
    showEditingControls: true,
    theme: theme
  }

  toggleEditingControls = event => {
    this.setState({ showEditingControls: event.target.checked });
  }

  render() {
    return(
      <Grid container justify="center">
        <Grid item xs={11} sm={10} md={8} lg={6}>
          <EditablesContext.Provider value={ {...this.state} }>
            <BackgroundImage content={{ imageSrc: "https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c?auto=format&fit=crop&w=1399" }}>
              <h1><PlainText content={{ text: "React Easy Editables Demo" }} /></h1>
            </BackgroundImage>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.showEditingControls}
                    value={this.state.showEditingControls}
                    onChange={this.toggleEditingControls}
                    color="primary"
                  />
                }

                label="Show editable fields"
              />
            </FormGroup>
            <Paragraph content={{ text: "hello world" }} />
            <PlainText content={{ text: "This is plain text" }} />
            <CustomLink content={{ link: "#", anchor: "Button anchor text"}} />
            <EditableNumber content={{ number: 42 }} />
            <Image content={{ imageSrc: "http://placekitten.com/300/200", caption: "" }} maxSize={1024*1024*2} />
            <FileUpload content={{ filepath: "http://placekitten.com/300/200", filename: "File name" }} maxSize={1024*1024*2} />
          </EditablesContext.Provider>
        </Grid>
      </Grid>
    );
  }
}

render(<App />, document.getElementById("root"));