import { Caesar } from './decrypters/Caesar';

console.log('creating Caesar cipher');
const caesarCipher = new Caesar();
console.log('Created cipher with alphabet', caesarCipher.alphabet);