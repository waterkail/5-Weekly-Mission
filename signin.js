import { emailInput, emailPls, emailErrorMessage } from './idEmail.js';
import {
  passwordInput,
  passEyeButton,
  passwordPls,
  passHideShow,
  passwordErrorMessage,
} from './password.js';

const signButton = document.querySelector('.signbutton');
const correctEmail = 'test@codeit.com';
const correctPassword = 'codeit101';

const userCheck = function () {
  if (
    emailInput.value === correctEmail &&
    passwordInput.value === correctPassword
  ) {
    location.href = './folder';
  } else {
    passwordErrorMessage.classList.remove('hidden');
    passwordErrorMessage.textContent = '비밀번호를 확인해주세요.';
    passwordInput.classList.add('inputError');
    emailErrorMessage.classList.remove('hidden');
    emailErrorMessage.textContent = '이메일을 확인해주세요.';
    emailInput.classList.add('inputError');
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
