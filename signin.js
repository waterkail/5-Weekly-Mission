const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const passEyeButton = document.querySelector('.passEye');
const signButton = document.querySelector('.signbutton');

function loginEmailErrorReset() {
  document.querySelector('.giveMeEmail').classList.add('hidden');
  document.querySelector('.notEmail').classList.add('hidden');
  document.querySelector('.checkEmail').classList.add('hidden');
  document.querySelector('#email').classList.remove('inputProblem');
} /* 로그인 - 이메일 오류 메시지를 초기화 하는 함수  */

function loginPassErrorReset() {
  document.querySelector('.checkPassword').classList.add('hidden');
  document.querySelector('.giveMePassword').classList.add('hidden');
  document.querySelector('#password').classList.remove('inputProblem');
} /* 로그인 - 비밀번호 오류 메시지를 초기화 하는 함수 */

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
} /* 이메일 형식이면 true를 뱉는 함수*/

const emailPls = function (e) {
  loginEmailErrorReset();
  if (emailInput.value === '') {
    document.querySelector('.giveMeEmail').classList.remove('hidden');
    document.querySelector('#email').classList.add('inputProblem');
    return false;
  } else if (isEmail(emailInput.value) === false) {
    document.querySelector('.notEmail').classList.remove('hidden');
    document.querySelector('#email').classList.add('inputProblem');
    return false;
  }
  return true;
}; /* 이메일을 입력하지 않거나 이메일 주소로 입력하지 않을 때 반응하는 함수 */

const passwordPls = function (e) {
  loginPassErrorReset();
  if (passwordInput.value === '') {
    document.querySelector('.giveMePassword').classList.remove('hidden');
    document.querySelector('#password').classList.add('inputProblem');
    return false;
  }
  return true;
}; /* 비밀번호 입력하지 않으면 반응하는 함수 */

const userCheck = function () {
  // e.preventDefault();
  loginEmailErrorReset();
  loginPassErrorReset();
  if (
    emailInput.value === 'test@codeit.com' &&
    passwordInput.value === 'codeit101'
  ) {
    location.href = './folder';
  } else {
    document.querySelector('.checkPassword').classList.remove('hidden');
    document.querySelector('#password').classList.add('inputProblem');
    document.querySelector('.checkEmail').classList.remove('hidden');
    document.querySelector('#email').classList.add('inputProblem');
  }
}; // 로그인 정보 확인용 함수

const passHideShow = function () {
  passEyeButton.firstElementChild.classList.toggle('hidden');
  passEyeButton.lastElementChild.classList.toggle('hidden');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}; /* 비밀번호 칸에서 눈을 눌러 비밀번호 보이기와 숨기기를 하게 하는 함수 */

const loginCheck = function (e) {
  e.preventDefault();
  if (emailPls() === false) {
    e.preventDefault();
    emailPls();
    emailInput.focus();
  } else if (passwordPls() === false) {
    e.preventDefault();
    passwordPls();
    passwordInput.focus();
  } else {
    e.preventDefault();
    userCheck();
  }
}; //로그인할 때 양식 및 정보 확인하는 함수

emailInput.addEventListener('focusout', emailPls);
passwordInput.addEventListener('focusout', passwordPls);
passEyeButton.addEventListener('click', passHideShow);
signButton.addEventListener('click', loginCheck);
