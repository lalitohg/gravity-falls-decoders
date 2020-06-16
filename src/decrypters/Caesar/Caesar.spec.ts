import { Caesar } from './Caesar';
import { defaultAlphabet } from '../common'
import { expect } from 'chai';

describe('Caesar cipher module', () => {
    it('Should create cipher with default alphabet', () => {
        const cipher = new Caesar();
        const alphabet = [...cipher.alphabet];
        expect(alphabet).to.eql(defaultAlphabet);
    });

    it('Should create cipher with valid custom alphabet', () => {
        const customAlphabet = ['|', '#', '%', '&'];
        const cipher = new Caesar(customAlphabet);
        expect(cipher.alphabet).to.eql(customAlphabet);
    });

    it('Should create cipher with default alphabet if custom alphabet is shorter than 4 elements', () => {
        const cipher = new Caesar(['!', '"', '#']);
        expect(cipher.alphabet).eql(defaultAlphabet);
    });

    it('Should have right encrypting mapping', () => {
        const cipher = new Caesar();
        const encryptMap = cipher.encryptMap;
        expect(encryptMap['a']).to.eql('d');
        expect(encryptMap['z']).to.eql('c');
    });

    it('Should have right decrypting mapping', () => {
        const cipher = new Caesar();
        const decryptMap = cipher.decryptMap;
        expect(decryptMap['c']).to.eql('z');
        expect(decryptMap['d']).to.eql('a');
    });

    it('Should encrypt a string with no spaces', () => {
        const cipher = new Caesar();
        const encryptedString = cipher.encryptString('hola');
        expect(encryptedString).to.eql('krod');
    });

    it('Should encrypt a string with spaces, punctiations and numbers', () => {
        const cipher = new Caesar();
        const encryptedString = cipher.encryptString('hola, 123. Hola');
        expect(encryptedString).to.eql('krod, 123. krod');
    });

    it('Should decrypt a string with no spaces', () => {
        const cipher = new Caesar();
        const decryptedString = cipher.decryptString('krod');
        expect(decryptedString).to.eql('hola');
    });

    it('Should decrypt a string with spaces, punctiations and numbers', () => {
        const cipher = new Caesar();
        const decryptedString = cipher.decryptString('krod, 123. krod');
        expect(decryptedString).to.eql('hola, 123. hola');
    });
});

