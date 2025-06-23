export function montarTabelaGenerica(objetos, headers, propriedades, targetId) {
    const target = document.getElementById(targetId);
    if (!target) return;

    function acessarProfundidade(obj, caminho) {
        return caminho.split('.').reduce((acc, chave) => acc?.[chave], obj);
    }

    let html = '<table><thead><tr>';
    headers.forEach(h => html += `<th>${h}</th>`);
    html += '</tr></thead><tbody>';

    objetos.forEach(obj => {
        html += '<tr>';
        propriedades.forEach(p => {
            const valor = acessarProfundidade(obj, p);
            html += `<td>${valor ?? ''}</td>`;
        });
        html += '</tr>';
    });

    html += '</tbody></table>';
    target.innerHTML = html;
}