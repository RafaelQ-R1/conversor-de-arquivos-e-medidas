/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Rectangle from '../../assets/images/Rectangle.svg';
import { Title } from './styles';

const title = (props) => {
    return (
        <Title>
            <img src={Rectangle} alt="retangulo" />
            <p>{props.label}</p>
        </Title>
    );
};

export default title;
