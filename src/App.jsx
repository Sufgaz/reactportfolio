import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
    <ul class="nav justify-content-end">
  <li class="nav-item item1">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item item2">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item item3">
    <a class="nav-link" href="#">link</a>
  </li>
</ul>
    </header>
      <h1>Welcome to my Portfolio</h1>
      <div className="card">

        <p>
          Hi, I'm Sufyan, a student at the EDX bootcamp, I have attached previous work that I have acheived as a student in the projects page.
        </p>
      </div>
    </>
  )
}


export default App
