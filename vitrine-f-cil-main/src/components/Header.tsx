/*
  ============================================
  CABEÇALHO DO SITE
  ============================================
  
  COMO EDITAR:
  - Linha 20: Altere "Minha Loja" para o nome da sua loja
  - Links de navegação: Adicione ou remova itens no array abaixo
*/

const Header = () => {
  // EDITE AQUI: Nome da sua loja
  const nomeDaLoja = "Minha Loja";

  // EDITE AQUI: Links do menu (adicione ou remova conforme necessário)
  const linksMenu = [
    { texto: "Início", href: "#inicio" },
    { texto: "Produtos", href: "#produtos" },
    { texto: "Sobre", href: "#sobre" },
    { texto: "Contato", href: "#contato" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo / Nome da Loja */}
        <a href="#inicio" className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-foreground tracking-tight">
            {nomeDaLoja}
          </h1>
        </a>

        {/* Menu de Navegação */}
        <nav className="hidden md:flex items-center gap-8">
          {linksMenu.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.texto}
            </a>
          ))}
        </nav>

        {/* Menu Mobile (simplificado) */}
        <nav className="flex md:hidden items-center gap-4">
          {linksMenu.slice(0, 2).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.texto}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
