const feedback = document.querySelector(".button-сonnection");
const feedbackPopup = document.querySelector(".modal-login");
const feedbackClose = feedbackPopup.querySelector(".button-close");
const feedbackForm = feedbackPopup.querySelector(".login-form");
const feedbackLogin = feedbackPopup.querySelector(".feedback-login");
const feedbackEmail = feedbackPopup.querySelector(".user-email");
const feedbackText = feedbackPopup.querySelector(".feedback-text");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  if (storage) {
    feedbackLogin.value = storage;
    feedbackEmail.focus();
  } else {
  feedbackLogin.focus();
  }
});


feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackLogin.value || !feedbackEmail.value || !feedbackText.value) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-error");
  feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
  feedbackPopup.classList.add("modal-error");
  }  else {
    if (isStorageSupport) {
    localStorage.setItem("login", feedbackLogin.value);
  }
}
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      loginPopup.classList.add("modal-error");
    }
  }
});

