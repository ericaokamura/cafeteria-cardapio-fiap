import "./Produto.css"
import React from 'react';

export default function Produto({ idProduto, nome, descricao, tags, valorUnitario }) {

    return(
        <>
            <div className="produto-card">
                <div className="produto-nome">
                    <h5>{ nome }</h5>
                </div>
                <div className="produto-descricao">
                    <h5>{ descricao }</h5>
                </div>
                <div className="produto-tags">
                    <h5>{ tags }</h5>
                </div>
                <div className="produto-valor-unitario">
                    <h5>Preço: R$ { valorUnitario.toFixed(2)}</h5>
                </div>
                <hr style={{border:"1px solid #ccc",margin:"20px 0"}}/>
            </div>
        </>
    )
}