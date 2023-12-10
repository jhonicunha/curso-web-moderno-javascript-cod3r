let a = 7;
let b = 94;

/* Resultado proposto pelo cara -- Que viagem maluco
let temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);
*/

/* Minha solução -- Por ser variável, depois de eu setar igual abaixo ela vai mudar e se tornar o ultimo valor informado
a = 94;
b = 7;

console.log(a);
console.log(b);

*/

// Terceira solução -- a mais profissional talvez
[a, b] = [b, a]

console.log(a);
console.log(b);