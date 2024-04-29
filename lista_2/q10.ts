import readline from "readline-sync";

function calcularDiasVividos(diaNascimento: number, mesNascimento: number, anoNascimento: number): number {
    const diasPorAno = 365;
    const diasPorMes = 30;

    const dataAtual = new Date();
    const diaAtual = dataAtual.getDate();
    const mesAtual = dataAtual.getMonth() + 1; // Mês começa em 0
    const anoAtual = dataAtual.getFullYear();

    const diasVividosAno = (anoAtual - anoNascimento) * diasPorAno;
    const diasVividosMes = (mesAtual - mesNascimento) * diasPorMes;
    const diasVividosDia = diaAtual - diaNascimento;

    return diasVividosAno + diasVividosMes + diasVividosDia;
}

function main() {
    const nome: string = (readline.question("Digite seu nome:"));
    const diaNascimento: number = Number(readline.question("Digite o dia do seu nascimento:"));
    const mesNascimento: number = Number(readline.question("Digite o mês do seu nascimento:"));
    const anoNascimento: number = Number(readline.question("Digite o ano do seu nascimento:"));

    const diasVividos = calcularDiasVividos(diaNascimento, mesNascimento, anoNascimento);

    console.log(`${nome}, você já viveu ${diasVividos} dias.`);
}

main();

//estudar código