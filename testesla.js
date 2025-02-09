let vidaBot = 100;
let moedas = 0;
let recrutado = false;

function atacar() {
    if (vidaBot > 0 && !recrutado) {
        vidaBot -= 10;
        if (vidaBot < 0) vidaBot = 0;
        document.getElementById("vidaBot").innerText = vidaBot;
        
        if (vidaBot === 0) {
            alert("Você derrotou o Bot 1!");
        }
    }
}

function assistirAnuncio() {
    let chance = Math.random();
    let ganho = (chance <= 0.90) ? 10 : 20; // 90% para 10 moedas, 10% para 20 moedas
    moedas += ganho;
    document.getElementById("moedas").innerText = moedas;
    alert(`Você assistiu ao anúncio e ganhou ${ganho} moedas!`);
}

function recrutar() {
    if (moedas >= 15 && !recrutado) {
        moedas -= 15;
        recrutado = true;
        document.getElementById("moedas").innerText = moedas;
        alert("Bot 1 foi recrutado e agora é seu aliado!");
        document.getElementById("btnRecrutar").disabled = true;
    } else {
        alert("Você não tem moedas suficientes!");
    }
}
