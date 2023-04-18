import './App.scss'

//Importing data.json
import Data from './utils/data.json'
import { useState } from 'react'

function App() {
  //Randomize selection
  const [indexes, setIndexes] = useState(Math.floor(Math.random() * 3))
  // console.log(Math.floor(Math.random() * 3))

  //Toggle Class function
  const toggleClass = () => {
    let wrapper = document.querySelector('.wrapper')

    //Remove prev div class + add class to actual div
    const removePrev = () => {
      wrapper.childNodes[indexes - 1].classList.remove('show')
      wrapper.childNodes[indexes].classList.add('show')
    }

    //Remove last div class + set index to 0
    const removeLast = () => {
      wrapper.childNodes[indexes].classList.remove('show')
      setIndexes(0)
    }

    //Add class to actual div + set index +1
    const add = () => {
      wrapper.childNodes[indexes].classList.add('show')
      setIndexes(indexes + 1)
    }

    indexes >= 1 ? removePrev() : add()

    indexes < 2 ? add() : removeLast()

    indexes === 2
      ? wrapper.childNodes[indexes].classList.add('show')
      : wrapper.childNodes[2].classList.remove('show')
  }

  return (
    <div className='App'>
      <div className='container-border-white'>
        <div className='wrapper'>
          {/* Mapping throw data.json and creating 3 containers.The divs are top of each other 
              , and only visible , when clicking the onClick event , and adding the 'show' class to them. */}
          {Data.map((actualData, index) => {
            return (
              <div className='container-actual' key={index}>
                {/* backgroundColor from the json file */}
                <div className='container-title' style={{ backgroundColor: actualData.color }}>
                  <h1 className='title'>{actualData.name}</h1>
                </div>

                <div className='container-date'>
                  <p className='date'>
                    {new Date(actualData.from).toDateString().slice(3, 10)}-{' '}
                    {new Date(actualData.to).toDateString().slice(3, 10)}
                  </p>
                </div>
                {/* backgroundColor from the json file */}
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
