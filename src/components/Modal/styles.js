import styled from 'styled-components';

export const DownloadLink = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    h5 {
        color: #00f567;
    }
`;

export const Container = styled.div`
    background-color: #042334;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 200px;
    border-radius: 10px;
    border: 4px solid #003552;

    h2 {
        color: #00bcef;
    }

    a {
        margin: 20px 0 0 0;
        color: #00f567;
        font-weight: bolder;
        font-size: 13px;
        text-align: center;
    }
`;
