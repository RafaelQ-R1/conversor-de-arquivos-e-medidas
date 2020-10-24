import React, { useState } from 'react';

import Features from '../../components/Features';
import { Container } from './styles';
import Title from '../../components/Title';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CommonTutorial from '../../components/CommonTutorial';
import Upload from '../../components/Upload';
import { apiLocal } from '../../services/api';

import Options from '../../components/Options';

export default function Imagem() {
    const [formats] = useState(['jpeg', 'png', 'webp', 'gif', 'tiff']);
    const [currentFormat, setCurrentFormat] = useState('jpeg');

    const convertImage = async (stateValues) => {
        try {
            await apiLocal.post('convert_image', {
                pathToFile: stateValues[0][0].path,
                format: currentFormat,
                size: 1000,
                quality: 100,
            });
            return alert('image sucefully converted');
        } catch (err) {
            return alert.log(err);
        }
    };

    const changeFormat = (e) => {
        setCurrentFormat(e.target.value);
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

                <Upload
                    accept="image/*"
                    message="Clique ou arraste as imagens aqui..."
                    itens={formats}
                    onChange={changeFormat}
                    exit="saída"
                    onClick={convertImage}
                />

                <Header label="Como usar a conversão de imagens:" />

                <CommonTutorial
                    title1="Clique em buscar ou arraste um imagem"
                    text1="  Para converter a seu imagem, clique no botão buscar e selecione um
                    áudio ou arraste ele até a caixa de texto ao lado do botão 'buscar'."
                    title2="Selecione o formato que deseja converter"
                    text2="Clique na caixa ao lado do texto 'Saída' para escolher um formato de imagem a ser convertido.
                    Apenas os formatos presentes na caixa são válidos ."
                    title3="Clique em 'Converter'"
                    text3="Assim que clicar em 'Converter' a conversão do seu arquivo será iniciada.
                    O tempo de conversão vai variar de acordo com o tamanho e tipo de arquivo"
                    title4="Aguarde e depois faça o download"
                    text4=" Assim que a converstão terminar, seu arquivo de imagem convertido estará disponível
                     para download no link abaixo. Você pode fazer quantas conversões quiser após essa"
                />
                <Features />
            </Container>
            <Footer />
        </>
    );
}
