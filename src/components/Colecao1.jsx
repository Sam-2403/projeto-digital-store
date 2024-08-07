import React from "react"
import './Colecao1.css'
import Camisa from '../assets/camisa-star-wars.png'
import Tennis from '../assets/tennis.png'
import Fone from '../assets/headset.png'

export default function Colecao1() {
    return (
        
        <>
        <div id='colecaoPosicao1'>
        <div id='colecaoPosicao2'>
            
            <p className="textoColection">Coleções em destaque</p>

            <div className="Cardexterno">

                <div className="CardColecao">

                    <div className="Colecao1">
                        <div className="colecao-container1">

                            <div className="texto">
                                <p className="texto30off">30% OFF</p>
                                <p className="textoNovoDrop">Novo Drop Supreme</p>
                                <input className="butomColecoes" id="" type="button" value="Comprar" />
                            </div>

                            <div>
                                <img className="image1colecao1" src={Camisa} alt="camisa" />
                            </div>

                        </div>
                    </div>

                    <div className="Colecao1">
                        <div className="colecao-container1">

                            <div className="texto">
                                <p className="texto30off">30% OFF</p>
                                <p className="textoNovoDrop">Coleção Adidas</p>
                                <input className="butomColecoes" id="" type="button" value="Comprar" />
                            </div>

                            <div>
                                <img className="image1colecao1" src={Tennis} alt="Tennis" />
                            </div>

                        </div>
                    </div>

                    <div className="Colecao1">
                        <div className="colecao-container1">

                            <div className="texto">
                                <p className="texto30off">30% OFF</p>
                                <p className="textoNovoDrop" id="beatsbass">Novo Beats Bass</p>
                                <input className="butomColecoes" id="" type="button" value="Comprar" />
                            </div>

                            <div>
                                <img className="image1colecao1" src={Fone} alt="Headset" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>

    )

}