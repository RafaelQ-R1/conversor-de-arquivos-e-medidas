import styled from 'styled-components';

import { darken } from 'polished';

export const ListOptions = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 100px 0 150px 0;

    div {
        border: #31b9f3 4px solid;
        height: 80px;
        width: 2px;
        margin: 50px 40px 0 40px;
        box-shadow: 0 0 1px #00f49c, 0 0 10px #31b9f3;
    }
    li {
        display: flex;
        flex-direction: column;
        margin: 40px 25px 0 25px;
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
            margin-top: 80px;
        }
        &:hover {
            border-color: ${darken(0.1, '#00f49c')};
            cursor: pointer;
            box-shadow: 0 0 1px #00f49c, 0 0 10px #00f49c;

            img {
                filter: blur(0.8px);
                opacity: 0.6;
            }
            h6 {
                text-decoration: underline;
                text-shadow: 0 0 1px #00f49c, 0 0 10px #00f49c;
            }
        }
    }
    @media only screen and (max-width: 1000px) and (min-width: 880px) {
        div {
            height: 70px;
            width: 2px;
            margin: 50px 40px 0 40px;
        }
        li {
            margin: 40px 20px 0 20px;
            width: ${(props) => props.altLi || '90px'};
            height: ${(props) => props.heightLi || '90px'};
            img {
                width: ${(props) => props.widthImg || '50px'};
                height: ${(props) => props.heightImg || '50px'};
            }

            h6 {
                font-size: ${(props) => props.widthFont || '17px'};
                margin-top: 70px;
            }
        }
    }
    @media only screen and (max-width: 880px) and (min-width: 800px) {
        div {
            height: 60px;
            width: 2px;
            margin: 55px 40px 0 40px;
        }
        li {
            margin: 40px 17px 0 17px;
            width: ${(props) => props.altLi || '90px'};
            height: ${(props) => props.heightLi || '90px'};
            img {
                width: ${(props) => props.widthImg || '50px'};
                height: ${(props) => props.heightImg || '50px'};
            }

            h6 {
                font-size: ${(props) => props.widthFont || '17px'};
                margin-top: 70px;
            }
        }
    }
    @media only screen and (max-width: 800px) and (min-width: 640px) {
        div {
            height: 60px;
            width: 2px;
            margin: 50px 30px 0 30px;
        }
        li {
            margin: 40px 10px 0 10px;
            width: ${(props) => props.altLi || '80px'};
            height: ${(props) => props.heightLi || '80px'};
            img {
                width: ${(props) => props.widthImg || '40px'};
                height: ${(props) => props.heightImg || '40px'};
            }

            h6 {
                font-size: ${(props) => props.widthFont || '17px'};
                margin-top: 60px;
            }
        }
    }

    @media only screen and (max-width: 640px) and (min-width: 580px) {
        div {
            height: 50px;
            width: 2px;
            margin: 50px 10px 0 10px;
        }
        li {
            margin: 40px 7px 0 7px;
            width: ${(props) => props.altLi || '70px'};
            height: ${(props) => props.heightLi || '70px'};
            img {
                width: ${(props) => props.widthImg || '40px'};
                height: ${(props) => props.heightImg || '40px'};
            }

            h6 {
                font-size: ${(props) => props.widthFont || '17px'};
                margin-top: 50px;
            }
        }
    }
    @media only screen and (max-width: 580px) and (min-width: 100px) {
        div {
            height: 50px;
            width: 2px;
            margin: 45px 10px 0 10px;
        }
        li {
            margin: 40px 7px 0 7px;
            width: ${(props) => props.altLi || '62px'};
            height: ${(props) => props.heightLi || '62px'};
            img {
                width: ${(props) => props.widthImg || '35px'};
                height: ${(props) => props.heightImg || '35px'};
            }

            h6 {
                font-size: ${(props) => props.widthFont || '14px'};
                margin-top: 50px;
            }
        }
    }
`;
