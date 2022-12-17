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
        font-family: 'Press Start 2P';
        text-align: center;
        text-decoration: none;
        color: #6B7280;
        padding: 8px;
    }

    ::after{
        content: '999';        

        font-family: 'Inter';
        text-align: end;

        background-color: #fff;

        border: solid 1px;
        border-radius: 60%;

        height: 16px;
        width: auto;
        padding: 4px;        

        position: relative;
        bottom: 11px;
        right: 50px;

       
    }

    margin-left: 500px;

`

interface CardProps {
    name: string,
    front_default: string;
}

export function Card(props: CardProps) {



    return (

        <Container>
            <a href="">
                <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' alt="" />
                <p>aqaa</p>
            </a>
        </Container>

    );
}