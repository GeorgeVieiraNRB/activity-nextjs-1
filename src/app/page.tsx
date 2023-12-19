"use client";
import { Botao } from "./Botao";
import { Quadrado } from "./Quadrado";
import { Titulo } from "./Titulo";
import { ListaItens } from "./ListaItens";
import { Imagem } from "./Imagem";
import { Paragrafo } from "./Paragrafo";
import { Cabecalho } from "./Cabecalho";
import { Rodape } from "./Rodape";
export default function Home() {
  return (
    <>
      <Titulo texto="Jornal"></Titulo>
      <Quadrado></Quadrado>
      <Botao nome="Clique aqui"></Botao>
      <ListaItens></ListaItens>
      <Imagem
        url="https://s4.static.brasilescola.uol.com.br/img/2019/09/panda.jpg"
        description="Panda"
      ></Imagem>
      <Paragrafo conteudo="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore officia assumenda optio voluptatum quam iste ea animi laudantium minus iure harum rem ullam nam provident a, autem aliquid sequi omnis?"></Paragrafo>
      <Cabecalho
        titulo="Panda"
        descricao="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, aspernatur. Amet a minima ullam exercitationem. Obcaecati non voluptatibus tempore fuga quaerat voluptatum eum nostrum ea nihil unde. Quis, exercitationem accusantium?
      Voluptates non animi fugiat maxime est dolor qui, voluptas eaque quis, excepturi modi? Itaque officiis, recusandae reiciendis culpa quibusdam possimus id, ex fugiat commodi quis modi quam saepe, quisquam nesciunt!"
      ></Cabecalho>
      <Rodape conteudo="Panda.tm"></Rodape>
    </>
  );
}
