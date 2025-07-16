// Menu hamburguer
const menuBtn = document.querySelector('.menu-btn');
const navlinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navlinks.classList.toggle('mobile-menu');
});

// Validação do formulário de contato
document.querySelector(".cform").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const remarks = document.getElementById("remarks").value.trim();

  const namePattern = /^[A-Za-z\s]+$/;
  if (name === "") {
    alert("Name is required.");
    document.getElementById("name").focus();
    return;
  } else if (!namePattern.test(name)) {
    alert("Name should contain only alphabets.");
    document.getElementById("name").focus();
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    alert("Email is required.");
    document.getElementById("email").focus();
    return;
  } else if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    document.getElementById("email").focus();
    return;
  }

  if (remarks === "") {
    alert("Remarks cannot be empty.");
    document.getElementById("remarks").focus();
    return;
  }

  alert("Form submitted successfully!");
  this.submit();
});

// Quiz (explore)
function score(event) {
  event.preventDefault();
  const form = document.forms['Quiz'];

  // Reset estilos anteriores
  Array.from(form.getElementsByClassName('input-box')).forEach(input => {
    input.classList.remove('correct', 'incorrect', 'error');
  });

  let isValid = true;
  let errorMessage = '';

  const questions = [
    { id: 'q1', correctAnswer: 'tirunelveli' },
    { id: 'q2', correctAnswer: 'dhanushkodi' },
    { id: 'q3', correctAnswer: 'kallanai' },
    { id: 'q4', correctAnswer: ['gingee fort', 'senji fort'] },
    { id: 'q5', correctAnswer: ['chennai', 'mylapore'] },
  ];

  questions.forEach(q => {
    const input = form.elements[q.id];
    const value = input.value.trim().toLowerCase();

    if (value === '') {
      isValid = false;
      input.classList.add('error');
      errorMessage = 'Please answer all questions.';
    } else if (Array.isArray(q.correctAnswer)) {
      if (!q.correctAnswer.includes(value)) {
        isValid = false;
        input.classList.add("incorrect");
        input.value = `${q.correctAnswer.join(' or ')} (Correct answers)`;
      } else {
        input.classList.add('correct');
      }
    } else if (value !== q.correctAnswer) {
      isValid = false;
      input.classList.add('incorrect');
      input.value = `${q.correctAnswer} (Correct answer)`;
    } else {
      input.classList.add('correct');
    }
  });

  const feedbackContainer = document.getElementById('feedbackContainer');
  feedbackContainer.innerHTML = '';

  if (isValid) {
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Congratulations! You answered all the questions correctly.';
    feedbackContainer.appendChild(successMessage);
    form.reset();
  } else {
    const errorMsg = document.createElement('p');
    errorMsg.textContent = errorMessage || 'You have so much to discover about Tamil Nadu';
    feedbackContainer.appendChild(errorMsg);
  }

  return false;
}
