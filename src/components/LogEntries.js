import React from 'react'
import { TableHeaderColumn, TableRow } from 'material-ui/Table'
import store from '../store'
import { observer } from 'mobx-react'

const LogEntries = ({ meal }) => (
  <TableRow className='LogEntries'>
    <TableHeaderColumn>{meal}</TableHeaderColumn>
    <TableHeaderColumn>Calories</TableHeaderColumn>
    <TableHeaderColumn>Protein</TableHeaderColumn>
    <TableHeaderColumn>Carbs</TableHeaderColumn>
    <TableHeaderColumn>Fats</TableHeaderColumn>
  </TableRow>
)

export default observer(LogEntries)
