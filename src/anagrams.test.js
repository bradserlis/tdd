import { expect } from 'chai';
import { isAnagram } from './anagrams';

describe('isAnagram - basic functionality', () => {

    // listen >> silent
    // elbow >> below

    it('returns true when two known anagrams are passsed in', () => {
        const expected = true;
        const actual = isAnagram('listen', 'silent');

        expect(actual).to.equal(expected);
    })

    //'elbows' 'below' not anagrams

    it('returns false when either of the strings has extra letters', () => {
        const expected = false;
        const actual = isAnagram('elbows', 'below');

        expect(actual).to.equal(expected);

        const actual2 = isAnagram('below', 'elbows');

        expect(actual2).to.equal(expected);
    })

    //'listens' 'silent' not anagrams

    it('returns false when the strings have same letters in different quantities', () => {
        const expected = false;
        const actual = isAnagram('listens', 'silent');

        expect(actual).to.equal(expected)
    })

})






//'conversation' 'voices rant on' are anagrams

//'state' 'taste' are anagrams
