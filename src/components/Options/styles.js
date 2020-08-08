import styled, { keyframes } from 'styled-components';
import { headShake } from 'react-animations';
import { darken } from 'polished';

const flipAnimation = keyframes`${headShake}`;
export const ListOptions = styled.ul`
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
        width: ${(props) => props.altLi || '100px'};
        height: ${(props) => props.heightLi || '100px'};
        box-shadow: 15px 15px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);

        img {
            width: ${(props) => props.widthImg || '60px'};
            height: ${(props) => props.heightImg || '60px'};
            box-align: center;
            color: #006e75;
        }

        h6 {
            font-weight: bold;
            color: #31b9f3;
            text-align: center;
            font-size: ${(props) => props.widthFont || '20px'};
            position: absolute;
            margin-top: 170px;
        }
        &:hover {
            border-color: ${darken(0.1, '#00f49c')};
            animation: ${flipAnimation} 4s;
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
