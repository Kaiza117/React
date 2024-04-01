const FetchPokemon = ({ poke, setPoke }) => {

    const fetchPk = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => response.json())
            .then(response => { setPoke(response.results.map(pkm => pkm.name)) })
            .catch(err => { console.log(err) });
    }

    return (
        <button onClick={fetchPk}>Fetch Pokemon</button>
    );
}
export default FetchPokemon;