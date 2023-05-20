import React, { useState, useEffect } from "react";

export default function Pokemons() {
    const [pokemonList, setPokemonList] = useState([]);
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then((resp) => resp.json())
            .then((resp) => {
                console.log(resp);
                setPokemonList(resp.results);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            {pokemonList.map((pokemon, index) => (
                <p key={index}>{pokemon.name}</p>
            ))}
        </>
    );
}
