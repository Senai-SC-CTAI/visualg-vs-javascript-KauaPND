function calcularMedia() {
    let not1 = parseFloat(document.getElementById('nota1').value);
    let not2 = parseFloat(document.getElementById('nota2').value);
    let not3 = parseFloat(document.getElementById('nota3').value);

    let ma = (not1 + not2 + not3) / 3;

    let resultadoElement = document.getElementById('resultado');

    if (ma > 7) {
        resultadoElement.textContent = "O aluno passou, nota: " + ma;
    } else if (ma >= 5 && ma <= 7) {
        resultadoElement.textContent = "O aluno está em recuperação, nota: " + ma;
    } else {
        resultadoElement.textContent = "O aluno reprovou, nota: " + ma;
    }
}