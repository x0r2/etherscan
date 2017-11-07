import Etherscan from './index';

const etherscan = new Etherscan();

const address = '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae';
const block = '4266461';

const accountMatch = expect.stringMatching(/^0x[\da-f]{40}$/);
const digitsMatch = expect.stringMatching(/^\d+$/);

describe('account', () => {
    test('get ether balance', async () => {
        expect(await etherscan.getEtherBalance({
            address
        })).toEqual(digitsMatch);
    });

    test('get ether balance multi', async () => {
        const data = await etherscan.getEtherBalanceMulti({
            address
        });

        expect(data).toMatchObject([{
            account: accountMatch,
            balance: digitsMatch,
        }]);
    });

    describe('get transactions', async () => {
        test('latest', async () => {
            const data = await etherscan.getTxList({
                address
            });

            expect(data).toContainEqual(
                expect.objectContaining({
                    blockNumber: digitsMatch
                })
            );
        });

        test('with start block', async () => {
            const data = await etherscan.getTxList({
                address,
                startBlock: block
            });

            expect(data[0]).toMatchObject({
                blockNumber: block
            });
        });

        test('with end block', async () => {
            const data = await etherscan.getTxList({
                address,
                endBlock: block
            });

            expect(data[data.length - 1]).toMatchObject({
                blockNumber: block
            });
        });

        test('with start and end blocks', async () => {
            const data = await etherscan.getTxList({
                address,
                startBlock: block,
                endBlock: block
            });

            expect(data).toMatchObject([{
                blockNumber: block
            }]);
        });
    });
});
