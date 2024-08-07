import React, { useState, useEffect, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import ProductListingPage from "./ProductListingPage";
import ProductViewPage from "./ProductViewPage";
import LoginPage from "./Login/LoginPage";
import MyContext from "../components/MyContext";
import CadastroPage from "./Cadastro/CadastroPage";

export default function RoutesPages() {
    const [dadosAPI, setDadosAPI] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api-store-do1w.onrender.com/shoes');
                const data = await response.json();
                setDadosAPI(data);
                setLoading(false);

                // console.log('Dados da API:', data);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
                setLoading(false);
            }
        };

        fetchData()
    }, []);

    return (
        <MyContext.Provider value={dadosAPI}>
            <Routes>
                <Route path='/' element={<HomePage />} exact />
                <Route path='/ProductListingPage' element={<ProductListingPage />} />
                <Route path='/ProductViewPage' element={<ProductViewPage />} />
                <Route path='/Login' element={<LoginPage />} />
                <Route path='/ProductViewPage/:id' element={<ProductViewPage />} />
                <Route path='/Cadastro' element={<CadastroPage />} />
            </Routes>
        </MyContext.Provider>
    )
}