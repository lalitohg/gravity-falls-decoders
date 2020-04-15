import { Viginere } from './Viginere';
import { defaultAlphabet } from '../common'
import { expect } from 'chai';

describe('Viginere cipher module', () => {
    it('Should create cipher with default alphabet', () => {
        const cipher = new Viginere();
        const alphabet = [...cipher.alphabet];
        expect(alphabet).to.eql(defaultAlphabet);
    });

    it('Should create cipher with valid custom alphabet', () => {
        const customAlphabet = ['|', '#', '%', '&'];
        const cipher = new Viginere(customAlphabet);
        expect(cipher.alphabet).to.eql(customAlphabet);
    });

    describe('Successfully build encrypt map', () => {
        const cipher = new Viginere();
        it('should encrypt plain text "a" with key "a" = "a"', () => {
            const plainText = 'a';
            const key = 'a';
            expect(cipher.encryptMap[key][plainText]).to.eql('a');
        });

        it('should encrypt plain text "a" with key "b" = "b"', () => {
            const plainText = 'a';
            const key = 'b';
            expect(cipher.encryptMap[key][plainText]).to.eql('b');
        });
    });

    describe('Successfully build decrypt map', () => {
        const cipher = new Viginere();
        it('should decrypt cipher text "a" with key "a" = "a"', () => {
            const encrypted = 'a';
            const key = 'a';
            expect(cipher.decryptMap[key][encrypted]).to.eql('a');
        });

        it('should decrypt cipher text "a" with key "b" = "z"', () => {
            const encrypted = 'a';
            const key = 'b';
            expect(cipher.decryptMap[key][encrypted]).to.eql('z');
        });
    });

    // it('Should encrypt a string with no spaces', () => {
    //     const cipher = new Viginere();
    //     const encryptedString = cipher.encryptString('hola');
    //     expect(encryptedString).to.eql('krod');
    // });

    // it('Should encrypt a string with spaces, punctiations and numbers', () => {
    //     const cipher = new Viginere();
    //     const encryptedString = cipher.encryptString('hola, 123. Hola');
    //     expect(encryptedString).to.eql('krod, 123. krod');
    // });

    // it('Should decrypt a string with no spaces', () => {
    //     const cipher = new Viginere();
    //     const decryptedString = cipher.decryptString('krod');
    //     expect(decryptedString).to.eql('hola');
    // });

    // it('Should decrypt a string with spaces, punctiations and numbers', () => {
    //     const cipher = new Viginere();
    //     const decryptedString = cipher.decryptString('krod, 123. krod');
    //     expect(decryptedString).to.eql('hola, 123. hola');
    // });
});

