const input = document.querySelector('input');
const button = document.querySelector('button');
const resultados = document.querySelector('.resultados-pesquisa');

button.addEventListener('click', () => {
  const termoBusca = input.value.toLowerCase();
  resultados.innerHTML = ''; // Limpa os resultados anteriores

  dados.forEach(heroi => {
    if (heroi.titulo.toLowerCase().includes(termoBusca)) {
      const resultado = document.createElement('div');
      resultado.classList.add('item-resultado');

      // ... (código para criar o HTML do resultado, similar ao que já existe)
        // ... dentro do loop forEach
resultado.innerHTML = `
<h2>
  <a href="${heroi.link}" target="_blank">${heroi.titulo}</a>
</h2>
<p class="descricao-meta">${heroi.descricao}</p>
<a href="${heroi.link}" target="_blank">Mais Informações</a>
`;
      resultados.appendChild(resultado);
    }
  });
});