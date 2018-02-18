var Contract20 = artifacts.require("./EIP20.sol");

module.exports = function (deployer) {
    const initialAmount = 2000;
    const tokenName = 'EIP20TokenStandard';
    const decimalUnits = 8;
    const tokenSymbol = '#';

    deployer.deploy(Contract20, initialAmount, tokenName, decimalUnits, tokenName);
};
