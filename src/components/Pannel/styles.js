import styled from 'styled-components';

export const Body = styled.div`
    margin: 40px 30px 40px 30px;
    #title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 90px 0 0 0;
        text-align: center;
        #icon {
            size: 40px;
        }
        strong {
            margin: 10px 0 0 0;
            font-size: 20px;
            text-decoration: underline;
            color: #31b9f3;
            color: #4739ab;
        }
    }
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
                margin: 0 35px 0 70px;
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
                margin: 0 40px 0 0;
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
                    width: 170px;
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
                margin: 0 8px 0 8px;
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
                    width: 170px;
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
                width: 320px;
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
                width: 400px;
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
    }
`;
