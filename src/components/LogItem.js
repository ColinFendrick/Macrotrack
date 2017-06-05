import React, { Component } from 'react'
// import { Modal } from '.'
import store from '../store'
import { observer } from 'mobx-react'
import { IconButton } from 'material-ui'
import ActionDelete from 'material-ui/svg-icons/action/delete'
// import ContentAdd from 'material-ui/svg-icons/content/add'
import { Table, TableHeader, TableRow, TableRowColumn, TableHeaderColumn, TableBody, TableFooter } from 'material-ui/Table'

class LogItem extends Component {
  state: {
    selected: []
  }
  logitems = Object.entries(store.log[this.props.meal]).map((entry, i) => {
    return <TableRow key={i}>
      <TableRowColumn style={{'wordWrap': 'break-word'}}>
        <div className=''>{entry[1].item_name}</div>
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

  _toggle = e => {
    if ((e === 'none') || (e.length === 0)) {
      store.display.remove[this.props.meal] = 'none'
    } else {
      store.display.remove[this.props.meal] = 'flex'
      this._selected(e)
    }
  }

  _selected = e => {
    this.setState({
      selected: e
    }, () => console.log(this.state.selected))
  }

  render () {
    const { props: { meal } } = this

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
          {(store.log && store.log[meal]) ? this.logitems : null}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableRowColumn />
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
      <IconButton tooltip='Delete'
        style={{'display': store.display.remove[meal]}}>
        <ActionDelete
          onTouchTap={() => store.delete(meal, this.state.selected)} />
      </IconButton>

      {/* To do: Add in action button to add food from here */}
      {/* <FloatingActionButton
      label='+'
      onTouchTap={(() => {
        store.toggle(`${meal}`)
      })}>
      <ContentAdd />
    </FloatingActionButton> */}
      {/* <Modal meal={this.props.meal} /> */}
    </div>
  }
}

export default observer(LogItem)
