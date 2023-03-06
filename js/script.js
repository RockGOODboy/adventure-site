$(function(){
  document.querySelector('.btn_brown').onclick = function () {
    let email = document.querySelector('#email');

    email = email.value.split('');

    let checed = 0;

    for(let item of email) {
      if(item == '@'){
        break;
      }
      checed++;
    }

    for(let i = 0; i < checed; i++){
      delete email[i];
    }

    email = email.join('');

    console.log(email);

    let input = document.querySelector('.form__input_email');

    if(email != ''){
      input.style.cssText=`border-bottom: 1px solid green`;
      alert('Ваша заявка была принята. Ожидайте сообщение на email что бы узнать подробности');
    } else {
      input.style.cssText=`border-bottom: 1px solid red`;
      alert('Некорректно введен email. Пожалуйста, повторите попытку.')
    }
  }
});