import React from 'react';
import { FaTemperatureHigh, FaRulerCombined, FaClock } from 'react-icons/fa';
import { RiTimerLine } from 'react-icons/ri';
import { IoMdSpeedometer } from 'react-icons/io';

import { Link } from 'react-router-dom';
import Pannel from '../../components/Pannel';
import Header from '../../components/Header';

import engrenagem from '../../assets/images/engrenagem.png';
import Options from '../../components/Options';

import Footer from '../../components/Footer';
import Title from '../../components/Title';
import { Container, TypeConversion } from './styles';

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

                <TypeConversion>
                    <strong>Converter temperatura</strong>
                    <FaTemperatureHigh size={35} color="#6a47fa" />
                </TypeConversion>
                <Pannel
                    item1="Celsius"
                    item2="Farenheit"
                    item3="Kelvin"
                    item4="Libras"
                />
                <TypeConversion>
                    <strong>Converter velocidade</strong>
                    <IoMdSpeedometer size={35} color="#6a47fa" />
                </TypeConversion>

                <Pannel item1="km/h" item2="m/s" item3="ml/h" item4="cm/s" />

                <TypeConversion>
                    <strong>Converter medidas</strong>
                    <FaRulerCombined size={35} color="#6a47fa" />
                </TypeConversion>
                <Pannel
                    item1="Centímetros"
                    item2="Metros"
                    item3="Kilometrôs"
                    item4="Parsecs"
                />

                <TypeConversion>
                    <strong>Converter tempo</strong>
                    <RiTimerLine size={35} color="#6a47fa" />
                </TypeConversion>
                <Pannel
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
