import React from "react";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import "@fontsource/press-start-2p";

const Container = styled.div`
    
    border: 8px solid #1F2937;
    border-radius: 16px;

    height: 8.5rem;
    width: 8.5rem;

    background-color: #F3F4F6;
    

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a{
        font-size: 10px;
        font-family: "Press Start 2P";
        text-align: center;
        text-decoration: none;
        color: #6B7280;
        padding: 8px;
    }

    ::after{
        content: '1';

        width: 100%;

        display: flex;
        justify-content: flex-start;

        font-size: 12px;
        font-family: "Press Start 2P";
                
        position: relative;
        bottom: 110px;
        left: 5px;
    }

    margin: 16px;

    :hover{
       position: relative;
       bottom: 8px; 
    }

`

interface PokemonCardProps {
    name: string,
    front_default: string;
}

export function PokemonCard(props: PokemonCardProps) {



    return (

        <Container>
            <div>
                <div>
                    <div>
                        <strong> Bulbasaur</strong>
                        <div>
                            <strong className="type">Grass</strong>
                        </div>
                        <span>Seed Pokémon</span>

                    </div>
                </div>
            </div>
        </Container>

    );
}