function saudacao2(nome: string, saudacaoPadrao: string = "oiiii"): string {
    return saudacaoPadrao + ", " + nome + "!";
  }
  console.log(saudacao("Beatriz")); // "Beatriz é a minha namorada"
  