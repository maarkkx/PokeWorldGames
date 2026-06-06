export function isTrainerNotFoundMessage(message) {
  if (!message) {
    return false;
  }

  const normalized = message.trim().toLowerCase();
  return normalized === 'user does not exist';
}
