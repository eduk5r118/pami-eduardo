//1. Introduçãom: por que Typesript?

//JavaScript (sem tipagem):
function somar(a, b){
    return a + b;
}
console.log(somar(5, "10")); //Resultado inesperado "51"

//*Em JavaScript , você pode passar qualquer tipo de dadp

//* TypeScript (com tipagem):
function SomarComTipo(a: number, b: number): number {
    return a + b;
}
console.log(SomarComTipo(5, 10));
somar("oi", "tudo bem?");
SomarComTipo();