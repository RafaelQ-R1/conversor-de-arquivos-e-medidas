import styled, { keyframes } from 'styled-components';
import { fadeInLeft } from 'react-animations';

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

export const Body = styled.div`
    animation: ${fadeInLeftAnimation};

    #teste {
        background-color: #0d2235;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin: 10px 40px 40px 40px;
        border: #000000 0.5px solid;
        border-radius: 4px;
        height: 250px;
        display: flex;

        flex-direction: row;

        @media only screen and (max-width: 1024px) and (min-width: 750px) {
            height: 420px;
            width: 700px;
            margin: auto;
        }
        @media only screen and (max-width: 750px) and (min-width: 100px) {
            height: 670px;
            width: 450px;
            margin: auto;
        }

        #line1 {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            @media only screen and (max-width: 1024px) and (min-width: 100px) {
                flex-direction: column;
                align-items: flex-start;
            }

            @media only screen and (max-width: 750px) and (min-width: 100px) {
                margin: 0 130px 0 0;
            }

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
                @media only screen and (max-width: 1024px) and (min-width: 750px) {
                    margin: 0 0 20px 20px;
                }
                @media only screen and (max-width: 750px) and (min-width: 100px) {
                    margin: 0 0 20px 20px;
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
                @media only screen and (max-width: 1024px) and (min-width: 750px) {
                    margin: 0 0 20px 20px;
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
                @media only screen and (max-width: 1024px) and (min-width: 750px) {
                    margin: 20px 0 20px 20px;
                }

                @media only screen and (max-width: 750px) and (min-width: 100px) {
                    margin: 35px 0 35px 20px;
                }
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
                @media only screen and (max-width: 1024px) and (min-width: 750px) {
                    margin: 20px 0 20px 20px;
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

                @media only screen and (max-width: 1024px) and (min-width: 750px) {
                    margin: 20px 0 20px 20px;
                }

                @media only screen and (max-width: 750px) and (min-width: 100px) {
                    margin: 35px 0 35px 20px;
                }
            }
        }
        #line2 {
            margin: 0 0 0 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            @media only screen and (max-width: 1024px) and (min-width: 100px) {
                flex-direction: column;
                align-items: flex-start;
            }

            #box1 {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 375px;
                height: 80px;
                background-color: #183f63;
                border: #000000 0.5px solid;
                border-radius: 4px;
                @media only screen and (max-width: 1024px) and (min-width: 100px) {
                    margin: 0 0 60px 40px;
                }
                @media only screen and (max-width: 750px) and (min-width: 100px) {
                    margin: 0 0 20px 20px;
                }

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
                @media only screen and (max-width: 1024px) and (min-width: 100px) {
                    width: 375px;
                }
                @media only screen and (max-width: 750px) and (min-width: 100px) {
                    margin: 0 0 0 20px;
                }

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
    }
`;
