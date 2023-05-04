import React from "react";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import { PokemonItem } from "./PokemonItem";
import { PokemonCard } from "./PokemonCard";
import { key } from "localforage";
import axios from "axios";

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

interface Pokemon {
    name: string;
    url: string;
}

export function Wrapper(props: WrapperProps) {
    const [pokemons, setPokemons] = useState([]);



    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100`)
            .then(response => {
                const numPokemons = response.data.results.length - props.numberPokemons;
                setPokemons(response.data.results.slice(0, numPokemons));
            }).catch(error => {
                console.log(error);
            })
    }, []);

    console.log(pokemons)



    return (
        <Container>
            {pokemons.map((pokemon: Pokemon, key) => {
                return <PokemonItem key={key} url={pokemon.url} />
            })
             
        }
            
        </Container>
    );
}