import React from "react";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import "@fontsource/press-start-2p";
import { Shield, TrendDown } from "phosphor-react";

const Container = styled.div`
    height: 380px;
    width: 250px;

    background-color: #fff;

    border: 8px solid #4B5563;
    border-radius: 14px;

    .stats-box{
        background-color: #E5E7EB;
    
        height: 150px;
    }

    .top-info{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 70%;
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

    .type{
        font-size: 12px;
    }

    .name{
        font-size: 22px;
    }

    img{
        max-width: 200px;
        max-height: 200px;
    }

    .stats{
        display: flex;
        align-items: center;
        span{
            color: #374151;
        }
        strong{
            color: #374151;
        }

        background-color: #fff;
        width: 80px;
    }

    .bottom-info{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
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
                    <strong className="name"> Bulbasaur</strong>
                    <div className="container-type">
                        <strong className="type">Grass</strong>
                    </div>
                </div>

                <span>Seed Pokémon</span>

                <div className="bottom-info">
                    <div className="stats">
                        <span>HP</span>
                        <strong> 1071</strong>
                    </div>

                    <div className="stats">
                        <span>CP</span>
                        <strong> 951</strong>
                    </div>
                    <div className="stats">
                        <span>W</span>
                        <strong> 0.79m</strong>
                    </div>
                    <div className="stats">
                        <Shield size={24} weight="fill" />
                        <strong> Water</strong>
                    </div>
                    <div className="stats">
                        <Shield size={24} weight="fill" />
                        <strong> Eletric</strong>
                    </div>
                    <div className="stats">
                        <TrendDown size={24} weight="fill" />
                        <strong> Fire</strong>
                    </div>
                </div>
            </div>
        </Container>

    );
}