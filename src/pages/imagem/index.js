import React, { useState } from 'react';

import Features from '../../components/Features';
import { Container } from './styles';
import Title from '../../components/Title';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Upload from '../../components/Upload';
import Modal from '../../components/Modal';
import { apiLocal } from '../../services/api';

import Options from '../../components/Options';

export default function Imagem() {
    const [formats] = useState(['jpeg', 'png', 'webp', 'gif', 'tiff']);
    const [currentFormat, setCurrentFormat] = useState('jpeg');
    const [newImage, setNewImage] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const convertImage = async (stateValues) => {
        try {
            const convertedImage = await apiLocal.post('convert_image', {
                pathToFile: stateValues[0][0].path,
                format: currentFormat,
                size: 1000,
                quality: 100,
            });
            setModalVisible(true);
            return setNewImage(convertedImage.data);
        } catch (err) {
            return alert(err);
        }
    };

    const changeFormat = (e) => {
        setCurrentFormat(e.target.value);
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    return (
        <>
            <Container>
                <Title
                    label1="conversor de arquivos e medidas"
                    label2="Converter imagem"
                />
                <Options />

                <Header label="Escolha um formato de imagem para converter" />
                <Modal
                    open={modalVisible}
                    onClose={closeModal}
                    link={newImage}
                />

                <Upload
                    accept="image/*"
                    message="Clique ou arraste as imagens aqui..."
                    itens={formats}
                    onChange={changeFormat}
                    exit="saída"
                    onClick={convertImage}
                />

                <Features
                    label="Como usar a conversão de imagens:"
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
