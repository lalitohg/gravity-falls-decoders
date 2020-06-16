import { Atbash } from './Atbash';
import { defaultAlphabet } from '../common'
import { expect } from 'chai';

describe('Atbash cipher module', () => {
    it('Should create cipher with default alphabet', () => {
        const cipher = new Atbash();
        const alphabet = [...cipher.alphabet];
        expect(alphabet).to.eql(defaultAlphabet);
    });

    it('Should create cipher with valid custom alphabet', () => {
        const customAlphabet = ['|', '#', '%', '&'];
        const cipher = new Atbash(customAlphabet);
        expect(cipher.alphabet).to.eql(customAlphabet);
    });

    it('Should have right encrypting mapping', () => {
        const cipher = new Atbash();
        const encryptMap = cipher.encryptMap;
        expect(encryptMap['a']).to.eql('z');
        expect(encryptMap['z']).to.eql('a');
    });

    it('Should have right decrypting mapping', () => {
        const cipher = new Atbash();
        const decryptMap = cipher.decryptMap;
        expect(decryptMap['z']).to.eql('a');
        expect(decryptMap['a']).to.eql('z');
    });

    it('Should encrypt a string with no spaces', () => {
        const cipher = new Atbash();
        const encryptedString = cipher.encryptString('abc');
        expect(encryptedString).to.eql('zyx');
    });

    it('Should encrypt a string with spaces, punctiations and numbers', () => {
        const cipher = new Atbash();
        const encryptedString = cipher.encryptString('abc, 123. Abc');
        expect(encryptedString).to.eql('zyx, 123. zyx');
    });

    it('Should decrypt a string with no spaces', () => {
        const cipher = new Atbash();
        const decryptedString = cipher.decryptString('zyx');
        expect(decryptedString).to.eql('abc');
    });

    it('Should decrypt a string with spaces, punctiations and numbers', () => {
        const cipher = new Atbash();
        const decryptedString = cipher.decryptString('zyx, 123. zyx');
        expect(decryptedString).to.eql('abc, 123. abc');
    });
});

