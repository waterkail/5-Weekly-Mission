import { emailInput, emailPls } from './idEmail.js';
import {
  passwordInput,
  passEyeButton,
  passwordPls,
  passHideShow,
} from './password.js';

const signButton = document.querySelector('.signbutton');

const userCheck = function () {
  if (
    emailInput.value === 'test@codeit.com' &&
    passwordInput.value === 'codeit101'
  ) {
    location.href = './folder';
  } else {
    document.querySelector('.checkPassword').classList.remove('hidden');
    passwordInput.classList.add('inputProblem');
    document.querySelector('.checkEmail').classList.remove('hidden');
    emailInput.classList.add('inputProblem');
  }
}; // 로그인 정보 확인용 함수

const loginCheck = function (e) {
  e.preventDefault();
  if (emailPls() === false) {
    emailPls();
    emailInput.focus();
  } else if (passwordPls() === false) {
    passwordPls();
    passwordInput.focus();
  } else {
    userCheck();
  }
}; //로그인할 때 양식 및 정보 확인하는 함수

emailInput.addEventListener('focusout', emailPls);
passwordInput.addEventListener('focusout', passwordPls);
passEyeButton.addEventListener('click', passHideShow);
signButton.addEventListener('click', loginCheck);
