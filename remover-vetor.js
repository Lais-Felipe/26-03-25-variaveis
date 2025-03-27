var matrizDeFrutas = ["Banana", "Maça", "Mamão"]; // estamos declarando a matriz de frutas , ele esta recendo três texto que é chamado de  string e é chamado de sting por causa
//das aspas 

matrizDeFrutas.push("Abacate");// metodo "push" faz parte da matriz Array, para adicionar vetores se usa o metdo "push"

console.log(matrizDeFrutas.toString()); // vai enviar a matriz ja convertida em string 

var indexardorDoVetor = matrizDeFrutas.indexOf("Maça"); // aqui é feita uma busca pelo texto "Maça" e, se encontrado o texto, retorna o número do vetor na matriz,indicado por 0 

matrizDeFrutas.splice(indexardorDoVetor, 1); //aqui é retirado o vetor, ora antes encontrado na variavel inxadorDoVetor, sendo o número 1 a indicação da quantidade de vetores;
// este método também é utilizado pra substituir vatores em uma matriz

console.log(matrizDeFrutas.toString());