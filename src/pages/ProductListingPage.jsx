import './ProductListing.css'
import FilterGroup from '../components/FilterGroup/FilterGroup'
import ProductListing from '../components/ProductListing/ProductListing'

export default function ProductListingPage() {

    return (
        <div id='productListing'>

            <div className='bloco'>

                <p><strong>Resultados para "Tênis" -</strong> 389 produtos</p>


                <div id='botaoOrdem'>
                    <label htmlFor="selecaoPrecos" id='labelSelecao'>Ordenar por:</label>
                    <select name="selecao" id="selecaoPrecos">
                        <option value="1"><span>menor preço</span></option>
                        <option value="2">maior preço</option>
                    </select>
                </div>

            </div>

            <div className='bloco'>

                <div id="campoFiltragem">

                    <div>
                        <p id='tituloFiltro'>Filtrar por</p>
                        <hr id='linhaFiltro' />
                    </div>

                    <FilterGroup title='Marca' inputType='checkbox' option='marca' />
                    <FilterGroup title='Categoria' inputType='checkbox' option='categoria' />
                    <FilterGroup title='Gênero' inputType='checkbox' option='gênero' />
                    <FilterGroup title='Estado' inputType='radio' option='estado' />
                </div>
                <div id='caixaListaCards'><ProductListing num={15}></ProductListing></div>
            </div>
        </div>
    )
}