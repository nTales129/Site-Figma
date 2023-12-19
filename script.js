// // Aguarde o carregamento do DOM antes de adicionar os manipuladores de eventos
// document.addEventListener("DOMContentLoaded", function() {
//   // Obtenha todos os elementos de sobreposição do vídeo
//   var videoOverlays = document.querySelectorAll(".video-overlay");

//   // Adicione um manipulador de eventos para cada sobreposição de vídeo
//   videoOverlays.forEach(function(overlay) {
//     overlay.addEventListener("click", function() {
//       var video = overlay.parentNode.querySelector(".video");

//       // Verifique se o vídeo está pausado ou não
//       if (video.paused) {
//         video.play(); // Inicie a reprodução do vídeo
//         overlay.style.opacity = 0; // Oculte a sobreposição do vídeo
//       } else {
//         video.pause(); // Pausar a reprodução do vídeo
//       }
//     });
//   });
// });


function verificarTamanhoPagina() {
  // Obtém a largura atual da janela
  var larguraPagina = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Verifica se o tamanho é menor que 720 pixels
  if (larguraPagina <= 720) {
    // Coloque aqui o código que deseja executar quando o tamanho for menor que 720 pixels
    console.log("O tamanho da página é menor que 720 pixels!");
    var imagem = document.querySelector('.hero-image img');
    imagem.src = "./imgs/bg-main-mobile.png";
  } else {
    console.log("O tamanho da página é maior que 720 pixels!");
    var imagem = document.querySelector('.hero-image img');
    imagem.src = "./imgs/bg-main.png";
  }
}

// Chama a função ao carregar a página e quando a janela for redimensionada
window.addEventListener("load", verificarTamanhoPagina);
window.addEventListener("resize", verificarTamanhoPagina);


document.querySelector('.btn-login').addEventListener('click', openModal)

function openModal(e) {
  e.preventDefault();
  document.getElementById("loginModal").style.display = "block";
}

function closeModal() {
  document.getElementById("loginModal").style.display = "none";
}


window.onclick = function(event) {
  if (event.target == document.getElementById("loginModal")) {
    closeModal();
  }
};

function destacarH2(event) {
  // Obtém a referência para o h2 acima da div alvo
  var h2Acima = event.target.closest('.times-table').querySelector('.nome');

  // Altera a opacidade do h2 acima para 1
  h2Acima.style.opacity = "1";
}

function restaurarOpacidade(event) {
  // Obtém a referência para o h2 acima da div alvo
  var h2Acima = event.target.closest('.times-table').querySelector('.nome');

  // Restaura a opacidade do h2 acima para 0
  h2Acima.style.opacity = "0";
}

// Obtém todas as divs com a classe "bloco-img-table"
var divsImgTable = document.querySelectorAll(".bloco-img-table");

// Itera sobre cada div e adiciona os event listeners ao passar o mouse sobre ela e quando o mouse sai de cima
divsImgTable.forEach(function(div) {
  div.addEventListener("mouseover", destacarH2);
  div.addEventListener("mouseout", restaurarOpacidade);
});
