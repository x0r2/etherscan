# etherscan
Node.js library for communicating with the Etherscan API.

## Installation

```sh
$ npm i request
$ npm i etherscan
```

`request` is defined as a peer-dependency and thus has to be installed separately.

## Testing

```sh
$ npm test
```

## Import

### Using CommonJS

Requirements (Node.js >= 8.0.0).
```js
const Etherscan = require('etherscan');
```

### Using ESM

Use --experimental-modules flag and .mjs extension (Node.js >= 8.6.0).
```js
import Etherscan from 'etherscan';
```

## Usage

```js
import Etherscan from 'etherscan';

const etherscan = new Etherscan(API_KEY); // Some methods working without API_KEY

(async () => {
    const data = await etherscan.getEtherBalance({
        address: '0x00'
    });
})();
```

## API

### Accounts

#### getEtherBalance

Get Ether balance for a single address.

```js
etherscan.getEtherBalance({
    address: '0x00',
    tag: 'latest' // Optional, default 'latest'
});
```

#### getEtherBalanceMulti

Get Ether balance for multiple addresses in a single call.

```js
etherscan.getEtherBalanceMulti({
    address: ['0x00', '0x01'],
    tag: 'latest' // Optional, default 'latest'
});
```

#### getTxList

Get a list of `normal` transactions by address.

```js
etherscan.getTxList({
    address: '0x00',
    startblock: 0, // Optional
    endblock: 0, // Optional
    sort: 'desc' // Optional, default 'asc'
});
```

#### getTxListInternal

Get a list of `internal` transactions by address.

```js
etherscan.getTxListInternal({
    address: '0x00',
    startblock: 0, // Optional
    endblock: 0, // Optional
    sort: 'desc' // Optional, default 'asc'
});
```
