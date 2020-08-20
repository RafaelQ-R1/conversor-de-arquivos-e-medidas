import styled from 'styled-components';

export const Container = styled.div`
    background: #171a23;
    height: '100%';
    padding-bottom: 100px;
    border: #1b1e28 0.5px solid;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    margin: 50px auto auto auto;

    h6 {
        font-size: 22px;
        margin: 50px;
        color: #00f492;
        text-shadow: 0 0 1px #31b9f3, 0 0 10px #31b9f3;
    }

    p {
        font-size: 16px;
        font-style: italic;
        text-align: center;
        color: #31b9f3;
        font-weight: bold;
    }
`;
