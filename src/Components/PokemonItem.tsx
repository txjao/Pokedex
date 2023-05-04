import React, { ReactChildren, ReactNode } from "react";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, useNavigate, useParams } from "react-router-dom";
import "@fontsource/press-start-2p";
import { key } from 'localforage';

const Container = styled.button`
    
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
    

    /* ::after{
        content: ${props => props.id};

        width: 100%;

        display: flex;
        justify-content: flex-start;

        font-size: 12px;
        color: #1F2937;
                
        position: relative;
        bottom: 105px;
    } */

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
    name: ReactNode,
    front_default: string;
}

export function PokemonItem(props: PokemonItemProps) {
    const navigate = useNavigate();

    return (
            <Container onClick={()=>{
                navigate('/pokemon/'+ 1)
            }}>
                <div className="icon">
                    <img src={props.front_default} alt="" />
                </div>
                {props.name}
            </Container>
    );
}

