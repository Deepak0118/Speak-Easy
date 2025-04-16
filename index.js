
 
    const textElement = document.getElementById("animated-text");
    const floatingWords = document.getElementById("floatingWords");
    const texts = ["Speak Easy"];
    let charIndex = 0;

    const floatingTextSet = [
      "Facile à parler", "Lingua facile", "geheime kroeg", "Parler facilement",
      "Lingua fácil de usar", "Fácil de hablar", "Sprechen einfach", "locale clandestino",
      "Скороговорка", "bar clandestino", "Flüsterkneipe", "подпольный бар", "Fala fácil"
    ];

    function populateFloatingWords() {
      const ROWS = 10, COLS = 10;
      const safeZone = { rowMin: 4, rowMax: 6, colMin: 3, colMax: 7 };
      Math.seedrandom("speakeasy-fixed");
      floatingWords.innerHTML = "";
      let wordIndex = 0;

      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          if (
            row >= safeZone.rowMin && row <= safeZone.rowMax &&
            col >= safeZone.colMin && col <= safeZone.colMax
          ) continue;

          if (Math.random() > 0.6) continue;

          const word = document.createElement("div");
          word.className = "word";
          word.innerText = floatingTextSet[wordIndex % floatingTextSet.length];
          const top = row * 10 + Math.random() * 5;
          const left = col * 10 + Math.random() * 5;

          word.style.top = `${top}%`;
          word.style.left = `${left}%`;
          word.style.animationDelay = `${(wordIndex % 7) * 0.7}s`;

          floatingWords.appendChild(word);
          wordIndex++;
        }
      }
    }

    function typeEffect() {
      const currentText = texts[0];
      if (charIndex < currentText.length) {
        textElement.innerText = currentText.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeEffect, 150);
      }
    }
  window.onload = () => {
    populateFloatingWords();
    typeEffect();
    
  };