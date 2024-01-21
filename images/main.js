const form = document.getElementById('form-atividade');
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputTelefoneAtividade = document.getElementById('telefone-atividade');

    let linha ='<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputTelefoneAtividade.value}</td>`;

    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML =linhas;

    inputNomeAtividade.value ='';
    inputTelefoneAtividade.value ='';


})
