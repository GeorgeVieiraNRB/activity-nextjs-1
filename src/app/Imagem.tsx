interface image {
  url: string;
  description: string;
}

export function Imagem({ url, description }: image) {
  return (
    <>
      <img src={url} alt={description} />
    </>
  );
}
