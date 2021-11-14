require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict person forget turn ship riot pizza smooth coin opera bottom surround'; 
let testAccounts = [
"0x8077e3db1219bcae1f669719956c958f6da81fd5eaa95f3caf9545056f4e5628",
"0x66b199fd8a447c46496e11efd8a1b0467e96e07683a35fafb4ed5526fab042ba",
"0x2f1b7031500edf844c201b37bdac91b0c7336f26b47e09db036f45a77fc00612",
"0xaff3644eeb80942f3a76ba0a2299ceca39e3364e228b32d3b27d67a351b35ff5",
"0xfc17131da80b794bdcd19e37306777e25c0b2bb80088652897ba746b0f845401",
"0x3d5226055a1e74f4616fc1f2f9d29d6b41042afc4152126fd081b186747ae921",
"0xc4d220c5d4df96d5232634e2f3a2497d3dd23b6fcd0f56b836d3df889ea863b6",
"0x2a8ddf3cd9e43952dab59c68878088525a8b22d3d1054fd872509e5aa845fb35",
"0x6964f9ebc2169a6ff9ff8f1898c87ab840ca68af08a6626102fc409c4b334dac",
"0x5885e3bea44e85d2359809d854fc1d60ee7d45c3fed7f4af81b905761f8a8c53"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


