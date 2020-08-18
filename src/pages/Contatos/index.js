import React from 'react';

import { Container, Description } from './styles';
import Title from '../../components/Title';
import Footer from '../../components/Footer';

function Contato() {
    return (
        <>
            <Container>
                <Title
                    label1="conversor de arquivos e medidas"
                    label2="Sobre esse serviço"
                />

                <Description>
                    <h6>O que é esse conversor</h6>
                    <p>
                        Esse conversor foi criado com o intento de ser simples,
                        intuitivo, útil e esteticamente agradável.
                    </p>
                </Description>
                <Description>
                    <h6>O que é esse conversor</h6>
                    <p>
                        Esse conversor foi criado com o intento de ser simples,
                        intuitivo, útil e esteticamente agradável.
                    </p>
                </Description>
                <Description>
                    <h6>O que é esse conversor</h6>
                    <p>
                        Esse conversor foi criado com o intento de ser simples,
                        intuitivo, útil e esteticamente agradável.
                    </p>
                </Description>
            </Container>
            <Footer />
        </>
    );
}

export default Contato;
