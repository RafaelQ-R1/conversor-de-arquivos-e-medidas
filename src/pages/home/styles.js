import styled from 'styled-components';

export const Container = styled.div`
    background: #171a23;
    height: '100%';
    padding-bottom: 100px;
`;

export const Descriptions = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 100px 0 0 90px;

    li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 80px 100px 0px;
        height: 250px;
        width: 200px;

        img {
            max-width: 50px;
            margin: 0 0 10px 0;
        }
        h4 {
            text-align: center;
            color: #00f453;
            text-align: center;
            max-width: 150px;
            font-size: 18px;
        }

        h5 {
            margin-top: 20px;
            text-align: center;
            color: #31b9f3;
            font-weight: 500;
            max-width: 200px;
            font-size: 14px;
        }

        &:hover {
            cursor: pointer;
            box-shadow: 0 0 1px #00f453, 0 0 10px #31b9f3;

            h4 {
                color: #00f453;
                text-shadow: 0 0 1px #00f453, 0 0 10px #00f49c;
            }
            h5 {
                text-decoration: underline;
                color: #31b9f3;
                text-shadow: 0 0 1px #31b9f3, 0 0 10px #00f49c;
            }
        }
    }
`;
