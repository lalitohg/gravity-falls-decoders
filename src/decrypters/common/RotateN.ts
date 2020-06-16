export function getRotateNTokenAtIndex(index: number, alphabet: string[], n: number):string {
    if (index >= alphabet.length || n >= alphabet.length) {
        return '';
    }
    return index < alphabet.length - n ?
        alphabet[index + n] :
        alphabet[index - (alphabet.length - n)]
}