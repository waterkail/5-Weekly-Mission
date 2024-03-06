const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const passCheckInput = document.querySelector('#passwordcheck');
const passEyeButton = document.querySelector('.passEye');
const checkEyeButton = document.querySelector('.passCheckEye');

let A = 0;
let B = 0;

function isEmail(email) {
  const A = email.indexOf('@');
  if (A === -1) {
    return false;
  } else if (email.slice(0, A).length === 0) {
    return false;
  } else if (email.slice(A + 1).length === 0) {
    return false;
  }
  return true;
} /* 이메일이 맞으면 true를 뱉는 함수*/

const emailPls = function (e) {
  document.querySelector('.giveMeEmail').classList.add('hidden');
  document.querySelector('.notEmail').classList.add('hidden');
  document.querySelector('#email').classList.remove('inputProblem');
  if (emailInput.value === '') {
    document.querySelector('.giveMeEmail').classList.remove('hidden');
    document.querySelector('#email').classList.add('inputProblem');
  } else if (isEmail(emailInput.value) === false) {
    document.querySelector('.notEmail').classList.remove('hidden');
    document.querySelector('#email').classList.add('inputProblem');
  }
}; /* 이메일을 입력하지 않거나 이메일 주소로 입력하지 않을 때 반응하는 함수 */

const passwordPls = function (e) {
  document.querySelector('.giveMePassword').classList.add('hidden');
  document.querySelector('#password').classList.remove('inputProblem');
  if (passwordInput.value === '') {
    document.querySelector('.giveMePassword').classList.remove('hidden');
    document.querySelector('#password').classList.add('inputProblem');
  }
}; /* 비밀번호 입력하지 않으면 반응하는 함수 */

emailInput.addEventListener('focusout', emailPls);
passwordInput.addEventListener('focusout', passwordPls);
passEyeButton.onclick = function () {
  passEyeButton.firstElementChild.classList.toggle('hidden');
  passEyeButton.lastElementChild.classList.toggle('hidden');
  A = A + 1;
  if (A % 2) {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
};

checkEyeButton.onclick = function () {
  checkEyeButton.firstElementChild.classList.toggle('hidden');
  checkEyeButton.lastElementChild.classList.toggle('hidden');
  B = B + 1;
  if (B % 2) {
    passCheckInput.type = 'text';
  } else {
    passCheckInput.type = 'password';
  }
};
