//requisitos minimos para los campos de un usuario
export const regexUser = /^[a-zA-Z0-9]{4,20}$/; //de 4 a 20 caracteres
export const regexPasswd = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,100}$/; //minimo 8 caracteres, maximo 100 caracteres, 1 Mayusucla, 1 numero y 1 simbolo minimo
export const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //x... + @ + x... + . + x...