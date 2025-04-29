let questions = [
    {   question: 'Which of these is "pencil"?',
    options:  [
        { img: 'pencil.jpg',text: 'карандаш', answer: true },
        { img: 'pen.jpg',text: 'ручка', answer: false },
        { img: 'https://tse2.mm.bing.net/th?id=OIP.Asg_j2qBjTgoj5q9ZXSNvgHaJb&pid=Api&P=0&h=180',text: 'книга', answer: false }
        ]
    },
    { 
    question: 'Which one of these is "coffee"?', 
    options: [
        { img: 'https://d2pur3iezf4d1j.cloudfront.net/images/6183b0dcb2e5c90f9e440ad9650d41f8', text: 'круассан', answer: false },
        { img: 'https://d2pur3iezf4d1j.cloudfront.net/images/18a521f1507cb86689faa5b2e8277703', text: 'сок', answer: false },
        { img: 'https://d2pur3iezf4d1j.cloudfront.net/images/6fd84b8a838c43c4a84b44b08b10177e', text: 'кофе', answer: true }
        ]
    },
    {
        question: 'Which one of these is "please"?', 
        options: [
            { img: 'https://th.bing.com/th/id/OIP.A_r1Q3juKhXWdqmDI7wDWgHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3', text: 'пожалуйста', answer: true },
            { img: 'https://th.bing.com/th/id/OIP.ExxpjqVGxkmZUISMFMwFyQHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3', text: 'грустно', answer: false },
            { img: 'https://th.bing.com/th/id/OIP.G0qwU156hNBGsifiHboxjAHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7', text: 'удачи', answer: false }
        ]
    },
    {
        question: 'Which one of these is "red color"?', 
        options: [
            { img: 'https://tse3.mm.bing.net/th?id=OIP.aIs1fPIdUcGu4luTwl9AiwHaHP&pid=Api&P=0&h=180', text: 'красный', answer: true },
            { img: 'https://tse2.mm.bing.net/th?id=OIP.z0PF6VnSA6IYiC96tFuYwQAAAA&pid=Api&P=0&h=180', text: 'синий', answer: false },
            { img: 'https://tse4.mm.bing.net/th?id=OIP.Vx5WQTz2nmNue8gO4njZxQHaHa&pid=Api&P=0&h=180', text: 'черный', answer: false }
        ]
    },
    { 
        question: 'Which one of these is "The bus"?', 
        options: [
            { img: 'https://emojis.wiki/emoji-pics/facebook/racing-car-facebook.png', text: 'машина', answer: false },
            { img: 'https://emojis.wiki/emoji-pics/messenger/bus-messenger.png', text: 'автобус', answer: true },
            { img: 'https://cdn-0.emojis.wiki/emoji-pics/facebook/delivery-truck-facebook.png', text: 'скорая помощь', answer: false }
        ]
    },
    { 
        question: 'How do you say "Hello"?', 
        options: [
            { img: 'http://ts4.mm.bing.net/th?id=OIP.CNJHv58UPMM6GPrhzOLxDQHaHa&pid=15.1', text: 'Привет', answer: true },
            { img: 'https://th.bing.com/th/id/OIP.5L29Mq8ZOhPJl2KbekdL5gHaHa?w=189&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7', text: 'спасибо', answer: false },
            { img: 'https://th.bing.com/th/id/OIP.qVtLVukWzFHmmxGrd7Es0wHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3', text: 'пока', answer: false }
        ]
    },
    {   question: 'Which of these is "The glass"?',
        options:  [
            { img: 'https://d2pur3iezf4d1j.cloudfront.net/images/93173abe106bfaa1e2df6512e1704529',text:'стакан', answer: true },
            { img: 'https://d2pur3iezf4d1j.cloudfront.net/images/7afea32bcf0e8c6f9d446ad4aad416be',text: 'вода', answer: false },
            { img: 'https://d2pur3iezf4d1j.cloudfront.net/images/dd6539160d13378bd15c527d27f1464a',text:'сок', answer: false }
        ]
    },
    {   question: 'Which of these means "Thank You"?',
        options:  [
            { img: 'https://th.bing.com/th/id/OIP.5L29Mq8ZOhPJl2KbekdL5gHaHa?w=189&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7',text:'спасибо', answer: true },
            { img: 'http://ts4.mm.bing.net/th?id=OIP.CNJHv58UPMM6GPrhzOLxDQHaHa&pid=15.1',text: 'Привет', answer: false },
            { img: 'https://th.bing.com/th/id/OIP.qVtLVukWzFHmmxGrd7Es0wHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3',text:'пока', answer: false }
        ]
    },
    { 
        question: 'Which one of these is "cat"?', 
        options: [
            { img: 'https://d2pur3iezf4d1j.cloudfront.net/images/d6508c5ea6ebcb4859df33c80acd8d8c', text: 'мальчик', answer: false },
            { img: 'https://d2pur3iezf4d1j.cloudfront.net/images/b40a713e2c973cb54c3c5bb67ef19af4', text: 'мужчина', answer: false },
            { img: 'https://d2pur3iezf4d1j.cloudfront.net/images/9aa862ebf2f8636383e54ce23d340db9', text: 'кот', answer: true }
        ]
    },
    {   question: 'Which of these means "house"?',
        options:  [
            { img: 'https://emojis.wiki/emoji-pics/facebook/house-facebook.png',text:'дом', answer: true },
            { img: 'https://symbl-world.akamaized.net/i/webp/f5/f6918df7b639080a618e248db22d6c.webp',text: 'школа', answer: false },
            { img: 'https://th.bing.com/th/id/OIP.-UaQjK9gihRQEQNqeCg0pgHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',text: 'больница' ,answer: false }
        ]
    },
];

let currentQuestionIndex = 0;
let score = 0;
let timerInterval;

function speakText(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
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

function loadQuestion() {
  document.getElementById('timerDisplay').style.display = 'inline-block';
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
          <img src="${option.img}" class="img-fluid">
          <p class="mt-2 font-weight-bold">${option.text}</p>
        </div>`;
      optionsDiv.appendChild(optionCard);
    });
    startTimer();
  } else {
    document.getElementById('question').innerText = '🎉 Quiz Finished! Your score is ' + score;
    document.getElementById('options').innerHTML = '';
    document.getElementById('result').innerText = '';
    clearInterval(timerInterval);
    document.getElementById('timerDisplay').style.display = 'none';
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
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
      setTimeout(() => {
        let correctOption = questions[currentQuestionIndex].options.find(opt => opt.answer);
        showPronounceModal(correctOption.text);
      }, 500);
    }
  }, 1000);
}

loadQuestion();