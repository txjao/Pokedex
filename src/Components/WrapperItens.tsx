import React from "react";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import { PokemonItem } from "./PokemonItem";
import { PokemonCard } from "./PokemonCard";
import { key } from "localforage";
import axios from "axios";

const handleSetGrid = () => {
    if (window.screen.width <= 900 && window.screen.width > 475) {
        return `1fr 1fr 1fr 1fr`
    } else if (window.screen.width <= 475) {
        return `1fr 1fr`
    } else {
        return `1fr 1fr 1fr 1fr 1fr 1fr`
    }
}

const Container = styled.div`
    display: grid;
    grid-template-columns: ${handleSetGrid()};
    justify-items: center;
    overflow-y: auto;
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
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=102`)
            .then(response => {
                setPokemons(response.data.results.splice(props.numberPokemons));
            }).catch(error => {
                console.log(error);
            })
    }, [])
    return (<>
        <Container>
            {pokemons.map((pokemon: Pokemon, key) => {
                return <PokemonItem key={key} url={pokemon.url} />
            })
            }
        </Container>
        <Container id="sentinel"/>
        </>
    );
}