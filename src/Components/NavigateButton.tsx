import { ReactNode, useEffect } from "react";
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
    placeholder: "Next" | "Previous",
    id: number
}

export function NavigateButton(props: NavigateButtonProps) {

    const navigate = useNavigate();


    const handleGoToNext = () => {
        const nextId = + props.id + 1;
        const url = `/pokemon/${nextId}`;
        navigate(url);
        window.location.reload();
    };

    const handleGoToPrevious = () => {
        const previousId = + props.id - 1;
        const url = `/pokemon/${previousId}`;
        navigate(url);
        window.location.reload();
    };

    const handleGoToHome = () => {
        if (props.id < 1) {
            navigate("/")
            window.location.reload();
        }
    }
    handleGoToHome()

    return (
        <Button onClick={() => {
            props.placeholder == "Next" ? handleGoToNext() : handleGoToPrevious()

        }}>
            {props.placeholder}
        </Button>
    )
}