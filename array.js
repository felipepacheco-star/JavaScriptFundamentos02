// let alunos = ["Arthur", "Carlos","julia","matheus","joao"];

// console.log(alunos[0]);

// console.log(alunos[3]);

// alunos[0] = "renan";

let frutas = [
    "maça",
    "banana",
    "uva",
    "morango"
];

console.log("quanridade de fruta :", frutas.length)

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

frutas.push("kiwi") // add
console.log(frutas)

frutas.pop()// remove o ultimo 
frutas.unshift("melancia") //add no 1 lugar da lista 
console.log(frutas)
