import React, { ReactChildren, ReactNode } from "react";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, useNavigate, useParams } from "react-router-dom";
import "@fontsource/press-start-2p";
import { key } from 'localforage';
import axios from "axios";

const Container = styled.li`
    
    cursor: pointer;

    border: 8px solid #1F2937;
    border-radius: 16px;

    height: 8.5rem;
    width: 8.5rem;

    background-color: #F3F4F6;
    
    

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    font-family: "Press Start 2P";
    text-align: center;
    text-decoration: none;
    color: #6B7280;
    padding: 8px 8px 10px 8px;
    
    div{
    }

     p{
        width: 100%;
        text-align: left;
        font-size: 12px;
        margin-top: 2px;
        font-family: "Press Start 2P";
        color: #6B7280;
    } 

    button{
        display: hidden;
    }

    margin: 16px;

    :hover{
       position: relative;
       bottom: 8px; 
    }

`
interface PokemonItemProps {
    url: string;
}

interface Pokemon {
    name: string;
    sprites: {
        front_default: string;
    };
    id: number;
}

export function PokemonItem(props: PokemonItemProps) {
    const [pokemon, setPokemon] = useState<Pokemon>({
        name: "",
        sprites: {
            front_default: "",
        },
        id: 0,
    });

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(props.url)
            .then(response => {
                setPokemon(response.data);
            }).catch(error => {
                console.log(error);
            })
    });


    return (
        <Container onClick={() => {
            navigate('/pokemon/' + pokemon.id)
            window.location.reload();
        }}>
            <p>{pokemon.id}</p>
            <div>
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            {pokemon.name}
        </Container>
    );
}

