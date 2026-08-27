const carrinho = [];

const botoes = document.querySelectorAll(".btn-adicionar");

botoes.forEach(function(botao){
    botao.addEventListener('click', function(event) {
    let preco = event.target.dataset.preco;
    let nome = event.target.dataset.nome;
    let precoConvertido = Number(preco);
    carrinho.push({nome: nome, preco: precoConvertido});
    atualizarCarrinhoNaTela();
    }); 
});

function atualizarCarrinhoNaTela() {
  let container = document.getElementById("container-Carrinho");
   let html = "";
   let total = 0;
   
 carrinho.forEach(function(item) {
    html += `<p>${item.nome} - R$ ${item.preco}</p>`;
    total += item.preco;
  });
  html += `<p><strong>Total: R$ ${total.toFixed(2)}</strong></p>`
  container.innerHTML = html;
}
