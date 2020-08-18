import React from 'react';

import Features from '../../components/Features';
import Title from '../../components/Title';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CommonTutorial from '../../components/CommonTutorial';
import Options from '../../components/Options';

import { Container, Form, Rodape } from './styles';

function audio() {
    return (
        <>
            <Container>
                <Title
                    label1="conversor de arquivos e medidas"
                    label2="Converter áudio"
                />
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
                            <option value="volvo">MP3</option>
                            <option value="saab">WAV</option>
                            <option value="opel">WMA</option>
                            <option value="audi">AAC</option>
                        </select>
                    </div>
                </Form>
                <Header label="Como utilizar a conversão de áudios:" />
                <CommonTutorial
                    title1="Clique em buscar ou arraste um áudio"
                    text1="  Para converter o seu áudio, clique no botão buscar e selecione um
                    áudio ou arraste ele até a caixa de texto ao lado do botão 'buscar'."
                    title2="Selecione o formato que deseja converter"
                    text2="Ao lado do botão 'Converter', clique no botão de formatos e selecione o que preferir.
                    Apenas os formatos presentes na caixa são válidos ."
                    title3="Clique em 'Converter'"
                    text3="Assim que clicar em 'Converter' a conversão do seu arquivo será iniciada.
                    O tempo de conversão vai variar de acordo com o tamanho e tipo de arquivo"
                    title4="Aguarde e depois faça o download"
                    text4=" Assim que a converstão terminar, seu arquivo de áudio convertido estará disponível
                     para download no link abaixo. Você pode fazer quantas conversões quiser após essa"
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
export default audio;
