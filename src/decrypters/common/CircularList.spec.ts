import { CircularList } from './CircularList';
import { expect } from 'chai';

describe('Circular List', () => {
    describe('Constructing new circular list', () => {
        it('Should build list with empty constructor', () => {
            const list = new CircularList();
            expect(list.elements.length).to.eql(0);
        });
        it('Should build list from a string', () => {
            const list = CircularList.fromString('pines');
            expect(list.elements.length).to.eql(5);
        });
        it('Should build list from an array', () => {
            const list = CircularList.fromArray([1, 2, 3]);
            expect(list.elements.length).to.eql(3);
        });
    });

    describe('Adding elements', () => {
        it('Should add new element to an empty list', () => {
            const list = new CircularList();
            list.add(1);
            expect(list.elements.length).to.eql(1);
        });
        it('Should add new element to a populated list', () => {
            const list = CircularList.fromArray([1, 2]);
            list.add(3);
            expect(list.elements.length).to.eql(3);
        });
    });

    describe('Getting elements from the list', () => {
        it('Should get first item in the list', () => {
            const list = CircularList.fromArray([1, 2, 3]);
            const first = list.first;
            expect(first).to.eql(1);
        });
        it('Should get last item in the list', () => {
            const list = CircularList.fromArray([1, 2, 3]);
            const last = list.last;
            expect(last).to.eql(3);
        });
        it('Should get undefined current value when list is empty', () => {
            const list = new CircularList();
            expect(list.value).to.be.undefined;
        });
        it('Should get current value when list has only one element', () => {
            const list = CircularList.fromArray([1]);
            expect(list.value).to.eql(1);
        });
        it('Should get current value when list has more than one element', () => {
            const list = CircularList.fromArray(['a', 'b']);
            expect(list.value).to.eql('a');
        });
        it('Should get undefined next value when list is empty', () => {
            const list = new CircularList();
            expect(list.next).to.be.undefined;
        });
        it('Should get next value when list has only one element', () => {
            const list = CircularList.fromArray([1, 2, 3]);
            const next = list.next;
            const value = list.value;
            expect(next).to.eql(value).and.to.eql(2);
        });
        it('Should get next value when list has more than one element', () => {
            const list = CircularList.fromArray([1, 2, 3]);
            list.next;
            const next = list.next;
            expect(next).to.eql(3);
        });
        it('Should get first element in the list when requesting next being at list last item', () => {
            const list = CircularList.fromArray([1, 2, 3]);
            const first = list.first;
            list.next; list.next;
            const next = list.next;
            expect(next).to.eql(first);
        });
    });
});