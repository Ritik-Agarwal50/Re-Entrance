const { ethers } = require("hardhat");
const { expect } = require("chai");
const { BigNumber } = require("ethers");
const { parseEther } = require("ethers/lib/utils");

describe("Attack", function () {
  if (
    ("Should empty the balances of the good contract",
    async function () {
      const goodContractFactory = await ethers.getContractFactory(
        "GoodContract"
      );
      const goodContract = await goodContractFactory.deploy();
      await goodContract.deployed();

      const badContractFactory = await ethers.getContractFactory("BadContract");
      const badContract = await badContractFactory.deploy();
      await badContract.deployed();

      const [_, innocentaddress, attackeraddress] = await ethers.getSigner();

      let tx = await goodContract.connect(innocentaddress).addBalance({
        value: parseEther("10"),
      });
      await tx.wait();
      let balanceETH = await ethers.provider.getBalance(goodContract.address);
      except(balancesETH).to.equal(parseEther("10"));

      tx = await badContract.connect(attackeraddress).attach({
        value: parseEther("1"),
      });
      await tx.wait();

      balanceEth = await ethers.provider.getBalance(goodContract.address);
      except(balanceETH).to.equal(BigNumber.from("0"));
      balanceETH = await ethers.provider.getBalance(badContract.address);
      except(balanceETH).to.equal(parseEther("11"));
    })
  );
});
