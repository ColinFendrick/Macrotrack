import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import store from '../store'

const Searchlist = ({ meal }) => (
  <GridList cellHeight={20}>
    {store.entries.map(entry => <GridTile
      title={entry.fields.item_name}
      subtitle={entry.fields.item_description}
      key={entry.fields.item_id}
      onTouchTap={() => store.add(entry, meal)}>
      <img src={entry.fields.images_front_full_url} alt=' No image' />
    </GridTile>)}
  </GridList>
)

export default Searchlist
