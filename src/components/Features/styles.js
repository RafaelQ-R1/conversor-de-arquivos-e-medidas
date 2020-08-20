import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

export const Line = styled.div`
    border: #31b9f3 4px solid;
    height: 80px;
    width: 2px;
    margin: 50px 40px 0 40px;
    box-shadow: 0 0 1px #00f49c, 0 0 10px #31b9f3;
`;

export const ListaDiferenciais = styled.div`
    background-color: #0d2235;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px 80px 40px 80px;
    height: 250px;
    box-shadow: 0 0 1px #00f453, 0 0 6px #31b9f3;
    animation: ${fadeInAnimation} 4s linear;
    @media only screen and (max-width: 847px) and (min-width: 100px) {
        height: 840px;
        width: 300px;
        margin: auto;
    }

    #Diferenciais {
        text-decoration: underline;
        font-weight: bold;
        text-align: center;
        color: #31b9ec;
        text-shadow: 0 0 1px #31b9ec, 0 0 10px #00f453;
    }
    div {
        margin: 40px 0 0 0;
        display: flex;
        flex-direction: row;

        #elemento-lista {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 20px 0 20px;
            width: 100px;
            height: 100px;

            h6 {
                margin-top: 6px;
                text-align: center;
                color: #31b9ec;
                font-size: 12px;
                font-weight: bold;
                text-decoration: underline;

                @media only screen and (max-width: 847px) and (min-width: 100px) {
                    flex-direction: column;
                    margin-top: 10px;
                }
            }
            @media only screen and (max-width: 1042px) and (min-width: 100px) {
                margin: 0 10px 0 10px;
            }
            @media only screen and (max-width: 942px) and (min-width: 100px) {
                margin: 0 5px 0 5px;
            }
            @media only screen and (max-width: 890px) and (min-width: 100px) {
                margin: 0 0 0 0;
            }
            @media only screen and (max-width: 847px) and (min-width: 100px) {
                flex-direction: column;
                margin: 20px 0 0 0;
            }
        }
        @media only screen and (max-width: 847px) and (min-width: 100px) {
            flex-direction: column;
            margin: 20px 0 0 0;
        }
    }
`;
