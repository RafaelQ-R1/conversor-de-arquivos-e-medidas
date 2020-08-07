import React from 'react';

import { Link } from 'react-router-dom';

import Features from '../../components/Features';
import { Container, Convert, Properties, Types, Tutorial } from './styles';

import Title from '../../components/Title';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import engrenagem from '../../assets/images/engrenagem.png';

function imagem() {
    return (
        <>
            <Container>
                <div id="divHeader">
                    <Link to="/">
                        <h6>Conversor de arquivos e medidas </h6>
                        <img src={engrenagem} alt="engrenagem" />
                    </Link>
                </div>
                <Title label="Converter imagem" />

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

                <Features />
            </Container>
            <Footer />
        </>
    );
}

export default imagem;
