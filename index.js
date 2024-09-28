let nomeDoHeroi = "Samuel Jesus";
let nivelDoHeroi = 50000;

function classificarNivel(nivelDoHeroi) {
    if (nivelDoHeroi < 1000) {
        return "Ferro";
    } else if (nivelDoHeroi >= 1001 && nivelDoHeroi <= 2000) {
        return "Bronze";
    } else if (nivelDoHeroi >= 2001 && nivelDoHeroi <= 5000) {
        return "Prata";
    } else if (nivelDoHeroi >= 5001 && nivelDoHeroi <= 7000) {
        return "Ouro";
    } else if (nivelDoHeroi >= 7001 && nivelDoHeroi <= 8000) {
        return "Platina";
    } else if (nivelDoHeroi >= 8001 && nivelDoHeroi <= 9000) {
        return "Ascendente";
    } else if (nivelDoHeroi >= 9001 && nivelDoHeroi <= 10000) {
        return "Imortal";
    } else if (nivelDoHeroi >= 10001) {
        return "Radiante";
    }
}

let nivel = classificarNivel(nivelDoHeroi);

console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivel}`);