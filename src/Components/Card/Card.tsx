import React from "react";
import { Container } from "./style";
import { useEffect, useState } from "react";

interface CardProps{
    name: string,
    front_default: string;
}


export function Card(props: CardProps){

   

    return(
        <Container>
            <img src='..../public/icons8-pokeball-color-96.png' alt="" />
            <p>aqaa</p>
        </Container>
    );
}