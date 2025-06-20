import React, { createContext, useEffect, useState } from 'react';

export const CarrinhoContext = createContext();

export default function CarrinhoProvider({ children }) {

  const [carrinho, setCarrinho] = useState(() => {
    try {
      const salvo = localStorage.getItem('carrinho');
      return salvo ? JSON.parse(salvo) : [];
    } catch (e) {
      return [];
    }
  });

  // Salva no localStorage sempre que o carrinho mudar
  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }, [carrinho]);

  // Adiciona item novo ou atualiza quantidade
  const adicionarOuAtualizarItem = (novoItem) => {
    setCarrinho((prev) => {
      const existente = prev.find((item) => item.idProduto === novoItem.idProduto);
      if (existente) {
        return prev.map((item) =>
          item.idProduto === novoItem.idProduto
            ? { ...item, quantidade: novoItem.quantidade, subtotal: novoItem.quantidade * item.valorUnitario }
            : item
        );
      } else {
        return [...prev, { ...novoItem, subtotal: novoItem.valorUnitario * novoItem.quantidade }];
      }
    });
  };

  const limparCarrinho = () => {
    setCarrinho([]);
    localStorage.removeItem('carrinho');
    localStorage.removeItem('nomeCliente');
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarOuAtualizarItem, limparCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
}
