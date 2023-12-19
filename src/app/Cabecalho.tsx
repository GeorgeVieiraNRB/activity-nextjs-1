import { Paragrafo } from "./Paragrafo";
import { Titulo } from "./Titulo";

interface Cabecalho {
  titulo: string;
  descricao: string;
}

export function Cabecalho({ titulo, descricao }: Cabecalho) {
  return (
    <>
      <header>
        <Titulo texto={titulo}></Titulo>
        <div className="justify-center align-middle">
          <Paragrafo conteudo={descricao}></Paragrafo>
        </div>
      </header>
    </>
  );
}
