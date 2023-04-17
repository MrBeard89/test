import './App.scss'

function App() {
  return (
    <div className='App'>
      <div className='container-border-white'>
        <div className='container-actual'>
          <div className='container-title'>
            <h1 className='title'>Title</h1>
          </div>

          <div className='container-date'>
            <p className='date'>Date</p>
          </div>

          <div className='container-members'>
            <h2 className='member'>member</h2>
            <h2 className='member'>member</h2>
            <h2 className='member'>member</h2>
          </div>

          <button>Toggle</button>
        </div>
      </div>
    </div>
  )
}

export default App
