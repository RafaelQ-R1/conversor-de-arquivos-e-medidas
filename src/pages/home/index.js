import React from 'react';
import { Link } from 'react-router-dom';
import audio from '../../assets/images/fone.png';
import imagem from '../../assets/images/foto.png';
import medida from '../../assets/images/regua.png';
import video from '../../assets/images/video.png';
import engrenagem from '../../assets/images/engrenagem.png';
import processamento from '../../assets/images/processamento.png';
import ideia from '../../assets/images/ideia.png';
import devices from '../../assets/images/dispositivos.png';
import ux from '../../assets/images/ux.png';
import virus from '../../assets/images/virus.png';
import tecnologia from '../../assets/images/tecnologia.png';
import moeda from '../../assets/images/moeda.png';
import Footer from '../../components/Footer';

import { Container, Options, Descriptions } from './styles';
import Rectangle from '../../assets/images/Rectangle.svg';

function home() {
    return (
        <>
            <Container>
                <div id="divHeader">
                    <h6>Conversor de arquivos e medidas </h6>
                    <img src={engrenagem} alt="engrenagem" />
                </div>
                <img src={Rectangle} alt="retangulo" />
                <p>Escolha o que você quer converter:</p>
                <Options>
                    <div />
                    <li>
                        <Link to="/audio">
                            <img src={audio} alt="audio" />
                        </Link>
                        <h6>Áudio</h6>
                    </li>
                    <li>
                        <Link to="/video">
                            <img src={video} alt="video" />
                        </Link>
                        <h6>VÍdeo</h6>
                    </li>
                    <li>
                        <Link to="/imagem">
                            <img src={imagem} alt="imagem" />
                        </Link>
                        <h6>Imagem</h6>
                    </li>
                    <li>
                        <Link to="/medidas">
                            <img src={medida} alt="medida" />
                        </Link>
                        <h6>Medida</h6>
                    </li>
                    <li>
                        <Link to="/moedas">
                            <img src={moeda} alt="moedas" />
                        </Link>
                        <h6>Moeda</h6>
                    </li>
                    <div />
                </Options>

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
            </Container>
            <Footer />
        </>
    );
}

export default home;
