import React, { useState } from 'react';
import Gmail from '../../assets/gmail.png';
import styled from "styled-components";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Wrapper = styled.div`
    display: grid;
    flex-flow: column wrap;
    justify-content: center;
    width: 583px;
    height: auto;
    text-align: left;
    padding: 30px;
    background-color: #FFFFFF;
    border-radius: 7px;
`;

const WrapperTitulo = styled.div`
    font-weight: 700;
`;

const InputLogin = styled.input`
    color: black;
    width: 100%;
    height: 60px;
    border: 0px;
    border-radius: 7px;
    padding-inline-start: 25px;
    background-color: rgba(71, 71, 71, 0.04);
`;

const WrapperDados = styled.div`
    font-weight: 700;
`;

const BotaoAcessar = styled.button`
    width: 100%;
    height: 48px;
    margin-top: 20px;
    color: rgba(245, 245, 245, 1);
    background-color: var(--cor-primaria);
    border: 0px;
    border-radius: 8px;
`;

export default function LoginCard() {
    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    };

    // Initialize Firebase
    initializeApp(firebaseConfig);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSenhaChange = (event) => {
        setSenha(event.target.value);
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, email, senha);
            console.log('Usuário logado com sucesso:', auth.currentUser.email);
            // Redirecione ou execute outras operações após o login bem-sucedido
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            // Trate especificamente o erro de email inválido
            if (error.code === 'auth/invalid-email') {
                alert('Endereço de email inválido. Verifique e tente novamente.');
            } else {
                alert('Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde.');
            }
        }
    };

    return (
        <Wrapper>
            <WrapperTitulo>
                <h3>Acesse sua conta</h3>
                <p>Novo cliente? Então registre-se <a href="#">aqui</a></p>
            </WrapperTitulo>

            <form onSubmit={handleLogin}>
                <WrapperDados>
                    <label htmlFor="emailInput" style={{ paddingBottom: '5px' }}>Email *</label>
                    <InputLogin
                        id="emailInput"
                        placeholder="Insira seu email"
                        type="text"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <label htmlFor="senhaInput" style={{ paddingTop: '20px', paddingBottom: '5px' }}>Senha *</label>
                    <InputLogin
                        id="senhaInput"
                        placeholder="Insira sua senha"
                        type="password"
                        value={senha}
                        onChange={handleSenhaChange}
                    />
                    <a href="#">Esqueci minha senha</a>
                    <BotaoAcessar type="submit">Acessar Conta</BotaoAcessar>
                </WrapperDados>
                <p>Ou faça login com:
                    <img src={Gmail} alt="gmail" style={{ marginLeft: '10px', cursor: 'pointer' }} />
                </p>
            </form>
        </Wrapper>
    );
}
