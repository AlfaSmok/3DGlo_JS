'use strict';

const regular = () => {
  const calcItems = document.querySelectorAll('input.calc-item');
  const userName = document.querySelectorAll('input[name=user_name]');
  const userEmail = document.querySelectorAll('input[name=user_email]');
  const userPhone = document.querySelectorAll('input[name=user_phone]');
  const messInput = document.querySelector('.mess');
  
  
  const validInput = (input, reg) => {
    input.forEach(elem => {
      elem.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(reg,'');
      });
    });
  };


  messInput.addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/[^а-яА-Я\s\-]+/,'');
  });

  validInput(calcItems, /\D/g);
  validInput(userName, /[^а-яА-Я\s\-]+/);
  validInput(userEmail, /[^\@\-\.\!\~\*\'\w]+/);
  validInput(userPhone, /[^\(\)\-\d]+/);

};

export default regular;