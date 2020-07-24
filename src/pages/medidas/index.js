import React from 'react';
import { Link } from 'react-router-dom';
import engrenagem from '../../assets/images/engrenagem.png';

import Footer from '../../components/Footer';
import Header from '../../components/Title';
import { Container, Form } from './styles';

function Medidas() {
    return (
        <>
            <Container>
                <div id="divHeader">
                    <Link to="/">
                        <h6>Conversor de arquivos e medidas </h6>
                        <img src={engrenagem} alt="engrenagem" />
                    </Link>
                </div>
                <Header label="Converter medida" />

                <Form>
                    <div>
                        <h2>Converter tamanho / distância:</h2>
                        <div id="painel1">
                            <select id="select1">
                                <option value="volvo">milímetro</option>
                                <option value="saab">centímetro</option>
                                <option value="opel">metro</option>
                                <option value="audi">kilometro</option>
                            </select>

                            <input
                                id="input1"
                                placeholder="escreva a quantidade de metros"
                            />
                        </div>
                        <div id="painel1">
                            <select id="select1">
                                <option value="volvo">milímetro</option>
                                <option value="saab">centímetro</option>
                                <option value="opel">metro</option>
                                <option value="audi">kilometro</option>
                            </select>

                            <input
                                id="input1"
                                placeholder="escreva a quantidade de metros"
                            />
                        </div>
                        <div>
                            <button type="button">Converter</button>
                            <input placeholder="resultado" readOnly />
                        </div>
                    </div>
                </Form>

                <Form>
                    <div>
                        <h2>Converter tamanho / distância:</h2>
                        <div id="painel1">
                            <select id="select1">
                                <option value="volvo">milímetro</option>
                                <option value="saab">centímetro</option>
                                <option value="opel">metro</option>
                                <option value="audi">kilometro</option>
                            </select>

                            <input
                                id="input1"
                                placeholder="escreva a quantidade de metros"
                            />
                        </div>
                        <div id="painel1">
                            <select id="select1">
                                <option value="volvo">milímetro</option>
                                <option value="saab">centímetro</option>
                                <option value="opel">metro</option>
                                <option value="audi">kilometro</option>
                            </select>

                            <input
                                id="input1"
                                placeholder="escreva a quantidade de metros"
                            />
                        </div>
                        <div>
                            <button type="button">Converter</button>
                            <input placeholder="resultado" readOnly />
                        </div>
                    </div>
                </Form>

                <Form>
                    <div>
                        <h2>Converter tamanho / distância:</h2>
                        <div id="painel1">
                            <select id="select1">
                                <option value="volvo">milímetro</option>
                                <option value="saab">centímetro</option>
                                <option value="opel">metro</option>
                                <option value="audi">kilometro</option>
                            </select>

                            <input
                                id="input1"
                                placeholder="escreva a quantidade de metros"
                            />
                        </div>
                        <div id="painel1">
                            <select id="select1">
                                <option value="volvo">milímetro</option>
                                <option value="saab">centímetro</option>
                                <option value="opel">metro</option>
                                <option value="audi">kilometro</option>
                            </select>

                            <input
                                id="input1"
                                placeholder="escreva a quantidade de metros"
                            />
                        </div>
                        <div>
                            <button type="button">Converter</button>
                            <input placeholder="resultado" readOnly />
                        </div>
                    </div>
                </Form>
            </Container>
            <Footer />
        </>
    );
}

export default Medidas;
