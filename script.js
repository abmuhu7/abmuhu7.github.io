let clickCounter = 0;

function moveSection(sectionId) {
  const section = document.getElementById(sectionId);

  clickCounter++;
  if (clickCounter > 3) {
    showError("You are injected with Aastu Virus! ");
    playEvilLaugh();
  } else {
   
    const randomX = Math.random() * (window.innerWidth - section.clientWidth);
    const randomY = Math.random() * (window.innerHeight - section.clientHeight);
  
    section.style.position = 'absolute';
    section.style.left = `${randomX}px`;
    section.style.top = `${randomY}px`;
  }
}

function showError(message) {
  const errorMessage = document.getElementById('errorMessage');
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';

 
  evilLaugh();

  setTimeout(() => {
    errorMessage.style.display = 'none';
  }, 5000); 
}

function evilLaugh() {
  alert("Muahaha! You have fallen victim to the AASTU Virus. Good luck!:)");
}
function validateAndshowErrorMessage() {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = "We DON'T nEED YOur MESSAge :) IT is just for FORMALIty.hahaha";
    playEvilLaugh();
    errorMessage.style.display = 'block';
  
    
    setTimeout(() => {
      errorMessage.style.display = 'none';
    }, 5000); 
if (!document.getElementById('email').checkValidity()) {
showError("Please enter a valid email address.");
return;
}   
  }
  