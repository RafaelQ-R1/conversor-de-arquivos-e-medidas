import styled, { keyframes } from 'styled-components';
import { fadeInRight, fadeInUp } from 'react-animations';

const fadeInRightAnimation = keyframes`${fadeInRight}`;
const fadeInUpAnimation = keyframes`${fadeInUp}`;

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

export const Pannel = styled.div`
    background-color: #0d2235;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: 40px 30px 40px 30px;
    border: #000000 0.5px solid;
    border-radius: 4px;
    height: 450px;
    display: flex;
    flex-direction: row;
    animation: ${fadeInRightAnimation} 2s;

    #date {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 20px 0 30px 23px;
        strong {
            font-size: 15px;
            text-decoration: underline;
            color: #31b9f3;
        }

        input {
            margin: 0 0 0 20px;
            width: 190px;
            border: #103454 2px solid;
            height: 30px;
        }
    }

    #line1 {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        #value {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            margin: 0 20px 0 25px;
            strong {
                margin: 0 0 10px 0;
                color: #00f49c;
            }

            input {
                width: 120px;
            }
        }
        #convertTo {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            margin: 0 20px 0 20px;
            strong {
                margin: 0 0 10px 0;
                color: #00f49c;
            }

            select {
                margin: 0 0 0 0px;
                font-size: 15px;
                color: #31b9ec;
                font-weight: bolder;
                background-color: #00a02b;
                width: 210px;
                height: 35px;
                background-color: #0d2235;
                border-width: 0 0 0 1px;
                border-radius: 2px;
                border: #103454 4px solid;
                text-align: center;
                -webkit-appearance: none; /* Remove estilo padrão do Chrome */
                -moz-appearance: none; /* Remove estilo padrão do FireFox */
                appearance: none; /* Remove estilo padrão do FireFox*/
                background-position: 218px center; /*Posição da imagem do background*/
            }
        }
        #alternate {
            margin: 25px 20px 0 20px;
            background-color: #163756;
            height: 33px;
            width: 80px;
            color: #00f453;
            border: #31b4d2 2px solid;
            border-radius: 4px;
        }

        #for {
            margin: 0 20px 0 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            strong {
                color: #00f49c;
                margin: 0 0 10px 0;
            }

            select {
                margin: 0 0 0 0px;
                font-size: 15px;
                color: #31b9ec;
                font-weight: bolder;
                background-color: #00a02b;
                width: 215px;
                height: 35px;
                background-color: #0d2235;
                border-color: #31b9f3;
                border-width: 0 0 0 1px;
                border-radius: 2px;
                border: #103454 4px solid;
                text-align: center;

                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                background-position: 218px center;
            }
        }
        #convert {
            margin: 25px 20px 0 20px;
            background-color: #163756;
            height: 33px;
            width: 80px;
            color: #00f453;
            border: #31b4d2 2px solid;
            border-radius: 4px;
        }
    }
    #line2 {
        margin: 0 0 0 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        #box1 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 375px;
            height: 80px;
            background-color: #183f63;
            border: #000000 0.5px solid;
            border-radius: 4px;

            #box1Line1 {
                display: flex;
                flex-direction: row;
                margin: 10px 0 5px 20px;

                #strong1 {
                    margin: 0 10px 0 0;
                }
                #strong2 {
                    color: #00f49c;
                }
            }

            #box1Line2 {
                display: flex;
                flex-direction: row;
                margin: 10px 0 5px 20px;

                #strong3 {
                    margin: 0 10px 0 0;
                }
                #strong4 {
                    color: #00f49c;
                }
            }
        }
        #box2 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0 0 0 40px;
            width: 460px;
            height: 80px;
            background-color: #183f63;
            border: #000000 0.5px solid;
            border-radius: 4px;
            #box2Line1 {
                display: flex;
                flex-direction: row;
                margin: 10px 0 5px 20px;

                #strong5 {
                    margin: 0 10px 0 0;
                }
                #strong6 {
                    color: #00f49c;
                }
            }

            #box2Line2 {
                display: flex;
                flex-direction: row;
                margin: 10px 0 5px 20px;

                #strong7 {
                    margin: 0 10px 0 0;
                }
                #strong8 {
                    color: #00f49c;
                }
            }
        }
    }
    #details {
        display: flex;
        flex-direction: column;
        margin: 0 0 0 22px;
        justify-content: space-between;

        #dateCotation {
            display: flex;
            flex-direction: row;
            margin: 0 0 12px 0;
            strong {
                font-size: 18px;
            }
            h6 {
                color: #00f49c;
                margin: 5px 0 0 10px;
                font-size: 12px;
            }
        }
        #tax {
            display: flex;
            flex-direction: row;
            margin: 0 0 5px 0;
            font-size: 18px;
        }
        h6 {
            color: #00f49c;
            margin: 0 0 0 2px;
            font-size: 12px;
        }
    }
`;

export const Details = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 0 40px;
    width: 900px;
    color: #00f49c;
    font-size: 12px;
    font-weight: bold;
    animation: ${fadeInUpAnimation} 4s;
`;
