import React from 'react';
import { Link } from 'react-router-dom';
import {
    IoMdBrowsers,
    IoMdSpeedometer,
    IoIosPerson,
    IoMdInfinite,
    IoIosCloudDownload,
} from 'react-icons/io';
import engrenagem from '../../assets/images/engrenagem.png';

import Footer from '../../components/Footer';
import Title from '../../components/Title';
import Header from '../../components/Header';

import { Container, Form, Tutorial, ListaDiferenciais, Rodape } from './styles';

function video() {
    return (
        <>
            <Container>
                <div id="divHeader">
                    <Link to="/">
                        <h6>Conversor de arquivos e medidas </h6>
                        <img src={engrenagem} alt="engrenagem" />
                    </Link>
                </div>

                <Title label="Converter vídeo" />

                <Form>
                    <div id="linha1">
                        <input
                            readOnly
                            placeholder="Clique em buscar ou arraste o vídeo aqui"
                        />
                        <button type="button" id="buscar">
                            Buscar
                        </button>
                    </div>

                    <div id="linha2">
                        <button type="button" id="Converter">
                            Converter
                        </button>
                        <select id="selecionarTipo">
                            <option value="volvo">MP4</option>
                            <option value="saab">MP3</option>
                            <option value="opel">AVI</option>
                            <option value="audi">WMV</option>
                        </select>
                    </div>
                </Form>
                <Header label="Como utilizar a conversão de vídeos:" />
                <Tutorial>
                    <li>
                        <h2 id="titulo-lista">Copie o link de um vídeo</h2>
                        <h7 id="texto-lista">
                            Para converter o seu ficheiro, primeiro tem que
                            escolher um vídeo. Para isso basta ir até ao YouTube
                            ou ao TikTok, ou a qualquer outro serviço de
                            streaming de vídeos, e copiar o link do vídeo que
                            queira converter.
                        </h7>
                    </li>
                    <li>
                        <h2 id="titulo-lista">
                            Cole o link que copiou no campo de entrada
                        </h2>
                        <h7 id="texto-lista">
                            Abra o site do 2conv no seu navegador e cole o link
                            do vídeo que quer converter no campo Inserir link do
                            vídeo.
                        </h7>
                    </li>
                    <li>
                        <h2 id="titulo-lista">
                            Escolha o formato de ficheiro que preferir
                        </h2>
                        <h7 id="texto-lista">
                            Depois de colar o link, escolha o formato de
                            ficheiro que lhe der mais jeito. O 2conv é
                            compatível com vários formatos de ficheiros de áudio
                            e de vídeo, dando-lhe a possibilidade de escolher
                            aquele que precisa, ou aquele que é compatível com o
                            seu dispositivo.
                        </h7>
                    </li>
                    <li>
                        <h2 id="titulo-lista">
                            Clique em Converter para obter o ficheiro mp3
                        </h2>
                        <h7 id="texto-lista">
                            Este é o último passo! Tudo o que precisa de fazer
                            agora é clicar em converter e esperar um pouco para
                            que o seu ficheiro seja convertido. Depois basta
                            transferir o seu ficheiro diretamente para o seu
                            dispositivo ou partilhá-lo por e-mail ou dropbox.
                        </h7>
                    </li>
                </Tutorial>

                <ListaDiferenciais>
                    <h2 id="Diferenciais">Porque nosso conversor é melhor:</h2>
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
                    </div>
                </ListaDiferenciais>
                <Rodape>
                    <h2>
                        Converta seus vídeos do YouTube para qualquer formato
                    </h2>
                    <strong>
                        Este site é um dos melhores conversores de músicas do
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
                        seus dispositivos!
                    </strong>
                </Rodape>
            </Container>
            <Footer />
        </>
    );
}

export default video;
