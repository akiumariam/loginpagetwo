let isLight = true;
    function toggleTheme() {
      const link = document.getElementById('themeStylesheet');
      if (isLight) {
        link.href = 'dark.css';
      } else {
        link.href = 'style.css';
      }
      isLight = !isLight;
    }