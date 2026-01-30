/*
  ============================================
  BANNER PRINCIPAL (HERO)
  ============================================
  
  COMO EDITAR:
  - Linha 15: Altere o título principal
  - Linha 16: Altere o subtítulo/descrição
  - Para trocar a imagem: substitua o arquivo src/assets/hero-banner.jpg
*/

import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  // EDITE AQUI: Textos do banner
  const titulo = "Nova Coleção";
  const subtitulo = "Descubra as últimas tendências em moda com qualidade e estilo único para você.";
  const textoBotao = "Ver Produtos";

  return (
    <section id="inicio" className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      {/* Imagem de Fundo */}
      <img
        src={heroBanner}
        alt="Banner principal da loja"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay escuro para melhor leitura do texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 to-foreground/20" />
      
      {/* Conteúdo do Banner */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
              {titulo}
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              {subtitulo}
            </p>
            <a
              href="#produtos"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
            >
              {textoBotao}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
