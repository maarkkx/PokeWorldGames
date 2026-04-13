import { error } from 'console';
import * as repository from './repository';
import * as regex from '../constants';
import { envs } from '../../../config/envs'

const bcrypt = require('bcrypt');

export async function changePassword(userId : number, password : string, newPassword : string, newPasswordConf : string) {
  try {
    if (!userId) {
      throw new Error('The User ID is required');
    }

    if (!password) {
      throw new Error('Incorrect password')
    }
    
    if (!regex.regexPasswd.test(newPassword)) {
      throw new Error('The password must be at least 8 characters long, contain 1 uppercase letter and 1 symbol')
    }

    if (newPassword !== newPasswordConf) {
      throw new Error('the passwords do not match')
    }

    const hashedOldPwd = await repository.getPassword(userId);
    if (!hashedOldPwd) {
      throw new Error('Error')
    }

    const isMatch = await bcrypt.compare(password, hashedOldPwd.password);

    if (!isMatch) {
      throw new Error('Incorrect password')
    }

    const hashedNewPwd = await bcrypt.hash(newPassword, envs.SALT_ROUNDS);
    const updated = await repository.updatePassword(userId, hashedNewPwd);

    if (!updated) {
      throw new Error('Error changing the password')
    }
    return {
      updated: true,
    }

  } catch (error) {
    const errorMessage = {
      message: error instanceof Error ? error.message : error
    }
    console.log(error)
    return errorMessage
  }
}

export async function changeUsername(userId : number, user : string) {
  try {
    if (!userId) {
      throw new Error('The User ID is required');
    }

    if (!regex.regexUser.test(user)) {
      throw new Error('The username must be between 4 and 20 characters long, and special characters are not allowed')
    }

    const userExists = await repository.getUsername(user);

    if (userExists) {
      throw new Error('This username is already in use')
    }

    return await repository.updateUsername(userId, user);

} catch (error) {
    const errorMessage = {
      message: error instanceof Error ? error.message : error
    }
    console.log(error)
    return errorMessage
  }
}