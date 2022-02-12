const Router = artifacts.require("UniswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol");
module.exports = async function (deployer) {
  const FactoryAddress = '0x1077dC51D53c61B8E93b23B1A25378486d4c32cF';
  await deployer.deploy(WETH);
  let weth = await WETH.deployed();
  deployer.deploy(Router, FactoryAddress,weth.address);
};
