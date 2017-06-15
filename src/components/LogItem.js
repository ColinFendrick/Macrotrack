import React, { Component } from 'react'
import { Modal } from '.'
import store from '../store'
import { observer } from 'mobx-react'
import { IconButton, FloatingActionButton } from 'material-ui'
import ActionDelete from 'material-ui/svg-icons/action/delete'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { Table, TableHeader, TableRow, TableRowColumn, TableHeaderColumn, TableBody, TableFooter } from 'material-ui/Table'

class LogItem extends Component {
  state = {
    selected: []
  }

  // Toggles the delete button
  _toggle = e => {
    this.setState({
      selected: e
    })
    if ((e === 'none') || (e.length === 0)) {
      store.display.remove[this.props.meal] = 'none'
    } else {
      store.display.remove[this.props.meal] = 'inline'
    }
  }

  render () {
    const { props: { meal } } = this

    // Map all the entries into a table
    const logitems = Object.entries(store.log[meal]).map((entry, i) => {
      return <TableRow key={i}
        selected={this.state.selected.indexOf(i) !== -1}
        >
        <TableRowColumn style={{'wordWrap': 'break-word'}}>
          <div>{entry[1].item_name}</div>
        </TableRowColumn>
        <TableRowColumn className='calories'>
          {entry[1].nf_calories}
        </TableRowColumn>
        <TableRowColumn className='protein'>
          {entry[1].nf_protein}
        </TableRowColumn>
        <TableRowColumn className='carb'>
          {entry[1].nf_total_carbohydrate}
        </TableRowColumn>
        <TableRowColumn className='fat'>
          {entry[1].nf_total_fat}
        </TableRowColumn>
      </TableRow>
    })

    return <div className='LogItem'>
      {meal}:
      <Table
        multiSelectable
        onRowSelection={this._toggle}
      >
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
          {/* Only render if there's data */}
          {(store.log && store.log[meal]) ? logitems : null}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableRowColumn>
              <IconButton tooltip='Delete'
                style={{'display': store.display.remove[meal]}}>
                <ActionDelete
                  // Deletes meals
                  onTouchTap={() => store.delete(meal, this.state.selected)} />
              </IconButton>
            </TableRowColumn>
            <TableRowColumn>Total</TableRowColumn>
            <TableRowColumn className='calories'>
              {store.used.calories[meal]}
            </TableRowColumn>
            <TableRowColumn className='protein'>
              {store.used.protein[meal]}
            </TableRowColumn>
            <TableRowColumn className='carb'>
              {store.used.carbs[meal]}
            </TableRowColumn>
            <TableRowColumn className='fat'>
              {store.used.fats[meal]}
            </TableRowColumn>
          </TableRow>
        </TableFooter>
      </Table>
      {/* Brings up the modal to add food */}
      <FloatingActionButton
        label='+'
        onTouchTap={() => store.mealToggle(this.props.meal)}>
        <ContentAdd />
      </FloatingActionButton>

      {store.display[meal] === 'flex' ? <Modal meal={this.props.meal} /> : <div /> }
    </div>
  }
}

export default observer(LogItem)
