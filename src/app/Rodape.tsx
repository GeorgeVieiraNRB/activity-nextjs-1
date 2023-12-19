import { Paragrafo } from "./Paragrafo";

interface Conteudo {
  conteudo: string;
}

export function Rodape({ conteudo }: Conteudo) {
  return (
    <>
      <footer className="flex justify-items-center justify-center bg-red-800 ">
        <Paragrafo conteudo={conteudo}></Paragrafo>
      </footer>
    </>
  );
}
