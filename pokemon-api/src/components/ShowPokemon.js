const ShowPokemon = ({ poke }) => {
    return (
        <>
            <h2>Pokemon List</h2>
            <ul>
                {
                    poke.map((pkm, i) => {
                        return <li key={i}>{pkm}</li>
                    })
                }
            </ul>
        </>

    );
}

export default ShowPokemon;