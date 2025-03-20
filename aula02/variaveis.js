var numero =2;
let texto = "hello";
const oQueEisso = ")";

//o ponto e vírgula é ocional: boas praticas o usam <3

console.log('tipo var:', numero);
//concatenar com vírgula garante um espaço

numero = 13;

console.log(texto + " o número agora é " + numero);
console.log('${texto} o número agora é ${numero}');

texto = 69;

console.log(texto + numero);

//concatenar com + dois valores numéricos vai acabar somando

console.log(oQueEisso);
/*oQueEisso = '!';
console.log(oQueEisso);*/

// constantes não podem ter novos valores assinalados a ela

// oQueEisso = "uma constante????";

// console.log(oQueEisso);