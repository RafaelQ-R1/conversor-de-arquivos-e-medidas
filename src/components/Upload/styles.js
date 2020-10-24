import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

import { fadeInRight } from 'react-animations';

const fadeInRightAnimation = keyframes`${fadeInRight}`;

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 30px;
    border-radius: 8px;
    padding: 20px;
    background-color: #013854;
`;

export const Convert = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 250px 50px 250px;
    @media only screen and (max-width: 926px) and (min-width: 100px) {
        flex-wrap: wrap;
        justify-content: center;
    }

    #Browse {
        font-weight: bolder;
        font-style: italic;
        color: #31b9f3;
        width: 120px;
        height: 40px;
        font-size: 15px;
        background-color: #0d2235;
        border: #103454 2px solid;
        border-radius: 4px;
        margin: 0 0 0 0;
        &:hover {
            background-color: ${darken(0.1, '#1c4367')};
            cursor: pointer;
        }
    }
    #Output {
        display: flex;
        flex-direction: row;
        strong {
            color: #6844f8;
            margin: auto;
            font-size: 20px;
            font-weight: bold;
        }
        #Options {
            margin: 0 0 0 15px;
            font-size: 15px;
            color: #31b9ec;
            font-weight: bolder;
            width: 120px;
            height: 40px;
            background-color: #0d2235;
            border-color: #31b9f3;
            border-width: 0 0 0 1px;
            border-radius: 2px;
            border: #103454 2px solid;
            text-align: center;

            background-position: 218px center;
            @media only screen and (max-width: 685px) and (min-width: 100px) {
                margin: 10px 0 0 0px;
            }
        }
    }
`;
export const Properties = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media only screen and (max-width: 1020px) and (min-width: 100px) {
        flex-wrap: wrap;
    }

    @media only screen and (max-width: 803px) and (min-width: 100px) {
        margin-left: 80px;
    }
    @media only screen and (max-width: 728px) and (min-width: 100px) {
        margin-left: 110px;
    }
    @media only screen and (max-width: 685px) and (min-width: 100px) {
        margin-left: 150px;
    }

    #Quality {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        strong {
            margin: 0 8px 0 0;
            color: #31b9d2;
            text-decoration: underline;
        }

        input {
            margin: 0 10px 0 10px;
            width: 25px;
            height: 25px;
            &:hover {
                cursor: pointer;
            }
        }
        h6 {
            font-size: 15px;
            color: #00f49c;
        }
        @media only screen and (max-width: 685px) and (min-width: 100px) {
            margin: 0 150px 0 0;
        }
    }
`;

export const Types = styled.h2`
    margin: 50px 90px 0 90px;
    color: #00f49c;
    text-decoration: underline;
    font-style: italic;
    font-weight: bold;
    text-align: center;
    font-size: 15px;
`;
