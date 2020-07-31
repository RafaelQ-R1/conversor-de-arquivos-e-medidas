import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

const rotate = keyframes`
from {
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`;

export const Container = styled.div`
    background: #171a23;
    height: '100%';
    padding-bottom: 100px;

    img {
        margin: 25px 25px 25px 37px;
        width: 900px;
        height: 100;
    }
    p {
        font-weight: bold;
        font-style: italic;
        color: #31b9f3;
        text-align: center;
        font-size: 20px;
    }

    #divHeader {
        display: flex;
        justify-content: space-between;
        img {
            max-width: 40px;
            position: absolute;
            margin-left: auto;
            margin-right: auto;
            margin-top: 110px;
            left: 0;
            right: 0;
            animation: ${rotate} 4s linear infinite;
            cursor: pointer;
        }
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
    }
`;

export const Convert = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 50px 50px 50px;

    #Size-limit {
        display: flex;
        flex-direction: column;
        margin: 10px 0 0 0;

        h5 {
            color: #30aad2;
        }
        h6 {
            color: #00f49c;
        }
    }

    #Commands {
        display: flex;
        flex-direction: row;

        input {
            background-color: #ced8e6;
            width: 270px;
            height: 40px;
            color: #006600;
            font-weight: bold;
            border: #103454 2px solid;
            border-radius: 4px;
            text-align: center;
            font-size: 10px;
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

            &:hover {
                background-color: ${darken(0.1, '#1c4367')};
                cursor: pointer;
            }
        }
        #Convert {
            margin: 0 0 0 20px;
            font-weight: bolder;
            font-style: italic;
            color: #31b9f3;
            width: 120px;
            height: 40px;
            font-size: 15px;
            background-color: #163756;
            border: #103454 2px solid;
            border-radius: 4px;
        }
    }
`;

export const Properties = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    #Output {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 0 73px 0 0;

        strong {
            color: #6044e3;
            font-size: 20px;
        }
        select {
            margin: 0 0 0 15px;
            font-size: 15px;
            color: #31b9ec;
            font-weight: bolder;
            background-color: #00a02b;
            width: 130px;
            height: 30px;
            background-color: #0d2235;
            border-color: #31b9f3;
            border-width: 0 0 0 1px;
            border-radius: 2px;
            border: #103454 2px solid;
            text-align: center;
        }
    }

    #Quality {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 0 2cm 0 0;

        strong {
            margin: 0 8px 0 0;
            color: #31b9d2;
            text-decoration: underline;
        }

        input {
            margin: 0 10px 0 10px;
            width: 25px;
        }
        h6 {
            font-size: 15px;
            color: #00f49c;
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
    font-size: 12px;
`;
