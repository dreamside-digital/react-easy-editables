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
    verticalAlign: "bottom",
    fontFamily: "inherit"
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

  const { content } = props
  const headerRow = content[0]
  const tableData = content.slice(1)

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
              {headerRow.map(header => (
                <TableCell key={header} padding="dense" className={props.classes.cell}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, rowIndex) => (
              <TableRow key={`${props.id}-row-${rowIndex}`} padding="dense">
                {row.map((item, itemIndex) => {
                  return (
                    <TableCell
                      key={`item-${rowIndex}-${itemIndex}`}
                      className={props.classes.cell}
                    >
                      {item}
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
