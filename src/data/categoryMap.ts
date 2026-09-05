export const CATEGORY_HIERARCHY: Record<string, string[]> = {
  "Bebidas Alcoólicas": [
    "Cervejas", 
    "Vinhos", 
    "Espumantes", 
    "Cachaças", 
    "Licor", 
    "Combos", 
    "Doses"
  ],
  "Destilados": [
    "Garrafas Vodka", 
    "Garrafas Gin", 
    "Whisk Garrafas"
  ],
  "Bebidas Sem Álcool": [
    "Refrigerantes", 
    "Sucos", 
    "Energéticos"
  ],
  "Doces e Snacks": [
    "Chocolate", 
    "Salgadinho", 
    "Balas", 
    "Chicletes", 
    "Doces"
  ],
  "Tabacaria": [
    "Cigarros", 
    "Headshop"
  ],
  "Conveniência": [
    "Gelo", 
    "Sandália", 
    "Bebidas Diversas",
    "Outros"
  ]
};

// Helper function to get the main category for a given subcategory
export function getMainCategory(subCategory: string): string {
  for (const [mainCat, subCats] of Object.entries(CATEGORY_HIERARCHY)) {
    // Usamos lowercase para garantir que pequenas diferenças de case não quebrem
    if (subCats.map(c => c.toLowerCase()).includes(subCategory.toLowerCase())) {
      return mainCat;
    }
  }
  return "Conveniência"; // Fallback
}
