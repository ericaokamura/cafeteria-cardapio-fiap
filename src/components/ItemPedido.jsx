import React, { useState, useEffect, useContext } from 'react';
import { CarrinhoContext } from '../util/CarrinhoContext';

export default function ItemPedido({ idProduto, nomeProduto, valorUnitario, onSubtotalChange }) {

    const { carrinho, adicionarOuAtualizarItem } = useContext(CarrinhoContext);

    const item = carrinho.find((p) => p.idProduto === idProduto);
  
    const [quantidade, setQuantidade] = useState(item?.quantidade || 0);
  
    useEffect(() => {
      setQuantidade(item?.quantidade || 0);
    }, [item]);

    const handleQuantidadeChange = (e) => {
        const qtd = parseInt(e.target.value, 10);
        setQuantidade(qtd);
        adicionarOuAtualizarItem({ idProduto, nomeProduto, valorUnitario, quantidade: qtd });   
    };

    let subtotal = quantidade * valorUnitario;

    useEffect(() => {
        onSubtotalChange(idProduto, subtotal);
    }, [quantidade, subtotal, idProduto, onSubtotalChange]);

    return(
        <>
            <div>
                <h3>Produto: {nomeProduto}</h3>
                <h3>Preço: R$ {valorUnitario.toFixed(2)}</h3>
                <div style={{display: "inline-flex"}}>
                    <h3 style={{marginRight: "20px"}}>Quantidade:</h3>
                    <input type="number" value={quantidade} onChange={handleQuantidadeChange} min="0"></input>
                </div> 
                <h3>Sub Total: {subtotal}</h3>
            </div>
            <hr style={{border:"1px solid #ccc",margin:"20px 0"}}/>
        </>
    )
}

