import { emailInput, checkEmail, emailErrorMessage } from './idEmail.js';
import {
  passwordInput,
  passwordCheckInput,
  passEyeButton,
  passCheckEyeButton,
  hideShowpassword,
  resetLoginPassError,
  passwordErrorMessage,
  passwordcheckErrorMessage,
} from './password.js';
import { CORRECT_EMAIL } from './usersData.js';

const signupButton = document.querySelector('.signbutton');

const checkSignupEmail = function () {
  if (emailInput.value === CORRECT_EMAIL) {
    emailErrorMessage.classList.remove('hidden');
    emailErrorMessage.textContent = '이미 사용중인 이메일입니다.';
    emailInput.classList.add('inputError');
    return false;
  }
  checkEmail();
  return checkEmail();
};

const checkSignupPassword = function () {
  resetLoginPassError();
  const englishOnly = /^[a-zA-z]+$/;
  const numberOnly = /^[\d]+$/;
  if (
    passwordInput.value.length < 8 ||
    englishOnly.test(passwordInput.value) ||
    numberOnly.test(passwordInput.value)
  ) {
    passwordErrorMessage.classList.remove('hidden');
    passwordErrorMessage.textContent =
      '비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.';
    passwordInput.classList.add('inputError');
    return false;
  }
  return true;
};

const checkPasswordOneMore = function () {
  passwordcheckErrorMessage.classList.add('hidden');
  passwordCheckInput.classList.remove('inputError');
  if (passwordInput.value !== passwordCheckInput.value) {
    passwordcheckErrorMessage.classList.remove('hidden');
    passwordcheckErrorMessage.textContent = '비밀번호가 일치하지 않아요.';
    passwordCheckInput.classList.add('inputError');
    return false;
  }
  return true;
};

const checkSignup = function (e) {
  e.preventDefault();
  checkSignupEmail();
  checkSignupPassword();
  checkPasswordOneMore();
  if (checkSignupEmail() && checkSignupPassword() && checkPasswordOneMore()) {
    location.href = './folder';
  }
};

emailInput.addEventListener('focusout', checkSignupEmail);
passwordInput.addEventListener('focusout', checkSignupPassword);
passwordCheckInput.addEventListener('focusout', checkPasswordOneMore);
passEyeButton.addEventListener('click', hideShowpassword);
passCheckEyeButton.addEventListener('click', hideShowpassword);
signupButton.addEventListener('click', checkSignup);
