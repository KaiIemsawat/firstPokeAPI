import React, { useState } from "react";

const SearchPokemon = () => {
    const [name, setName] = useState("");
    const searchPokemon = (e) => {
        e.preventDefault();
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((resp) => resp.json())
            .then((resp) => {
                console.log(resp);
                setName("");
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <form onSubmit={searchPokemon}>
                <label>Search Pokemon by Name : </label>
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <button type="submit">Search</button>
            </form>
        </>
    );
};

export default SearchPokemon;
