import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import store from '../store'

const Searchlist = ({ meal }) => (
  <GridList cellHeight={20}>
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
)

export default Searchlist
