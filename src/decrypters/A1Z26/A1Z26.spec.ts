import { A1Z26 } from './A1Z26';
import { defaultAlphabet } from '../common'
import { expect } from 'chai';

describe('A1Z26 cipher module', () => {
    it('Should create cipher with default alphabet', () => {
        const cipher = new A1Z26();
        const alphabet = [...cipher.alphabet];
        expect(alphabet).to.eql(defaultAlphabet);
    });

    it('Should create cipher with valid custom alphabet', () => {
        const customAlphabet = ['|', '#', '%', '&'];
        const cipher = new A1Z26(customAlphabet);
        expect(cipher.alphabet).to.eql(customAlphabet);
    });

    it('Should have right encrypting mapping', () => {
        const cipher = new A1Z26();
        const encryptMap = cipher.encryptMap;
        expect(encryptMap['a']).to.eql('1');
        expect(encryptMap['z']).to.eql('26');
    });

    it('Should have right decrypting mapping', () => {
        const cipher = new A1Z26();
        const decryptMap = cipher.decryptMap;
        expect(decryptMap['1']).to.eql('a');
        expect(decryptMap['26']).to.eql('z');
    });

    it('Should encrypt a string with no spaces', () => {
        const cipher = new A1Z26();
        const encryptedString = cipher.encryptString('abc');
        expect(encryptedString).to.eql('1-2-3');
    });

    it('Should encrypt a string with spaces, punctiations and numbers', () => {
        const cipher = new A1Z26();
        const encryptedString = cipher.encryptString('abc, 123. Abc');
        expect(encryptedString).to.eql('1-2-3, 123. 1-2-3');
    });

    it('Should decrypt a string with no spaces', () => {
        const cipher = new A1Z26();
        const decryptedString = cipher.decryptString('1-2-3');
        expect(decryptedString).to.eql('abc');
    });

    it('Should decrypt a string with spaces and punctiations', () => {
        const cipher = new A1Z26();
        const decryptedString = cipher.decryptString('1-2-3. 1-2-3');
        expect(decryptedString).to.eql('abc. abc');
    });
});

