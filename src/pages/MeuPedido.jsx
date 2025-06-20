import './MeuPedido.css';
import Menu from '../components/Menu'
import ItemPedido from '../components/ItemPedido'
import { useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { CarrinhoContext } from '../util/CarrinhoContext';
import { useEffect } from 'react';


export default function MeuPedido() {

    const { carrinho, limparCarrinho } = useContext(CarrinhoContext);

    const [nomeCliente, setNomeCliente] = useState('');

    useEffect(() => {
        const nomeSalvo = localStorage.getItem('nomeCliente');
        if (nomeSalvo) {
            setNomeCliente(nomeSalvo);
        }
      }, []);
    
    useEffect(() => {
        localStorage.setItem('nomeCliente', nomeCliente);
    }, [nomeCliente]);

    const salvarNomeCliente = (e) => {
        setNomeCliente(e.target.value)
    }

    const enviarPedido = () => {

        let itens = [];
        
        carrinho.forEach(item => itens.push({ idProduto: item.idProduto, quantidade: item.quantidade}));

        console.log(itens);

        console.log(carrinho);


        try {
            const response = fetch('http://localhost:8090/pedidos/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ formaPagamento: "PIX", pagamentoAprovado: true, itensPedido: itens, nomeCliente: nomeCliente, comanda: 2, mesa: 2 })
            });
    
            if (response.ok) {
              const data = response.json();
            } else {
              const errorData = response.json();
              console.log("Erro: " + errorData);
            }
        } catch (error) {
            console.error('Erro na conexão com o servidor.');
        }

        limparCarrinho();
        setNomeCliente('');

    }

    let comanda = "";
    let mesa = "";

    const navigate = useNavigate();

    const voltar = () => {
        navigate('/cardapio')
    };

    const [subtotais, setSubtotais] = useState({});

    const atualizarSubtotal = (idProduto, novoSubtotal) => {
        setSubtotais((prev) => ({
            ...prev,
            [idProduto]: novoSubtotal,
        }));
    };

    const totalGeral = Object.values(subtotais).reduce((acc, curr) => acc + curr, 0);

    return (
        <>
            <Menu/>
            <div className="formulario">
                <form>
                    <div className="itens-pedido">
                        <div style={{display:"inline-flex",width:"80%"}}>
                            <div style={{width:"80%"}}>
                                <h2>MEU PEDIDO</h2>
                            </div>
                            <div className="botao-voltar">
                                <button onClick={voltar}>
                                   <h3>voltar</h3>
                                </button>
                            </div>
                        </div>
                        <div className="campos">
                            <h4 style={{fontWeight: "400",marginRight:"20px",verticalAlign:"center"}}>Nome: </h4>
                            <input type="text" value={nomeCliente} onChange={salvarNomeCliente} style={{backgroundColor:"#FFFFFF",width:"250px",height:"30px"}}/>
                            <h4>Comanda: { comanda }</h4>
                            <h4>Mesa: { mesa }</h4>
                        </div>
                        <div>
                            {carrinho.map((item, index) => (
                                <li key={index}> 
                                    <ItemPedido idProduto={item.idProduto} nomeProduto={item.nomeProduto} valorUnitario={item.valorUnitario} quantidade={item.quantidade} onSubtotalChange={atualizarSubtotal}/>
                                </li>
                            ))}
                        </div>
                        <div>
                            <h3>Total Geral: R$ {totalGeral.toFixed(2)}</h3>
                        </div>
                        <div className="botao-enviar">
                            <button onClick={enviarPedido}>
                                <h3>Enviar Pedido</h3>
                            </button>
                        </div>
                    </div>    
                </form>    
            </div>
        </>
    )
}