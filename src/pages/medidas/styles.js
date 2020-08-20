import styled from 'styled-components';

export const Container = styled.div`
    background: #171a23;
    height: '100%';
    padding-bottom: 100px;
    border: #1b1e28 0.5px solid;
`;

export const TypeConversion = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 40px 0 10px 50px;
    strong {
        margin: 0 20px 0 0;
        color: #6a47fa;
        font-size: 25px;
        font-family: sans-serif;
        text-decoration: underline;
        font-weight: 100;
        color: #31b9f3;
        text-shadow: 0 0 1px #00f49c, 0 0 10px #00f49c;
    }
`;
