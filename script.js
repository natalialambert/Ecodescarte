function verificarDescarte() {
    const item = document.getElementById("itemInput").value.toLowerCase();
    const resultado = document.getElementById("resultado");
  
    const descarte = {
      "pilha": "Ponto de coleta de resíduos eletrônicos ou supermercado com coleta.",
      "garrafa pet": "Coleta seletiva - Plástico.",
      "papel": "Coleta seletiva - Papel.",
      "vidro": "Coleta seletiva - Vidro.",
      "óleo": "Ponto de coleta de óleo usado (alguns mercados).",
      "bateria": "Coleta especializada - Eletrônicos.",
      "celular": "Loja de eletrônicos ou ecoponto."
      
    };
  
    if (descarte[item]) {
      resultado.textContent = `Descarte recomendado: ${descarte[item]}`;
    } else {
      resultado.textContent = "Item não reconhecido. Tente outro ou pesquise no site da prefeitura.";
    }
  }
  