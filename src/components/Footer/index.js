import React from 'react';
import twitter from '../../assets/images/twitter.png';
import instagram from '../../assets/images/instagram.png';
import facebook from '../../assets/images/facebook.png';

import { Footer } from './styles';

function footer() {
    return (
        <Footer>
            <div id="footerTexts">
                <h5>Sobre</h5>
                <h5>Termos de uso</h5>
                <h5>Contatos</h5>
                <h5>Parceiros</h5>
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
