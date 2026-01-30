/*
  ============================================
  PÁGINA PRINCIPAL DO SITE
  ============================================
  
  Esta página reúne todos os componentes do site.
  Para editar cada seção, vá até o arquivo correspondente:
  
  - Header.tsx: Cabeçalho e menu
  - HeroBanner.tsx: Banner principal
  - ProductsSection.tsx: Lista de produtos (IMPORTANTE!)
  - AboutSection.tsx: Sobre a loja
  - Footer.tsx: Rodapé e contato
  - WhatsAppButton.tsx: Botão flutuante do WhatsApp
*/

import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Cabeçalho com Menu */}
      <Header />

      {/* Banner Principal */}
      <HeroBanner />

      {/* Seção de Produtos */}
      <ProductsSection />

      {/* Sobre a Loja */}
      <AboutSection />

      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default Index;
