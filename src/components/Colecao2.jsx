import React from "react"
import styled from "styled-components"
import Blusa from '../assets/Colecao/blusa.png'
import Calca from '../assets/Colecao/calca.png'
import Fone from '../assets/Colecao/fone.png'
import Tenis from '../assets/Colecao/tenis.png'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 712px;
    min-height: 196px;
    padding: 10px;
    margin-top: 50px;
`;

const TextoColecao = styled.div`
    font-weight: 700;
    font-size: 24px;
`;

const WrapperImagens = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
`;

export default function Colecao2() {
    return (

        <Container>
            <TextoColecao as="h3">
                Coleções em destaque
            </TextoColecao>
            <WrapperImagens>
                <div className="imagem-colecao">
                    <img src={Blusa} alt="Blusa" />
                    <p>Camisetas</p>
                </div>
                <div className="imagem-colecao">
                    <img src={Calca} alt="Calça" />
                    <p>Calças</p>
                </div>
                <div className="imagem-colecao">
                    <img src={Calca} alt="Bonés" />
                    <p>Bonés</p>
                </div>
                <div className="imagem-colecao">
                    <img src={Fone} alt="Headphones" />
                    <p>Headphones</p>
                </div>
                <div className="imagem-colecao">
                    <img src={Tenis} alt="Tênis" />
                    <p>Tênis</p>
                </div>
            </WrapperImagens>
        </Container>

    )
}