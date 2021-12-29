AOS.init();


const menuEvent = document.addEventListener('scroll', mudarMenu);

function mudarMenu () {
    const styleMenuContent = document.querySelector('.menu-content').style;
    const styleLinhaDivisoriaMenu = document.querySelector('.linha-divisoria-menu').style;
    styleMenuContent.width = '100%';
    styleMenuContent.borderRadius = '0';
    styleLinhaDivisoriaMenu.width = '100%';
    styleLinhaDivisoriaMenu.left = '0';
}

const fotosContext = document.querySelector('.fotos-content');

const fotosPrincipal = ['assets/img/cookie.jpeg', 'assets/img/focaccia.jpeg', 'assets/img/fundo.jpeg'];

const fotosForno = [{id:'cookie', link:'assets/img/cookie.jpeg'}, {id:'focaccia', link:'assets/img/focaccia.jpeg'} , {id:'fundo' , link:'assets/img/fundo.jpeg'}];

const itensCardapio = [
    {tipo: 'caseiros1', produtos: [    
        {id: '1', nome: 'Aipim',  linkFoto: 'assets/img/cookie.jpeg', descricao: 'Bolo de Aipim'},
        {id: '2', nome: 'Aipim com Goiabada',  linkFoto: 'assets/img/cookie.jpeg', descricao: 'Bolo de Aipim'},
        {id: '3', nome: 'Banana',  linkFoto: 'assets/img/cookie.jpeg', descricao: 'Bolo de Aipim'},
        {id: '4', nome: 'Canela',  linkFoto: 'assets/img/cookie.jpeg', descricao: 'Bolo de Aipim'},
        {id: '5', nome: 'Café com leite',  linkFoto: 'assets/img/cookie.jpeg', descricao: 'Bolo de Aipim'},
        {id: '6', nome: 'Cenoura',  linkFoto: 'assets/img/cookie.jpeg', descricao: 'Bolo de Aipim'},
        {id: '7', nome: 'Chocolate',  linkFoto: 'assets/img/cookie.jpeg', descricao: 'Bolo de Aipim'},
        {id: '8', nome: 'Churros',  linkFoto: 'assets/img/cookie.jpeg', descricao: 'Bolo de Aipim'},
        {id: '9', nome: 'Coco',  linkFoto: 'assets/img/cookie.jpeg', descricao: 'Bolo de Aipim'},
        {id: '10', nome: 'Doce de leite',  linkFoto: 'assets/img/cookie.jpeg', descricao: 'Bolo de Aipim'},
        {id: '11', nome: 'Fubá',  linkFoto: 'assets/img/cookie.jpeg', descricao: 'Bolo de Aipim'}
    ]},
    {tipo: 'caseiros2', produtos: [    
        {id: '12', nome: 'Fubá Cremoso',  linkFoto: 'assets/img/cookie.jpeg', descricao: 'Bolo de Aipim'},
        {id: '13', nome: 'Fubá com goiabada',  linkFoto: 'assets/img/cookie.jpeg', descricao: 'Bolo de Aipim'},
        {id: '14', nome: 'Formigueiro',  linkFoto: 'assets/img/cookie.jpeg', descricao: 'Bolo de Aipim'},
        {id: '15', nome: 'Iogurte',  linkFoto: 'assets/img/cookie.jpeg', descricao: 'Bolo de Aipim'},
        {id: '16', nome: 'Leite ninho',  linkFoto: 'assets/img/cookie.jpeg', descricao: 'Bolo de Aipim'},
        {id: '17', nome: 'Laranja',  linkFoto: 'assets/img/cookie.jpeg', descricao: 'Bolo de Aipim'},
        {id: '18', nome: 'Limão',  linkFoto: 'assets/img/cookie.jpeg', descricao: 'Bolo de Aipim'},
        {id: '19', nome: 'Cenoura',  linkFoto: 'assets/img/cookie.jpeg', descricao: 'Bolo de Aipim'},
        {id: '20', nome: 'Maracujá',  linkFoto: 'assets/img/maca-horizontal.jpg', descricao: 'Bolo de Aipim'},
        {id: '21', nome: 'Maça com canela',  linkFoto: 'assets/img/maca-vertical.jpg', descricao: 'Bolo de Aipim'},
        {id: '22', nome: 'Milho',  linkFoto: 'assets/img/cookie.jpeg', descricao: 'Bolo de Aipim'},
        {id: '23', nome: 'Mesclado',  linkFoto: 'assets/img/cookie.jpeg', descricao: 'Bolo de Aipim'}
    ]},
    {tipo: 'coberturas', produtos: [    
        {id: '24', nome: 'Brigadeiro',  linkFoto: 'assets/img/focaccia.jpeg', descricao: 'Bolo de Aipim'},
        {id: '25', nome: 'Creme Belga',  linkFoto: 'assets/img/focaccia.jpeg', descricao: 'Bolo de Aipim'},
        {id: '26', nome: 'Ganache',  linkFoto: 'assets/img/focaccia.jpeg', descricao: 'Bolo de Aipim'},
        {id: '27', nome: 'Geléia de Morango',  linkFoto: 'assets/img/focaccia.jpeg', descricao: 'Bolo de Aipim'},
        {id: '28', nome: 'Leite Ninho',  linkFoto: 'assets/img/focaccia.jpeg', descricao: 'Bolo de Aipim'}
    ]},
    {tipo: 'integrais', produtos: [    
        {id: '29', nome: 'Banana com Aveia',  linkFoto: 'assets/img/fundo.jpeg', descricao: 'Bolo de Aipim'},
        {id: '30', nome: 'Cenoura',  linkFoto: 'assets/img/fundo.jpeg', descricao: 'Bolo de Aipim'},
        {id: '31', nome: 'Maça com Canela',  linkFoto: 'assets/img/fundo.jpeg', descricao: 'Bolo de Aipim'}
    ]},
    {tipo: 'especiais', produtos: [    
        {id: '32', nome: 'Abacaxi Trufado',  linkFoto: 'assets/img/fundo.jpeg', descricao: 'Bolo de Aipim'},
        {id: '33', nome: 'Céu de Brigadeiro',  linkFoto: 'assets/img/fundo.jpeg', descricao: 'Bolo de Aipim'},
        {id: '34', nome: 'Frutas com Creme',  linkFoto: 'assets/img/fundo.jpeg', descricao: 'Bolo de Aipim'},
        {id: '35', nome: 'Leite Ninho',  linkFoto: 'assets/img/fundo.jpeg', descricao: 'Bolo de Aipim'},
        {id: '36', nome: 'Prestígio',  linkFoto: 'assets/img/fundo.jpeg', descricao: 'Bolo de Aipim'},
        {id: '37', nome: 'Mousse Limão',  linkFoto: 'assets/img/fundo.jpeg', descricao: 'Bolo de Aipim'},
        {id: '38', nome: 'Red Velvet',  linkFoto: 'assets/img/fundo.jpeg', descricao: 'Bolo de Aipim'}
    ]},
    {tipo: 'cucas', produtos: [    
        {id: '39', nome: 'Banana',  linkFoto: 'assets/img/fundo.jpeg', descricao: 'Bolo de Aipim'},
        {id: '40', nome: 'Castanha',  linkFoto: 'assets/img/fundo.jpeg', descricao: 'Bolo de Aipim'},
        {id: '41', nome: 'Doce de leite',  linkFoto: 'assets/img/fundo.jpeg', descricao: 'Bolo de Aipim'},
        {id: '42', nome: 'Goiabada',  linkFoto: 'assets/img/fundo.jpeg', descricao: 'Bolo de Aipim'},
        {id: '43', nome: 'Maça',  linkFoto: 'assets/img/fundo.jpeg', descricao: 'Bolo de Aipim'},
        {id: '44', nome: 'Tradicional',  linkFoto: 'assets/img/fundo.jpeg', descricao: 'Bolo de Aipim'}
    ]}

]

