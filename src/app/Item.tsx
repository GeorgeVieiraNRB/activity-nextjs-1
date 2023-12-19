// components/Botao.tsx
import React from "react";

interface Titulo {
  nome: string;
}

export function Item({ nome }: Titulo) {
  return (
    <>
      <li className="m-4">{nome}</li>
    </>
  );
}
