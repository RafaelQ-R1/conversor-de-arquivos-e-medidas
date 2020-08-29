/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import { FaExchangeAlt } from 'react-icons/fa';
import { AiOutlineReload } from 'react-icons/ai';
import { Body } from './styles';

function Pannel(props) {
    const {
        onClickAlternate,
        onClickConvert,
        item,
        valueSelect1,
        valueSelect2,
        onChange1,
        onChange2,
        valueToConvert,
        onChange,
        convertFrom,
        convertTo,
        convertionResult,
        value,
    } = props;

    return (
        <Body>
            <div id="teste">
                <div id="line1">
                    <div id="value">
                        <strong>Valor</strong>
                        <input onChange={onChange} value={valueToConvert} />
                    </div>
                    <div id="convertTo">
                        <strong>Converter de</strong>
                        <select
                            id="selecionarTipo"
                            value={valueSelect1}
                            onChange={onChange1}
                        >
                            {item.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        id="alternate"
                        type="button"
                        onClick={onClickAlternate}
                    >
                        <FaExchangeAlt size={20} />
                    </button>
                    <div id="for">
                        <strong>Para</strong>
                        <select
                            id="selecionarTipo"
                            value={valueSelect2}
                            onChange={onChange2}
                        >
                            <option value={value}>{item}</option>
                            <option value={value}>{item}</option>
                            <option value={value}>{item}</option>
                            <option value={value}>{item}</option>
                        </select>
                    </div>
                    <button id="convert" type="button" onClick={onClickConvert}>
                        <AiOutlineReload size={20} />
                    </button>
                </div>
                <div id="line2">
                    <div id="box1">
                        <div id="box1Line1">
                            <strong id="strong1">Conversão de: </strong>
                            <strong id="strong2">{convertFrom}</strong>
                        </div>
                        <div id="box1Line2">
                            <strong id="strong3">Valor a converter:</strong>
                            <strong id="strong4">{valueToConvert}</strong>
                        </div>
                    </div>
                    <div id="box2">
                        <div id="box2Line1">
                            <strong id="strong5">Para:</strong>
                            <strong id="strong6">{convertTo}</strong>
                        </div>
                        <div id="box2Line2">
                            <strong id="strong7">
                                Resultado da conversão:
                            </strong>
                            <strong id="strong8">{convertionResult} </strong>
                        </div>
                    </div>
                </div>
            </div>
        </Body>
    );
}

export default Pannel;
