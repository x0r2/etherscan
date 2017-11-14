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
        address: '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae'
    });
})();
```
