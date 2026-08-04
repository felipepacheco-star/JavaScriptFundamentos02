/* 
  SE
    faça aquilo
  SENÂO
    faça aquilo 


*/

let idade =18;

if (idade >=18){
    console.log("pode dirigir");
}else{
  console.log("nao pode dirigir");
}


if (idade <= 16){
    console.log(" nao pode votar");
}else if(idade <18){
    console.log("pode votar mas nao é obrigatorio")
}else if(idade <70){
   console.log("voto  obrigatorio");
}else{
    console.log("pode votar mas nao obrigatorio")
}


let idadec = 12;



if(idadec > 0 && idadec <=12){
    console.log("criança")
}else if(idadec > 12 && idadec <=17){
    console.log("Adolescente")
}else if(idadec > 18 && idadec <=59){
    console.log("Adulto")
}else{
    console.log("idoso")
}

// let dia = 1;

// switch(dia){
//     case 1:
//         console.log("Domingo");
//         break;
//     case 2:
//         console.log("Segunda-feira");
//         break;
//     case 3:
//         console.log("Terça-feira");
//         break;
//     case 4:
//         console.log("Quarta-feira");
//         break;
//     case 5:
//         console.log("Quinta-feira");
//         break;
//     default:
//         console.log("Inválido");
// }

let opcaodeCadrastro = 1;
console.log(" Digite as seguintes opção: /n 1- Cadastro /n 2 - Editar /n 3- Excluir /n 4- sair")
switch(opcaodeCadrastro){
    case 1 :
        console.log("conclua seu cadastro");
        break;
    case 2:
        console.log(" editar email ou senha ");
        break;
    case 3:
        console.log(" excluir login ");
        break;
    case 4:
        console.log("sair");
        break;
    default:
        console.log("Inválido");
}