import React from "react";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import "@fontsource/press-start-2p";
import { Shield, TrendDown } from "phosphor-react";

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
        justify-content: space-between;
        width: 70%;
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
    }

    img{
        max-width: 200px;
        max-height: 200px;
    }

    .stats{
        display: flex;
        align-items: center;
        justify-content: center;
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

interface PokemonCardProps {
    name: string,
    front_default: string;
}

export function PokemonCard(props: PokemonCardProps) {



    return (

        <Container>

            <div className="image-box">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="" />
            </div>
            <div className="stats-box">

                <div className="top-info">
                    <strong className="name"> Bulbasaur</strong>
                    <div className="container-type">
                        <strong className="type">Grass</strong>
                    </div>
                </div>

                <p>Seed Pokémon</p>

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
                        <Shield size={18} weight="fill" />
                        <strong> Water</strong>
                    </div>
                    <div className="stats">
                        <Shield size={18} weight="fill" />
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