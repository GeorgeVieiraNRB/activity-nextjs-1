// components/Botao.tsx
import React from "react";
import { Item } from "./Item";

export function ListaItens() {
  return (
    <>
      <ul>
        <Item nome="Noticia 1"></Item>
        <Item nome="Noticia 2"></Item>
        <Item nome="Noticia 3"></Item>
      </ul>
    </>
  );
}
