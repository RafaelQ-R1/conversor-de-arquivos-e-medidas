import React from 'react';
import { Link } from 'react-router-dom';
import twitter from '../../assets/images/twitter.png';
import instagram from '../../assets/images/instagram.png';
import facebook from '../../assets/images/facebook.png';

import { Footer } from './styles';

function footer() {
    return (
        <Footer>
            <div id="footerTexts">
                <Link to="/sobre" style={{ textDecoration: 'none' }}>
                    <p>Sobre</p>
                </Link>
                <Link to="/termosdeuso" style={{ textDecoration: 'none' }}>
                    <p>Termos de uso</p>
                </Link>
                <Link to="/contatos" style={{ textDecoration: 'none' }}>
                    <p>Contatos</p>
                </Link>
                <Link to="/parceiros" style={{ textDecoration: 'none' }}>
                    <p>Parceiros</p>
                </Link>
            </div>
            <div>
                <ul>
                    <li>
                        <img src={instagram} alt="instagram" />
                    </li>
                    <li>
                        <img src={facebook} alt="facebook" />
                    </li>
                    <li>
                        <img src={twitter} alt="twitter" />
                    </li>
                </ul>
            </div>
        </Footer>
    );
}

export default footer;
