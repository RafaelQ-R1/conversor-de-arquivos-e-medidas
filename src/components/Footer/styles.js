import styled from 'styled-components';

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    background-color: #000000;
    border: 2px solid;
    border-top-color: #31b9f3;

    #footerTexts {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        h5 {
            margin: 8px 0 8px 0;
            color: #00f49c;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;

            &:hover {
                color: #31b9f3;
                text-shadow: 0 0 1px #00f49c, 0 0 10px #00f49c;
            }
        }
    }

    div {
        ul {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            margin: 10px 0 40px 0px;
            li {
                margin: 0 10px 0 10px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                width: 50px;
                height: 50px;
                cursor: pointer;
                border: 2px #2d394e solid;
                img {
                    position: absolute;
                    width: 20px;
                    height: 20px;
                }
                &:hover {
                    border-color: #31b9f3;
                    box-shadow: 0 0 1px #00f49c, 0 0 10px #00f49c;
                }
            }
        }
    }
`;
