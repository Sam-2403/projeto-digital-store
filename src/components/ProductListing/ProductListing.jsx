import React, { useContext } from "react";
import MyContext from '../MyContext';
import ProductCard from "../ProductCard/ProductCard";
import styled from "styled-components";
import Shoes from "../../assets/CardShoes.png";
import products from "../Products";

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px; /* Adiciona espaço entre os cards */
    padding: 20px; /* Adiciona padding ao wrapper */
`;

export default function ProductListing({ num = 1 }) {
    const dadosAPI = useContext(MyContext);

    // Função para verificar se os dados estão disponíveis
    const renderProducts = (data) => {
        if (!data || data.length === 0) {
            return <p>Nenhum produto disponível</p>; // Mensagem quando não há produtos
        }

        return data.slice(0, num).map((product) => (
            <ProductCard
                key={product.id || product.nome} // Use um identificador único, se disponível
                name={product.nome || product.name}
                imagem={product.imagem_url || product.image || Shoes}
                price={product.preco_original || product.price}
                priceDiscount={product.preco_desconto || product.priceDiscount}
            />
        ));
    };

    return (
        <Wrapper>
            {renderProducts(dadosAPI || products)}
        </Wrapper>
    );
}
