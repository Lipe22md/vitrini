/*
  ============================================
  SEÇÃO SOBRE A LOJA
  ============================================
  
  COMO EDITAR:
  - Altere os textos abaixo conforme sua loja
*/

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Sobre Nossa Loja
          </h2>

          {/* Descrição - EDITE AQUI */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Somos apaixonados por moda e comprometidos em trazer as melhores peças 
            para você. Nossa curadoria especial busca qualidade, conforto e estilo 
            em cada produto selecionado para homens e mulheres.
          </p>

          {/* Destaques */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 max-w-xl mx-auto">
            <div className="p-6 bg-background rounded-lg shadow-sm">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="font-semibold text-foreground mb-2">Qualidade</h3>
              <p className="text-sm text-muted-foreground">
                Peças selecionadas com cuidado e atenção aos detalhes
              </p>
            </div>

            <div className="p-6 bg-background rounded-lg shadow-sm">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-semibold text-foreground mb-2">Atendimento</h3>
              <p className="text-sm text-muted-foreground">
                Tire suas dúvidas diretamente pelo WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
