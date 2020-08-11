import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

export const Title = styled.div`
    img {
        margin: 25px 25px 25px 37px;
        width: 900px;
        height: 100;
    }
    p {
        animation: ${fadeInAnimation} 3s;
        text-align: center;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        margin: 50px 0 0 0;
        left: 0;
        right: 0;
        font-family: sans-serif;
        font-size: 25px;
        cursor: pointer;
        font-weight: bold;
        font-style: italic;
        color: #31b9f3;
        text-shadow: 0 0 1px #31b9f3, 0 0 10px #31b9f3;
    }
`;
