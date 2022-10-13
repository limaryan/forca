let jogarNovamente = true;
let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [
    
    palavra001={
        nome : "BRASIL",
        categoria : "LUGARES"
    },

    palavra002={
        nome : "BOLIVIA",
        categoria : "LUGARES"
    },

    palavra003={
        nome : "LA PAZ",
        categoria : "LUGARES"
    },

    palavra004={
        nome : "RECIFE",
        categoria : "LUGARES"
    },

    palavra005={
        nome : "ESTADOS UNIDOS",
        categoria : "LUGARES"
    },

    palavra006={
        nome : "SAO PAULO",
        categoria : "LUGARES"
    },

    palavra007={
        nome : "SOROCABA",
        categoria : "LUGARES"
    },

    palavra008={
        nome : "INDAIATUBA",
        categoria : "LUGARES"
    },

    palavra009={
        nome : "JAPAO",
        categoria : "LUGARES"
    },

    palavra010={
        nome : "CANADA",
        categoria : "LUGARES"
    },

    palavra011={
        nome : "HAMBURGUER",
        categoria : "COMIDAS"
    },

    palavra012={
        nome : "PIZZA COM BORDA DE CHOCOLATE",
        categoria : "COMIDAS"
    },

    palavra013={
        nome : "CUSCUZ",
        categoria : "COMIDAS"
    },

    palavra014={
        nome : "PARMEGIANA",
        categoria : "COMIDAS"
    },

    palavra015={
        nome : "PIRÃO",
        categoria : "COMIDAS"
    },

    palavra016={
        nome : "STROGONOFF",
        categoria : "COMIDAS"
    },

    palavra017={
        nome : "FEIJOADA",
        categoria : "COMIDAS"
    },

    palavra018={
        nome : "ESFIHA",
        categoria : "COMIDAS"
    },

    palavra019={
        nome : "SUSHI",
        categoria : "COMIDAS"
    },

    palavra020={
        nome : "LASANHA",
        categoria : "COMIDAS"
    },

    palavra021={
        nome : "NI NO KUNI",
        categoria : "JOGOS"
    },

    palavra022={
        nome : "BIOSHOCK",
        categoria : "JOGOS"
    },

    palavra023={
        nome : "BORDERLANDS",
        categoria : "JOGOS"
    },

    palavra024={
        nome : "TELLTALES THE WALKING DEAD",
        categoria : "JOGOS"
    },

    palavra025={
        nome : "BULLY",
        categoria : "JOGOS"
    },

    palavra026={
        nome : "CUPHEAD",
        categoria : "JOGOS"
    },

    palavra027={
        nome : "STARDEW VALLEY",
        categoria : "JOGOS"
    },

    palavra028={
        nome : "MAFIA",
        categoria : "JOGOS"
    },

    palavra029={
        nome : "GRAND THEFT AUTO",
        categoria : "JOGOS"
    },

    palavra030={
        nome : "JET SET RADIO",
        categoria : "JOGOS"
    },

    palavra031={
        nome : "ONE PIECE",
        categoria : "DESENHOS/ANIMES"
    },

    palavra032={
        nome : "STEVEN UNIVERSO",
        categoria : "DESENHOS/ANIMES"
    },

    palavra033={
        nome : "MY HERO ACADEMIA",
        categoria : "DESENHOS/ANIMES"
    },

    palavra034={
        nome : "HORA DE AVENTURA",
        categoria : "DESENHOS/ANIMES"
    },

    palavra035={
        nome : "CLARENCIO",
        categoria : "DESENHOS/ANIMES"
    },

    palavra036={
        nome : "NEON GENESIS EVANGELION",
        categoria : "DESENHOS/ANIMES"
    },

    palavra037={
        nome : "CODE GEASS",
        categoria : "DESENHOS/ANIMES"
    },

    palavra038={
        nome : "TENGEN TOPPA GURREN LAGANN",
        categoria : "DESENHOS/ANIMES"
    },

    palavra039={
        nome : "LITTLE WITCH ACADEMIA",
        categoria : "DESENHOS/ANIMES"
    },

    palavra040={
        nome : "APENAS UM SHOW",
        categoria : "DESENHOS/ANIMES"
    },

    palavra041={
        nome : "GOODRA",
        categoria : "POKÉMON"
    },

    palavra042={
        nome : "CHARMANDER",
        categoria : "POKÉMON"
    },

    palavra043={
        nome : "SCEPTILE",
        categoria : "POKÉMON"
    },

    palavra044={
        nome : "CUBONE",
        categoria : "POKÉMON"
    },

    palavra045={
        nome : "PIPLUP",
        categoria : "POKÉMON"
    },

    palavra046={
        nome : "DITTO",
        categoria : "POKÉMON"
    },

    palavra047={
        nome : "JIGGLYPUFF",
        categoria : "POKÉMON"
    },

    palavra048={
        nome : "MILTANK",
        categoria : "POKÉMON"
    },

    palavra049={
        nome : "GENGAR",
        categoria : "POKÉMON"
    },

    palavra050={
        nome : "SYLVEON",
        categoria : "POKÉMON"
    },

    palavra051={
        nome : "SUYANNE",
        categoria : "MINHA PESSOA FAVORITA!"
    },

];

criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;

}

montarPalavraNaTela()
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela =document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(listaDinamica[i] == undefined){
                if (palavraSecretaSorteada[i] == " "){
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
                else{
                listaDinamica[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }
            
            }
            else{
                if (palavraSecretaSorteada[i] == " "){
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
                else{
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }   
        }
    }
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-"+letra).disabled = true;
    if(tentativas > 0){
        mudarStyleLetra("tecla-"+letra, false);
        comparalistas(letra);
        montarPalavraNaTela();
    }
}

function mudarStyleLetra(tecla, condicao){
    if(condicao == false){
        document.getElementById(tecla).style.background = "#c71585";
        document.getElementById(tecla).style.color = "#ffffff";
    }else{
        document.getElementById(tecla).style.background = "#008000";
        document.getElementById(tecla).style.color = "#ffffff";
    }
    
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();

        if(tentativas == 0){
            abreModal("Perdeu KKKKK!","KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK<br>KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK<br> A palvara era " + palavraSecretaSorteada);

            piscarBotaoNovamente();
        }
        
        
    }
    else{
        mudarStyleLetra("tecla-"+letra, true);
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria= false;
        }
    }

    if(vitoria == true){
        abreModal("AI SIIIIIIM!","Brabo dos brabos acertou a palavra!");
        tentativas=0;

        piscarBotaoNovamente();
    }

}

async function atraso(tempo) {
    return new Promise(x => setTimeout(x, tempo));
}

async function piscarBotaoNovamente() {
    while (jogarNovamente == true){
        document.getElementById("brst").style.backgroundColor = 'blue';
        document.getElementById("brst").style.scale = 1.3;
        await atraso(500)
        document.getElementById("brst").style.backgroundColor = 'yellow';
        document.getElementById("brst").style.scale = 0.95;
        await atraso(500)
    }
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./img/forca06.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let btnReiniciar = document.querySelector("#brst")
btnReiniciar.addEventListener("click", function(){
    jogarNovamente = false;
    location.reload();
});