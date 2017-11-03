import Etherscan from './index';

const etherscan = new Etherscan();

const accountMatch = expect.stringMatching(/^0x[0-9a-f]{40}$/);
const balanceMatch = expect.stringMatching(/^[0-9]+$/);

describe('account', () => {
    test('get ether balance', async () => {
        expect(await etherscan.getEtherBalance({
            address: '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae'
        })).toEqual(balanceMatch);
    });

    test('get ether balance multi', async () => {
        const data = await etherscan.getEtherBalanceMulti({
            address: ['0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae']
        });

        expect(data).toMatchObject([{
            account: accountMatch,
            balance: balanceMatch,
        }]);
    });
});
