import styled, { keyframes } from 'styled-components';

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

export const Form = styled.form`
    display: flex;
    justify-content: center;

    div {
        h2 {
            margin: 60px 0 80px 90px;
            color: #00f453;
            font-family: sans-serif;
            font-weight: bold;
            font-size: 20px;
        }

        margin: 20px 0 20px 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        #painel1 {
            display: flex;
            flex-direction: row;

            margin-left: 30px;

            #select1 {
                color: #6e3aff;
                font-size: 20px;
                font-weight: bold;
            }
            #input1 {
                margin-left: 20px;
                font-weight: bold;
                color: #00a930;
                width: 300px;
                height: 20px;
            }
        }

        div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            button {
                margin: 0 0 0 30px;
                height: 40px;
                width: 120px;
                color: #31b9df;
                font-weight: bold;
                background-color: #0d2235;
                border: #103454 2px solid;
                border-radius: 4px;
            }

            input {
                margin-left: 60px;
                height: 40px;
                width: 130px;
                color: #191920;

                font-weight: bold;
            }
        }
    }
`;
