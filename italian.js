
let questions = [
{ 
        question: 'Which one of these is "coffee"?', 
        options: [
            { img: 'https://d2pur3iezf4d1j.cloudfront.net/images/6183b0dcb2e5c90f9e440ad9650d41f8', text: 'cornetto', answer: false },
            { img: 'https://d2pur3iezf4d1j.cloudfront.net/images/18a521f1507cb86689faa5b2e8277703', text: 'voi', answer: false },
            { img: 'https://d2pur3iezf4d1j.cloudfront.net/images/6fd84b8a838c43c4a84b44b08b10177e', text: 'caffè', answer: true }
    ]
},
{
        question: 'Which one of these is "red colour"?', 
        options: [
            { img: 'https://tse3.mm.bing.net/th?id=OIP.aIs1fPIdUcGu4luTwl9AiwHaHP&pid=Api&P=0&h=180', text: 'rosso', answer: true },
            { img: 'https://tse2.mm.bing.net/th?id=OIP.z0PF6VnSA6IYiC96tFuYwQAAAA&pid=Api&P=0&h=180', text: 'blu', answer: false },
            { img: 'https://tse4.mm.bing.net/th?id=OIP.Vx5WQTz2nmNue8gO4njZxQHaHa&pid=Api&P=0&h=180', text: 'nera', answer: false }
        ]
    },
    { 
        question: 'Which one of these is "The book"?', 
        options: [
            { img: 'pen-removebg-preview.png', text: 'penna', answer: false },
            { img: 'https://tse2.mm.bing.net/th?id=OIP.Asg_j2qBjTgoj5q9ZXSNvgHaJb&pid=Api&P=0&h=180', text: 'libro', answer: true },
            { img: 'pencil-removebg-preview.png', text: 'matita', answer: false }
        ]
    },
    { 
        question: 'Which one of these is "goodluck"?', 
        options: [
            { img: 'http://ts4.mm.bing.net/th?id=OIP.CNJHv58UPMM6GPrhzOLxDQHaHa&pid=15.1', text: 'ciao', answer: false },
            { img: 'https://tse3.mm.bing.net/th?id=OIP.JHzUF4hRKa6A7hJnWuC4OQHaHa&pid=Api&P=0&h=180', text: 'buona fortuna', answer: true },
            { img: 'https://th.bing.com/th/id/OIP.qVtLVukWzFHmmxGrd7Es0wHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3', text: 'laureato', answer: false }
        ]
    },
    { 
        question: 'How do you say "Hello"?', 
        options: [
            { img: 'http://ts4.mm.bing.net/th?id=OIP.CNJHv58UPMM6GPrhzOLxDQHaHa&pid=15.1', text: 'ciao', answer: true },
            { img: 'https://th.bing.com/th/id/OIP.qVtLVukWzFHmmxGrd7Es0wHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3', text: 'laureato', answer: false },
            { img: 'https://tse3.mm.bing.net/th?id=OIP.JHzUF4hRKa6A7hJnWuC4OQHaHa&pid=Api&P=0&h=180', text: 'buona fortuna', answer: false }
        ]
    },
    {   question: 'Which one of these is "pen"?',
        options:  [
            { img: 'pen-removebg-preview.png',text:"penna" ,answer: true },
            { img: 'pencil-removebg-preview.png',text: 'matita', answer: false },
            { img: 'https://tse2.mm.bing.net/th?id=OIP.Asg_j2qBjTgoj5q9ZXSNvgHaJb&pid=Api&P=0&h=180',text:'libro', answer: false }
        ]
    },
    {   question: 'which of these is "girl"?',
        options:  [
            { img: 'https://d2pur3iezf4d1j.cloudfront.net/images/a443582c1eb03f3fcebfff4febdba3e4',text:'ragazza', answer: true },
            { img: 'https://d2pur3iezf4d1j.cloudfront.net/images/52275a140b3fb918b49449a08283ec80',text: 'donne', answer: false },
            { img: 'https://d2pur3iezf4d1j.cloudfront.net/images/d6508c5ea6ebcb4859df33c80acd8d8c',text: 'il ragazzo' ,answer: false }
        ]
},
    {   question: 'which of these is "pencil"?',
        options:  [
            { img: 'pencil-removebg-preview.png',text: 'matita', answer: true },
            { img: 'pen-removebg-preview.png',text: 'penna', answer: false },
            { img: 'https://tse2.mm.bing.net/th?id=OIP.Asg_j2qBjTgoj5q9ZXSNvgHaJb&pid=Api&P=0&h=180',text: 'libro', answer: false }
        ]
    },
    {
        question: 'Which one of these is "One"?', 
        options: [
            { img: 'https://d2pur3iezf4d1j.cloudfront.net/images/4be10d03a4c6ac4078b6be0df2eb5247', text: 'un', answer: true },
            { img: 'https://d2pur3iezf4d1j.cloudfront.net/images/9aa862ebf2f8636383e54ce23d340db9', text: 'il gatto', answer: false },
            { img: 'https://d2pur3iezf4d1j.cloudfront.net/images/b40a713e2c973cb54c3c5bb67ef19af4', text: 'l \'uomo', answer: false }
        ]
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;
  let incorrect = 0;
  let timerInterval;

  function speakText(text) {
    if ('speechSynthesis' in window) {
      try {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1;
        utterance.pitch = 1;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
      } catch (error) {
        console.error("Speech synthesis error:", error);
      }
    } else {
      console.warn("SpeechSynthesis is not supported in this browser.");
    }
  }

  function showPronounceModal(correctWord) {
    const modal = document.getElementById('pronounceModal');
    modal.style.display = 'flex';
    document.getElementById('pronounceYes').onclick = () => {
      modal.style.display = 'none';
      speakText(correctWord);
      showRepeatModal(correctWord);
    };
    document.getElementById('pronounceNo').onclick = () => {
      modal.style.display = 'none';
      currentQuestionIndex++;
      loadQuestion();
    };
  }

  function showRepeatModal(correctWord) {
    const modal = document.getElementById('repeatModal');
    modal.style.display = 'flex';
    document.getElementById('repeatPronounce').onclick = () => {
      speakText(correctWord);
    };
    document.getElementById('nextQuestion').onclick = () => {
      modal.style.display = 'none';
      currentQuestionIndex++;
      loadQuestion();
    };
  }

  function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const progressLabel = document.getElementById('progressLabel');
    const total = questions.length;
    const current = Math.min(currentQuestionIndex + 1, total);
    const percent = Math.round((current / total) * 100);
    progressBar.style.width = percent + "%";
    progressLabel.innerText = `Question ${current} of ${total}`;
  }

  function loadQuestion() {
    document.getElementById('timerDisplay').style.display = 'inline-block';
    document.getElementById('progressContainer').style.display = 'block';
    updateProgressBar();
    if (currentQuestionIndex < questions.length) {
      const questionData = questions[currentQuestionIndex];
      document.getElementById('question').innerText = questionData.question;
      const optionsDiv = document.getElementById('options');
      optionsDiv.innerHTML = '';
      questionData.options.forEach((option, idx) => {
        const optionCard = document.createElement('div');
        optionCard.classList.add('col-sm-4', 'col-md-3', 'card', 'm-2', 'p-2');
        optionCard.setAttribute('data-answer', option.answer);
        optionCard.setAttribute('data-idx', idx);
        optionCard.onclick = () => handleAnswer(optionCard, option.answer, questionData.options);
        optionCard.innerHTML = `
          <div class="card-body">
            <img src="${option.img}" alt="${option.text}" class="img-fluid">
            <p class="mt-2 font-weight-bold">${option.text}</p>
          </div>`;
        optionsDiv.appendChild(optionCard);
      });
      startTimer();
    } else {
      showFinalScore();
    }
  }

  function handleAnswer(selectedCard, isCorrect, options) {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(c => {
      c.classList.add('disabled');
      c.onclick = null;
    });
    clearInterval(timerInterval);

    if (isCorrect) {
      selectedCard.classList.add('bg-success');
      score++;
    } else {
      selectedCard.classList.add('bg-danger');
      incorrect++;
      allCards.forEach(card => {
        if (card.getAttribute('data-answer') === 'true') {
          card.classList.add('bg-success');
        }
      });
    }

    const correctOption = options.find(opt => opt.answer);

    setTimeout(() => {
      showPronounceModal(correctOption.text);
    }, 500);
  }

  function startTimer() {
    if (timerInterval) clearInterval(timerInterval); // Prevent multiple timers
    let timeLeft = 15;
    const timerDisplay = document.getElementById('timerDisplay');
    timerDisplay.classList.remove('urgency');
    timerDisplay.innerText = timeLeft;
    timerInterval = setInterval(() => {
      timeLeft--;
      timerDisplay.innerText = timeLeft;
      if (timeLeft <= 5) {
        timerDisplay.classList.add('urgency');
      }
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        const allCards = document.querySelectorAll('.card');
        allCards.forEach(c => {
          c.classList.add('disabled');
          c.onclick = null;
          if (c.getAttribute('data-answer') === 'true') {
            c.classList.add('bg-success');
          }
        });
        incorrect++;
        setTimeout(() => {
          let correctOption = questions[currentQuestionIndex].options.find(opt => opt.answer);
          showPronounceModal(correctOption.text);
        }, 500);
      }
    }, 1000);
  }

  function showFinalScore() {
    document.getElementById('timerDisplay').style.display = 'none';
    document.getElementById('progressContainer').style.display = 'none';
    const resultContainer = document.getElementById('options');
    resultContainer.innerHTML = `
      <div class="col-12">
        <div class="card p-4 shadow-lg mx-auto" style="max-width: 400px;">
          <h3 class="mb-3 text-dark">🎉 Quiz Finished!</h3>
          <p class="mb-2 text-dark">Your Score: <strong>${score}/${questions.length}</strong></p>
          <p class="mb-2 text-success">Correct: <strong>${score}</strong></p>
          <p class="mb-4 text-danger">Incorrect: <strong>${incorrect}</strong></p>
          <div class="d-flex flex-column gap-2">
            <button class="btn btn-success mb-2" onclick="shareScore()">📤 Share your score</button>
            <button class="btn btn-primary" onclick="goHome()">🏠 Home</button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('question').innerText = '';
    document.getElementById('result').innerText = '';
    if (timerInterval) clearInterval(timerInterval); // Cleanup
  }

  function shareScore() {
    const text = `I scored ${score}/${questions.length} on the SPEAK EASY quiz! 🎉 Try it here: ${window.location.href}`;
    if (navigator.share) {
      navigator.share({
        title: 'SPEAK EASY Quiz Score',
        text: text,
        url: window.location.href
      }).catch(err => console.log('Sharing failed', err));
    } else {
      navigator.clipboard.writeText(text).then(() => {
        alert("📋 Score copied! Share it on WhatsApp, Instagram, anywhere!");
      });
    }
  }

  function goHome() {
    window.location.href = '/'; // Adjust as necessary
  }

  // Start the quiz
  loadQuestion();