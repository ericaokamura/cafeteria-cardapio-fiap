import './Cardapio.css'
import Produto from '../components/Produto'
import Menu from '../components/Menu'
import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'


export default function Cardapio() {

    const navigate = useNavigate();

    const produtosDisponiveis = [];

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {

        const carregarProdutos = async () => {
            try {
                const response = await fetch('http://localhost:8090/produtos', {
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

    return(
        <>
            <Menu/>
            <div style={{display: "block"}}>
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
                <div style={{marginTop: "50px", fontSize: "24px"}}>
                    <h2>Cardápio</h2>
                </div>
                <div className="produtos">
                        {produtos.map((produto, index) => (
                            <Produto
                                key={index}
                                idProduto={produto.id}
                                nome={produto.nome}
                                descricao={produto.descricao}
                                tags={produto.tags}
                                valorUnitario={produto.valorUnitario}
                            />
                        ))}
                </div>
            </div>
        </>
    )
}