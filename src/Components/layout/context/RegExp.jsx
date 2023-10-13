export const validEmail = new RegExp(
   '/!@#\$%\^&\*\(\)_\+=\-\*\/\\><,\./'
);
export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');