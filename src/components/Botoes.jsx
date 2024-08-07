import React from 'react';
import styled from 'styled-components';

const ButtonPrimary = styled.button`
  background-color: #C92071;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #AD165F; /* Cor alterada ao passar o mouse */
  }

  &:focus {
    outline: none; /* Remove o contorno padrão ao focar */
  }
`;