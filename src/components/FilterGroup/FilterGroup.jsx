import React from "react";
import styled from "styled-components";
import Cores from "../Cores";
import PropTypes from 'prop-types';

// estilo do titulo
const Titulo = styled.div`    
    color: ${Cores.darkGray2};
    font-size: 14px;
    font-weight: 700;
    margin-top: 20px;
`;

const DivStyle = styled.div`
    color: ${Cores.darkGray2};
    font-size: 14px;
    font-weight: 500;
    width: auto;
    margin-top: 10px;
    display: flex;
    gap: 20px;
`;

// estilo dos inputs
const InputStyle = styled.input`
    width: 22px;
    height: 22px;
`;

// opções de categorias dos filtros
const opcoesMap = {
    marca: [
        { texto: 'Adidas' },
        { texto: 'Calenciada' },
        { texto: 'K-Swiss' },
        { texto: 'Nike' },
        { texto: 'Puma' }
    ],
    categoria: [
        { texto: 'Esporte e lazer' },
        { texto: 'Casual' },
        { texto: 'Utilitário' },
        { texto: 'Corrida' }
    ],
    gênero: [
        { texto: 'Masculino' },
        { texto: 'Feminino' },
        { texto: 'Unisex' }
    ],
    estado: [
        { texto: 'Novo' },
        { texto: 'Usado' }
    ]
};

function EscolhaOption({ escolher, inputType }) {
    const Opcoes = opcoesMap[escolher] || [];

    return (
        <>
            {Opcoes.map((opcao, index) => (
                <DivStyle key={index}>
                    <InputStyle className="inputFiltro" type={inputType} name={`Type${inputType}`} id={`${escolher}-${index}`} value={opcao.texto} />
                    <label htmlFor={`${escolher}-${index}`}>{opcao.texto}</label>
                </DivStyle>
            ))}
        </>
    );
}

EscolhaOption.propTypes = {
    escolher: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
};

export default function FilterGroup({ title, inputType, option }) {
    return (
        <>
            <Titulo>{title}</Titulo>
            <EscolhaOption escolher={option} inputType={inputType} />
        </>
    );
}

FilterGroup.propTypes = {
    title: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    option: PropTypes.string.isRequired,
};
