import React, { useState } from 'react';
import styled from "styled-components";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Wrapper = styled.div`
  display: grid;
  flex-flow: column wrap;
  justify-content: center;
  width: 750px;
  height: auto;
  text-align: left;
  align-items: center;
  padding: 30px;
  background-color: #FFFFFF;
  border-radius: 4px;
`;

const WrapperTitulo = styled.div`
  display: flex;
  font-weight: 700;
  margin-bottom: 22px;
  flex-flow: column wrap;
  text-align: left;
  font-size: 32px;
`;

const WrapperSubTitulo = styled.div`
  display: flex;
  font-weight: 700;
  margin-bottom: 22px;
  flex-flow: column wrap;
  text-align: left;
`;

const InputCadastro = styled.input`
  color: black;
  width: 100%;
  height: 60px;
  border: 0;
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
  border: 0;
  border-radius: 8px;

  &:hover {
    background-color: rgba(126, 0, 61, 0.815);
  }
`;

const InputBox = styled.input`
  width: 22px;
  height: 22px;
  border-radius: 4px;
  background-color: '#FF5733','#4CAF50';
  transition: background-color 0.3s ease, border-color 0.3s ease;
`;

export default function CadastroCard() {
  return (
    <Wrapper>
      <WrapperTitulo>
        <p className='Sub2'>Informações Pessoais <hr /></p>
      </WrapperTitulo>

      <WrapperDados>
        <form action="post">
          <label htmlFor="nome" style={{ paddingBottom: '5px' }}>Nome Completo *</label>
          <InputCadastro id="nome" name="nome" placeholder="Insira seu nome" type="text" />
          
          <label htmlFor="cpf" style={{ paddingBottom: '5px' }}>CPF *</label>
          <InputCadastro id="cpf" name="cpf" placeholder="Insira seu CPF" type="number" />
          
          <label htmlFor="email" style={{ paddingBottom: '5px' }}>Email *</label>
          <InputCadastro id="email" name="email" placeholder="Insira seu email" type="email" />
          
          <label htmlFor="celular" style={{ paddingBottom: '5px' }}>Celular *</label>
          <InputCadastro id="celular" name="celular" placeholder="Insira seu celular" type="number" />
          
          <p className='Sub2'>Informações de entrega <hr /></p>

          <label htmlFor="endereco" style={{ paddingBottom: '5px' }}>Endereço *</label>
          <InputCadastro id="endereco" name="endereco" placeholder="Insira seu endereço" type="text" />
          
          <label htmlFor="bairro" style={{ paddingBottom: '5px' }}>Bairro *</label>
          <InputCadastro id="bairro" name="bairro" placeholder="Insira seu bairro" type="text" />
          
          <label htmlFor="cidade" style={{ paddingBottom: '5px' }}>Cidade *</label>
          <InputCadastro id="cidade" name="cidade" placeholder="Insira sua cidade" type="text" />
          
          <label htmlFor="cep" style={{ paddingBottom: '5px' }}>CEP *</label>
          <InputCadastro id="cep" name="cep" placeholder="Insira seu CEP" type="number" />

          <BotaoAcessar type="submit">Acessar</BotaoAcessar>
        </form>
      </WrapperDados>
    </Wrapper>
  );
}
