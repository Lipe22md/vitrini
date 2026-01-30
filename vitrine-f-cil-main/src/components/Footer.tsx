/*
  ============================================
  RODAPÉ DO SITE
  ============================================
  
  COMO EDITAR:
  - Altere o nome da loja na linha 14
  - Altere as informações de contato abaixo
*/

const Footer = () => {
  // =============================================
  // EDITE AQUI: Informações da loja
  // =============================================
  const nomeDaLoja = "Minha Loja";
  const telefone = "(71) 99303-9382";

  return (
    <footer id="contato" className="bg-secondary py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Coluna 1: Sobre a Loja */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground mb-4">
              {nomeDaLoja}
            </h3>
            <p className="text-muted-foreground">
              Moda com qualidade e estilo para homens e mulheres. 
              Encontre peças únicas para todas as ocasiões.
            </p>
          </div>

          {/* Coluna 2: Contato */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Contato
            </h4>
            <div className="space-y-2 text-muted-foreground">
              <p>{telefone}</p>
              <p>Fale conosco pelo WhatsApp!</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© 2026 {nomeDaLoja}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
