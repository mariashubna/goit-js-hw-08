import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const handlerFunction = throttle(() => {
  const data = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}, 500);

emailInput.addEventListener('input', handlerFunction);

messageInput.addEventListener('input', handlerFunction);

const saveData = localStorage.getItem('feedback-form-state');
if (saveData) {
  const data = JSON.parse(saveData);
  emailInput.value = data.email;
  messageInput.value = data.message;
}

if (emailInput.value !== "" && messageInput.value !== "") {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      localStorage.removeItem('feedback-form-state');
      emailInput.value = "";
      messageInput.value = "";
    });
}
