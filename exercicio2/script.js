function soma (num1, num2) {
    return num1 + num2
};
console.log(soma(10, 20));    //Exercício A


function maiorQue (num1, num2) {
    return num1 >= num2
};
console.log(maiorQue(10, 5));    //Exercício B


function verificaPar (num1) {
    if(num1 %2 ===0){
        console.log("Esse número é par")
    }else {
        console.log("Esse número é ímpar")
    }
};
verificaPar(77);    //Exercício C



function manipulaString(string) {
    console.log(string.length)
    console.log(string.toUpperCase())
};
manipulaString("Kolé Rapaziada");      //Exercício D