import React from 'react'
import { TableHeaderColumn, TableRow } from 'material-ui/Table'
import store from '../store'
import { observer } from 'mobx-react'

const LogEntry = ({ entry }) => (
  <TableRow className='LogEntries' onTouchTap={() => console.log(entry)}>
    <TableHeaderColumn>{entry[1].item_name.split(' ')[0]}</TableHeaderColumn>
    <TableHeaderColumn>{entry[1].nf_calories}</TableHeaderColumn>
    <TableHeaderColumn>Protein</TableHeaderColumn>
    <TableHeaderColumn>Carbs</TableHeaderColumn>
    <TableHeaderColumn>Fats</TableHeaderColumn>
  </TableRow>
)

export default observer(LogEntry)
