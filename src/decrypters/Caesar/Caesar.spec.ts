import { Caesar } from './Caesar';
import { defaultAlphabet } from '../common'
import { expect } from 'chai';

describe('Caesar cipher module', () => {
    it('Should create cipher with default alphabet', () => {
        const cipher = new Caesar();
        const alphabet = [...cipher.alphabet];
        expect(alphabet).to.eql(defaultAlphabet);
    });

    it('Should create cipher with custom alphabet', () => {
        const cipher = new Caesar(['|', '#', '%']);
        expect(cipher.alphabet[0]).to.equal('|');
    });

    it('Should have right encrypting mapping', () => {
        expect(false).to.equal(true);
    });

    it('Should have right decrypting mapping', () => {
        expect(false).to.equal(true);
    });
});

