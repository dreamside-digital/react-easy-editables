import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Editable from './Editable'
import TableEditor from '../editingTools/TableEditor'

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
    verticalAlign: "bottom"
  },
  formControl: {
    width: "100%"
  },
  input: {
    fontSize: "1rem"
  },
  button: {
    marginLeft: "1rem"
  },
  disabled: {
    fontStyle: "italic",
    textTransform: "uppercase"
  }
};

const EditableTable = props => {
  const handleSave = content => {
    props.onSave(content)
  }

  const { tableData, tableStructure } = props.content;

  return (
    <Editable
      Editor={TableEditor}
      handleSave={handleSave}
      content={props.content}
      { ...props }
    >
      <Paper className={props.classes.container}>
        <Table className={props.classes.table}>
          <TableHead>
            <TableRow>
              {tableStructure.map(column => (
                <TableCell key={column.fieldName} padding="dense">
                  {column.header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={`${props.id}-row-${index}`} padding="dense">
                {tableStructure.map(column => {
                  return (
                    <TableCell
                      key={`${column.fieldName}-${index}`}
                      className={props.classes.cell}
                    >
                      {row[column.fieldName]}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Editable>
  );
}

export default withStyles(styles)(EditableTable);
