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

    describe('Passing invalid inputs', () => {
        const cipher = new Viginere();
        it('Should return empty string if no message is past to encrypt', () => {
            expect(cipher.encryptString('', 'hola')).to.eql('');
        });
        it('Should return empty string if no key is past to encrypt', () => {
            expect(cipher.encryptString('hola', '')).to.eql('');
        });
    });

    describe('Encrypting', () => {
        const cipher = new Viginere();

        it('Should encrypt "attack" with key "lemon" as "LXFOPV"', () => {
            expect(cipher.encryptString('attack', 'lemon')).to.eql('lxfopv');
        });

        it('Should encrypt "attack at dawn" with key "lemon" as "LXFOPV EF RNHR"', () => {
            expect(cipher.encryptString('attack at dawn', 'lemon')).to.eql('lxfopv ef rnhr');
        });
    });

    describe('Decrypting', () => {
        const cipher = new Viginere();

        it('Should decrypt "LXFOPV" with key "lemon" as "attack"', () => {
            expect(cipher.decryptString('LXFOPV', 'lemon')).to.eql('attack');
        });

        it('Should decrypt "LXFOPV EF RNHR" with key "lemon" as "attack at dawn"', () => {
            expect(cipher.decryptString('LXFOPV EF RNHR', 'lemon')).to.eql('attack at dawn');
        });
    });
});

