import React, { useState } from 'react';
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
    const [temperature1, setTemperature1] = useState(0);
    const [speed1, setSpeed1] = useState(0);
    const [metric1, setMetric1] = useState(0);
    const [time1, setTime1] = useState(0);
    const [temperature2, setTemperature2] = useState(0);
    const [speed2, setSpeed2] = useState(0);
    const [metric2, setMetric2] = useState(0);
    const [time2, setTime2] = useState(0);
    const [valueToConvert] = useState(0);
    const [convertionResult, setConversionResult] = useState(0);

    const changeTemperature1 = (e) => {
        e.preventDefault();
        setTemperature1(e.target.value);
    };
    const changeTemperature2 = (e) => {
        e.preventDefault();
        setTemperature2(e.target.value);
    };
    const convertTemperature = () => {
        const conversionResultTemperature = temperature1 + temperature2;
        setConversionResult(conversionResultTemperature);
    };

    const changeSpeed1 = (e) => {
        e.preventDefault();
        if (e.target.value === speed2) return;
        setSpeed1(e.target.value);
    };
    const changeSpeed2 = (e) => {
        e.preventDefault();
        if (e.target.value === speed1) return;
        setSpeed2(e.target.value);
    };
    const convertSpeed = () => {
        const convertSpeedResult = speed1 + speed2;
        setConversionResult(convertSpeedResult);
    };
    const changeMetric1 = (e) => {
        e.preventDefault();
        if (e.target.value === metric2) return;
        setMetric1(e.target.value);
    };
    const changeMetric2 = (e) => {
        e.preventDefault();
        if (e.target.value === metric1) return;
        setMetric2(e.target.value);
    };
    const changeTime1 = (e) => {
        e.preventDefault();
        if (e.target.value === time2) return;
        setTime1(e.target.value);
    };
    const changeTime2 = (e) => {
        e.preventDefault();
        if (e.target.value === time1) return;
        setTime2(e.target.value);
    };

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
                    onChange1={changeTemperature1}
                    onChange2={changeTemperature2}
                    convertFrom={temperature1}
                    convertTo={temperature2}
                    valueToConvert={valueToConvert}
                    convertionResult={convertionResult}
                    item="Celsius"
                    item="Farenheit"
                    item="Kelvin"
                    item="Libras"
                    value="Celsius"
                    value="Farenheit"
                    onClickAlternate={() => {
                        alert('Clicou no Alternate');
                    }}
                    onClickConvert={convertTemperature}
                />
                <TypeConversion>
                    <strong>Converter velocidade</strong>
                    <IoMdSpeedometer size={35} color="#6a47fa" />
                </TypeConversion>

                <Pannel
                    onChange1={changeSpeed1}
                    onChange2={changeSpeed2}
                    convertFrom={speed1}
                    convertTo={speed2}
                    item1="km/h"
                    item2="m/s"
                    item3="ml/h"
                    item4="cm/s"
                    onClickAlternate={() => {
                        alert('Clicou no Alternate');
                    }}
                    onClickConvert={() => {
                        alert('Clicou no Convert');
                    }}
                />

                <TypeConversion>
                    <strong>Converter medidas</strong>
                    <FaRulerCombined size={35} color="#6a47fa" />
                </TypeConversion>
                <Pannel
                    convertFrom={metric1}
                    convertTo={metric2}
                    onChange1={changeMetric1}
                    onChange2={changeMetric2}
                    item1="Centímetros"
                    item2="Metros"
                    item3="Kilometrôs"
                    item4="Parsecs"
                    onClickAlternate={() => {
                        alert('Clicou no Alternate');
                    }}
                    onClickConvert={() => {
                        alert('Clicou no Convert');
                    }}
                />

                <TypeConversion>
                    <strong>Converter tempo</strong>
                    <RiTimerLine size={35} color="#6a47fa" />
                </TypeConversion>
                <Pannel
                    convertFrom={time1}
                    convertTo={time2}
                    onChange1={changeTime1}
                    onChange2={changeTime2}
                    item1="Segundos"
                    item2="Minutos"
                    item3="Horas"
                    item4="Dias"
                    onClickAlternate={() => {
                        alert('Clicou no Alternate');
                    }}
                    onClickConvert={() => {
                        alert('Clicou no Convert');
                    }}
                />
                <Features />
            </Container>
            <Footer />
        </>
    );
}

export default Medidas;
