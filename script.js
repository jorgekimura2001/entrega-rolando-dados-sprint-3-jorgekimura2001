function numerosAleatorios (min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min) // rolar dados = a números aleatorios de 1 a 6
}
const resultado = {
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0 
}
let soma = 0

for(let i = 1; i <= 1000; i++){ // 1 a 1000
    const dado1 = numerosAleatorios(1,6) // dados 
    const dado2 = numerosAleatorios(1,6) 

    soma = dado1 + dado2 // 2 e 12 
                            // valor                
    resultado[`${soma}`] = (resultado[`${soma}`] + 1) // [] é para valores que não aceitos na sintaxe do objeto ~ templates string 
    
}
console.log(resultado)

// PARTE 2 - PERGUNTAR PARA COACH 

const minhaBarra = document.createElement('div')

minhaBarra.classList.add('barra')

let larguraDaBarra = 0 
for(let chave in resultado){
    //console.log(resultado)
    if(resultado[chave] == resultado[2]){ // como deixar de forma mais dinamica que passe por todos as chaves
    larguraDaBarra += resultado[chave]
}
}

minhaBarra.style.width = `${larguraDaBarra}px`

document.body.appendChild(minhaBarra)

console.log(minhaBarra)