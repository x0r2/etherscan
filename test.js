import Etherscan from './index';

const etherscan = new Etherscan();

const address = '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae';

const startBlock = '4266461';
const endBlock = '4275952';

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
                startBlock
            });

            expect(data[0]).toMatchObject({
                blockNumber: startBlock
            });
        });

        test('with end block', async () => {
            const data = await etherscan.getTxList({
                address,
                endBlock: startBlock
            });

            expect(data[data.length - 1]).toMatchObject({
                blockNumber: startBlock
            });
        });

        test('with start and end blocks', async () => {
            const data = await etherscan.getTxList({
                address,
                startBlock,
                endBlock: startBlock
            });

            expect(data).toMatchObject([{
                blockNumber: startBlock
            }]);
        });

        test('sort', async () => {
            const data = await etherscan.getTxList({
                address,
                startBlock,
                endBlock
            });

            const dataDesc = await etherscan.getTxList({
                address,
                startBlock,
                endBlock,
                sort: 'desc'
            });

            expect(data[0]).toMatchObject({
                blockNumber: startBlock
            });

            expect(dataDesc[0]).toMatchObject({
                blockNumber: endBlock
            });
        });
    });
});
