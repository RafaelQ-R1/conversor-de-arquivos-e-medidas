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

export const Options = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 100px 0 150px 0;

    div {
        border: #31b9f3 solid;
        height: 80px;
        width: 2px;
        margin: 15px 40px 0 40px;
    }
    li {
        display: flex;
        flex-direction: column;
        margin: 0 25px 0 25px;
        background: #2d394e;
        align-items: center;
        justify-content: center;
        border: 2px #2d394e solid;
        border-radius: 2px;
        width: 100px;
        height: 100px;
        box-shadow: 15px 15px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);

        img {
            width: 60px;
            height: 60px;
            box-align: center;
            color: #006e75;
        }

        h6 {
            font-weight: bold;
            color: #31b9f3;
            text-align: center;
            font-size: 20px;
            position: absolute;
            margin-top: 170px;
        }
        &:hover {
            border-color: ${darken(0.1, '#00f49c')};
            cursor: pointer;

            img {
                filter: blur(0.8px);
                opacity: 0.6;
            }
            h6 {
                color: #00f49c;
                text-decoration: underline;
            }
        }
    }
`;

export const Descriptions = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 100px 0 0 90px;

    li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 80px 100px 0px;

        img {
            max-width: 50px;
        }
        h4 {
            text-align: center;
            color: #00f453;
            text-align: center;
            max-width: 150px;
        }

        h5 {
            margin-top: 20px;
            text-align: center;
            color: #31b9f3;
            font-weight: 500;
            max-width: 200px;
        }

        &:hover {
            cursor: pointer;

            h4 {
                color: #00f49c;
            }
            h5 {
                text-decoration: underline;
                color: #4441da;
            }
        }
    }
`;
