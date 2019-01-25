import React from 'react';
import { render} from 'react-dom';
import Paragraph from '../../src/editables/Paragraph';
import PlainText from '../../src/editables/PlainText';
import { EditablesContext, theme } from '../../src/editables/EditablesContext';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';


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
            <h1>
              <PlainText content={{ text: "React Easy Editables Demo" }} />
            </h1>
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
          </EditablesContext.Provider>
        </Grid>
      </Grid>
    );
  }
}

render(<App />, document.getElementById("root"));