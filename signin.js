import { emailInput, checkEmail, emailErrorMessage } from './idEmail.js';
import {
  passwordInput,
  passEyeButton,
  checkPassword,
  hideShowpassword,
  passwordErrorMessage,
} from './password.js';
import { CORRECT_EMAIL, CORRECT_PASSWORD } from './usersData.js';

const signinButton = document.querySelector('.signbutton');

const checkUser = function () {
  if (
    emailInput.value === CORRECT_EMAIL &&
    passwordInput.value === CORRECT_PASSWORD
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

const checkLogin = function (e) {
  e.preventDefault();
  if (checkEmail() === false) {
  } else if (checkPassword() === false) {
  } else {
    checkUser();
  }
}; //로그인할 때 양식 및 정보 확인하는 함수

emailInput.addEventListener('focusout', checkEmail);
passwordInput.addEventListener('focusout', checkPassword);
passEyeButton.addEventListener('click', hideShowpassword);
signinButton.addEventListener('click', checkLogin);
