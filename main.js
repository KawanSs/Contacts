const form = document.getElementById('form');
const nomes = [];
const numeros = [];

let linhas = '';

function adicionaLinha(){
    const Nome = document.getElementById('iptNome');
    const Num = document.getElementById('iptNum');

    if(numeros.includes(Num.value)){
        alert(`O Contato de ${Nome.value} já existe em sua Agenda.`);
    }else{
        nomes.push(Nome.value);
        numeros.push(Num.value);

        let linha = `<tr>`;
        linha += `<td>${Nome.value}</td>`;
        linha += `<td>${Num.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    Nome.value = '';
    Num.value = '';
}

function atualizaTabela(){
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = linhas;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})