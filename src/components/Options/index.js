import React from 'react';
import { Link } from 'react-router-dom';
import audio from '../../assets/images/fone.png';
import imagem from '../../assets/images/foto.png';
import medida from '../../assets/images/regua.png';
import video from '../../assets/images/video.png';
import moeda from '../../assets/images/moeda.png';
import { ListOptions } from './styles';

function Options() {
    return (
        <ListOptions>
            <div />
            <li>
                <Link to="/audio">
                    <img src={audio} alt="audio" />
                </Link>
                <h6>Áudio</h6>
            </li>
            <li>
                <Link to="/video">
                    <img src={video} alt="video" />
                </Link>
                <h6>VÍdeo</h6>
            </li>
            <li>
                <Link to="/imagem">
                    <img src={imagem} alt="imagem" />
                </Link>
                <h6>Imagem</h6>
            </li>
            <li>
                <Link to="/medidas">
                    <img src={medida} alt="medida" />
                </Link>
                <h6>Medida</h6>
            </li>
            <li>
                <Link to="/moeda">
                    <img src={moeda} alt="moedas" />
                </Link>
                <h6>Moeda</h6>
            </li>
            <div />
        </ListOptions>
    );
}

export default Options;
