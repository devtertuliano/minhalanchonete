let dadosSalvos = localStorage.getItem("carrinho");
const carrinho = JSON.parse(dadosSalvos) || [];

const botoes = document.querySelectorAll(".btn-adicionar");

botoes.forEach(function (botao) {
  botao.addEventListener("click", function (event) {
    let preco = event.target.dataset.preco;
    let nome = event.target.dataset.nome;
    let precoConvertido = Number(preco);
    carrinho.push({ nome: nome, preco: precoConvertido });
    atualizarCarrinhoNaTela();
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  });
});

function atualizarCarrinhoNaTela() {
  let container = document.getElementById("container-Carrinho");
  let html = "";
  let total = 0;
  if (carrinho.length === 0) {
    html = "<p>O carrinho está vazio.</p>";
  } else {
    carrinho.forEach(function (item, index) {
      html += `<p>${item.nome} - R$ ${item.preco} <button class="btn-remover" data-index="${index}">remover</button></p>`;
      total += item.preco;
    });
    html += `<p><strong>Total: R$ ${total.toFixed(2)}</strong></p>`;
    html += `<button class="btn-finalizar">Finalizar Pedido</button>`;
  }
  container.innerHTML = html;
}

atualizarCarrinhoNaTela();

let containerCarrinho = document.getElementById("container-Carrinho");

containerCarrinho.addEventListener("click", function (event) {
  let index = event.target.classList.contains("btn-remover")
    ? event.target.dataset.index
    : null;
  if (index !== null) {
    carrinho.splice(Number(index), 1);
    atualizarCarrinhoNaTela();
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }else if (event.target.classList.contains("btn-finalizar")) {
    alert("Pedido finalizado com sucesso!");
    carrinho.length = 0;
    atualizarCarrinhoNaTela();
    localStorage.removeItem("carrinho");
  }
});
