const form = document.getElementById('form-ativiade');
form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputTelefoneAtividade = document.getElementById('telefone-atividade');

    let linha ='<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputTelefoneAtividade.value}</td>`;

    linha += '</tr>';

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML =linha;

    inputNomeAtividade.value ='';
    inputTelefoneAtividade.value ='';


})
