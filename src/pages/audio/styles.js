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

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 30px 50px 30px 50px;

    #linha1 {
        display: flex;
        flex-direction: row;
        input {
            background-color: #ced8e6;
            width: 370px;
            height: 60px;
            color: #006600;
            font-weight: bold;
            border: #103454 2px solid;
            border-radius: 4px;
            text-align: center;
        }
        #buscar {
            font-weight: bolder;
            font-style: italic;
            color: #31b9f3;
            width: 150px;
            height: 60px;
            font-size: 15px;
            background-color: #163756;
            border: #103454 2px solid;
            border-radius: 4px;

            &:hover {
                background-color: ${darken(0.1, '#1c4367')};
                cursor: pointer;
            }
        }
    }

    #linha2 {
        display: flex;
        flex-direction: row;
        #Converter {
            font-size: 15px;
            color: #31b9ec;
            font-weight: bolder;
            background-color: #00a02b;
            width: 130px;
            height: 60px;
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
            height: 60px;
            background-color: #1b3a56;
            border-color: #31b9f3;
            border-width: 0 0 0 1px;
            border-radius: 2px;
            border: #103454 2px solid;
            text-align: center;
            &:hover {
                color: ${darken(0.1, '#1c4367')};
                cursor: pointer;
            }
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

export const ListaDiferenciais = styled.div`
    background-color: #0d2235;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px 80px 40px 80px;
    border: #000000 0.5px solid;
    border-radius: 4px;
    height: 200px;
    #Diferenciais {
        text-decoration: underline;
        font-weight: bold;
        text-align: center;
        color: #31b9ec;
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

            h6 {
                margin-top: 20px;
                text-align: center;
                color: #31b9ec;
                font-size: 11px;
                font-weight: bold;
            }
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
