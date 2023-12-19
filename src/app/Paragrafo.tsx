interface Paragrafo {
  conteudo: string;
}

export function Paragrafo({ conteudo }: Paragrafo) {
  return <p className="gap-0 text-emerald-500">{conteudo}</p>;
}
