const Token = artifacts.require("Token");
const PaymentGateway = artifacts.require("PaymentGateway");
const Marketplace = artifacts.require("Marketplace");

//first account in truffle becomes payment gateway wallet allowed to withdrawl funds
module.exports = function(deployer, networks, accounts) {
  deployer.deploy(Marketplace, Token.address, PaymentGateway.address, accounts[0]);
};   
