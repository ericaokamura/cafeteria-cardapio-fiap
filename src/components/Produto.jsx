import "./Produto.css"
import { CarrinhoContext } from '../util/CarrinhoContext';
import React, { useContext } from 'react';

export default function Produto({ produto, onAdicionar }) {

    const { adicionarOuAtualizarItem } = useContext(CarrinhoContext);

    return(
        <>
            <div className="produto-card">
                <div className="produto-nome">
                    <h5>{ produto.nomeProduto }</h5>
                </div>
                <div className="produto-descricao">
                    <h5>{ produto.descricao }</h5>
                </div>
                <div className="produto-valor-unitario">
                    <h5>Preço: R$ { produto.valorUnitario.toFixed(2)}</h5>
                </div>
                <button style={{fontSize: "16px"}} onClick={() => adicionarOuAtualizarItem(produto)}>Adicionar</button>
                <hr style={{border:"1px solid #ccc",margin:"20px 0"}}/>
            </div>
        </>
    )
}