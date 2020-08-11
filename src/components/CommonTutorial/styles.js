import styled from 'styled-components';

export const Tutorial = styled.ol`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 100px 0;

    li {
        margin: 20px 120px 20px 120px;
        #titulo-lista {
            font-size: 20px;
            margin-bottom: 10px;
            color: #00f492;
            text-shadow: 0 0 1px #31b9f3, 0 0 10px #31b9f3;
        }
        #texto-lista {
            font-size: 15px;
            text-align: left;
            color: #31b9f3;
        }
    }
`;
