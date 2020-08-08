/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import { FaExchangeAlt } from 'react-icons/fa';
import { AiOutlineReload } from 'react-icons/ai';
import { Body } from './styles';

function Pannel(props) {
    return (
        <Body>
            <div id="title">
                <strong>{props.strong}</strong>
            </div>

            <div id="teste">
                <div id="line1">
                    <div id="value">
                        <strong>Valor</strong>
                        <input />
                    </div>
                    <div id="convertTo">
                        <strong>Converter de</strong>
                        <select id="selecionarTipo">
                            <option value="Dólar">{props.item1}</option>
                            <option value="Euro">{props.item2}</option>
                            <option value="Real">{props.item3}</option>
                            <option value="Libra">{props.item4}</option>
                        </select>
                    </div>
                    <button id="alternate" type="button">
                        <FaExchangeAlt size={20} />
                    </button>
                    <div id="for">
                        <strong>Para</strong>
                        <select id="selecionarTipo">
                            <option value="Dólar">{props.item1}</option>
                            <option value="Euro">{props.item2}</option>
                            <option value="Real">{props.item3}</option>
                            <option value="Libra">{props.item4}</option>
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
            </div>
        </Body>
    );
}

export default Pannel;
