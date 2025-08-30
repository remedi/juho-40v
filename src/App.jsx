import { useState } from 'react'
import photo from '/photo.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Juho 40v</h3>
      <h1>EräRetki 2026</h1>
      <p>40 vuotta elämää huipentuu kärsimykseen erämaan armoilla.</p>
      <div className="flex">
        <img src={photo} className="logo" alt="JUHO" />
      </div>

      <div className="card">
        <button onClick={() => (window.location="https://forms.gle/39XGBmzV9nnXfzwv9")}>
          Valitse vaihtoehdot
        </button>
      </div>
      <div className="read-the-docs">
        Lisää infoa tulossa!
      </div>
    </>
  )
}

export default App
