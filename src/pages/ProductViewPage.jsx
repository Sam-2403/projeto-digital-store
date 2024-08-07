import './ProductView.css'
import ProductListing from "../components/ProductListing/ProductListing"
import React, { useState } from 'react';
import Carrossel2 from "../components/Carrossel2"
import Stars from "../assets/Stars.png"
import Star1 from "../assets/Star1.png"
import Seta from "../assets/arrow.png"

export default function ProductViewPage() {

    const [selectedSize, setSelectedSize] = useState('41');
    const [selectedColor, setSelectedColor] = useState(null);

    const handleSizeChange = (newSize) => {
        setSelectedSize(newSize === selectedSize ? null : newSize);
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    return (
        <>
            <div id='ProductViewPage'>
                <div id='extrasPagina'>
                    <p><strong>Home</strong> / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</p>
                </div>

                <div id='boxProdutos'>

                    <Carrossel2></Carrossel2>

                    <div id="InfoSapato">
                        <p className='titulosapato'>Tênis Nike Revolution 6 Next Nature Masculino</p>
                        <p>Casual | Nike | REF:38416711</p>
                        <div className='lateralidade'>
                            <img src={Stars} alt="estrelas" />
                            <p className='bg-warning paragrafo-estrela text-white'>4.7{<img src={Star1} alt='estrela' />}</p>
                            <p className='avaliacoes'>(90 avaliações)</p>
                        </div>
                        <div className='precodesconto'>
                        <h2 className='precoatual'>R$219,00</h2>
                        <p className='precoantigo'> <s> $300,00 </s></p>
                        </div>
                        
                        
                        <p className='DescricaoProd'>Descrição do produto</p>
                        <p className='textodescricao'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        <p className='tamanhosapato'>Tamanho</p>
                        <div className='lateralidade'>
                            <button
                                className={selectedSize === '39' ? 'selected' : ''}
                                onClick={() => handleSizeChange('39')} id='buton1'
                            >39</button>
                            <button
                                className={selectedSize === '40' ? 'selected' : ''}
                                onClick={() => handleSizeChange('40')} id='buton1'
                            >40</button>
                            <button
                                className={selectedSize === '41' ? 'selected' : ''}
                                onClick={() => handleSizeChange('41')}id='buton1'
                            >41</button>
                            <button
                                className={selectedSize === '42' ? 'selected' : ''}
                                onClick={() => handleSizeChange('42')}id='buton1'
                            >42</button>
                            <button
                                className={selectedSize === '43' ? 'selected' : ''}
                                onClick={() => handleSizeChange('43')}id='buton1'
                            >43</button>
                        </div>
                        <p className='corbuton'>Cor</p>
                        <div className='lateralidade'>
                            <input className="escolhacor" type="radio" name="corSapato" id="corAzul" />
                            <input className="escolhacor" type="radio" name="corSapato" id="corvermelho" />
                            <input className="escolhacor" type="radio" name="corSapato" id="corPreto" />
                            <input className="escolhacor" type="radio" name="corSapato" id="corRoxo" />
                        </div>
                        <button className='butoncomprar'>COMPRAR</button>
                    </div>
                </div>

                <div id='extrasPagina2'>
                    <p className='prodrelacionados'>Produtos Relacionados</p>
                    <p className='vertodospage3'>Ver todos   {<img src={Seta} alt='seta' />}</p>
                </div>

                <div className='productlistpage3'>
                <ProductListing num={4}/>
                </div>

            </div>
        </>
    )
}