

document.addEventListener("DOMContentLoaded", () => {
  const faixa = document.querySelector("#carrosel-imagens .faixa");
  let velocidade = 0.5; // pixels por frame

  // Duplicar as imagens para looping
  faixa.innerHTML += faixa.innerHTML;

  let deslocamento = 0;

  function animar() {
    deslocamento -= velocidade;
    if (Math.abs(deslocamento) >= faixa.scrollWidth / 2) {
      deslocamento = 0; // reinicia quando metade da faixa sair
    }
    faixa.style.transform = `translateX(${deslocamento}px)`;
    requestAnimationFrame(animar);
  }

  animar();
});


document.addEventListener("DOMContentLoaded", () => {

    // Função para formatar a data no formato brasileiro (DD/MM/AAAA)
    function formatarDataBR(dataISO) {
        const partes = dataISO.split("-");
        return `${partes[2]}/${partes[1]}/${partes[0]}`;
    }

    // Função que cria o link do WhatsApp e abre
    function enviarWhatsApp(nome, data, hora, telefone, numero) {
        const dataFormatada = formatarDataBR(data);
        const mensagem = `Olá! Gostaria de marcar horário no Pedin Cortes. Meu nome é ${nome}.
Gostaria de agendar para o dia ${dataFormatada} às ${hora}.
Meu telefone: ${telefone} — Essa data e horario está disponível?`;
        const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
        window.open(link, "_blank");
    }

    // Formulário Pedin Cortes
    document.getElementById("form-pedin").addEventListener("submit", function(e) {
        e.preventDefault();
        const nome = document.getElementById("nome-pedin").value;
        const data = document.getElementById("data-pedin").value;
        const hora = document.getElementById("hora-pedin").value;
        const telefone = document.getElementById("telefone-pedin").value;
        enviarWhatsApp(nome, data, hora, telefone, "5511922426981"); // número do Pedin
    });

    // Formulário Jv Cortes
    document.getElementById("form-jv").addEventListener("submit", function(e) {
        e.preventDefault();
        const nome = document.getElementById("nome-jv").value;
        const data = document.getElementById("data-jv").value;
        const hora = document.getElementById("hora-jv").value;
        const telefone = document.getElementById("telefone-jv").value;
        enviarWhatsApp(nome, data, hora, telefone, "55119444684251"); // número do JV
    });

});

const botao = document.querySelector(".menu-icon")
const aside = document.querySelector("#aside")
const tirarAside = document.querySelector("#mascara-invisivel")
const linkHeader =document.querySelectorAll(".button-header");

function mostrarAside(){
  aside.style.display = "flex"
  tirarAside.style.visibility ="visible"
}
function tirarMascara(){
  aside.style.display = "none"
  tirarAside.style.visibility ="hidden"
}
botao.addEventListener("click",mostrarAside);
tirarAside.addEventListener("click",tirarMascara);
linkHeader.forEach(link => {
  link.addEventListener("click", tirarMascara);
});

tirarAside.addEventListener("click", tirarMascara);