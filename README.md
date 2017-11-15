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
        address: 'ADDRESS'
    });
})();
```

## API

### Accounts

#### getEtherBalance

Get Ether balance for a single address.

```js
etherscan.getEtherBalance({
    address: 'ADDRESS',
    tag: 'latest' // optional, default 'latest'
});
```

#### getEtherBalanceMulti

Get Ether balance for multiple addresses in a single call.

```js
etherscan.getEtherBalanceMulti({
    address: ['ADDRESS', 'ADDRESS2'],
    tag: 'latest' // optional, default 'latest'
});
```

#### getTxList

Get a list of `normal` transactions by address.

```js
etherscan.getTxList({
    address: 'ADDRESS',
    startblock: 0, // optional
    endblock: 0, // optional
    sort: 'desc' // optional, default 'asc'
});
```

#### getTxListInternal

Get a list of `internal` transactions by address.

```js
etherscan.getTxList({
    address: 'ADDRESS',
    startblock: 0, // optional
    endblock: 0, // optional
    sort: 'desc' // optional, default 'asc'
});
```
