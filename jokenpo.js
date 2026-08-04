let jogador1 = "pedra";
let jogador2 = "papel";
let jogador3 = "tesoura";

if(jogador1 === jogador2){
    console.log("Empante")
}else if (
     jogador1 === "pedra" && jogador2 === "tesoura" ||
     jogador1 === "tesoura" && jogador2 === "papel" ||
     jogador1 === "papel" && jogador2 === "pedra"){
            console.log(" jogador 1 ganhou")
} else{
     console.log("jogador 2 ganhou")
}

if(jogador2 === jogador3){
    console.log("Empante")
}else if (
     jogador2 === "pedra" && jogador3 === "tesoura" ||
     jogador2 === "tesoura" && jogador3 === "papel" ||
     jogador2 === "papel" && jogador3 === "pedra"){
            console.log(" jogador 2 ganhou")
} else{
     console.log("jogador 3 ganhou")
}
   
        
