import React from "react";
import BandInput from './BandInput'
import { useDispatch, useSelector } from "react-redux";
import { bandAdded} from './bandsSlice'

function BandsContainer() {

  const dispatch = useDispatch()
  const bandNames = useSelector(state => state.bands.entities)

  function onBandSubmit(bandName){
    dispatch(bandAdded(bandName))
  }

  const renderBandNames = bandNames.map( b => {
    return <li key={b}>{b}</li>
  })
  return (
    <div>
      BandsContainer
      <BandInput onBandSubmit={onBandSubmit}/>
      <ul>{renderBandNames}</ul>
    </div>);
}

export default BandsContainer;
