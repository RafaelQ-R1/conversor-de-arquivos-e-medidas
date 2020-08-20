import styled from 'styled-components';

export const ListaDiferenciais = styled.div`
    background-color: #0d2235;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px 80px 40px 80px;
    border: #000000 0.5px solid;
    border-radius: 4px;
    height: 250px;
    @media only screen and (max-width: 782px) and (min-width: 600px) {
        height: 300px;
    }
    @media only screen and (max-width: 680px) and (min-width: 100px) {
        height: 850px;
    }

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

                @media only screen and (max-width: 782px) and (min-width: 100px) {
                    margin-top: 10px;
                }
            }
            @media only screen and (max-width: 782px) and (min-width: 100px) {
                margin: 20px 10px 30px 10px;
            }
        }
        @media only screen and (max-width: 680px) and (min-width: 100px) {
            flex-direction: column;
            margin: 15px 0 0 0;
        }
    }
`;
