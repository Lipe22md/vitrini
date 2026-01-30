/*
  ============================================
  SEÇÃO DE PRODUTOS
  ============================================
  
  COMO EDITAR/ADICIONAR PRODUTOS:
  1. Encontre a categoria desejada abaixo (cuecas, conjuntos, calcinhas)
  2. Copie um bloco de produto existente
  3. Cole e altere os dados (nome, preço, tamanhos)
  4. Para trocar imagens: substitua os arquivos em src/assets/
  
  COMO ALTERAR O NÚMERO DO WHATSAPP:
  - Altere a variável "numeroWhatsApp" na linha abaixo
  - Use apenas números, com código do país (ex: 5511999999999)
*/

import ProductCard from "./ProductCard";

// =============================================
// Importando imagens - CUECAS
// =============================================
import cueca1Frente from "@/assets/1.jpeg";
import cueca1Costas from "@/assets/1.jpeg";
import cueca2Frente from "@/assets/2.jpeg";
import cueca2Costas from "@/assets/2.jpeg";
import cueca3Frente from "@/assets/3.jpeg";
import cueca3Costas from "@/assets/3.jpeg";
import cueca4Frente from "@/assets/4.jpeg";
import cueca4Costas from "@/assets/4.jpeg";
import cueca5Frente from "@/assets/9.jpeg";
import cueca5Costas from "@/assets/9.jpeg";
import cueca6Frente from "@/assets/14.jpeg";
import cueca6Costas from "@/assets/14.jpeg";

// =============================================
// Importando imagens - CONJUNTOS FEMININOS (3 produtos)
// =============================================
import conjunto1Frente from "@/assets/11.jpeg";
import conjunto1Costas from "@/assets/11.jpeg";
import conjunto2Frente from "@/assets/12.jpeg";
import conjunto2Costas from "@/assets/12.jpeg";
import conjunto3Frente from "@/assets/13.jpeg";
import conjunto3Costas from "@/assets/13.jpeg";

// =============================================
// Importando imagens - CALCINHAS
// =============================================
import calcinha1Frente from "@/assets/5.jpeg";
import calcinha1Costas from "@/assets/5.jpeg";
import calcinha2Frente from "@/assets/6.jpeg";
import calcinha2Costas from "@/assets/6.jpeg";
import calcinha3Frente from "@/assets/7.jpeg";
import calcinha3Costas from "@/assets/7.jpeg";
import calcinha4Frente from "@/assets/8.jpeg";
import calcinha4Costas from "@/assets/8.jpeg";
import calcinha5Frente from "@/assets/10.jpeg";
import calcinha5Costas from "@/assets/10.jpeg";
import calcinha6Frente from "@/assets/15.jpeg";
import calcinha6Costas from "@/assets/15.jpeg";

// =============================================
// EDITE AQUI: Número do WhatsApp comercial
// =============================================
const numeroWhatsApp = "5571993039382"; // Número atualizado

// =============================================
// EDITE AQUI: Lista de CUECAS (6 produtos)
// =============================================
const cuecas = [
  {
    id: 1,
    nome: "Cueca Boxer Preto Sport Pro Fit",
    preco: "R$ 39,90",
    imagemFrente: cueca1Frente,
    imagemCostas: cueca1Costas,
    tamanhos: ["P", "M", "G", "GG"],
  },
  {
    id: 2,
    nome: "Cueca Boxer Azul Marinho Black Bull",
    preco: "R$ 45,90",
    imagemFrente: cueca2Frente,
    imagemCostas: cueca2Costas,
    tamanhos: ["P", "M", "G", "GG"],
  },
  {
    id: 3,
    nome: "Cueca Boxer Verde Evolution",
    preco: "R$ 35,90",
    imagemFrente: cueca3Frente,
    imagemCostas: cueca3Costas,
    tamanhos: ["P", "M", "G"],
  },
  {
    id: 4,
    nome: "Conjunto de Cuecas Boxer",
    preco: "R$ 32,90",
    imagemFrente: cueca4Frente,
    imagemCostas: cueca4Costas,
    tamanhos: ["P", "M", "G", "GG"],
  },
  {
    id: 5,
    nome: "Cueca Boxer Amarelo Calvin Klein",
    preco: "R$ 42,90",
    imagemFrente: cueca5Frente,
    imagemCostas: cueca5Costas,
    tamanhos: ["P", "M", "G"],
  },
  {
    id: 6,
    nome: "Cueca Boxer Cinza",
    preco: "R$ 44,90",
    imagemFrente: cueca6Frente,
    imagemCostas: cueca6Costas,
    tamanhos: ["P", "M", "G", "GG"],
  },
];

