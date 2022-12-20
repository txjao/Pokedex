import React from "react";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import { PokemonItem } from "./PokemonItem";
import { PokemonCard } from "./PokemonCard";

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
    <>
        <PokemonCard />
        <Container>
            <PokemonItem />
            <PokemonItem />
            <PokemonItem />
            <PokemonItem />
            <PokemonItem />
            <PokemonItem />
            <PokemonItem />
        </Container>
    </>
    );
}