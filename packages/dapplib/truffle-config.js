require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth office coconut gesture help flat giggle'; 
let testAccounts = [
"0xb4b52c8faf897e1165ad00837a9a962b52fbe5d62df670143a228c9ef6e812a6",
"0xdd83054b7067d8c0f63c553cdb7a42a104dd33a6a5c3f0005400e5b3dfb603e0",
"0xcb6c2fa2d3707434b967b58cffcb15f4b3d6ac587696d26c6d5a6ba369b0d739",
"0xb41bad7e2b6c4c9ad7487f6ca8058527987eaca7965b3f8b980963a4079ae196",
"0x854382b90afc07871b683a10f62451c9665acc3a83b9fb38cecbb7c72c2b35da",
"0x57a8bbd61727ca3223c21ce739c82829301ab21a35969dd1af98c1031b0a5394",
"0x524123352663220de91d500c5e5d743b09e6f4a6c97f8064d2ba90edeb607b50",
"0x0c639a7a817d415a05b705753e23eb0f5675ef80e54cce1a7c52f73344027f9f",
"0x9a2065078db64aa8ff15f7d8f997cfff83ae6933a01911d8b0aaf2d0669fbfff",
"0xb2869d1db00ac6ffb7b298992729a414cdbbff3a62918b82b32b321316ac2849"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

