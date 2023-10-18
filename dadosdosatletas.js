class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }

    calculaIMC() {
        var imc = this.peso / (this.altura * this.altura);
        return imc;
    }

    calculaMediaValida() {
        function calculaMedia(notas) {
                    notas = notas.sort(function(a, b) {
                        return a - b;
                    });
                
                    let notasDosAtletas = notas.slice(1, 4);
                
                    let soma = 0;
                    notasDosAtletas.forEach(function(nota) {
                        soma += nota;
                    });
                
                    let media = soma / notasDosAtletas.length;
                    return media;
                }
            return calculaMedia(this.notas);
    }

    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }
    
    obtemAlturaAtleta() {
        return this.altura;
    }

    obtemNotasAtleta() {
        return this.notas.join(",");
    }

    obtemCategoria() {
        return `Categoria: ${this.calculaCategoria()}`;
    }

    obtemIMC() {
        return `IMC: ${this.calculaIMC().toFixed(2)}`;
    }

    obtemMediaValida() {
        return `Média válida: ${this.calculaMediaValida().toFixed(2)}`;
    }
}


const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log("Nome:", atleta.obtemNomeAtleta());
console.log("Idade:", atleta.obtemIdadeAtleta());
console.log("Peso:", atleta.obtemPesoAtleta());
console.log("Altura:", atleta.obtemAlturaAtleta());
console.log("Notas:", atleta.obtemNotasAtleta());
console.log(atleta.obtemCategoria());
console.log(atleta.obtemIMC());
console.log(atleta.obtemMediaValida());