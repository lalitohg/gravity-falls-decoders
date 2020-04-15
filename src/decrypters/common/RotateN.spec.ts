import { defaultAlphabet, getRotateNTokenAtIndex } from './';
import { expect } from 'chai';

describe('Rotate N function', () => {
    it('Should return empty string if invalid index provided', () => {
        expect(getRotateNTokenAtIndex(defaultAlphabet.length, defaultAlphabet, 0)).to.eql('');
    });

    it('Should return empty string if invalid rotation provided', () => {
        expect(getRotateNTokenAtIndex(0, defaultAlphabet, defaultAlphabet.length)).to.eql('');
    });

    describe('No rotation', () => {
        it('Should return same letters than original alphabet', () => {
            const decrypted = 'a';
            const encrypted = getRotateNTokenAtIndex(defaultAlphabet.indexOf(decrypted), defaultAlphabet, 0);
            expect(decrypted).to.eql(encrypted);
        });
    });

    describe('By 1 rotation', () => {
        it('Should return a = b; b = c and so on', () => {
            const encrypted = getRotateNTokenAtIndex(defaultAlphabet.indexOf('a'), defaultAlphabet, 1);
            expect(encrypted).to.eql('b');
        });
    });

    describe('By 2 rotation', () => {
        it('Should return a = c; b = d and so on', () => {
            const encrypted = getRotateNTokenAtIndex(defaultAlphabet.indexOf('a'), defaultAlphabet, 2);
            expect(encrypted).to.eql('c');
        });
    });
});