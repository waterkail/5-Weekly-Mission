export const passwordInput = document.querySelector('#password');
export const passEyeButton = document.querySelector('.passEye');

function loginPassErrorReset() {
  document.querySelector('.checkPassword').classList.add('hidden');
  document.querySelector('.giveMePassword').classList.add('hidden');
  document.querySelector('#password').classList.remove('inputProblem');
} /* 로그인 - 비밀번호 오류 메시지를 초기화 하는 함수 */

export const passwordPls = function (e) {
  loginPassErrorReset();
  if (passwordInput.value === '') {
    document.querySelector('.giveMePassword').classList.remove('hidden');
    document.querySelector('#password').classList.add('inputProblem');
    return false;
  }
  return true;
}; /* 비밀번호 입력하지 않으면 반응하는 함수 */

export const passHideShow = function () {
  passEyeButton.firstElementChild.classList.toggle('hidden');
  passEyeButton.lastElementChild.classList.toggle('hidden');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}; /* 비밀번호 칸에서 눈을 눌러 비밀번호 보이기와 숨기기를 하게 하는 함수 */
