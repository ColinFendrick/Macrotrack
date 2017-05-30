import React, { Component } from 'react'
import { Modal } from '.'
import store from '../store'
import { observer } from 'mobx-react'
import IconButton from 'material-ui/IconButton'
import ActionDelete from 'material-ui/svg-icons/action/delete'
// import FloatingActionButton from 'material-ui/FloatingActionButton'
// import ContentAdd from 'material-ui/svg-icons/content/add'
import { Table, TableHeader, TableRow, TableRowColumn, TableHeaderColumn, TableBody, TableFooter } from 'material-ui/Table'

class LogItem extends Component {
  render () {
    const { props: { meal } } = this
    return <div className='LogItem'>
      {meal}:
      <Table
        multiSelectable
        onRowSelection={() =>
          store.mealToggle('remove', meal)
        }>
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
          {(store.log && store.log[meal]) ? Object.entries(store.log[meal]).map((entry, i) => <TableRow key={i}>
            <TableRowColumn>{i + 1}</TableRowColumn>
            <TableRowColumn>{entry[1].item_name}</TableRowColumn>
            <TableRowColumn className='calories'>{entry[1].nf_calories}</TableRowColumn>
            <TableRowColumn className='protein'>{entry[1].nf_protein}</TableRowColumn>
            <TableRowColumn className='carbs'>{entry[1].nf_total_carbohydrate}</TableRowColumn>
            <TableRowColumn className='fat'>{entry[1].nf_total_fat}</TableRowColumn>
          </TableRow>) : null}
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
      <IconButton tooltip='Delete'
        style={{'display': store.display.remove[meal]}}
      >
        <ActionDelete onTouchTap={() => store.delete(store.log, y, meal)} />
      </IconButton>
      {/* To do: Add in action button to add food from here */}
      {/* <FloatingActionButton
      label='+'
      onTouchTap={(() => {
        store.toggle(`${meal}`)
      })}>
      <ContentAdd />
    </FloatingActionButton> */}
      <Modal meal={this.props.meal} />
    </div>
  }
}

export default observer(LogItem)
