/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import engrenagem from '../../assets/images/engrenagem.png';

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