class FotosPrincipal {
    constructor (fotos, fotoAtual) {
        this.fotos = fotos;
        this.fotoAtual = fotoAtual;
        this.imgElement = document.querySelector('.imagem-principal');
        // this.imgElement = document.createElement('img');
        this.imgElement.style.opacity = '1'
        this.addFotoAtual();
        const botaoDireito = document.querySelector('.botao-direito');
        botaoDireito.addEventListener('click', function() {
            this.mudandoFotoDireita();
        }.bind(this))
        const botaoEsquerdo = document.querySelector('.botao-esquerdo');
        botaoEsquerdo.addEventListener('click', function() {
            this.mudandoFotoEsquerda();
        }.bind(this))

    }

    addFotoAtual() {
        this.imgElement.src = this.fotoAtual;
        this.imgElement.style.opacity = "1";
    }

    mudandoFotoDireita() {
        if (this.fotos.indexOf(this.fotoAtual) === (this.fotos.length - 1)) return;
        this.fotoAtual = this.fotos[((this.fotos.indexOf(this.fotoAtual)) + 1)];
        this.imgElement.style.opacity = "0";
        setTimeout(function() {this.addFotoAtual()}.bind(this), 1000);
    }

    mudandoFotoEsquerda() {
        if (this.fotos.indexOf(this.fotoAtual) === 0) return;
        this.fotoAtual = this.fotos[((this.fotos.indexOf(this.fotoAtual)) - 1)];
        this.imgElement.style.opacity = "0";
        setTimeout(function() {this.addFotoAtual()}.bind(this), 1000);
    }
}


