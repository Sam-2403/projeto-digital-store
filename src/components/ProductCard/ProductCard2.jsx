import React from "react";
import styled from "styled-components";
import Cores from "../Cores";

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 10px 20px 0px;
    border-radius: 8px;
    width: 300px;
    width: calc(33.33% - 20px);
    background-color: #ffffff; /* Definido para garantir fundo branco */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Adiciona sombra ao card */
    
    @media (max-width: 768px) {
        width: calc(50% - 20px); /* Ajusta a largura em telas menores */
    }

    @media (max-width: 480px) {
        width: 100%; /* Ajusta a largura para telas muito pequenas */
    }
`;

const ContainerTexto = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

const Imagem = styled.img`
    max-width: 100%;
    height: 321px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    object-fit: contain;
    background-color: #ffffff;
`;

const NomeProduto = styled.div`
    text-align: left;
    font-size: 24px;
    margin-top: 10px;
    font-weight: 400;
    overflow: hidden; /* Esconde o texto que excede o espaço disponível */
    white-space: nowrap;
    text-overflow: ellipsis; /* Adiciona reticências ao texto que excede o limite */
`;

const Preco = styled.div`    
    font-size: 24px;
    font-weight: 700;
    color: ${Cores.darkGray};
    margin-top: 10px;
`;

const PrecoDesconto = styled.div`    
    font-size: 24px;
    font-weight: 400;
    color: ${Cores.lightGray};
    margin-top: 10px;
`;

const DescontoCard = styled.p`
    position: absolute;
    width: 96px;
    height: 32px;
    border: solid #E7FF86;
    background-color: #E7FF86;
    border-radius: 29px;
    color: #474747;
    top: 2.5em;
    left: 1.5em;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function ProductCard2({ imagem, name, price = 0, priceDiscount = 0 }) {
    return (
        <Container>
            <Imagem src={imagem} alt={`Imagem de ${name}`} />
            {priceDiscount && (
                <DescontoCard>30% OFF</DescontoCard>
            )}
            <NomeProduto>{name}</NomeProduto>
            <ContainerTexto>
                {priceDiscount ? (
                    <>
                        <PrecoDesconto style={{ paddingRight: "15px" }}>${price}</PrecoDesconto>
                        <Preco>${priceDiscount}</Preco>
                    </>
                ) : (
                    <Preco>${price}</Preco>
                )}
            </ContainerTexto>
        </Container>
    );
}
