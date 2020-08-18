import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

const rotate = keyframes`
from {
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`;

export const Title = styled.div`
    #line1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
        background-color: #0d2235;
        width: 900px;
        height: 170px;
        margin-top: 20px;
        border: solid 1px #171a1d;
        border-radius: 3px;

        h6 {
            color: #00f49c;
            text-align: center;
            position: absolute;
            margin-left: auto;
            margin-right: auto;
            margin-top: 50px;
            left: 0;
            right: 0;
            text-decoration: underline;
            font-family: sans-serif;
            font-size: 15px;
            cursor: pointer;
        }

        img {
            position: absolute;
            max-width: 40px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 100px;
            left: 0;
            right: 0;
            animation: ${rotate} 4s linear infinite;
            cursor: pointer;
        }

        @media only screen and (max-width: 980px) and (min-width: 872px) {
            width: 800px;
        }
        @media only screen and (max-width: 872px) and (min-width: 820px) {
            width: 700px;
        }
        @media only screen and (max-width: 820px) and (min-width: 710px) {
            width: 600px;
        }
        @media only screen and (max-width: 710px) and (min-width: 630px) {
            width: 570px;
        }
        @media only screen and (max-width: 630px) and (min-width: 550px) {
            width: 500px;
        }

        @media only screen and (max-width: 550px) and (min-width: 531px) {
            width: 450px;
        }

        @media only screen and (max-width: 531px) and (min-width: 507px) {
            width: 450px;
        }
        @media only screen and (max-width: 507px) and (min-width: 200px) {
            width: 400px;
        }
    }
    #screenName {
        animation: ${fadeInAnimation} 3s;
        text-align: center;
        position: relative;
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
