// window.onload = function () {
//     let teste = document.getElementById("t");
//     console.log(teste);
// }

function validar() {
    let adultos = document.getElementsByClassName("entrada")[0].value;
    let criancas = document.getElementsByClassName("entrada")[1].value;
    let duracao = document.getElementsByClassName("entrada")[2].value;
    if ((adultos != "" || criancas != "") && duracao != "") {
        calcular();
    } else{
        alert("Para efetuar o cálculo é necessário: \n "+
        "- Preencher o campo Duração (Obrigatório)\n"+
        "- Preencher no mínimo um dos campos (Adultos) ou (Crianças)")
    }
}

function calcular() {
    let adultos = document.getElementsByClassName("entrada")[0].value;
    let criancas = document.getElementsByClassName("entrada")[1].value;
    let duracao = document.getElementsByClassName("entrada")[2].value;

    let totCarne = (carnePPessoa(duracao) * adultos) + ((carnePPessoa(duracao) * criancas) / 2);
    let totCerveja = cervejaPPessoa(duracao) * adultos;
    let totRefriagua = (refriaguaPPessoa(duracao) * adultos) + (refriaguaPPessoa(duracao) * criancas);

    exibeResultado(totCarne, totCerveja, totRefriagua);
}

function carnePPessoa(d) {
    if (d <= 4) {
        return 400;
    } else {
        return 650;
    }
}

function cervejaPPessoa(d) {
    if (d <= 4) {
        return 1200;
    } else {
        return 2000;
    }
}

function refriaguaPPessoa(d) {
    if (d <= 4) {
        return 500;
    } else {
        return 1000;
    }
}

function exibeResultado(totCarne, totCerveja, totRefriagua) {
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "<p>" + totCarne / 1000 + " Kg de Carne</p>";
    resultado.innerHTML += "<p>" + Math.ceil(totCerveja / 350) + " Latas (de 350ml) de Cerveja</p>";
    resultado.innerHTML += "<p>" + totRefriagua / 1000 + " Litros de Refrigerante/Água</p>";
}
