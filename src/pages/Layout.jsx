import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import RoutesPages from './RoutesPages';
import { BrowserRouter } from 'react-router-dom';
import { styled } from "styled-components";

export default function Layout(){
     
    const BackgroundDiv = styled.div`
     background: #F9F8FE;

    `
    return (
        <BackgroundDiv>

        <>
        <BrowserRouter>
            <Header/>
            <RoutesPages/>
            <Footer/>
        </BrowserRouter>
        </>
        </BackgroundDiv>
      
    )
}