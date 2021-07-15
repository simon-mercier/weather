import styled from "styled-components";

export const beige = "#fbc98c";

export const Button = styled.button`
    color: ${beige};
    font-size: 1em;
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    border: none;
    margin: 8px;
    padding: 8px;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.7);
    transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);
    box-shadow: 0 0 1rem rgba(58, 57, 57, 0.2);
    &:hover {
        background-color: rgba(255, 255, 255, 0.8);
        box-shadow: 0 0 1.5rem rgba(58, 57, 57, 0.2);
    }
    &:active {
        background-color: rgba(255, 255, 255, 0.9);
        box-shadow: 0 0 1.5rem rgba(58, 57, 57, 0.3);
    }
`;


