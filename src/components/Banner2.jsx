import React from "react"
import './Banner2.css'
import Shoes2 from '../assets/Frame 53660.png'
export default function Banner2() {
    return (
        <>
            <div className="Banner2">
                <div className="Banner-container2">
                    <div className="imagens">
                        <img className="imagem21" src={Shoes2} alt="shoes" />
                        {/* <img className="imagem22" src={Ellipsis} alt="Ellipse11" /> */}
                    </div>
                    <div className="texto">
                        <p className="p">Oferta especial</p>
                        <p className="p2">Air Jordan edição de colecionador</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</span>
                        <input className="butonof" type="button" value="Ver Ofertas"></input>
                    </div>
                </div>
            </div>
        </>
    )
}