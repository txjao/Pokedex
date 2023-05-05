import React from "react";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import "@fontsource/press-start-2p";
import { Heart, Lightning, Shield, Sword } from "phosphor-react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 380px;
    width: 280px;

    background-color: #E5E7EB;

    border: 8px solid #4B5563;
    border-radius: 14px;

    .stats-box{
        background-color: #E5E7EB;
    
        height: 164px;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        border-radius: 0 0 14px 14px;
    }

    .image-box{
        display: flex;
        justify-content: center;
        background-color: #fff;
        width: 100%;
        border-radius: 4px;
    }

    .top-info{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 100%;
        margin-left: 8px;
    }


    .container-type{
        background-color: #374151;
        border-radius: 14px;
        color: #fff;

        padding: 5px;

        width: 60px;
        height: 24px;

        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    p{
        margin-left: 8px;
        color: #6B7280;
    }

    .type{
        font-size: 12px;
    }

    .name{
        font-size: 22px;
        margin-right: 12px;
    }

    img{
        max-width: 200px;
        max-height: 200px;
    }

    .stats{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        span{
            color: #374151;
        }
        strong{
            color: #374151;
            margin-left: 4px;
        }

        background-color: #fff;
        width: 80px;

        border-radius: 4px;
        height: 24px;

        margin: 4px;
        
    }

    .bottom-info{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 100%;
    }
`
interface Pokemon {
    sprites: {
        other: {
            "official-artwork": {
                front_default: string
            },
        }
    }
    name: string,
    types: [{
        type: {
            name: string;
        },
    }],
    stats: [{
        base_stat: number
        stat: {
            name: string
        }
    }]
    weight: number,
    height: number
}

interface PokemonCardProps {
    id: number
}

export function PokemonCard(props: PokemonCardProps) {
    const [pokemon, setPokemon] = useState<Pokemon>({
        sprites: {
            other: {
                "official-artwork": {
                    front_default: ""
                },
            }
        },
        name: "",
        types: [{
            type: {
                name: ""
            },
        }],
        stats: [{
            base_stat: 0,
            stat: {
                name: ""
            }
        }],
        weight: 0,
        height: 0
    })
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/" + props.id)
            .then((res) => {
                console.log(res.data)
                setPokemon(res.data)
            })
    }, [props.id])

    let pokemonName = "";
    let pokemonType = "";

    return (
        <Container>
            <div className="image-box">
                <img src={pokemon.sprites.other["official-artwork"].front_default} alt=""/>
            </div>
            <div className="stats-box">
                <div className="top-info">
                    {pokemon.name && (
                        pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.substring(1),
                        <strong className="name"> {pokemonName}</strong>
                    )}
                    <div className="container-type">
                        {pokemon.types[0].type.name && (
                            pokemonType = pokemon.types[0].type.name[0].toUpperCase() + pokemon.types[0].type.name.substring(1),
                            <strong className="type">{pokemonType}</strong>
                        )}
                    </div>
                </div>

                <p>Pokémon Number #{props.id}</p>

                <div className="bottom-info">
                    <div className="stats">
                    <Heart size={18} weight="fill" />
                        <strong> {pokemon.stats[0].base_stat}</strong>
                    </div>
                    <div className="stats">
                    <Sword size={18} weight="fill" />
                        {pokemon.stats.length > 2 && (
                            pokemon.stats.map((stat) => {
                                if (stat.stat.name == "attack") {
                                    return <strong> {stat.base_stat}</strong>
                                }
                            })
                        )}
                    </div>
                    <div className="stats">
                        <span>H</span>
                        <strong> {(pokemon.height) / 10}m</strong>
                    </div>
                    <div className="stats">
                    <Lightning size={18} weight="fill" />
                    {pokemon.stats.length > 2 && (
                            pokemon.stats.map((stat) => {
                                if (stat.stat.name == "speed") {
                                    return <strong> {stat.base_stat}</strong>
                                }
                            })
                        )}
                    </div>
                    <div className="stats">
                        <Shield size={18} weight="fill" />
                        {pokemon.stats.length > 2 && (
                            pokemon.stats.map((stat) => {
                                if (stat.stat.name == "defense") {
                                    return <strong> {stat.base_stat}</strong>
                                }
                            })
                        )}
                    </div>
                    <div className="stats">
                        <span>W</span>
                        <strong> {(pokemon.weight) / 10}Kg</strong>
                    </div>
                </div>
            </div>
        </Container>
    );
}