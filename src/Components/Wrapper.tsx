import React from "react";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import { PokemonItem } from "./PokemonItem";

const Container = styled.div`
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    justify-items: center;

    width: 80%;

    padding: 12px;
`

interface PokemonItemProps {
    name: string,
    front_default: string;
}

export function Wrapper(props: PokemonItemProps) {



    return (

        <Container>
            <PokemonItem/>
        </Container>

    );
}