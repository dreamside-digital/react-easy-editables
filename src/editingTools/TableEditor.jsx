import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  container: {
    overflowX: "auto",
    paddingBottom: "1rem"
  },
  table: {
    marginBottom: "1rem"
  },
  cell: {
    whiteSpace: "normal",
    wordWrap: "break-word",
    verticalAlign: "bottom",
    minWidth: "200px",
  },
  formControl: {
    width: "100%"
  },
  input: {
    fontSize: "0.8rem"
  },
  button: {
    marginLeft: "1rem"
  },
  disabled: {
    fontStyle: "italic",
    textTransform: "uppercase"
  },
  icon: {
    height: "24px",
    width: "24px",
  }
};

const StyledTable = withStyles(styles)(props => {
  const { content } = props;
  const headerRow = content[0]
  const tableData = content.slice(1)

  return (
    <Paper className={props.classes.container}>
      <Table className={props.classes.table} size="small">
        <TableHead>
          <TableRow>
            {headerRow.map((header, index) => (
              <TableCell key={`header-${index}`}>
                <TextField
                  type="text"
                  value={header}
                  multiline={true}
                  onChange={props.handleChange(index, 0)}
                  className={props.classes.formControl}
                />
              </TableCell>
            ))}
            <TableCell>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, rowIndex) => (
            <TableRow key={`row-${rowIndex}`}>
              {row.map((item, itemIndex) => {
                return (
                  <TableCell
                    key={`$item-${rowIndex}-${itemIndex}`}
                    className={props.classes.cell}
                  >
                    <TextField
                      type="text"
                      value={item}
                      onChange={props.handleChange(itemIndex, rowIndex+1)}
                      multiline={true}
                      InputProps={{ className: props.classes.input }}
                      className={props.classes.formControl}
                    />
                  </TableCell>
                );
              })}
              <TableCell>
                <IconButton
                  aria-label="Delete row"
                  onClick={props.handleDeleteRow(rowIndex+1)}
                  className={props.classes.icon}
                >
                  &times;
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            {headerRow.map((header, index) => (
              <TableCell key={`header-${index}`}>
                <IconButton
                  aria-label="Delete column"
                  onClick={props.handleDeleteColumn(index)}
                  className={props.classes.icon}
                >
                  &times;
                </IconButton>
              </TableCell>
            ))}
          </TableRow>

        </TableBody>
      </Table>
      <Button className={props.classes.button} onClick={props.addRow}>
        Add row
      </Button>
      <Button className={props.classes.button} onClick={props.addColumn}>
        Add column
      </Button>
    </Paper>
  );
});

class EditableTable extends React.Component {
  handleChange = (itemIndex, rowIndex) => input => {
    let newContent = [...this.props.content];
    const inputValue = input.target ? input.target.value : input;
    const newRow = [...newContent[rowIndex]];
    newRow.splice(itemIndex, 1, inputValue)
    newContent.splice(rowIndex, 1, newRow);

    this.props.onContentChange(newContent);
  };

  handleDeleteRow = rowIndex => () => {
    let newContent = [...this.props.content];
    newContent.splice(rowIndex, 1);

    this.props.onContentChange(newContent);
  };

  defaultRowData = (row = {}) => {
    this.props.content.tableStructure.forEach(column => {
      row[column.fieldName] = "";
    });
    return row;
  };

  addRow = () => {
    const newContent = [...this.props.content]
    const rowDup = newContent[0]
    const newRow = rowDup.map(item => "")
    newContent.push(newRow)
    this.props.onContentChange(newContent);
  };

  addColumn = () => {
    const newContent = this.props.content.map(row => {
      row.push([])
      return row
    })

    this.props.onContentChange(newContent);
  };

  handleDeleteColumn = colIndex => () => {
    console.log({colIndex})

    const newContent = [...this.props.content].map(row => {
      row.splice(colIndex, 1)
      return row
    })

    this.props.onContentChange(newContent);
  };

  render() {
    return (
      <StyledTable
        {...this.props}
        content={this.props.content}
        addRow={this.addRow}
        addColumn={this.addColumn}
        handleDeleteRow={this.handleDeleteRow}
        handleDeleteColumn={this.handleDeleteColumn}
        handleChange={this.handleChange}
        handleHeaderChange={this.handleHeaderChange}
      />
    );
  }
}

export default EditableTable;
