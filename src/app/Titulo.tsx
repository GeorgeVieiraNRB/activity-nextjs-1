interface Titulo {
  texto: string;
}

export function Titulo({ texto }: Titulo) {
  return (
    <h1 className="gap-0 text-emerald-500 text-8xl bg-blue-600 border-fuchsia-800 border-spacing-6">
      {texto}
    </h1>
  );
}
