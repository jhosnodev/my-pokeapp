import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {  Items, Pokemon, Pokemons, Type, Map } from './pages'

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/my-pokeapp/" element={<Pokemons />} />
        <Route path="/my-pokeapp/items" element={<Items />} />
        <Route path="/my-pokeapp/pokemons" element={<Pokemons />} />
        <Route path="/my-pokeapp/pokemons/:name" element={<Pokemon />} />
        <Route path="/my-pokeapp/type" element={<Type />} />
        <Route path="/my-pokeapp/map" element={<Map />} />
      </Routes>
   {/*    <div className="App">
    
      </div> */}
    </Router>
  );
}

export default App;
