import React from "react";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import { PokemonCard } from "../Components/PokemonCard";
import { GlobalStyle } from "../Styles/Global";
import { Wrapper } from "./WrapperItens";
import { useParams } from "react-router-dom";


const Container = styled.div`
    
    padding: 96px 0 0 0;

`

export function PokemonInfo() {
    const id = useParams();
    return (
        <Container className="main">
            <PokemonCard />
            <Wrapper numberPokemons={5}/>
            <GlobalStyle />
        </Container>
    );
}