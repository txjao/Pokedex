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

const Container = styled.ul`
    display: grid;
    flex-direction: column;
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
    const [currentPage, setCurrentPage] = useState(102);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${currentPage}&offset=0`)
            .then(response => {
                setPokemons(response.data.results.splice(props.numberPokemons));
            }).catch(error => {
                console.log(error);
            })
    }, [])

    // useEffect(() => {
    //     const intesectObserver = new IntersectionObserver((entries) => {
    //         console.log("deu certo")
    //         if (entries.some(entry => entry.isIntersecting)) {
    //             console.log(currentPage)
    //             setCurrentPage((currentPageInsideState) => currentPageInsideState+currentPage)
    //         }
    //     });

    //     intesectObserver.observe(document.querySelector("#sentinel"));

    //     return () => intesectObserver.disconnect()
    // }, []);

    return (
        <>
            <Container>
                {pokemons.map((pokemon: Pokemon, key) => {
                    return <PokemonItem key={key} url={pokemon.url} />
                })
                }
            </Container>
        </>
    );
}