class Cardapio {
    constructor (fotos, itensCardapio, produtoFornoAtual=0) {
        this.fotos = fotos;
        this.itensCardapio = itensCardapio;
        this.produtoFornoAtual = produtoFornoAtual;
        this.linkAtual = this.produtoFornoAtual[1];
        this.idAtual = this.produtoFornoAtual[0];
        this.portaFechada = true;
        this.primeiraFoto = true;

        const produtos = document.querySelector('.produtos');

        produtos.addEventListener('click', function(e) {
            const ponto = e.target;
            const ident = ponto.id;
            const lista = document.querySelector('.bolos-dinamicos-mediaquery');
            if (ponto.classList.contains('titulo-bolos-media')) this.addItensCardapioForno(lista, ident)
            if (ponto.classList.contains('lista-mediaquery')) this.addFotoAndMoldura(lista, ident)
        }.bind(this));
    }

    addItensCardapioForno (lista, ident) {
        this.abrindoPorta();
        lista.style.pointerEvents = 'auto';
        this.addItensCardarpioMedia (ident);
        this.portaFechada = false;
    }

    addFotoAndMoldura (lista, ident) {
        console.log('Teste');
        if (!this.portaFechada) {

            this.fechandoPorta();
            lista.style.opacity = '0';
            setTimeout(function() {
                if (this.primeiraFoto) {this.addMolduraFoto();}
                this.primeiraFoto = false;
                this.mudandoFoto(ident);
            }.bind(this), 2000);
            setTimeout(function() {this.abrindoPorta()}.bind(this), 2200);
            lista.style.pointerEvents = 'none';
            return;
        }
    }

    addMolduraFoto () {
        this.imgElement = document.createElement('img');
        this.imgElement.classList.add('imagem-forno');
        this.imgElement.setAttribute('src', '');
        const contextFotoPrincipal = document.querySelector('.foto-forno');
        contextFotoPrincipal.appendChild(this.imgElement);
        const forno = document.querySelector('.forno');
    }

    addFotoAtual () {
        this.imgElement.src = this.linkAtual;
        this.imgElement.style.opacity = '1';
    }

    addDescriptionPhoto(descricao) {
        const descriptionContext = document.querySelector('.descricao-produto');
        descriptionContext.innerHTML = descricao;
        descriptionContext.style.transform = 'translateY(0rem)';
        descriptionContext.style.opacity = '1';
    }

    removeDescriptionPhoto() {
        const descriptionContext = document.querySelector('.descricao-produto');
        descriptionContext.style.transform = 'translateY(5rem)';
        descriptionContext.style.opacity = '0';
    }

