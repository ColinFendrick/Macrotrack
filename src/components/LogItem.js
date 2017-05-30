import React from 'react'
import { Modal, LogEntry } from '.'
import store from '../store'
import { observer } from 'mobx-react'
// import FloatingActionButton from 'material-ui/FloatingActionButton'
// import ContentAdd from 'material-ui/svg-icons/content/add'
import { Table, TableHeader, TableRow, TableRowColumn, TableHeaderColumn, TableBody, TableFooter } from 'material-ui/Table'

const LogItem = ({ meal }) => (
  <div className='LogItem'>
    {meal}:
      <Table
        multiSelectable
        onRowSelection={selectedRows => console.log(selectedRows, store.log[meal])}>
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
          {(store.log && store.log[meal]) ? Object.entries(store.log[meal]).map((entry, i) => <LogEntry entry={entry} key={i} />) : null}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableRowColumn>Total</TableRowColumn>
            <TableRowColumn className='calories'>Total Cal</TableRowColumn>
            <TableRowColumn className='protein'>Total Pro</TableRowColumn>
            <TableRowColumn className='carb'>Total Carbs</TableRowColumn>
            <TableRowColumn className='fat'>Total Fats</TableRowColumn>
          </TableRow>
        </TableFooter>
      </Table>
    {/* To do: Add in action button to add food from here */}
    {/* <FloatingActionButton
      label='+'
      onTouchTap={(() => {
        store.toggle(`${meal}`)
      })}>
      <ContentAdd />
    </FloatingActionButton> */}
    <Modal meal={meal} />
  </div>
)

export default observer(LogItem)
