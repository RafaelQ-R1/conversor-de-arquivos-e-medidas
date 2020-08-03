import React from 'react';

import { FaExchangeAlt } from 'react-icons/fa';
import { AiOutlineReload } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Container, Pannel } from './styles';
import Title from '../../components/Title';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import engrenagem from '../../assets/images/engrenagem.png';

function moeda() {
    return (
        <>
            <Container>
                <div id="divHeader">
                    <Link to="/">
                        <h6>Conversor de arquivos e medidas </h6>
                        <img src={engrenagem} alt="engrenagem" />
                    </Link>
                </div>
                <Title label="Converter moeda" />

                <Header label="Escolha qual moeda você quer converter" />
                <Pannel>
                    <div id="line1">
                        <div id="value">
                            <strong>Valor</strong>
                            <input />
                        </div>
                        <div id="convertTo">
                            <strong>Converter de</strong>
                            <select id="selecionarTipo">
                                <option value="volvo">Dólar</option>
                                <option value="saab">Euro</option>
                                <option value="opel">Real</option>
                                <option value="audi">Libra</option>
                            </select>
                        </div>
                        <button id="alternate" type="button">
                            <FaExchangeAlt size={20} />
                        </button>
                        <div id="for">
                            <strong>Para</strong>
                            <select id="selecionarTipo">
                                <option value="volvo">Dólar</option>
                                <option value="saab">Euro</option>
                                <option value="opel">Real</option>
                                <option value="audi">Libra</option>
                            </select>
                        </div>
                        <button id="convert" type="button">
                            <AiOutlineReload size={20} />
                        </button>
                    </div>
                    <div id="line2">
                        <div id="box1">
                            <div id="box1Line1">
                                <strong id="strong1">Conversão de: </strong>
                                <strong id="strong2">Real (BRL)</strong>
                            </div>
                            <div id="box1Line2">
                                <strong id="strong3">Valor a converter:</strong>
                                <strong id="strong4">1,00</strong>
                            </div>
                        </div>
                        <div id="box2">
                            <div id="box2Line1">
                                <strong id="strong5">Para:</strong>
                                <strong id="strong6">
                                    Dólar dos Estados Unidos/USD (220)
                                </strong>
                            </div>
                            <div id="box2Line2">
                                <strong id="strong7">
                                    Resultado da conversão:
                                </strong>
                                <strong id="strong8">0,1884 </strong>
                            </div>
                        </div>
                    </div>
                    <div id="details">
                        <div id="dateCotation">
                            <strong>Data da cotação utilizada:</strong>
                            <h6>02/08/2020</h6>
                        </div>
                        <div id="tax">
                            <strong>Taxa:</strong>
                        </div>
                        <h6>
                            1 Real/BRL (790) = 0,1884126 Dólar dos Estados
                            Unidos/USD (220)
                        </h6>
                        <h6>
                            Dólar dos Estados Unidos/USD (220) = 5,3075007
                            Real/BRL (790)
                        </h6>
                    </div>
                </Pannel>
            </Container>
            <Footer />
        </>
    );
}

export default moeda;
