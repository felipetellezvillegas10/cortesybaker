 (function () {
      const toggle = document.getElementById('languageToggle');
      const langText = document.getElementById('langText');
      const flagImg = document.getElementById('flagImg');

      // Estado inicial (true = español)
      let isSpanish = true;

      // Función que actualiza texto/imagen/atributos ARIA
      function updateUI() {
        if (isSpanish) {
          langText.textContent = 'SPANISH';
          flagImg.src = '/img/mexico.png';
          flagImg.alt = 'Bandera México';
          toggle.setAttribute('aria-pressed', 'false');
        } else {
          langText.textContent = 'ENGLISH';
          flagImg.src = '/img/eeuu.png';
          flagImg.alt = 'Bandera EEUU';
          toggle.setAttribute('aria-pressed', 'true');
        }
      }

      // Inicializa
      updateUI();

      // Al hacer click, alterna
      toggle.addEventListener('click', function (e) {
        e.preventDefault();
        isSpanish = !isSpanish;
        updateUI();
      });

      // Soporte teclado: Enter o Space activan el toggle
      toggle.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          isSpanish = !isSpanish;
          updateUI();
        }
      });

      // OPTIONAL: mostrar en consola el estado (puedes quitarlo)
      // toggle.addEventListener('click', () => console.log('Idioma:', isSpanish ? 'ES' : 'EN'));
    })();