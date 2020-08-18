import React from 'react';

import { Body } from './styles';

function Navbar() {
    return (
        <Body>
            <button id="about" type="button">
                Sobre
            </button>
            <button id="terms" type="button">
                Termos de uso
            </button>
            <button id="contact" type="button">
                Contatos
            </button>
            <button id="partners" type="button">
                Parceiros
            </button>
        </Body>
    );
}

export default Navbar;
