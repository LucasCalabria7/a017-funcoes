let num1 = Number(prompt("Insira o primeiro Número"));
let num2 = Number(prompt("Insira o segundo Número"));

console.log(`Primeiro número escolhido foi ${num1}`);
console.log(`Segundo número escolhido foi ${num2}`);


function soma (num1, num2) {
    return num1 + num2
}
console.log("Soma:");
console.log(soma(num1, num2));



function subtracao(num1, num2) {
    return num1 - num2
}
console.log("Subtração:");
console.log(subtracao(num1, num2));


function multiplica (num1, num2) {
    return num1*num2
}
console.log("Multiplicação:")
console.log(multiplica(num1, num2));



function divide(num1, num2) {
    return num1/num2
}
console.log("Divisão:")
console.log(divide(num1, num2));
