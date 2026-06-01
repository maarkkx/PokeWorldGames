import { KEYS } from '../i18n/keys.js';

export const regexUser = /^[a-zA-Z0-9]{4,20}$/;
export const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const regexPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export function validateRegisterForm({ name, email, password, confirmPassword }) {
  if (!regexUser.test(name)) {
    return KEYS.validation.usernameInvalid;
  }

  if (!regexEmail.test(email)) {
    return KEYS.validation.emailInvalid;
  }

  if (!regexPassword.test(password)) {
    return KEYS.validation.passwordInvalid;
  }

  if (password !== confirmPassword) {
    return KEYS.validation.passwordsMismatch;
  }

  return null;
}

export function validateLoginForm({ email, password }) {
  if (!regexEmail.test(email)) {
    return KEYS.validation.emailInvalid;
  }

  if (!password) {
    return KEYS.validation.passwordRequired;
  }

  return null;
}

export function validateGuessAnswer(answer) {
  if (!answer?.trim()) {
    return KEYS.validation.answerRequired;
  }

  return null;
}

export function validateUpdateUsername(name) {
  if (!regexUser.test(name?.trim() ?? '')) {
    return KEYS.validation.usernameInvalid;
  }

  return null;
}

export function validateUpdatePassword({ password, newPwd, newPwdConf }) {
  if (!password) {
    return KEYS.validation.passwordRequired;
  }

  if (!newPwd) {
    return KEYS.validation.newPasswordRequired;
  }

  if (!regexPassword.test(newPwd)) {
    return KEYS.validation.passwordInvalid;
  }

  if (newPwd !== newPwdConf) {
    return KEYS.validation.passwordsMismatch;
  }

  return null;
}
