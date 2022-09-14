function meuNome (nome) {
    console.log(`Olá, ${nome}`)
}
meuNome("Lucas");    //Exercício A


function tabuada (num) {
    for(let i = 1; i <= 10; i++){
        console.log(`${num} x ${i} = ${num * i}`)
    }
}
tabuada(6);      //Exercício B

console.log("-------------");

let meuNomeArrow = (nome) => {
    return `Olá, ${nome}`
}
console.log(meuNomeArrow("Lucas"));    //Exercício C Arrow

let tabuadaArray = (num) =>{
    for(i=1; i<=10; i++){
        console.log(`${num} x ${i} = ${num*i}`)
    }
}
tabuadaArray(6);      //Exercício C Arrow