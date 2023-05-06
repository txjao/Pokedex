import styled from "styled-components";
import "@fontsource/press-start-2p"

const Input = styled.input`

    height: 32px;
    width: 160px;
    font-family: "Press Start 2P";
    background-color: #E5E5E5;
    border: 1px solid #000000;

    ::active{
        border: 1px solid #000000;
    }

`

export function Search(){

    return(
        <Input type="text"/>
    );
}