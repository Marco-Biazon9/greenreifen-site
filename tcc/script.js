document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('dark-mode-toggle');
  const toggleImage = toggleButton.querySelector('img');
  const body = document.body;

  // Definição dos caminhos das imagens
  const sunImage = 'imagens/sol.svg';
  const moonImage = 'imagens/lua.svg'; // Assumindo que você tem um ícone da lua nesta pasta

  // Função para atualizar o ícone
  function updateIcon(isDarkMode) {
      if (isDarkMode) {
          toggleImage.src = moonImage;
          toggleImage.alt = 'Modo Escuro';
          toggleImage.title = 'Alternar Modo Claro';
      } else {
          toggleImage.src = sunImage;
          toggleImage.alt = 'Modo Claro';
          toggleImage.title = 'Alternar Modo Escuro';
      }
  }

  // 1. Carrega a preferência salva ou define Modo Claro como padrão
  const savedMode = localStorage.getItem('darkMode');
  
  // Se não houver preferência salva, ou se for 'disabled', o modo claro é aplicado por padrão.
  // Se for 'enabled', o modo escuro é carregado.
  if (savedMode === 'enabled') {
      body.classList.add('dark-mode');
      updateIcon(true);
  } else {
      // Garante que a imagem inicial seja o Sol (Modo Claro)
      updateIcon(false);
      // O modo escuro é removido (se já estava) e o localStorage é setado como 'disabled'
      body.classList.remove('dark-mode'); 
      localStorage.setItem('darkMode', 'disabled');
  }

  // 2. Alterna o modo e salva a preferência ao clicar
  toggleButton.addEventListener('click', () => {
      const isCurrentlyDarkMode = body.classList.toggle('dark-mode');

      if (isCurrentlyDarkMode) {
          localStorage.setItem('darkMode', 'enabled');
      } else {
          localStorage.setItem('darkMode', 'disabled');
      }
      
      // Atualiza o ícone após a alternância
      updateIcon(isCurrentlyDarkMode);
  });
});
//pop up
window.onload = function() {
    const open = document.getElementById("openPopup");
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("popupOverlay");
    const close = document.getElementById("closePopup");

    // Abrir
    open.addEventListener("click", () => {
      popup.classList.add("show");
      overlay.style.display = "block";
    });

    // Fechar (X)
    close.addEventListener("click", () => {
      popup.classList.remove("show");
      overlay.style.display = "none";
    });

    // Fechar clicando no fundo escuro
    overlay.addEventListener("click", () => {
      popup.classList.remove("show");
      overlay.style.display = "none";
    });
  };