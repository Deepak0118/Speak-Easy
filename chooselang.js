
    const langToPage = {
      english: "english.html",
      spanish: "spanish.html",
      french: "french.html",
      german: "german.html",
      dutch: "dutch.html",
      italian: "italian.html",
      portuguese: "portuguese.html",
      russian: "russian.html"
    };

    // Event delegation: card-container पर event लगाएं
    document.querySelector('.card-container').addEventListener('click', function(e) {
      // Find closest card (even if img or inner div is clicked)
      const card = e.target.closest('.card');
      if(card) {
        const lang = card.getAttribute('data-lang');
        if(langToPage[lang]) {
          window.location.href = langToPage[lang];
        }
      }
    });
  