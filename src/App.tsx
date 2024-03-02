import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Items, Pokemon, Pokemons, Type, Map } from './pages'

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route path="/items" element={<Items />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:name" element={<Pokemon />} />
        <Route path="/type" element={<Type />} />
        <Route path="/map" element={<Map />} />
      </Routes>
   {/*    <div className="App">
    
      </div> */}
    </Router>
  );
}

export default App;
