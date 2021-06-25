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
    minWidth: "200px"
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
  }
};

const StyledTable = withStyles(styles)(props => {
  const { content } = props;
  const headerRow = content[0]
  const tableData = content.slice(1)

  return (
    <Paper className={props.classes.container}>
      <Table className={props.classes.table}>
        <TableHead>
          <TableRow>
            {headerRow.map((header, index) => (
              <TableCell key={header} padding="dense">
                <TextField
                  value={header}
                  onChange={props.handleHeaderChange(
                    header,
                    index
                  )}
                  className={props.classes.input}
                />
              </TableCell>
            ))}
            <TableCell>Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, rowIndex) => (
            <TableRow key={`${props.id}-row-${rowIndex}`}>
              {row.map((item, itemIndex) => {
                return (
                  <TableCell
                    key={`$item-${rowIndex}-${itemIndex}`}
                    padding="dense"
                    className={props.classes.cell}
                  >
                    <TextField
                      type="text"
                      value={item}
                      onChange={props.handleChange(item, itemIndex)}
                      multiline={true}
                      InputProps={{ className: props.classes.input }}
                      className={props.classes.formControl}
                    />
                  </TableCell>
                );
              })}
              <TableCell padding="checkbox">
                <IconButton
                  aria-label="Delete"
                  onClick={props.handleDeleteRow(rowIndex)}
                >
                  &times;
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button className={props.classes.button} onClick={props.createNewRow}>
        Add new row
      </Button>
    </Paper>
  );
});

class EditableTable extends React.Component {
  handleChange = (fieldName, rowIndex) => input => {
    const inputValue = input.target ? input.target.value : input;
    let newData = [...this.props.content.tableData];
    const row = newData[rowIndex];
    const newRow = { ...row, [fieldName]: inputValue };
    newData.splice(rowIndex, 1, newRow);

    this.props.onContentChange({
      ...this.props.content,
      tableData: newData
    });
  };

  handleHeaderChange = (header, headerIndex) => input => {
    const inputValue = input.target ? input.target.value : input;
    let newData = [...this.props.content.tableData];
    const row = newData[rowIndex];
    const newRow = { ...row, [fieldName]: inputValue };
    newData.splice(rowIndex, 1, newRow);

    this.props.onContentChange({
      ...this.props.content,
      tableData: newData
    });
  };

  handleDeleteRow = rowIndex => () => {
    let newData = [...this.props.content.tableData];
    newData.splice(rowIndex, 1);

    this.props.onContentChange({
      ...this.props.content,
      tableData: newData
    });
  };

  defaultRowData = (row = {}) => {
    this.props.content.tableStructure.forEach(column => {
      row[column.fieldName] = "";
    });
    return row;
  };

  createNewRow = () => {
    const emptyRowData = this.defaultRowData();
    let newData = this.props.content.tableData
      ? [...this.props.content.tableData]
      : [];
    newData.push(emptyRowData);

    this.props.onContentChange({
      ...this.props.content,
      tableData: newData
    });
  };

  render() {
    return (
      <StyledTable
        {...this.props}
        content={this.props.content}
        createNewRow={this.createNewRow}
        handleDeleteRow={this.handleDeleteRow}
        handleChange={this.handleChange}
        handleHeaderChange={this.handleHeaderChange}
      />
    );
  }
}

export default EditableTable;
