import './App.scss'

//Importing data.json
import Data from './utils/data.json'
import { useState } from 'react'

function App() {
  const [indexes, setIndexes] = useState(0)

  const toggleClass = () => {
    let wrapper = document.querySelector('.wrapper')

    const removePrevClass = () => {
      wrapper.childNodes[indexes - 1].classList.remove('show')
      wrapper.childNodes[indexes].classList.add('show')
    }

    const removeLastClass = () => {
      wrapper.childNodes[indexes].classList.remove('show')
      setIndexes(0)
    }

    const addClass = () => {
      wrapper.childNodes[indexes].classList.add('show')
      setIndexes(indexes + 1)
    }

    indexes >= 1 ? removePrevClass() : addClass()

    indexes < 2 ? addClass() : removeLastClass()

    indexes === 2
      ? wrapper.childNodes[indexes].classList.add('show')
      : wrapper.childNodes[2].classList.remove('show')

    console.log(indexes)
  }

  return (
    <div className='App'>
      <div className='container-border-white'>
        <div className='wrapper'>
          {Data.map((actualData, index) => {
            return (
              <div className='container-actual' key={index}>
                <div className='container-title' style={{ backgroundColor: actualData.color }}>
                  <h1 className='title'>{actualData.name}</h1>
                </div>

                <div className='container-date'>
                  <p className='date'>
                    {actualData.from} - {actualData.to}
                  </p>
                </div>

                <div className='container-members' style={{ backgroundColor: actualData.color }}>
                  <h2 className='members'>{actualData.talent[0]}</h2>
                  <h2 className='members'>{actualData.talent[1]}</h2>
                  <h2 className='members'>{actualData.talent[2]}</h2>
                </div>
              </div>
            )
          })}
        </div>
        <button onClick={toggleClass}>Toggle</button>
      </div>
    </div>
  )
}

export default App
