// PARTE 1 - ROLAGEM DOS DADOS

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
let soma = 0 // variavel auxiliar para realizar a soma entre os valores

for(let i = 1; i <= 1000; i++){ // loop para percorrer entre 1 a 1000 rolagens
    const dado1 = numerosAleatorios(1,6) // 1 dado que será jogado
    const dado2 = numerosAleatorios(1,6) // 2 dado que será jogado

    soma = dado1 + dado2 // soma entre o primeiro e segundo
                            // valor                
    resultado[`${soma}`] = (resultado[`${soma}`] + 1) // [] é para valores que não aceitos na sintaxe do objeto ~ templates string 
    
}

for(let chave in resultado){ // loop para percorrer o objeto 
    const pResultados = document.createElement('p') // criou-se um paragrafo 
    pResultados.innerText = `${chave}: ${resultado[chave]}` // para colocar o objeto em um elemento HTNL 
    document.body.appendChild(pResultados) // acrescentou-se ao site utilizando appendChild
}

console.log(resultado)

// PARTE 2 - MOSTRAR NO SITE EM FORMA DE GRÁFICO

let larguraDaBarra = 0 // variavel auxiliar

for(let chave in resultado){ // loop vai criar uma div e deve-se setar o atributo css
    const minhaBarra = document.createElement('div') // criando uma div para cada elemento dentro do objeto 

    minhaBarra.classList.add('barra') // atribuindo uma classe para estilizar no css
    
    larguraDaBarra = resultado[chave] // salvando largura na variavel 
    
    minhaBarra.style.width = `${larguraDaBarra}px` // estilizando utilizando o template string 
    // para inserir variaveis no elemento html é através de template string

    document.body.appendChild(minhaBarra) // adicionando ao site
}
