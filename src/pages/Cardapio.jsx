import './Cardapio.css'
import Produto from '../components/Produto'
import Menu from '../components/Menu'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CarrinhoContext } from '../util/CarrinhoContext'


export default function Cardapio() {

    const navigate = useNavigate();

    const produtosDisponiveis = [
      { idProduto: 1, nomeProduto: 'Produto A', valorUnitario: 30 },
      { idProduto: 2, nomeProduto: 'Produto B', valorUnitario: 35 },
      { idProduto: 3, nomeProduto: 'Produto C', valorUnitario: 20 }
    ];
  
    const { adicionarOuAtualizarItem } = useContext(CarrinhoContext);

    const visualizarMeuPedido = () => {
        navigate('/meu-pedido');
    };

    return(
        <>
            <Menu/>
            <div className="categorias">
                <div style={{paddingLeft:"60px",paddingRight:"60px"}}>
                    <h3>BEBIDAS</h3>
                </div>
                <div style={{paddingLeft:"60px",paddingRight:"60px"}}>
                    <h3>DOCES</h3>
                </div>
                <div style={{paddingLeft:"60px",paddingRight:"60px"}}>
                    <h3>SALGADOS</h3>
                </div>
            </div>
            <div className="botoes">
                <div className="botao" style={{transform: "rotate(-90deg)",height:"50px",width:"150px",marginBottom:"120px",marginLeft:"0px"}}>
                    <button variant="secondary" onClick={visualizarMeuPedido} style={{color: "#FFFFFF",backgroundColor: "#281212",padding:"15px"}}>
                        MEU PEDIDO
                    </button>
                </div>
            </div>
            <div className="produtos">
                    {produtosDisponiveis.map((produto) => (
                        <Produto
                            key={produto.idProduto}
                            produto={produto}
                            onAdicionar={() =>
                                adicionarOuAtualizarItem({ idProduto: produto.idProduto, nomeProduto: produto.nomeProduto, valorUnitario: produto.valorUnitario, quantidade: 1 })
                            }
                        />
                    ))}
                </div>
        </>
    )
}