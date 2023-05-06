import React from "react";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import { PokemonItem } from "./PokemonItem";
import { PokemonCard } from "./PokemonCard";
import { key } from "localforage";
import axios from "axios";
import { FramerLogo } from "phosphor-react";
import { Audio, RotatingLines, RotatingSquare } from 'react-loader-spinner';
import "@fontsource/press-start-2p";


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

const Loading = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        font-size: 16px;  
        color: #6B7280;

        p {
            font-family: "Press Start 2P", cursive;
        }
`

interface WrapperProps {
    numberPokemons: number;
    numberRenderPokemons?: number;
}

interface Pokemon {
    name: string;
    url: string;
}

export function Wrapper(props: WrapperProps) {
    const [pokemons, setPokemons] = useState([]);
    const [numberRenderPokemons, setnumberRenderPokemons] = useState(102);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(props.numberPokemons > 102) {
            axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${props.numberPokemons * 2}&offset=0`)
            .then(response => {
                console.log(response.data.results);
                setPokemons(response.data.results.splice(props.numberPokemons));
            }).then(() => {
                {
                    setLoading(false);
                }
            }).catch(error => {
                console.log(error);
            })
        } else{
            axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${numberRenderPokemons}&offset=0`)
            .then(response => {
                console.log(response.data.results);
                setPokemons(response.data.results.splice(props.numberPokemons));
            }).then(() => {
                {
                    setLoading(false);
                }
            }).catch(error => {
                console.log(error);
            })
        }
    }, [numberRenderPokemons])


    useEffect(() => {
        const intesectObserver = new IntersectionObserver((entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
                setLoading(true);
                setnumberRenderPokemons((numberRenderPokemonsInsideState) => numberRenderPokemonsInsideState + 102);
            }
        });

        const sentinelElement = document.querySelector("#sentinel");

        if (sentinelElement) {
            intesectObserver.observe(sentinelElement);
        }

        return () => intesectObserver.disconnect();
    }, []);

    return (
        <>
            <Container>
                {pokemons.map((pokemon: Pokemon, key) => {
                    return <PokemonItem key={key} url={pokemon.url} />
                })
                }
            </Container>
            {loading && (
                <Loading className="loading">
                    <p>loading more pokemons</p>
                    <RotatingSquare
                        height="24"
                        width="24"
                        ariaLabel="rotating-square-loading"
                        strokeWidth="4"
                        color="#6B7280"
                        visible={loading}
                    />
                </Loading>
            )}
            <div id="sentinel"></div>
        </>
    );
}