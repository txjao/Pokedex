import React from "react";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import { PokemonCard } from "../Components/PokemonCard";
import { GlobalStyle } from "../Styles/Global";
import { Wrapper } from "../Components/WrapperItens";
import { useNavigate, useParams } from "react-router-dom";
import { NavigateButton } from "../Components/NavigateButton";


const Container = styled.div`
    padding: 96px 0 0 0;

    display: flex;
    justify-content: center;
    flex-direction: column;

    .card{
        display: flex;
        flex-direction: ${window.screen.width > 768 ? `row` : `column`};
        justify-content:${window.screen.width > 500 ? `space-evenly` : `center`};
        align-items: ${window.screen.width > 768 ? `flex-end` : `center`};
        width: ${window.screen.width > 1440 ? `50vw` : `100%`};
    }

    .mobile{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        margin-top: 12px
    }
`

export function PokemonInfo() {
    const param = useParams();
    const id = param.id?.toString();
    const navigate = useNavigate();



    return (
        <Container className="main">
            {id && (
            <>
                <div className="card">

                    {window.screen.width > 768 ?
                        <>
                            <NavigateButton placeholder="Previous" id={parseInt(id)} />
                            <PokemonCard id={parseInt(id)} />
                            <NavigateButton placeholder="Next" id={parseInt(id)} />
                        </> :
                        <>
                            <PokemonCard id={parseInt(id)} />
                            <div className="mobile">
                                <NavigateButton placeholder="Previous" id={parseInt(id)} />
                                <NavigateButton placeholder="Next" id={parseInt(id)} />
                            </div>
                        </>
                    }
                </div>
                <Wrapper numberPokemons={parseInt(id)} />
            </>
            )}
            <GlobalStyle />

        </Container>
    );
}