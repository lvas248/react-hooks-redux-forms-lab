import React, { useState } from "react";

function BandInput({onBandSubmit}) {
  
  const [ name, setName ] = useState('')

  function submitBand(e){
    e.preventDefault()
    onBandSubmit(name)
    setName('')
  }

  return (
    <div>
      Band Input
      <form onSubmit={submitBand}>
        <div>
          <label>name</label>
          <input value={name} onChange={e=> setName(e.target.value)}/>
        </div>
        <button>add band</button>
      </form>  
    </div>);
}

export default BandInput;
