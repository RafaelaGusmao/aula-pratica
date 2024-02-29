const teclado = require (`prompt-sync`)();
let x: number =1;
let contaAte: number = teclado(parseFloat(`Digiteo valor do contador: `));

while (x != 11){
     console.log(`Contador está em ${x}`);
     x++;
}
