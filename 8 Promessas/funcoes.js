function acessarPropriedadeAninhada(obj, caminho) {
  return caminho.split('.').reduce((acc, chave) => acc?.[chave], obj);
}

function montarTabela(objetos, cabecalhos, propriedades, idAlvo) {
  const alvo = document.getElementById(idAlvo);
  if (!alvo) return;

  let html = '<table><thead><tr>';
  cabecalhos.forEach(cab => html += `<th>${cab}</th>`);
  html += '</tr></thead><tbody>';

  objetos.forEach(obj => {
    html += '<tr>';
    propriedades.forEach(prop => {
      const valor = acessarPropriedadeAninhada(obj, prop);
      html += `<td>${valor ?? ''}</td>`;
    });
    html += '</tr>';
  });

  html += '</tbody></table>';
  alvo.innerHTML = html;
}