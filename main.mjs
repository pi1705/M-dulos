import { somar } from './somar.mjs';
import { multiplicar } from './multiplicar.mjs';
import { subtração } from './subtração.mjs';
import { divisão } from './divisão.mjs';

const numero1 = 5;
const numero2 = 3;

const resultadoSoma = somar(numero1, numero2);
const resultadoMultiplicacao = multiplicar(numero1, numero2);
const resultadoSubtracao = subtração(numero1, numero2);
const resultadoDivisao = divisão(numero1, numero2);

console.log(`${numero1} + ${numero2} = ${resultadoSoma}`);
console.log(`${numero1} * ${numero2} = ${resultadoMultiplicacao}`);
console.log(`${numero1} - ${numero2} = ${resultadoSubtracao}`);
console.log(`${numero1} / ${numero2} = ${resultadoDivisao}`);