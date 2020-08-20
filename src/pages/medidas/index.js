import React from 'react';
import { FaTemperatureHigh, FaRulerCombined } from 'react-icons/fa';
import { RiTimerLine } from 'react-icons/ri';
import { IoMdSpeedometer } from 'react-icons/io';

import Pannel from '../../components/Pannel';
import Header from '../../components/Header';

import Options from '../../components/Options';

import Footer from '../../components/Footer';
import Title from '../../components/Title';
import Features from '../../components/Features';

import { Container, TypeConversion } from './styles';

function Medidas() {
    return (
        <>
            <Container>
                <Title
                    label1="conversor de arquivos e medidas"
                    label2="Converter medida"
                />
                <Options />
                <Header label="Escolha que tipo de medida quer converter" />

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
                <Features />
            </Container>
            <Footer />
        </>
    );
}

export default Medidas;
