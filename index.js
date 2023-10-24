


function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "ProI";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "ProII";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "ProIII";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Bronze";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Prata";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Ouro";
    } else {
        nivel = "Lendário";
    }

    console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}

// Exemplo de uso?
const vitorias = 35;
const derrotas = 15;
calcularNivel(vitorias, derrotas);
