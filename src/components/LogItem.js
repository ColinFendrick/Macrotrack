import React from 'react'
import { Modal } from '.'
import store from '../store'
import { observer } from 'mobx-react'
import RaisedButton from 'material-ui/RaisedButton'
import { Table, TableHeader, TableRow, TableRowColumn, TableHeaderColumn, TableBody } from 'material-ui/Table'

const LogItem = ({ target }) => (
  <div className='LogItem'>
    <div className={target}>
      {target}:<br />
      <Table
        multiSelectable
        onRowSelection={selectedRows => console.log(selectedRows)}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Calories</TableHeaderColumn>
            <TableHeaderColumn>Protein</TableHeaderColumn>
            <TableHeaderColumn>Carbs</TableHeaderColumn>
            <TableHeaderColumn>Fats</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>2</TableRowColumn>
            <TableRowColumn>3</TableRowColumn>
            <TableRowColumn>3</TableRowColumn>
            <TableRowColumn>3</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
      <RaisedButton label='+'
        onTouchTap={(() => {
          store.toggle(`${target}`)
        })}
       />
      <Modal target={target} />
    </div>
  </div>
)

export default observer(LogItem)
