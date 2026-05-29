//Pillar valor json a partir de la clave
export function getMessage(messages, key) {
  if (!messages || !key) return undefined;

  //Separar la key para entrar al json
  return key.split('.').reduce((value, part) => {
    if (value == null) return undefined;
    return value[part];
  }, messages);
}
//substituir nombres de variables por el valor, codigo = 10 | {{ codigo }} -> 10
export function interpolate(template, params = {}) {
  if (typeof template !== 'string') return '';

  return template.replace(/\{\{(\w+)\}\}/g, (_, name) => {
    const value = params[name];
    return value == null ? '' : String(value);
  });
}
