import React from "react";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import { PokemonItem } from "../Components/PokemonItem";
import { PokemonCard } from "../Components/PokemonCard";

const Container = styled.div`
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    justify-items: center;

    width: 80%;

    padding: 12px;
`

export function Wrapper() {



    return (
        <Container>
            <PokemonItem />
        </Container>
    );
}