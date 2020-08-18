import React from 'react';

import Features from '../../components/Features';
import { Container, Convert, Properties, Types } from './styles';

import Title from '../../components/Title';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CommonTutorial from '../../components/CommonTutorial';

import Options from '../../components/Options';

function imagem() {
    return (
        <>
            <Container>
                <Title
                    label1="conversor de arquivos e medidas"
                    label2="Converter imagem"
                />
                <Options />

                <Header label="Escolha a Imagem ou Foto a converter" />
                <Convert>
                    <div id="Size-limit">
                        <h5>Tamanho limite: 3072 KB (3 MB)</h5>
                        <h6>
                            Seja paciente se a imagem original for muito grande
                        </h6>
                    </div>

                    <div id="Commands">
                        <input
                            readOnly
                            placeholder="Clique em buscar ou arraste o imagem aqui"
                        />
                        <button id="Browse" type="button">
                            Buscar
                        </button>
                        <button id="Convert" type="button">
                            converter
                        </button>
                    </div>
                </Convert>

                <Properties>
                    <div id="Output">
                        <strong>Saída</strong>

                        <select id="select1">
                            <option value="volvo">milímetro</option>
                            <option value="saab">centímetro</option>
                            <option value="opel">metro</option>
                            <option value="audi">kilometro</option>
                        </select>
                    </div>
                    <div id="Quality">
                        <strong>Qualidade de JPEG</strong>
                        <input checked="" type="radio" />
                        <h6>média</h6>
                        <input checked="" type="radio" />
                        <h6>boa</h6>
                        <input checked="" type="radio" />
                        <h6>excelente</h6>
                    </div>
                </Properties>
                <Types>
                    JPEG, TIFF, PNG, PSD, GIF, BMP, RAW, PCX, JXR, DNG, CRW,
                    CR2, NEF, RAF, MRW, PEF, S3F, SRF, ARW, SRW, X3F, RW2
                    formats supported
                </Types>

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

export default imagem;
