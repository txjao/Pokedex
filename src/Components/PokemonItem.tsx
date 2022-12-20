import React from "react";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "@fontsource/press-start-2p";

const Container = styled.div`
    
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
        padding: 8px;
    

    ::after{
        content: '1';

        width: 100%;

        display: flex;
        justify-content: flex-start;

        font-size: 12px;
        color: #1F2937;
                
        position: relative;
        bottom: 105px;
    }

    margin: 16px;

    :hover{
       position: relative;
       bottom: 8px; 
    }

`

interface PokemonItemProps {
    name: string,
    front_default: string;
}

export function PokemonItem(props: PokemonItemProps) {



    return (
        <Router>
            <Container>
                <div className="icon">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="" />
                </div>
                bulbasaur
            </Container>
        </Router>

    );
}