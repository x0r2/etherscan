import url from 'url';
import got from 'got';

export default class Etherscan {
    constructor(apiKey) {
        this._apiKey = apiKey;
        this._apiUrl = 'https://api.etherscan.io/api';
    }

    getEtherBalance(options) {
        return this._moduleAccount({
            action: 'balance',
            address: options.address,
            tag: options.tag
        });
    }

    getEtherBalanceMulti(options) {
        return this._moduleAccount({
            action: 'balancemulti',
            address: options.address,
            tag: options.tag
        });
    }

    getTxList(options) {
        return this._moduleAccount({
            action: 'txlist',
            address: options.address,
            startblock: options.startblock,
            endblock: options.endblock,
            sort: options.sort
        });
    }

    _moduleAccount(params) {
        return this._query({
            ...params,
            module: 'account'
        });
    }

    async _query(params) {
        if (this._apiKey) {
            params.apikey = this._apiKey;
        }
        return (await got(`${this._apiUrl}?${new url.URLSearchParams(params)}`, {
            json: true
        })).body;
    }
}
