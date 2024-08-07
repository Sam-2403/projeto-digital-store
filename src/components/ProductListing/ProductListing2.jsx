import React from "react";
import ProductCard2 from "../ProductCard/ProductCard2";
import styled from "styled-components";
import Cores from "../Cores";
import CardShoes from "../../assets/CardShoes.png"; // Importe a imagem corretamente

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 15px; /* Adiciona padding horizontal para melhor alinhamento */
    max-width: 904px; /* Largura máxima do container */
    margin: 0 auto; /* Centraliza o container na página */
    gap: 20px; /* Adiciona espaço entre os cards */
`;

export default function ProductListing2() {
    const products = [
        { id: 1, name: "K-Swiss V8 - Masculino", image: CardShoes, price: 200, priceDiscount: 149 },
        { id: 2, name: "K-Swiss V8 - Masculino", image: CardShoes, price: 200 },
        { id: 3, name: "K-Swiss V8 - Masculino", image: CardShoes, price: 200, priceDiscount: 149.9 },
        { id: 4, name: "K-Swiss V8 - Masculino", image: CardShoes, price: 200, priceDiscount: 149.9 },
        { id: 5, name: "K-Swiss V8 - Masculino", image: CardShoes, price: 200 },
        { id: 6, name: "K-Swiss V8 - Masculino", image: CardShoes, price: 200 },
        { id: 7, name: "K-Swiss V8 - Masculino", image: CardShoes, price: 200 },
        { id: 8, name: "K-Swiss V8 - Masculino", image: CardShoes, price: 200 },
        { id: 9, name: "K-Swiss V8 - Masculino", image: CardShoes, price: 200 },
        { id: 10, name: "K-Swiss V8 - Masculino", image: CardShoes, price: 200 },
        { id: 11, name: "K-Swiss V8 - Masculino", image: CardShoes, price: 200 },
        { id: 12, name: "K-Swiss V8 - Masculino", image: CardShoes, price: 200 },
        { id: 13, name: "K-Swiss V8 - Masculino", image: CardShoes, price: 200 },
        { id: 14, name: "K-Swiss V8 - Masculino", image: CardShoes, price: 200 },
        { id: 15, name: "K-Swiss V8 - Masculino", image: CardShoes, price: 200 }
    ];

    return (
        <Wrapper>
            {products.map((product) => (
                <ProductCard2
                    key={product.id}
                    name={product.name}
                    imagem={product.image}
                    price={product.price}
                    priceDiscount={product.priceDiscount}
                />
            ))}
        </Wrapper>
    );
}
