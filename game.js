const Player1 = "X";
const Player2 = "O";
var playtime = Player1;
var GameOver = false;


atualizaMostrador();
inicializaeEspacos();

function atualizaMostrador(){
    if (GameOver) {return;}
    if (playtime == Player1) {
        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "imagens/x.png");
    }else{
        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "imagens/o.png");
    }
}

function inicializaeEspacos(){

    var espacos = document.getElementsByClassName("espaco");
    for (var i = 0; i < espacos.length; i++){
        espacos[i].addEventListener("click", function(){

            if (GameOver) {return;}
            if(this.getElementsByTagName("img").length == 0){

                if (playtime == Player1){

                    this.innerHTML = "<img src='imagens/x.png' height='50'>";
                    this.setAttribute("jogada", Player1);
                    playtime = Player2;

                }else{

                    this.innerHTML = "<img src='imagens/o.png' height='50'>";
                    this.setAttribute("jogada", Player2);
                    playtime = Player1;
                }
                atualizaMostrador();
                verificarVencedor();
            }
        });
    }
}

async function verificarVencedor(){
    
var a1 = document.getElementById(a1).getAttribute("jogada");
var a2 = document.getElementById(a2).getAttribute("jogada");
var a3 = document.getElementById(a3).getAttribute("jogada");
                                                                                                
var b1 = document.getElementById(b1).getAttribute("jogada");
var b2 = document.getElementById(b2).getAttribute("jogada");
var b3 = document.getElementById(b3).getAttribute("jogada");

var c1 = document.getElementById(c1).getAttribute("jogada");
var c2 = document.getElementById(c2).getAttribute("jogada");
var c3 = document.getElementById(c3).getAttribute("jogada");

// getAtt com erro "a jogada não esta sendo validada eu acho! https://developer.mozilla.org/pt-BR/docs/Web/API/element/getAttribute
// não resolvido
var vencedor = "";

if((a1 == b1 && a1 == c1 && a1 !="") || (a1 == a2 && a1 == a3 && a1 !="") || (a1 == b2 && a1 == c3 && a1 != "")){
    vencedor = a1;
}else if((b2 == b1 && b2 == b3 && b2 != "") || (b2 == a2 && b2 == c2 && b2 !="") || (b2 == a3 && b2 == c1 && b2 !="")){
    vencedor = b2;
}else if(((c3 == c2 && c3 == c1)||(c3 == a3 && c3 == b3)) && c3 !=""){
    vencedor = c3;
}else if((a1 != "" && a2 != "" && a3 != "" && b1 !="" && b2 !="" && b3 != "" && c1 != "" && c2 !="" && c3 !="" && vencedor == "")) {
    alert("empate")
}
if (vencedor != "")
{
    GameOver = true;
    await sleep (50);
    // await quebra o jogo, (erro(: await is only valid in async functions and the top level bodies of modules)async seria a solução)
// Resolvido!
    alert("O ganhador foi 0 : '"+ vencedor +"'");}
}

function sleep(ms) {
return new Promise (resolve => setTimeout (resolve, ms));
}
