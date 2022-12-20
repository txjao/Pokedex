import React from "react";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import "@fontsource/press-start-2p";
import { Shield, TrendDown } from "phosphor-react";

const Container = styled.div`
    height: 380px;
    width: 250px;

    .stats-box{
        background-color: #E5E7EB;
    
        height: 150px;
    }

    .top-info{
        display: flex;
        flex-direction: column;
    }

    img{
        max-width: 200px;
        max-height: 200px;
    }
`

interface PokemonCardProps {
    name: string,
    front_default: string;
}

export function PokemonCard(props: PokemonCardProps) {



    return (

        <Container>

            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="" />

            <div className="stats-box">

                <div className="top-info">
                    <div>
                        <strong> Bulbasaur</strong>
                        <div>
                            <strong className="type">Grass</strong>
                        </div>
                    </div>
                    <span>Seed Pokémon</span>
                </div>

                <div className="stats">
                    <span>HP</span>
                    <strong> 1071</strong>
                </div>

                <div>
                    <span>CP</span>
                    <strong> 951</strong>
                </div>
                <div>

                    <span>W</span>
                    <strong> 0.79m</strong>
                </div>
                <div>
                    <Shield size={32} weight="fill" />
                    <strong> Water</strong>
                </div>
                <div>
                    <Shield size={32} weight="fill" />
                    <strong> Eletric</strong>
                </div>
                <div>
                    <TrendDown size={32} weight="fill" />
                    <strong> Fire</strong>
                </div>
            </div>
        </Container>

    );
}