/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

import { Tutorial } from './styles';

function CommonTutorial(props) {
    return (
        <Tutorial>
            <li>
                <h2 id="titulo-lista">{props.title1}</h2>
                <h7 id="texto-lista">{props.text1}</h7>
            </li>
            <li>
                <h2 id="titulo-lista">{props.title2}</h2>
                <h7 id="texto-lista">{props.text2}</h7>
            </li>
            <li>
                <h2 id="titulo-lista">{props.title3}</h2>
                <h7 id="texto-lista">{props.text3}</h7>
            </li>
            <li>
                <h2 id="titulo-lista">{props.title4}</h2>
                <h7 id="texto-lista">{props.text4}</h7>
            </li>
        </Tutorial>
    );
}

export default CommonTutorial;