// =============================================
// EDITE AQUI: Lista de CONJUNTOS FEMININOS (3 produtos)
// =============================================
const conjuntos = [
  {
    id: 1,
    nome: "Conjunto Short e Blusa Azul de Pimenta",
    preco: "R$ 129,90",
    imagemFrente: conjunto1Frente,
    imagemCostas: conjunto1Costas,
    tamanhos: ["P", "M", "G"],
  },
  {
    id: 2,
    nome: "Conjunto Short e Blusa braco do Mickey e Minnie",
    preco: "R$ 119,90",
    imagemFrente: conjunto2Frente,
    imagemCostas: conjunto2Costas,
    tamanhos: ["P", "M", "G", "GG"],
  },
  {
    id: 3,
    nome: "Conjunto Short e Blusa Amarelo e Branco de Leão",
    preco: "R$ 149,90",
    imagemFrente: conjunto3Frente,
    imagemCostas: conjunto3Costas,
    tamanhos: ["P", "M", "G"],
  },
];

// =============================================
// EDITE AQUI: Lista de CALCINHAS (6 produtos)
// =============================================
const calcinhas = [
  {
    id: 1,
    nome: "Calcinhas Invantis",
    preco: "R$ 29,90",
    imagemFrente: calcinha1Frente,
    imagemCostas: calcinha1Costas,
    tamanhos: ["P", "M", "G"],
  },
  {
    id: 2,
    nome: "Calcinha de Flores Azuis",
    preco: "R$ 35,90",
    imagemFrente: calcinha2Frente,
    imagemCostas: calcinha2Costas,
    tamanhos: ["P", "M", "G", "GG"],
  },
  {
    id: 3,
    nome: "Calcinha Marrom Sport Pro Fit",
    preco: "R$ 25,90",
    imagemFrente: calcinha3Frente,
    imagemCostas: calcinha3Costas,
    tamanhos: ["P", "M", "G"],
  },
  {
    id: 4,
    nome: "Calcinha Ciano",
    preco: "R$ 32,90",
    imagemFrente: calcinha4Frente,
    imagemCostas: calcinha4Costas,
    tamanhos: ["P", "M", "G", "GG"],
  },
  {
    id: 5,
    nome: "Quatro Calcinhas Infantis",
    preco: "R$ 24,90",
    imagemFrente: calcinha5Frente,
    imagemCostas: calcinha5Costas,
    tamanhos: ["P", "M", "G"],
  },
  {
    id: 6,
    nome: "Calcinha   Rosa Listrada",
    preco: "R$ 28,90",
    imagemFrente: calcinha6Frente,
    imagemCostas: calcinha6Costas,
    tamanhos: ["P", "M", "G", "GG"],
  },
];


// Componente para cada seção de categoria
interface CategorySectionProps {
  id: string;
  titulo: string;
  descricao: string;
  produtos: typeof cuecas;
  codigoInicial: number;
}

const CategorySection = ({ id, titulo, descricao, produtos, codigoInicial }: CategorySectionProps) => (
  <div id={id} className="mb-16">
    {/* Título da Categoria */}
    <div className="text-center mb-8">
      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
        {titulo}
      </h3>
      <p className="text-muted-foreground max-w-xl mx-auto text-sm">
        {descricao}
      </p>
    </div>

    {/* Grid de Produtos */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {produtos.map((produto, index) => (
        <ProductCard
          key={produto.id}
          codigo={codigoInicial + index}
          nome={produto.nome}
          preco={produto.preco}
          imagemFrente={produto.imagemFrente}
          imagemCostas={produto.imagemCostas}
          tamanhos={produto.tamanhos}
          numeroWhatsApp={numeroWhatsApp}
        />
      ))}
    </div>
  </div>
);

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Título Principal da Seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Produtos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore nossa coleção e encontre peças únicas para seu estilo.
          </p>
        </div>

        {/* Seção: Cuecas - Códigos 1-6 */}
        <CategorySection
          id="cuecas"
          titulo="Cuecas"
          descricao="Conforto e qualidade para o dia a dia masculino."
          produtos={cuecas}
          codigoInicial={1}
        />

        {/* Seção: Conjuntos Femininos - Códigos 7-9 */}
        <CategorySection
          id="conjuntos"
          titulo="Conjuntos Femininos"
          descricao="Shorts e blusas combinando para looks completos e estilosos."
          produtos={conjuntos}
          codigoInicial={7}
        />

        {/* Seção: Calcinhas - Códigos 10-15 */}
        <CategorySection
          id="calcinhas"
          titulo="Calcinhas"
          descricao="Variedade de modelos para todos os estilos e ocasiões."
          produtos={calcinhas}
          codigoInicial={10}
        />
      </div>
    </section>
  );
};

export default ProductsSection;
