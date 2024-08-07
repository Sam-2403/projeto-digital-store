import Banner2 from "../../components/Banner2"
import Carrossel from "../../components/Carrossel"
import Colecao1 from "../../components/Colecao1"
import Colecao2 from "../../components/Colecao2"
import ProductListing from "../../components/ProductListing/ProductListing"
import Seta from "../../assets/arrow.png"
import React from "react";
import styled from "styled-components";

const EmAlta = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 123px;
`
const EmAlta2 = styled.div`
display: flex;
min-width: 1240px;
width: 75%;
justify-content: space-between;
`

const ProductListingBox = styled.div`
min-width: 1240px;
width: 60%;
display: flex;
`

export default function HomePage() {
    return (
        <>
            <Carrossel />
            <Colecao1 />
            <Colecao2 />
            <EmAlta >
                <EmAlta2>
                    <p className="strong">Produtos em alta</p>
                    <p className="vertodoshomepage">Ver todos {<img src={Seta} alt='seta' />}</p>
                </EmAlta2>
                <ProductListingBox> <ProductListing num={8}></ProductListing> </ProductListingBox>
            </EmAlta>
            <Banner2 />
        </>
    )
}