import styled from 'styled-components';

export const Tutorial = styled.ol`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 100px 0;

    li {
        margin: 20px 120px 20px 120px;
        #titulo-lista {
            color: #00f492;
            font-size: 20px;
            margin-bottom: 10px;
        }
        #texto-lista {
            font-size: 15px;
            text-align: left;
            color: #31b9f3;
        }
    }
`;
