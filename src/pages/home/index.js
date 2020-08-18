import React from 'react';

import processamento from '../../assets/images/processamento.png';
import ideia from '../../assets/images/ideia.png';
import devices from '../../assets/images/dispositivos.png';
import ux from '../../assets/images/ux.png';
import virus from '../../assets/images/virus.png';
import tecnologia from '../../assets/images/tecnologia.png';

import Footer from '../../components/Footer';
import Options from '../../components/Options';
import Features from '../../components/Features';
import Header from '../../components/Header';
import Title from '../../components/Title';

import { Container, Descriptions } from './styles';

function home() {
    return (
        <>
            <Container>
                <Title
                    label1="conversor de arquivos e medidas"
                    label2="Escolha o que você quer converter"
                />
                <Options />

                <Header label="Nossas Features" />

                <Descriptions>
                    <li>
                        <img src={processamento} alt="processamento" />
                        <h4>Processmento eficiente</h4>
                        <h5>
                            Todas as conversões são feitas usando técnologias
                            modernas e o processamento ocorre nos nossos
                            servidores.
                        </h5>
                    </li>
                    <li>
                        <img src={ideia} alt="ideia" />
                        <h4>Simples e intuitivo</h4>
                        <h5>
                            Basta arrastar e soltar seus arquivos para iniciar
                            uma conversão. A conversão de medidas fornece várias
                            opções simples e claras.
                        </h5>
                    </li>
                    <li>
                        <img src={devices} alt="devices" />
                        <h4>Suporta vários dispositivos </h4>
                        <h5>
                            Use nossas ferramentas em qualquer dispositivo:
                            tablet, smarphone, ou desktop.
                        </h5>
                    </li>
                    <li>
                        <img src={virus} alt="virus" />
                        <h4>Segurança</h4>
                        <h5>
                            O envio de arquivos é protegido por criptografia de
                            ponta a ponta e assim que o processamento termina, o
                            arquivo é deletado.
                        </h5>
                    </li>
                    <li>
                        <img src={tecnologia} alt="tecnologia" />
                        <h4>Tecnologia</h4>
                        <h5>
                            Converta diferentes tipos de arquivos (mp4, wmv,
                            avi, jpeg, png, bmp, mp3, wave, metros, segundos,
                            temperaturas, etc.
                        </h5>
                    </li>
                    <li>
                        <img src={ux} alt="ux" />
                        <h4>Riqueza de features </h4>
                        <h5>
                            Use nossas ferramentas em qualquer dispositivo:
                            tablet, smarphone, ou desktop.
                        </h5>
                    </li>
                </Descriptions>
                <Features />
            </Container>
            <Footer />
        </>
    );
}

export default home;
