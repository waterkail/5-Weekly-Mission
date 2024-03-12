export const emailInput = document.querySelector('#email');
export const emailErrorMessage = document.querySelector('.emailErrorMessage');

export function loginEmailErrorReset() {
  emailErrorMessage.classList.add('hidden');
  emailInput.classList.remove('inputError');
} /* 로그인 - 이메일 오류 메시지를 초기화 하는 함수  */

function isThisEmail(email) {
  const A = email.indexOf('@');
  const B = email.indexOf('.');
  if (
    A === -1 ||
    email.slice(0, A).length === 0 ||
    email.slice(A + 1).length === 0 ||
    B === -1 ||
    B < A ||
    email.slice(B + 1).length === 0
  ) {
    return false;
  }
  return true;
} /* 이메일 형식이면 true를 뱉는 함수*/

export const emailPls = function (e) {
  loginEmailErrorReset();
  if (emailInput.value === '') {
    emailErrorMessage.classList.remove('hidden');
    emailErrorMessage.textContent = '이메일을 입력해 주세요.';
    emailInput.classList.add('inputError');
    return false;
  } else if (isThisEmail(emailInput.value) === false) {
    emailErrorMessage.classList.remove('hidden');
    emailErrorMessage.textContent = '올바른 이메일 주소가 아닙니다.';
    emailInput.classList.add('inputError');
    return false;
  }
  return true;
}; /* 이메일을 입력하지 않거나 이메일 주소로 입력하지 않을 때 반응하는 함수 */
