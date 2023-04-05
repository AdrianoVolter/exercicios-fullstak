import styled from "styled-components";


export const SCButton2 = styled.button`
    background-color: ${props => props.backgroundColor || "#000"};
    width: 200px;
    height: 100px;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #e7d8d8;
        color: #000;
    }
`;