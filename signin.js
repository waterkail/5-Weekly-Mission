const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const passEyeButton = document.querySelector('.passEye');
const signButton = document.querySelector('.signbutton');

let A = 0; /* 비밀번호 보이기/숨기기 함수용 변수, 좋은 변수명 구함11 */

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
} /* 이메일이 맞으면 true를 뱉는 함수*/

const emailPls = function (e) {
  loginEmailErrorReset();
  if (emailInput.value === '') {
    document.querySelector('.giveMeEmail').classList.remove('hidden');
    document.querySelector('#email').classList.add('inputProblem');
  } else if (isEmail(emailInput.value) === false) {
    document.querySelector('.notEmail').classList.remove('hidden');
    document.querySelector('#email').classList.add('inputProblem');
  }
}; /* 이메일을 입력하지 않거나 이메일 주소로 입력하지 않을 때 반응하는 함수 */

const passwordPls = function (e) {
  loginPassErrorReset();
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
}; /* 비밀번호 칸에서 눈을 눌러 비밀번호 보이기와 숨기기를 하게 하는 함수이자 이벤트 */

signButton.onclick = function (e) {
  e.preventDefault();
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
};
