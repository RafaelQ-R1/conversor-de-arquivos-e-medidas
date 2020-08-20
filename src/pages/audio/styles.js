import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

import { fadeInRight } from 'react-animations';

const fadeInRightAnimation = keyframes`${fadeInRight}`;

export const Container = styled.div`
    background: #171a23;
    height: '100%';
    padding-bottom: 100px;
    border: #1b1e28 0.5px solid;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 30px 50px 30px 50px;

    @media only screen and (max-width: 980px) and (min-width: 840px) {
        flex-wrap: wrap;
        margin: 0 0 0 200px;
    }
    @media only screen and (max-width: 840px) and (min-width: 690px) {
        flex-wrap: wrap;
        margin: 0 0 0 100px;
    }
    @media only screen and (max-width: 690px) and (min-width: 622px) {
        flex-wrap: wrap;
        margin: 0 0 0 50px;
    }
    @media only screen and (max-width: 622px) and (min-width: 100px) {
        flex-wrap: wrap;
        margin: 0 0 0 10px;
    }

    #linha1 {
        animation: ${fadeInRightAnimation} 0.8s linear;
        display: flex;
        flex-direction: row;
        input {
            background-color: #ced8e6;
            width: 370px;
            height: 40px;
            color: #006600;
            font-weight: bold;
            border: #103454 2px solid;
            border-radius: 4px;
            text-align: center;
            @media only screen and (max-width: 622px) and (min-width: 100px) {
                width: 300px;
            }
        }
        #buscar {
            font-weight: bolder;
            font-style: italic;
            color: #31b9f3;
            width: 150px;
            height: 40px;
            font-size: 15px;
            background-color: #0d2235;
            border: #103454 2px solid;
            border-radius: 4px;

            &:hover {
                background-color: ${darken(0.1, '#1c4367')};
                cursor: pointer;
            }
        }
        @media only screen and (max-width: 980px) and (min-width: 100px) {
            margin: 0 130px 0 0;
        }
    }

    #linha2 {
        animation: ${fadeInRightAnimation} 1s linear;
        display: flex;
        flex-direction: row;

        #Converter {
            font-size: 15px;
            color: #31b9ec;
            font-weight: bolder;
            background-color: #00a02b;
            width: 130px;
            height: 40px;
            background-color: #1b3a56;
            border-color: #31b9f3;
            border-width: 0 1px 0 0px;
            border-radius: 2px;
            border: #103454 2px solid;

            &:hover {
                color: ${darken(0.1, '#1c4367')};
                cursor: pointer;
            }
        }

        #selecionarTipo {
            font-size: 15px;
            color: #31b9ec;
            font-weight: bolder;
            background-color: #00a02b;
            width: 130px;
            height: 40px;
            background-color: #1b3a56;
            border-color: #31b9f3;
            border-width: 0 0 0 1px;
            border-radius: 2px;
            border: #103454 2px solid;
            text-align: center;

            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background-position: 218px center;

            &:hover {
                color: ${darken(0.1, '#1c4367')};
                cursor: pointer;
            }
        }
        @media only screen and (max-width: 980px) and (min-width: 100px) {
            margin: 20px 0 0 0;
        }
    }
`;

export const Tutorial = styled.ol`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 100px 0;

    li {
        margin: 20px 120px 20px 120px;
        #titulo-lista {
            font-size: 20px;
            color: #00f492;
            font-size: 15px;
            margin-bottom: 10px;
        }
        #texto-lista {
            font-size: 13px;
            text-align: left;
            color: #31b9f3;
        }
    }
`;

export const Rodape = styled.div`
    margin: 0 90px 0 90px;
    h2 {
        text-align: center;
        margin: 90px 0 70px 0;
        color: #00f453;
    }

    strong {
        text-align: center;
        color: #31b9f3;
        font-size: 12px;
    }
`;
