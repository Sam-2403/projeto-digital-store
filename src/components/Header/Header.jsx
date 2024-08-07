import './HeaderStyle.css';
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export default function Header() {
    const [selectedLink, setSelectedLink] = useState('Home');
    const navigate = useNavigate();

    const handleLinkSelection = (linkName) => {
        setSelectedLink(linkName);
    };

    const produtosFicticios = [
        { nome: 'Sapato Azul', url: '/ProductViewPage' },
        { nome: 'Sapato Vermelho', url: '/produto-vermelho' },
        { nome: 'Sapato Preto', url: '/produto-preto' }
    ];

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const searchText = event.target.value.trim().toLowerCase();
            let produtoEncontrado = produtosFicticios.find(produto => produto.nome.toLowerCase() === searchText);
            if (produtoEncontrado) {
                navigate(produtoEncontrado.url);
            } else {
                console.log(`Produto '${searchText}' não encontrado.`);
            }
        }
    };

    return (
        <div className="caixaHeader">
            <div id='caixaHeader2'>
                <div id='cabecalho'>
                    <Link to={'/'} onClick={() => handleLinkSelection('Home')}>
                        <img id="logo" src={logo} alt="logo" />
                    </Link>
                    <input
                        id="barraPesquisa"
                        type="text"
                        placeholder="Pesquisar produto..."
                        onKeyDown={handleKeyDown}
                    />
                    <button id="botaoLupa" type="button" />
                    <Link to={'/Cadastro'} id="cadastro" className="links">Cadastre-se</Link>
                    <Link to={'/Login'}>
                        <input id="botaoEntrar" type="button" value="Entrar" />
                    </Link>
                    <a id="iconeCarrinho" href="#carrinho">
                        <div id='bolinhaCarrinho'>2</div>
                    </a>
                </div>
                <div id="linksHeader">
                    <Link
                        to={'/'}
                        className={`links ${selectedLink === 'Home' ? 'selected' : ''}`}
                        onClick={() => handleLinkSelection('Home')}
                    >
                        Home
                    </Link>
                    <Link
                        to={'/ProductListingPage'}
                        className={`links ${selectedLink === 'Produtos' ? 'selected' : ''}`}
                        onClick={() => handleLinkSelection('Produtos')}
                    >
                        Produtos
                    </Link>
                    <Link
                        to={'/ProductViewPage'}
                        className={`links ${selectedLink === 'Categorias' ? 'selected' : ''}`}
                        onClick={() => handleLinkSelection('Categorias')}
                    >
                        Categorias
                    </Link>
                    <Link
                        to={'/ProductViewPage'}
                        className={`links ${selectedLink === 'Pedidos' ? 'selected' : ''}`}
                        onClick={() => handleLinkSelection('Pedidos')}
                    >
                        Meus Pedidos
                    </Link>
                </div>
            </div>
        </div>
    );
}
