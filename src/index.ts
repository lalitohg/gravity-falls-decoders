import { Caesar } from './decrypters/Caesar';
import { Atbash } from './decrypters/Atbash';

console.log('creating Caesar cipher');
const caesarCipher = new Caesar();
console.log('Created cipher with alphabet', caesarCipher.alphabet);

console.log('creating Atbash cipher');
const atbashCipher = new Atbash();
console.log('Created cipher with alphabet', atbashCipher.alphabet);
