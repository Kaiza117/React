import './App.css';
import { useState } from 'react';
import FetchPokemon from './components/FetchPokemon';
import ShowPokemon from './components/ShowPokemon';

function App() {
    const [poke, setPoke] = useState([]);

    return (
        <>
            <FetchPokemon poke={poke} setPoke={setPoke} />
            <ShowPokemon poke={poke} />
        </>
    );
}

export default App;
