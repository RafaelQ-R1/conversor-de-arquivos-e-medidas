/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { FaExchangeAlt } from 'react-icons/fa';
import { AiOutlineReload } from 'react-icons/ai';
import { Body } from './styles';

function Pannel(props) {
    const {
        switchValues,
        convertValues,
        changeTargetValue,
        baseValue,
        changeBaseValue,
        targetValue,
        valueToConvert,
        changeValueToConvert,
        convertionResult,
        values,
        TextValueToConvert,
    } = props;

    return (
        <Body>
            <div id="teste">
                <div id="line1">
                    <div id="value">
                        <strong>Valor</strong>
                        <input
                            onChange={changeValueToConvert}
                            value={valueToConvert}
                        />
                    </div>
                    <div id="convertTo">
                        <strong>Converter de</strong>
                        <select
                            id="selecionarTipo"
                            value={baseValue}
                            onChange={changeBaseValue}
                        >
                            {values.map((value) => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button id="alternate" type="button" onClick={switchValues}>
                        <FaExchangeAlt size={20} />
                    </button>
                    <div id="for">
                        <strong>Para</strong>
                        <select
                            id="selecionarTipo"
                            value={targetValue}
                            onChange={changeTargetValue}
                        >
                            {values.map((value) => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button id="convert" type="button" onClick={convertValues}>
                        <AiOutlineReload size={20} />
                    </button>
                </div>
                <div id="line2">
                    <div id="box1">
                        <div id="box1Line1">
                            <strong id="strong1">Conversão de: </strong>
                            <strong id="strong2">{baseValue}</strong>
                        </div>
                        <div id="box1Line2">
                            <strong id="strong3">Valor a converter:</strong>
                            <strong id="strong4">{TextValueToConvert}</strong>
                        </div>
                    </div>
                    <div id="box2">
                        <div id="box2Line1">
                            <strong id="strong5">Para:</strong>
                            <strong id="strong6">{targetValue}</strong>
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
