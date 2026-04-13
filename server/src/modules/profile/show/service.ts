import * as repository from './repository';

export async function getUserDetails(userId : number) {
  try {
    if (!userId) {
      throw new Error('The user ID is required')
    }

    const user = await repository.getUserDetails(userId);

    if (!user) {
      throw new Error('User does not exist')
    }

    return user;
    
  } catch (error) {
    const errorMessage = {
      message: error instanceof Error ? error.message : error
    }
    console.log(error)
    return errorMessage
  }
}