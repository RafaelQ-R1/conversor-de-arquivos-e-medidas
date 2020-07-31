import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Convert, Properties, Types } from './styles';
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
                            {' '}
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
            </Container>
            <Footer />
        </>
    );
}

export default imagem;
