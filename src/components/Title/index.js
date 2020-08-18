/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import engrenagem from '../../assets/images/engrenagem.png';
import { Title } from './styles';

const title = (props) => {
    return (
        <Title>
            <div id="line1">
                <Link to="/">
                    <h6>{props.label1}</h6>
                    <img src={engrenagem} alt="engrenagem" />
                </Link>
            </div>
            <p id="screenName">{props.label2}</p>
        </Title>
    );
};

export default title;