    mudandoFoto(ident) {
        for (const {tipo, produtos} of this.itensCardapio) {
            for (const {id, nome, linkFoto, descricao} of produtos) {
                if (id === ident) {
                    this.linkAtual = linkFoto;
                    this.addFotoAtual();
                    setTimeout(function() {this.addDescriptionPhoto(descricao)}.bind(this), 2200);
                }
            }
        }
    }



    abrindoPorta () {
        // const responsiveTablet = window.matchMedia("(max-width: 768px)");
        const portaDireita = document.querySelector('.porta-direita');
        const macaneta = document.querySelector('.macaneta');
        macaneta.style.opacity = '0';
        portaDireita.style.width = '0%';
    }

    fechandoPorta () {
        // const responsiveTablet = window.matchMedia("(max-width: 768px)");
        const macaneta = document.querySelector('.macaneta');
        macaneta.style.opacity = '1';
        this.removeDescriptionPhoto();
        const portaDireita = document.querySelector('.porta-direita');
        // const portaEsquerda = document.querySelector('.porta-esquerda ');
        portaDireita.style.width = '100%';
    }

    // addItensCardarpioNormal() {
    //     const bolos1 = document.querySelector('.bolos1');
    //     const bolos2 = document.querySelector('.bolos2');
    //     const bolos3 = document.querySelector('.bolos3');
    //     const bolos4 = document.querySelector('.bolos4');
    //     const bolos5 = document.querySelector('.bolos5');
    //     const bolos6 = document.querySelector('.bolos6');
    //     for (const {tipo, produtos} of this.itensCardapio) {
    //         if (tipo === 'caseiros1' ) {
    //             this.addBoloCardapioFull(bolos1, tipo, produtos)
    //         }
    //         else if (tipo === 'caseiros2' ) {
    //             this.addBoloCardapioFull(bolos2, tipo, produtos)
    //         }
    //         else if (tipo === 'coberturas' ) {
    //             this.addBoloCardapioFull(bolos3, tipo, produtos)
    //         }
    //         else if (tipo === 'integrais' ) {
    //             this.addBoloCardapioFull(bolos4, tipo, produtos)
    //         }
    //         else if (tipo === 'especiais' ) {
    //             this.addBoloCardapioFull(bolos5, tipo, produtos)
    //         }
    //         else  {
    //             this.addBoloCardapioFull(bolos6, tipo, produtos)
    //         }
    //     }

    // }

    // addBoloCardapioFull (ul, tipo, produtos) {
    //     for (const {id, nome} of produtos) {
    //         const li = document.createElement('li');
    //         li.classList.add('bolo');
    //         li.classList.add(tipo);
    //         li.setAttribute('id', id);
    //         li.innerHTML = nome;
    //         ul.appendChild(li);
    //     }
    // }

    addItensCardarpioMedia (ident) {
        const elements = document.querySelectorAll('.lista-mediaquery');
        if (elements) {
            for (const element of elements) {
                element.remove();
            }
        }
        const ulMediaQuery = document.querySelector('.bolos-dinamicos-mediaquery');
        for (const {tipo, produtos} of this.itensCardapio) {
            if (tipo === ident || (ident === 'caseiros' && tipo === 'caseiros1') || (ident === 'caseiros' && tipo === 'caseiros2')){
                for (const {id, nome} of produtos){
                    const liDinamico = document.createElement('li');
                    liDinamico.innerHTML = nome;
                    liDinamico.classList.add('lista-mediaquery');
                    if (document.querySelector('.imagem-forno')) {
                        const novaImagem = document.querySelector('.imagem-forno');
                        novaImagem.style.opacity = '0.4';
                        const descriptionContext = document.querySelector('.descricao-produto');
                        descriptionContext.style.opacity = '0';
                    }
                    liDinamico.setAttribute('id', id);
                    ulMediaQuery.appendChild(liDinamico);
                    ulMediaQuery.style.opacity = '1';
                }
            }
        }
    }
}


const criandoCardapio = new Cardapio(fotosForno, itensCardapio);
const criandoFotosPrincipal = new FotosPrincipal(fotosPrincipal, fotosPrincipal[1]);