import { expect } from 'chai';
import { getUserByUsername } from './db';
import { setDatabaseData, resetDatabase, getDatabaseData } from './test-helpers';

describe('get user by username', () => {
    afterEach('reset the database', async () => {
        await resetDatabase();
    })
    it('get correct user from database given a username', async () => {

        const fakeData =
            [
                {
                    id: '123',
                    username: 'abc',
                    email: 'abc@gmail.com'
                },
                {
                    id: '124',
                    username: 'wrong',
                    email: 'wrong@wrong.com'
                }
            ]

        await setDatabaseData('users', fakeData);

        const actual = await getUserByUsername('abc');
        const finalDBState = await getDatabaseData('users');

        const expected = {
            id: '123',
            username: 'abc',
            email: 'abc@gmail.com'
        };

        expect(actual).excludingEvery('_id').to.deep.equal(expected);
        expect(finalDBState).excludingEvery('_id').to.deep.equal(fakeData);


    });
    it('returns null when the user is not found', async () => {
        await setDatabaseData('users', [{
            id: '999',
            username: 'zeketheplumber',
            email: 'no@no.com'
        }])

        const actual = await getUserByUsername('person');

        expect(actual).to.be.null;
    })
})