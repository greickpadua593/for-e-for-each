let numeros = [1,2,3]




for(let i = 0; i< numeros.length; i++){
    if(numeros[i] >2){
    console.log(numeros[i])
    }
}


numeros.forEach(function(numeros){
    console.log(numeros)
})


//exercício 1
let alunos =["ana", "pedro", "maria"];
for(let i=0; i<alunos.length;i++){
    console.log("Presente: "+ alunos[i])
}

alunos.forEach(function(aluno){
    console.log("Presente: "+ aluno)
})