import styled from "styled-components";
import { theme } from "./Theme";


export const SCButton2 = styled.button`
    background-color: ${props => props.backgroundColor || theme.colors.primary};
    width: 200px;
    height: 100px;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: ${theme.size.large };
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #e7d8d8;
        color: #000;
    }
`;