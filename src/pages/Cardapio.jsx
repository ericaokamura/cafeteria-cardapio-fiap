import './Cardapio.css'
import Produto from '../components/Produto'
import Menu from '../components/Menu'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CarrinhoContext } from '../util/CarrinhoContext'
import { useState, useEffect } from 'react'


export default function Cardapio() {

    const navigate = useNavigate();

    const produtosDisponiveis = [];

    const { adicionarOuAtualizarItem } = useContext(CarrinhoContext);

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {

        const carregarProdutos = async () => {
            try {
                const response = await fetch('http://localhost:8090/produtos/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                });

                if (!response.ok) {
                    throw new Error('Erro na requisição do produto ' + item.idProduto);
                }
                const data = await response.json();
                setProdutos(data);
            } catch (error) {
                console.error("Erro ao buscar produto:", error);
            }
        };

        carregarProdutos();
    })
  

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
                    {produtos.map((produto, index) => (
                        <Produto
                            key={index}
                            idProduto={produto.id}
                            nomeProduto={produto.descricao}
                            valorUnitario={produto.valorUnitario}
                            onAdicionar={() =>
                                adicionarOuAtualizarItem({ idProduto: produto.id, nomeProduto: produto.descricao, valorUnitario: produto.valorUnitario, quantidade: 1 })
                            }
                        />
                    ))}
                </div>
        </>
    )
}