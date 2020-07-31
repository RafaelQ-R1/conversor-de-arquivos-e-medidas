/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

import { Header } from './styles';

const header = (props) => {
    return <Header>{props.label}</Header>;
};

export default header;
