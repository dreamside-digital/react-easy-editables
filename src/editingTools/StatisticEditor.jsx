import React from 'react'
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';


class StatisticEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = { content: this.props.content };
  }

  handleNumberChange = (event) => {
    const number = event.currentTarget.value;
    this.setState({
      content: {
        ...this.state.content,
        number: number
      }
    });
  };

  handleLabelChange = (event) => {
    const label = event.currentTarget.value;
    this.setState({
      content: {
        ...this.state.content,
        label: label
      }
    });
  };

  render() {
    const { number, label } = this.state.content;

    return (
      <div>
        <FormControl margin="normal">
          <Input
            name='number'
            type="number"
            value={ number }
            onChange={this.handleNumberChange}
            label="Number"
          />
        </FormControl>
        <FormControl margin="normal">
          <TextField
            name='label'
            value={ label }
            onChange={this.handleLabelChange}
            label="Label"
          />
        </FormControl>
      </div>
    )
  }
};

export default StatisticEditor;