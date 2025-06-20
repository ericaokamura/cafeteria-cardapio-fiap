import "./Produto.css"
import React from 'react';

export default function Produto({ idProduto, nomeProduto, valorUnitario, onAdicionar }) {


    return(
        <>
            <div className="produto-card">
                <div className="produto-nome">
                    <h5>{ nomeProduto }</h5>
                </div>
                <div className="produto-valor-unitario">
                    <h5>Preço: R$ { valorUnitario.toFixed(2)}</h5>
                </div>
                <button style={{fontSize: "16px"}} onClick={onAdicionar}>Adicionar</button>
                <hr style={{border:"1px solid #ccc",margin:"20px 0"}}/>
            </div>
        </>
    )
}