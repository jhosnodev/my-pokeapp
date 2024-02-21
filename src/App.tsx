import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Items, Pokemon, Pokemons, Type } from './pages'

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:name" element={<Pokemon />} />
        <Route path="/type" element={<Type />} />
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
