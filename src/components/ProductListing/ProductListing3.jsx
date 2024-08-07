import React, { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styled from "styled-components";
import MyContext from '../MyContext';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px; /* Adiciona espaço entre os cards */
    padding: 20px; /* Adiciona padding ao redor do container */
`;

export default function ProductListing3() {
    const sharedValue = useContext(MyContext);

    return (
        <Wrapper>
            {sharedValue.slice(0, 4).map((product) => (
                <ProductCard
                    key={product.id} /* Utilize um identificador único se disponível */
                    name={product.name}
                    imagem={product.image}
                    price={product.price}
                    priceDiscount={product.priceDiscount}
                />
            ))}
        </Wrapper>
    );
}
