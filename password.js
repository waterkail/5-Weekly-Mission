export const passwordInput = document.querySelector('#password');
export const passwordCheckInput = document.querySelector('#passwordcheck');
export const passEyeButton = document.querySelector('.passEye');
export const passCheckEyeButton = document.querySelector('.passCheckEye');
export const passwordErrorMessage = document.querySelector(
  '.passwordErrorMessage'
);
export const passwordcheckErrorMessage = document.querySelector(
  '.passwordcheckErrorMessage'
);

export function resetLoginPassError() {
  passwordErrorMessage.classList.add('hidden');
  document.querySelector('#password').classList.remove('inputError');
} /* 로그인 - 비밀번호 오류 메시지를 초기화 하는 함수 */

export const checkPassword = function (e) {
  resetLoginPassError();
  if (passwordInput.value === '') {
    passwordErrorMessage.classList.remove('hidden');
    passwordErrorMessage.textContent = '비밀번호를 입력해 주세요.';
    document.querySelector('#password').classList.add('inputError');
    return false;
  }
  return true;
}; /* 비밀번호 입력하지 않으면 반응하는 함수 */

export const hideShowpassword = function (e) {
  e.target.parentElement.firstElementChild.classList.toggle('hidden');
  e.target.parentElement.lastElementChild.classList.toggle('hidden');
  if (e.target.parentElement.previousElementSibling.type === 'password') {
    e.target.parentElement.previousElementSibling.type = 'text';
  } else {
    e.target.parentElement.previousElementSibling.type = 'password';
  }
}; /* 비밀번호 칸에서 눈을 눌러 비밀번호 보이기와 숨기기를 하게 하는 함수 */
