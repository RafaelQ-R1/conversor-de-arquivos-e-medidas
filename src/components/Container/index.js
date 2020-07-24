import React from 'react';
import engrenagem from '../../assets/images/engrenagem.png';
import Header from '../Header';
import { Container } from './styles';

const container = (props) => {
    return (
        <Container>
            <div id="divHeader">
                <h6>Conversor de arquivos e medidas </h6>
                <img src={engrenagem} alt="engrenagem" />
            </div>
            <Header label={props.label} />
        </Container>
    );
};

export default container;
