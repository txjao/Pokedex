import React from "react";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import { PokemonCard } from "../Components/PokemonCard";
import { GlobalStyle } from "../Styles/Global";


const Container = styled.div`
    
    padding: 96px 0 0 0;

`

export function PokemonInfo() {

    

    return (
        <Container className="main">
            <PokemonCard />
            <GlobalStyle />
        </Container>
    );
}