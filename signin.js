import { emailInput, checkEmail, emailErrorMessage } from './idEmail.js';
import {
  passwordInput,
  passEyeButton,
  checkPassword,
  hideShowpassword,
  passwordErrorMessage,
} from './password.js';
import { BASE_AUTH_URL } from './baseUrls.js';

const EMAIL_CHECK_ERROR = '이메일을 확인해주세요.';
const PASS_CHECK_ERROR = '비밀번호를 확인해주세요.';

const signinButton = document.querySelector('.signbutton');

const checkSignInToken = function () {
  const userToken = localStorage.getItem('loginToken');
  if (userToken) {
    location.href = './folder';
  }
};

const checkUser = async function () {
  try {
    const response = await fetch(`${BASE_AUTH_URL}/sign-in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: `${emailInput.value}`,
        password: `${passwordInput.value}`,
      }),
    });
    if (!response.ok) {
      throw new Error('로그인 에러입니다.');
    }
    const result = await response.json();
    const loginToken = result.data.accessToken;
    localStorage.setItem('loginToken', loginToken);
    location.href = './folder';
  } catch (err) {
    passwordErrorMessage.classList.remove('hidden');
    passwordErrorMessage.textContent = PASS_CHECK_ERROR;
    passwordInput.classList.add('inputError');
    emailErrorMessage.classList.remove('hidden');
    emailErrorMessage.textContent = EMAIL_CHECK_ERROR;
    emailInput.classList.add('inputError');
  }
};

const checkLogin = function (e) {
  e.preventDefault();
  if (checkEmail() === false) {
    return;
  } else if (checkPassword() === false) {
    return;
  } else {
    checkUser();
  }
}; //로그인할 때 양식 및 정보 확인하는 함수

checkSignInToken();
emailInput.addEventListener('focusout', checkEmail);
passwordInput.addEventListener('focusout', checkPassword);
passEyeButton.addEventListener('click', hideShowpassword);
signinButton.addEventListener('click', checkLogin);
