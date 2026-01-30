/*
  ============================================
  CARD DE PRODUTO
  ============================================
  
  Este componente exibe um produto individual.
  Ao passar o mouse, a imagem muda para mostrar outro ângulo.
  Os tamanhos disponíveis são mostrados como badges clicáveis.
  O tamanho selecionado é enviado na mensagem do WhatsApp.
*/

import { useState } from "react";

interface ProductCardProps {
  codigo: number;
  nome: string;
  preco: string;
  imagemFrente: string;
  imagemCostas: string;
  tamanhos: string[];
  numeroWhatsApp: string;
}

const ProductCard = ({
  codigo,
  nome,
  preco,
  imagemFrente,
  imagemCostas,
  tamanhos,
  numeroWhatsApp,
}: ProductCardProps) => {
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState<string | null>(null);

  // Cria o link do WhatsApp incluindo código, nome e tamanho
  const criarLinkWhatsApp = () => {
    const mensagemBase = `Olá! Tenho interesse no produto:\n\n Código: ${codigo}\n Produto: ${nome}`;
    const mensagemTamanho = tamanhoSelecionado 
      ? `\n Tamanho: ${tamanhoSelecionado}` 
      : "";
    const mensagemFinal = `${mensagemBase}${mensagemTamanho}\n\nPoderia me dar mais informações?`;
    return `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemFinal)}`;
  };

  return (
    <article className="product-card group">
      {/* Container das Imagens */}
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        {/* Imagem Frontal (visível por padrão) */}
        <img
          src={imagemFrente}
          alt={`${nome} - Frente`}
          className="product-image-front product-image-hover"
          loading="lazy"
        />
        
        {/* Imagem Traseira (aparece no hover) */}
        <img
          src={imagemCostas}
          alt={`${nome} - Costas`}
          className="product-image-back product-image-hover"
          loading="lazy"
        />
        
        {/* Indicador de hover */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-xs bg-foreground/80 text-background px-2 py-1 rounded">
            Passe o mouse para ver outro ângulo
          </span>
        </div>
      </div>

      {/* Informações do Produto */}
      <div className="p-4 space-y-3">
        {/* Código, Nome e Preço */}
        <div>
          <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-0.5 rounded">
            Código {codigo}
          </span>
          <h3 className="font-medium text-foreground text-lg leading-tight mt-1">
            {nome}
          </h3>
          <p className="text-xl font-bold text-primary mt-1">
            {preco}
          </p>
        </div>

        {/* Tamanhos Disponíveis - Agora clicáveis */}
        <div>
          <p className="text-xs text-muted-foreground mb-2">
            Selecione o tamanho:
          </p>
          <div className="flex flex-wrap gap-1">
            {tamanhos.map((tamanho) => (
              <button
                key={tamanho}
                type="button"
                onClick={() => setTamanhoSelecionado(
                  tamanhoSelecionado === tamanho ? null : tamanho
                )}
                className={`size-badge ${
                  tamanhoSelecionado === tamanho ? "selected" : ""
                }`}
              >
                {tamanho}
              </button>
            ))}
          </div>
        </div>

        {/* Botão de Compra via WhatsApp */}
        <a
          href={criarLinkWhatsApp()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 bg-whatsapp text-whatsapp-foreground font-semibold rounded-lg hover:bg-whatsapp/90 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Comprar via WhatsApp
        </a>
      </div>
    </article>
  );
};

export default ProductCard;
