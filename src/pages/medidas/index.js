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
import Header from '../../components/Header';

import engrenagem from '../../assets/images/engrenagem.png';
import Options from '../../components/Options';

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
                <Options />
                <Header label="Escolha o formato de vídeo que quer converter" />

                <Pannel
                    strong="converter temperatura"
                    item1="Celsius"
                    item2="Farenheit"
                    item3="Kelvin"
                    item4="Libras"
                />
                <Pannel
                    strong="converter velocidade"
                    item1="km/h"
                    item2="m/s"
                    item3="ml/h"
                    item4="cm/s"
                />
                <Pannel
                    strong="converter escala"
                    item1="Centímetros"
                    item2="Metros"
                    item3="Kilometrôs"
                    item4="Parsecs"
                />

                <Pannel
                    strong="converter tempo"
                    item1="Segundos"
                    item2="Minutos"
                    item3="Horas"
                    item4="Dias"
                />
            </Container>
            <Footer />
        </>
    );
}

export default Medidas;
