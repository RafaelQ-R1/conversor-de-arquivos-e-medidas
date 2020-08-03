import styled, { keyframes } from 'styled-components';

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


export const Panel = styled.div`
  background-color: #0d2235;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px 80px 40px 80px;
    border: #000000 0.5px solid;
    border-radius: 4px;
    height: 200px;

    div{
        div{
strong{

}
 
 input{
     

 }

        }
        div{
            strong{

}
 
 input{
     

 }


        }
        div{
            strong{

}
 
 input{
     

 }


        }
    }
`;
