import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import './main';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <header className="d-flex flex-column align-items-center mt-5">
      <nav class="navbar fixed-top bg-body-tertiary">
      <div class="container-fluid">
      <a class="navbar-brand" href='./App.jsx'>Home</a>
      <a class="navbar-brand" href='./contact.jsx'>Contact</a>
      <a class="navbar-brand" href='./projects.jsx'>Projects</a>
      </div>
      </nav>
        <h1>My Portfolio</h1>
      </header>
      <main className="mt-5">
        <p>My name is Sufyan Gajra and I am a student at the EDX bootcamp.
          I have attached my past projects and contact details to view. There is also a link to my github so you are able to view my reposotories.
        </p>
        <img src='./assets/avatarpic'></img>
        <footer>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#00cba9" fillOpacity="1" d="M0,256L21.8,266.7C43.6,277,87,299,131,309.3C174.5,320,218,320,262,272C305.5,224,349,128,393,117.3C436.4,107,480,181,524,176C567.3,171,611,85,655,85.3C698.2,85,742,171,785,170.7C829.1,171,873,85,916,58.7C960,32,1004,64,1047,90.7C1090.9,117,1135,139,1178,138.7C1221.8,139,1265,117,1309,112C1352.7,107,1396,117,1418,122.7L1440,128L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
          </svg>
      </footer>
      </main>
    </div>
  );
}

export default App;
