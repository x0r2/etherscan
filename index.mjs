import request from 'request-promise-native';

export default class Etherscan {
    constructor(apiKey) {
        this._apiKey = apiKey;
        this._apiUrl = 'https://api.etherscan.io/api';
    }

    getEtherBalance(options) {
        return this._moduleAccount({
            action: 'balance',
            address: options.address,
            tag: options.tag || 'latest'
        });
    }

    getEtherBalanceMulti(options) {
        return this._moduleAccount({
            action: 'balancemulti',
            address: options.address,
            tag: options.tag || 'latest'
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
        const data = await request(this._apiUrl, {
            method: 'POST',
            qsStringifyOptions: {
                arrayFormat: 'repeat'
            },
            form: params,
            json: true
        });

        if (data.status !== '1') {
            return Promise.reject(`API returned result "${data.result}"`);
        }
        return data.result;
    }
}
