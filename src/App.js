import React, { useState } from 'react'

function App(){
    let [ counter, changeCounter ] = useState(1)
    window.changeCounter = changeCounter
    return (
        <div>
          <h1>{counter}</h1>
          <h4>{counter}</h1>
        </div>
    )
}

export default App;
