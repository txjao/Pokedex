import { ArrowLeft, House } from "phosphor-react";
import { ReactNode, useEffect } from "react";
import { Params, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
    cursor: pointer;

    background-color:#1F2937;
    color: #F3F4F6;
    font-family: "Press Start 2P";
    height: 48px;
    width: 96px;
    padding: 8px;

    margin-top: 24px;

    :hover{
        background-color: #6B7280;
        transition: 0.8;
        position: relative;
        bottom: 2px;
    }
`


interface HomeButton {

}

export function HomeButton(props: HomeButton) {

    const navigate = useNavigate();


    return (
        <Button onClick={() => {
            navigate("/")

        }}>
            <House size={18} weight="fill"/>
            Home
        </Button>
    )
}