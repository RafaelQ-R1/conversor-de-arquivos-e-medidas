import React, { useState, useEffect } from 'react';

import { FaExchangeAlt, FaBitcoin } from 'react-icons/fa';
import { AiOutlineReload } from 'react-icons/ai';

import { Container, Pannel, Details, TypeConversion } from './styles';
import Api from '../../services/api';
import Title from '../../components/Title';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Options from '../../components/Options';
import Features from '../../components/Features';
import api from '../../services/api';

export default function Moeda() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [valueToConvert, setValueToConvert] = useState(0);
    const [fromCurrency, setFromCurrency] = useState();
    const [toCurrency, setToCurrency] = useState();
    const [exchangeRate, setExchangeRate] = useState();
    const [currencyOptions, setCurrencyOptions] = useState([]);
    const [amount, setAmount] = useState(1);
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

    const BASE_URL = 'https://api.exchangeratesapi.io/latest';

    const convertFromCurrencyToCurrency = () => {
        if (fromCurrency != null && toCurrency != null) {
            fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
                .then((res) => res.json())
                .then((data) => setExchangeRate(data.rates[toCurrency]));
        }
    };

    const changeCoinA = (e) => {
        e.preventDefault();
        setFromCurrency(e.target.value);
    };

    const changeCoinB = (e) => {
        e.preventDefault();
        setToCurrency(e.target.value);
    };

    const alternateValues = (e) => {
        e.preventDefault();
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    return (
        <>
            <Container>
                <Title
                    label1="conversor de arquivos e medidas"
                    label2="Converter moeda"
                />
                <Options />

                <Header label="Escolha qual moeda você quer converter" />

                <TypeConversion>
                    <strong>Converter moeda</strong>
                    <FaBitcoin size={35} color="#6a47fa" />
                </TypeConversion>
                <Pannel>
                    <div id="date">
                        <strong>DATA DA COTAÇÃO:</strong>
                        <input
                            value={selectedDate.toDateString()}
                            readOnly={false}
                        />
                    </div>
                    <div id="line1">
                        <div id="value">
                            <strong>Valor</strong>
                            <input
                                value={valueToConvert}
                                onChange={(e) =>
                                    setValueToConvert(e.target.value)
                                }
                            />
                        </div>
                        <div id="convertTo">
                            <strong>Converter de</strong>
                            <select
                                id="selecionarTipo"
                                onChange={changeCoinA}
                                value={fromCurrency}
                            >
                                <option value="USD">USD</option>
                                <option value="BRL">BRL</option>
                                <option value="Real">Real</option>
                                <option value="Libra">Libra</option>
                            </select>
                        </div>
                        <button
                            id="alternate"
                            type="button"
                            onClick={alternateValues}
                        >
                            <FaExchangeAlt size={20} />
                        </button>
                        <div id="for">
                            <strong>Para</strong>
                            <select
                                id="selecionarTipo"
                                onChange={changeCoinB}
                                value={toCurrency}
                            >
                                <option value="USD">USD</option>
                                <option value="BRL">BRl</option>
                                <option value="Real">Real</option>
                                <option value="Libra">Libra</option>
                            </select>
                        </div>
                        <button
                            id="convert"
                            type="button"
                            onClick={convertFromCurrencyToCurrency}
                        >
                            <AiOutlineReload size={20} />
                        </button>
                    </div>
                    <div id="line2">
                        <div id="box1">
                            <div id="box1Line1">
                                <strong id="strong1">Conversão de: </strong>
                                <strong id="strong2">{fromCurrency}</strong>
                            </div>
                            <div id="box1Line2">
                                <strong id="strong3">Valor a converter:</strong>
                                <strong id="strong4">{valueToConvert}</strong>
                            </div>
                        </div>
                        <div id="box2">
                            <div id="box2Line1">
                                <strong id="strong5">Para:</strong>
                                <strong id="strong6">{toCurrency}</strong>
                            </div>
                            <div id="box2Line2">
                                <strong id="strong7">
                                    Resultado da conversão:
                                </strong>
                                <strong id="strong8">{exchangeRate}</strong>
                            </div>
                        </div>
                    </div>
                    <div id="details">
                        <div id="dateCotation">
                            <strong>Data da cotação utilizada:</strong>
                            <h6>{selectedDate.toDateString()}</h6>
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
                <Details>
                    <ul>
                        <li>
                            O cálculo efetuado tem caráter informativo e não
                            substitui as disposições da norma cambial brasileira
                            para casos específicos de conversão.
                        </li>
                        <li>
                            Conversões disponíveis para datas informadas a
                            partir de 01/02/1999.
                        </li>
                        <li>
                            Para dias não úteis, assume-se a cotação do dia útil
                            imediatamente anterior.
                        </li>
                        <li>
                            O Banco Central não assume qualquer responsabilidade
                            pela não simultaneidade ou falta das informações
                            prestadas, assim como por eventuais erros de
                            paridades das moedas, ou qualquer outro, salvo a
                            paridade relativa ao dólar dos Estados Unidos da
                            América em relação ao Real. Igualmente, não se
                            responsabiliza pelos atrasos ou indisponibilidade de
                            serviços de telecomunicação, interrupção, falha ou
                            pelas imprecisões no fornecimento dos serviços ou
                            informações. Não assume, também, responsabilidade
                            por qualquer perda ou dano oriundo de tais
                            interrupções, atrasos, falhas ou imperfeições, bem
                            como pelo uso inadequado das informações contidas na
                            transação.
                        </li>
                    </ul>
                </Details>
                <Features />
            </Container>
            <Footer />
        </>
    );
}
