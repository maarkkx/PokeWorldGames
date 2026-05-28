export function getMessage(messages, key) {
  if (!messages || !key) return undefined;

  return key.split('.').reduce((value, part) => {
    if (value == null) return undefined;
    return value[part];
  }, messages);
}

export function interpolate(template, params = {}) {
  if (typeof template !== 'string') return '';

  return template.replace(/\{\{(\w+)\}\}/g, (_, name) => {
    const value = params[name];
    return value == null ? '' : String(value);
  });
}
