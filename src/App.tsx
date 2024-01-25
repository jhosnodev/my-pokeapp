import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Items from './pages/Items'
import Pokemons from './pages/Pokemons'
import Pokemon from './pages/Pokemon'
import Type from './pages/Type'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/items" element={<Items />}/>
        <Route path="/pokemons" element={<Pokemons />}/>
        <Route path="/pokemons/:name" element={<Pokemon />}/>
        <Route path="/type" element={<Type />}/>
      </Routes>
      <div className="App">
        <header className="App-header">

          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;
