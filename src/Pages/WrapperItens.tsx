import React from "react";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import { PokemonItem } from "../Components/PokemonItem";
import { PokemonCard } from "../Components/PokemonCard";
import { key } from "localforage";

const Container = styled.div`
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    justify-items: center;

    width: 80%;

    padding: 12px;
`

interface WrapperProps {
    numberPokemons: number;
}

export function Wrapper(props: WrapperProps) {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
            .then(async (response) => { 
                await response.json().then((data) => {
                    const n = data.results.length - props.numberPokemons;
                    setPokemons(data.results.slice(0, n));
                })
            })
    }, []);


    return (
        <Container>
            <PokemonItem name={"bulbasaur"} front_default={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"} />
        </Container>
    );
}