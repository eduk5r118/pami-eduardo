//Declarações de variáveis
let nome: string = 'dudu';
let idade: number = 16;
let estaVivoPorDentro: boolean = false;

//arrays
let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: string[] = ['ana', 'bruno', 'carlos'];
let misto: (string | number)[] = ['ana', 25, 'carlos', 30];
let misto2: Array<string | number> = ['ana', 25, 'carlos', 30];

//tuplas
let pessoa: [string, number] = ['maria', 30];

//union types
let id: number | string = 123;
id = 'ABC123';

