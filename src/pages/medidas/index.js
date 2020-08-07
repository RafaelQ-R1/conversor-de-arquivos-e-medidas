import React from 'react';
import {
    FaExchangeAlt,
    FaTemperatureHigh,
    FaRulerCombined,
    FaClock,
    FaWeightHanging,
} from 'react-icons/fa';
import { IoMdSpeedometer } from 'react-icons/io';

import { AiOutlineReload } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Pannel from '../../components/Pannel';

import engrenagem from '../../assets/images/engrenagem.png';

import Footer from '../../components/Footer';
import Title from '../../components/Title';
import { Container } from './styles';

function Medidas() {
    return (
        <>
            <Container>
                <div id="divHeader">
                    <Link to="/">
                        <h6>Conversor de arquivos e medidas </h6>
                        <img src={engrenagem} alt="engrenagem" />
                    </Link>
                </div>
                <Title label="Converter medida" />

                <Pannel strong="converter temperatura" />
                <Pannel strong="converter velocidade" />
                <Pannel strong="converter escala" />
                <Pannel strong="converter tempo" />
            </Container>
            <Footer />
        </>
    );
}

export default Medidas;
