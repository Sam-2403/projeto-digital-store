import React from "react";
import styled from "styled-components";
import Cores from "../Cores";
import { Link } from 'react-router-dom';

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 0px 10px 20px 0px;
    border-radius: 8px;
    width: 300px;
    background-color: white; /* Garantir que o fundo do container seja branco */
`;

const Imagem = styled.img`
    width: 292px;
    height: 321px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    object-fit: contain;
    border-radius: 8px; /* Adiciona borda arredondada à imagem */
`;

const NomeProduto = styled.div`
    text-align: left;
    font-size: 23px;
    margin-top: 10px;
    font-weight: 400;
    max-width: 100%;
    overflow: hidden;
    word-wrap: break-word;
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

const ProductLink = styled(Link)`
    text-decoration: none;
    color: inherit; /* Garante que a cor do link seja herdada do componente pai */
    &:hover {
        text-decoration: none; /* Evita underline no hover */
    }
`;

export default function ProductCard({ imagem, name, price = 0, priceDiscount = 0 }) {
    return (
        <ProductLink to={'/ProductViewPage/1'}>
            <Container>
                <Imagem src={imagem} alt={`Imagem de ${name}`} />
                {priceDiscount ? (
                    <DescontoCard>30% OFF</DescontoCard>
                ) : null}
                <NomeProduto>{name}</NomeProduto>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    {priceDiscount ? (
                        <>
                            <PrecoDesconto>${price}</PrecoDesconto>
                            <Preco>${priceDiscount}</Preco>
                        </>
                    ) : (
                        <Preco>${price}</Preco>
                    )}
                </div>
            </Container>
        </ProductLink>
    );
}
