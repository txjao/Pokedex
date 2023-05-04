import React from "react";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";
import { GlobalStyle } from "../Styles/Global";
import { Wrapper } from "./WrapperItens";
import { useParams } from "react-router-dom";
import { NavigateButton } from "./NavigateButton";


const Container = styled.div`
    padding: 96px 0 0 0;

    .card{
        display: flex;
        justify-content: space-evenly;
        align-items: flex-end;
    }
`

export function PokemonInfo() {
    const id = useParams();
    
    return (
        <Container className="main">
            <div className="card">
            <NavigateButton placeholder="Previous"/>
            <PokemonCard />
            <NavigateButton placeholder="Next"/>
            </div>
            <Wrapper numberPokemons={5}/>
            <GlobalStyle />
        </Container>
    );
}