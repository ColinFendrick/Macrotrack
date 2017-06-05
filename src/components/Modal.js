import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from '../store'
import { TextField,
  FontIcon,
  FloatingActionButton,
GridList,
GridTile } from 'material-ui'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { AddFood, Filters } from '.'

class Modal extends Component {
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  }

  render () {
    const { props: { meal } } = this
    return <div className='Modal'
      style={{'display': store.display[meal]}}>
      <div className='modal-window'>
        <div className='modal-window-top'>
          <h4>{this.props.meal}</h4>
          <TextField hintText='Search for Recipes'
            onChange={e => {
              store.query = e.target.value
            }} />
          <FontIcon className='fa fa-times delete-button'
            onTouchTap={() => store.mealToggle(meal)} />
        </div>
        <Filters />
        <div className='grid-list'>
          <GridList cellHeight={180}
            style={this.gridList}>
            {store.entries.map((entry, i) => <GridTile
              key={i}
              title={entry.fields.item_name}
              subtitle={entry.fields.item_description}
              onTouchTap={() => store.add(entry, meal)}>
              <img src='http://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/3/22/0/FNCC_bobby-flay-salmon-brown-sugar-mustard_s4x3.jpg.rend.hgtvcom.336.252.jpeg'
                alt=' No image' />
            </GridTile>
          )}
          </GridList>
        </div>
        <div className='add-custom'>
          <FloatingActionButton>
            <ContentAdd onTouchTap={() => store.toggle('add')} />
          </FloatingActionButton>
        </div>
        <AddFood meal={meal} />
      </div>
    </div>
  }
}

export default observer(Modal)
