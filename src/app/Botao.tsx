// components/Botao.tsx
import React from "react";

interface Titulo {
  nome: string;
}

function cliqueFunc(): void {
  window.alert("aaaa");
}

export function Botao({ nome }: Titulo) {
  return (
    <>
      <button onClick={cliqueFunc}>{nome}</button>
    </>
  );
}
