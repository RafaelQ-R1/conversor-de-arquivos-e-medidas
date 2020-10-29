import React, { useState } from 'react';
import convert from 'convert-units';
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
import { unities } from './unities';

function Medidas() {
    const [temperatures] = useState(unities.temperatures);
    const [temperatureToConvert, setTemperatureToConvert] = useState(0);
    const [baseTemperature, setBaseTemperature] = useState('C');
    const [targetTemperature, setTargetTemperature] = useState('K');
    const [temperatureResult, setTemperatureResult] = useState(0);

    const [speeds] = useState(unities.speeds);
    const [speedToConvert, setSpeedToConvert] = useState(0);
    const [baseSpeed, setBaseSpeed] = useState('m/s');
    const [targetSpeed, setTargetSpeed] = useState('km/h');
    const [speedResult, setSpeedResult] = useState(0);

    const [lengths] = useState(unities.lengths);
    const [lengthToConvert, setLengthToConvert] = useState(0);
    const [baseLength, setBaseLength] = useState('mm');
    const [targetLength, setTargeLength] = useState('cm');
    const [lengthResult, setLengthResult] = useState(0);

    const [times] = useState(unities.times);
    const [timeToConvert, setTimeToConvert] = useState(0);
    const [baseTime, setBaseTime] = useState('s');
    const [targetTime, setTargeTime] = useState('min');
    const [timeResult, setTimeResult] = useState(0);

    const changeBaseTime = (e) => {
        e.preventDefault();
        setBaseTime(e.target.value);
    };

    const changeTargetTime = (e) => {
        e.preventDefault();
        setTargeTime(e.target.value);
    };

    const setTimeValue = (e) => {
        e.preventDefault();
        setTimeToConvert(e.target.value);
    };

    const convertTime = async () => {
        const convertedTime = convert(timeToConvert)
            .from(baseTime)
            .to(targetTime);
        setTimeResult(convertedTime);
    };

    const changeBaseTemperature = (e) => {
        e.preventDefault();
        setBaseTemperature(e.target.value);
    };

    const changeTargetTemperature = (e) => {
        e.preventDefault();
        setTargetTemperature(e.target.value);
    };

    const setTempereatureValue = (e) => {
        e.preventDefault();
        setTemperatureToConvert(e.target.value);
    };

    const convertTemperature = async () => {
        const convertedTemperature = convert(temperatureToConvert)
            .from(baseTemperature)
            .to(targetTemperature);
        setTemperatureResult(convertedTemperature);
    };

    const changeBaseSpeed = (e) => {
        e.preventDefault();
        setBaseSpeed(e.target.value);
    };

    const changeTargetSpeed = (e) => {
        e.preventDefault();
        setTargetSpeed(e.target.value);
    };

    const setSpeedValue = (e) => {
        e.preventDefault();
        setSpeedToConvert(e.target.value);
    };

    const convertSpeed = async () => {
        const convertedSpeed = convert(speedToConvert)
            .from(baseSpeed)
            .to(targetSpeed);
        setSpeedResult(convertedSpeed);
    };

    const changeBaseLength = (e) => {
        e.preventDefault();
        setBaseLength(e.target.value);
    };

    const changeTargetLength = (e) => {
        e.preventDefault();
        setTargeLength(e.target.value);
    };

    const setLengthValue = (e) => {
        e.preventDefault();
        setLengthToConvert(e.target.value);
    };

    const convertLength = async () => {
        const convertedLength = convert(lengthToConvert)
            .from(baseLength)
            .to(targetLength);
        setLengthResult(convertedLength);
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
                    values={temperatures}
                    valueToConvert={temperatureToConvert}
                    baseValue={baseTemperature}
                    targetValue={targetTemperature}
                    TextValueToConvert={temperatureToConvert}
                    convertionResult={temperatureResult}
                    changeBaseValue={changeBaseTemperature}
                    changeTargetValue={changeTargetTemperature}
                    changeValueToConvert={setTempereatureValue}
                    convertValues={convertTemperature}
                />

                <TypeConversion>
                    <strong>Converter velocidade</strong>
                    <IoMdSpeedometer size={35} color="#6a47fa" />
                </TypeConversion>

                <Pannel
                    values={speeds}
                    valueToConvert={speedToConvert}
                    baseValue={baseSpeed}
                    targetValue={targetSpeed}
                    TextValueToConvert={speedToConvert}
                    convertionResult={speedResult}
                    changeBaseValue={changeBaseSpeed}
                    changeTargetValue={changeTargetSpeed}
                    changeValueToConvert={setSpeedValue}
                    convertValues={convertSpeed}
                />

                <TypeConversion>
                    <strong>Converter medidas</strong>
                    <FaRulerCombined size={35} color="#6a47fa" />
                </TypeConversion>
                <Pannel
                    values={lengths}
                    valueToConvert={lengthToConvert}
                    baseValue={baseLength}
                    targetValue={targetLength}
                    TextValueToConvert={lengthToConvert}
                    convertionResult={lengthResult}
                    changeBaseValue={changeBaseLength}
                    changeTargetValue={changeTargetLength}
                    changeValueToConvert={setLengthValue}
                    convertValues={convertLength}
                />

                <TypeConversion>
                    <strong>Converter tempo</strong>
                    <RiTimerLine size={35} color="#6a47fa" />
                </TypeConversion>
                <Pannel
                    values={times}
                    valueToConvert={timeToConvert}
                    baseValue={baseTime}
                    targetValue={targetTime}
                    TextValueToConvert={timeToConvert}
                    convertionResult={timeResult}
                    changeValueToConvert={setTimeValue}
                    changeBaseValue={changeBaseTime}
                    changeTargetValue={changeTargetTime}
                    convertValues={convertTime}
                />

                <Features
                    label="Como usar a conversão de medidas:"
                    title1="Clique em buscar ou arraste um vídeo"
                    text1="  Para converter o seu vídeo, clique no botão buscar e selecione um
                vídeo ou arraste ele até a caixa de texto ao lado do botão 'buscar'."
                    title2="Selecione o formato que deseja converter"
                    text2="Ao lado do botão 'Converter', clique no botão de formatos e selecione o que preferir.
                Apenas os formatos presentes na caixas são válidos ."
                    title3="Clique em 'Converter'"
                    text3="Assim que clicar em 'Converter' a conversão do seu arquivo será iniciada.
                O tempo de conversão vai variar de acordo com o tamanho e tipo de arquivo"
                    title4="Aguarde e depois faça o download"
                    text4=" Assim que a converstão terminar, seu arquivo de vídeo convertido estará disponível
                 para download na caixa abaixo. Você pode fazer quantas conversões quiser, apos essa"
                    rodapeText="Converta seus áudios do para qualquer formato"
                    strongText=" Este site é um dos melhores conversores de músicas do
                    YouTube, suportando todos os formatos possíveis de
                    música e vídeo, incluindo MP4, AVI, WMA e muitos outros.
                    Nosso downloader de vídeos do YouTube é conveniente e
                    fácil de acessar, atendendo a milhões de usuários todos
                    os dias. Nos esforçamos muito para tornar a conversão de
                    vídeo para MP3 320kbps mais pessoal para você. Agora
                    você pode escolher qualquer formato de áudio, pois nosso
                    Conversor On-line de YouTube suporta MP3, MP4, AVI, WAV,
                    AAC, MOV, WMV e WMA. Escolha qualquer um deles e você
                    obterá conversões de qualidade premium em qualquer um de
                    seus dispositivos!"
                />
            </Container>
            <Footer />
        </>
    );
}

export default Medidas;
