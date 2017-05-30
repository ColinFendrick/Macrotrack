import React from 'react'
import { TableRowColumn, TableRow } from 'material-ui/Table'
import { observer } from 'mobx-react'

const LogEntry = ({ entry, id }) => (
  <TableRow className='LogEntries' selected onTouchTap={() => console.log(key)}>
    <TableRowColumn>{id}</TableRowColumn>
    <TableRowColumn>{entry[1].item_name}</TableRowColumn>
    <TableRowColumn className='calories'>{entry[1].nf_calories}</TableRowColumn>
    <TableRowColumn className='protein'>{entry[1].nf_protein}</TableRowColumn>
    <TableRowColumn className='carbs'>{entry[1].nf_total_carbohydrate}</TableRowColumn>
    <TableRowColumn className='fat'>{entry[1].nf_total_fat}</TableRowColumn>
  </TableRow>
)

export default observer(LogEntry)
