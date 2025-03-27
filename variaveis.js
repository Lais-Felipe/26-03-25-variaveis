var nomeDaVariavel = "Valor da Variavel"; // 

let nomeDaVariavelTemporaria = "Valor da Variavel Temporaria"; // essa é uma variavel temporaria que só vale no script, assim que encerrar ela apaga da memoria

const nomeDaVariavelSomenteLeitura = "Valor Somente Leitura da Variavel"; // ela permanece na memoria, mas você não consegue mudar o valor dela, ela é soemente leitura

console.log("nomeDaVariavel:", nomeDaVariavel); //

console.log("nomeDaVariavelTemporaria:", nomeDaVariavelTemporaria);

console.log("nomeDaVariavelSomenteLeitura:", nomeDaVariavelSomenteLeitura);

var matriz = ["vetor1", "vetor2", "vetor3", "vetor4", "vetor5"];

//console.log("matriz, vetor1:", matriz[0]); // o vetor [0] é o vetor 1 por que é matriz e matriz o 1 vira o 0 

for (let i = 0; i < matriz.length; i++) { // for é uma estrutura de definição que precisa ter um inicio, meio e fim, 
    console.log("matriz[" + i + "]:", matriz[i]);
}

class NomeDoObjeto { // declaração da classe NomeDoObjeto, a qual se transformará em um novo objeto, quando declarada em uma variavel 
    constructor(parametroUm, parametroDois) { // // declaração do método construtor, vai receber os parametros inicias, e se converter em propriedades de classe
        this.parametroUm = parametroUm;// parametro (quando declarado com this. antes) é uma propriedade de classe
        this.parametroDois = parametroDois;
    }

    metodoMostrarParametros(parametroUm, parametroDois) { // declaração do método que vai mostrar os parametros, NÃO AS PROPRIEDADES
        //this.parametroUm = "Valor 1";
        ///this.parametroDois = "Valor 2";
        this.parametroUm = parametroUm; // quando tem "this." é uma propriedade e não um parametro 
        this.parametroDois = parametroDois;
        return this.parametroUm + " - " + this.parametroDois; // o return faz o método rertornar o valor declarado após o return
    }
}

const novoObjeto = new NomeDoObjeto();
console.log(novoObjeto.metodoMostrarParametros("um", "dois"));


class Garrafa { // declaração da classe Garrafa, a qual se transformará em um novo objeto, quando declarada em uma variavel Garrafa
    constructor(altura, largura, materialDoCorpo, cor, textura, armazenamento) { // declaração do método construtor, vai receber os parametros inicias, e se converter em propriedades
        this.altura = altura;
        this.largura = largura;
        this.materialDoCorpo = materialDoCorpo;
        this.cor = cor;
        this.textura = textura;
        this.armazenamento = armazenamento;
    }
    metodoMostrarParametros(altura, largura, materialDoCorpo, cor, textura, armazenamento) {
        this.altura = altura;
        this.largura = largura;
        this.materialDoCorpo = materialDoCorpo;
        this.cor = cor;
        this.textura = textura;
        this.armazenamento = armazenamento;
        return altura +
            " - " +
            largura +
            " - " +
            materialDoCorpo +
            " - " +
            cor +
            " - " +
            textura +
            " - " +
            armazenamento;
    }
}
const garrafa = new Garrafa(); // const é somente leitura 
console.log(garrafa.metodoMostrarParametros("altura", "largura", "materialDoCorpo", "cor", "textura", "armazenamento"));


// 4 padroes, padrão de camel, Pascal, snake, kebab