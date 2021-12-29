const arrayFotos = ['foto1', 'foto2', 'foto3', 'foto4', 'foto5', 'foto6'];

class Fotos {
    constructor (fotos, fotoAtual) {
        this.fotos = fotos;
        this.fotoAtual = fotoAtual;
        // this.indiceFotoAtual = 2;
    }

    mudandoFotoDireita () {
        if (this.fotos.indexOf(this.fotoAtual) === (this.fotos.length - 1)) return;
        else {const novafotoAtual = this.fotos[((this.fotos.indexOf(this.fotoAtual)) + 1)];
        return this.fotoAtual = novafotoAtual;
        }
    }

    mudandoFotoEsquerda () {
        if (this.fotos.indexOf(this.fotoAtual) === 0) return;
        else {const novafotoAtual = this.fotos[((this.fotos.indexOf(this.fotoAtual)) - 1)];
        return this.fotoAtual = novafotoAtual;
        }
    }

}

const foto = new Fotos(arrayFotos, arrayFotos[2]);
console.log(foto.fotoAtual);
foto.mudandoFotoDireita();
console.log(foto.fotoAtual);
foto.mudandoFotoDireita();
console.log(foto.fotoAtual);
foto.mudandoFotoDireita();
console.log(foto.fotoAtual);
foto.mudandoFotoDireita();
console.log(foto.fotoAtual);
foto.mudandoFotoDireita();
console.log(foto.fotoAtual);
foto.mudandoFotoEsquerda();
console.log(foto.fotoAtual);
foto.mudandoFotoEsquerda();
console.log(foto.fotoAtual);
foto.mudandoFotoEsquerda();
console.log(foto.fotoAtual);
foto.mudandoFotoEsquerda();
console.log(foto.fotoAtual);
foto.mudandoFotoEsquerda();
console.log(foto.fotoAtual);
foto.mudandoFotoEsquerda();
console.log(foto.fotoAtual);
