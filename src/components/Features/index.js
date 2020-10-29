/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import {
    IoMdBrowsers,
    IoMdSpeedometer,
    IoIosPerson,
    IoMdInfinite,
    IoIosCloudDownload,
} from 'react-icons/io';
import { RiCpuLine } from 'react-icons/ri';
import { ListaDiferenciais, Tutorial, Header, Rodape } from './styles';

function Features(props) {
    return (
        <>
            <Header>{props.label}</Header>;
            <Tutorial>
                <li>
                    <h2 id="titulo-lista">{props.title1}</h2>
                    <h7 id="texto-lista">{props.text1}</h7>
                </li>
                <li>
                    <h2 id="titulo-lista">{props.title2}</h2>
                    <h7 id="texto-lista">{props.text2}</h7>
                </li>
                <li>
                    <h2 id="titulo-lista">{props.title3}</h2>
                    <h7 id="texto-lista">{props.text3}</h7>
                </li>
                <li>
                    <h2 id="titulo-lista">{props.title4}</h2>
                    <h7 id="texto-lista">{props.text4}</h7>
                </li>
            </Tutorial>
            <ListaDiferenciais>
                <h2 id="Diferenciais">Porque nosso conversor é melhor</h2>
                <div>
                    <div id="elemento-lista">
                        <IoMdBrowsers size={40} color="#6746f4" />
                        <h6>Compatível com todos os navegadores</h6>
                    </div>
                    <div id="elemento-lista">
                        <IoMdSpeedometer size={40} color="#6746f4" />
                        <h6>Conversões rápidas</h6>
                    </div>
                    <div id="elemento-lista">
                        <IoIosPerson size={40} color="#6746f4" />
                        <h6>Não requer cadastro</h6>
                    </div>

                    <div id="elemento-lista">
                        <IoMdInfinite size={40} color="#6746f4" />
                        <h6>Downloads ilimitados e gratuitos</h6>
                    </div>
                    <div id="elemento-lista">
                        <IoIosCloudDownload size={40} color="#6746f4" />
                        <h6 id="descricao">
                            Não requer instalação de software
                        </h6>
                    </div>
                    <div id="elemento-lista">
                        <RiCpuLine size={40} color="#6746f4" />
                        <h6 id="descricao">
                            Usa tecnologias de última geração
                        </h6>
                    </div>
                </div>
            </ListaDiferenciais>
            <Rodape>
                <h2>{props.rodapeText}</h2>
                <strong>{props.strongText}</strong>
            </Rodape>
        </>
    );
}

export default Features;
