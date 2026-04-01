function filtrar(especie, botaoClicado) {

    const cards = document.querySelectorAll('.pet');
    cards.forEach(function(card) {
        const especieCard = card.getAttribute('data-especie');
        if (especie === 'todos' || especieCard === especie) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });

    const botoes = document.querySelectorAll('.btn-filtro');
    botoes.forEach(function(botao) {
        botao.classList.remove('ativo');
    });
    

    event.target.classList.add('ativo');
}

function pesquisar() {
    const sexo = document.getElementById('Sexo').value;
    const cor = document.getElementById('Cor').value;
    const tamanho = document.getElementById('Tamanho').value;
    const zona = document.getElementById('Zona').value;

    const cards = document.querySelectorAll('.pet');
    cards.forEach(function(card) {

        const sexoCard = card.getAttribute('data-sexo');
        const corCard = card.getAttribute('data-cor');
        const tamanhoCard = card.getAttribute('data-tamanho');
        const zonaCard = card.getAttribute('data-zona');

        if ((sexo === '' || sexoCard === sexo) &&
            (cor === '' || corCard === cor) &&
            (tamanho === '' || tamanhoCard === tamanho) &&
            (zona === '' || zonaCard === zona)) {  
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }   
    });
}



