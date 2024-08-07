import React from "react";
import './Banner.css';
import Shoes from '../assets/Frame 53659.png';
import Fogo from '../assets/fogo.png';

export default function Banner() {
    return (
        <div className="Banner">
            <div className="Banner-container1">
                <div className="texto" id="padtexto">
                    <p className="melhoresOfertas">Melhores ofertas personalizadas</p>
                    <div className="textfoto">
                        <p className="textoPrincipal">Queima de estoque Nike</p>
                        <img className="imageFogo" src={Fogo} alt="fogo" />
                    </div>
                    <span className="textoSecundario">
                        Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                    </span>
                    <br />
                    <input className="botaoOfertas" type="button" value="Ver Ofertas" />
                </div>
                <div>
                    <img className="imagem1" src={Shoes} alt="shoes" />
                    {/* <img className="imagem2" src={Ornamente} alt="Ornament11" /> */}
                </div>
            </div>
        </div>
    );
}
