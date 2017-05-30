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
        onRowSelection={selectedRows => console.log(selectedRows)}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
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
            <TableRowColumn />
            <TableRowColumn>Total</TableRowColumn>
            <TableRowColumn className='calories'>{store.used.calories[meal]}</TableRowColumn>
            <TableRowColumn className='protein'>{store.used.protein[meal]}</TableRowColumn>
            <TableRowColumn className='carb'>{store.used.carbs[meal]}</TableRowColumn>
            <TableRowColumn className='fat'>{store.used.fats[meal]}</TableRowColumn>
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
