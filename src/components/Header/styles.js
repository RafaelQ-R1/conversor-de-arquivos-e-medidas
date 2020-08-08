import styled, { keyframes } from 'styled-components';
import { flipInX } from 'react-animations';

const flipAnimation = keyframes`${flipInX}`;

export const Header = styled.h1`
    text-align: center;
    margin: 90px 0 90px 0;
    text-decoration: underline;
    color: #00f453;
    animation: ${flipAnimation} 2s;
`;
