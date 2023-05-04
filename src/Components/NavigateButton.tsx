import { ReactNode } from "react";
import { Params, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
    cursor: pointer;

    background-color:#1F2937;
    color: #F3F4F6;
    font-family: "Press Start 2P";
    height: 48px;
    padding: 8px;

    :hover{
        background-color: #6B7280;
        transition: 0.8;
        position: relative;
        bottom: 2px;
    }
`


interface NavigateButtonProps {
    placeholder: "Next" | "Previous";
}

export function NavigateButton(props: NavigateButtonProps) {

    const navigate = useNavigate();


    const handleGoToNext = () => {
        const id = useParams();
        console.log(id)
        const nextId = + id + 1;
        const url = `/pokemon/${nextId}`;
        navigate(url);
    };

    const handleGoToPrevious = () => {
        const id = useParams();
        const previousId = + id - 1;
        const url = `/pokemon/${previousId}`;
        navigate(url);
    };

    return (<></>
        // <Button onClick={props.placeholder == "Next" ? handleGoToNext() : handleGoToPrevious()}>
        //     {props.placeholder}
        // </Button>
    )
}