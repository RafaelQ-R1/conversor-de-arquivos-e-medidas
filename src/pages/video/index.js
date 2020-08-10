import React from 'react';
import { Link } from 'react-router-dom';

import engrenagem from '../../assets/images/engrenagem.png';

import Footer from '../../components/Footer';
import Title from '../../components/Title';
import Header from '../../components/Header';
import Features from '../../components/Features';
import CommonTutorial from '../../components/CommonTutorial';
import Options from '../../components/Options';

import { Container, Form, Rodape } from './styles';

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
                <Options />
                <Header label="Escolha o formato de vídeo que quer converter" />

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
                <CommonTutorial
                    title1="Copie o link de um vídeo"
                    text1="  Para converter o seu ficheiro, primeiro tem que
                    escolher um vídeo. Para isso basta ir até ao YouTube
                    ou ao TikTok, ou a qualquer outro serviço de
                    streaming de vídeos, e copiar o link do vídeo que
                    queira converter."
                    title2="Cole o link que copiou no campo de entrada"
                    text2="    Abra o site do 2conv no seu navegador e cole o link
                    do vídeo que quer converter no campo Inserir link do
                    vídeo."
                    title3="Escolha o formato de ficheiro que preferir"
                    text3="  Depois de colar o link, escolha o formato de
                    ficheiro que lhe der mais jeito. O 2conv é
                    compatível com vários formatos de ficheiros de áudio
                    e de vídeo, dando-lhe a possibilidade de escolher
                    aquele que precisa, ou aquele que é compatível com o
                    seu dispositivo."
                    title4="  Clique em Converter para obter o ficheiro mp3"
                    text4=" Este é o último passo! Tudo o que precisa de fazer
                    agora é clicar em converter e esperar um pouco para
                    que o seu ficheiro seja convertido. Depois basta
                    transferir o seu ficheiro diretamente para o seu
                    dispositivo ou partilhá-lo por e-mail ou dropbox."
                />

                <Features />

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
