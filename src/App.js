import './App.scss'

//Importing data.json
import Data from './utils/data.json'
import { useState } from 'react'

function App() {
  return (
    <div className='App'>
      <div className='container-border-white'>
        <div className='container-actual'>
          {Data.map((actualData, index) => {
            return (
              <div key={index}>
                <div className='container-title'>
                  <h1 className='title'>{actualData.name}</h1>
                </div>

                <div className='container-date'>
                  <p className='date'>
                    {actualData.from} - {actualData.to}
                  </p>
                </div>

                <div className='container-members'>
                  <h2>{actualData.talent}</h2>
                </div>
              </div>
            )
          })}

          <button>Toggle</button>
        </div>
      </div>
    </div>
  )
}

export default App
