import { Caesar } from './decrypters/Caesar';
import { Atbash } from './decrypters/Atbash';
import { A1Z26 } from './decrypters/A1Z26';

console.log('creating Caesar cipher');
const caesarCipher = new Caesar();
console.log('Created cipher with alphabet', caesarCipher.alphabet);

console.log('creating Atbash cipher');
const atbashCipher = new Atbash();
console.log('Created cipher with alphabet', atbashCipher.alphabet);

console.log('creating A1Z26 cipher');
const a1z26Cipher = new A1Z26();
console.log('Created cipher with alphabet', atbashCipher.alphabet);
