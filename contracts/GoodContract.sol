// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.9;

contract GoodContract {
    mapping(address => uint) public balances;

    function addBalance() public payable {
        balances[msg.sender] += msg.value;
    }

    function withdraw() public {
        require(balances[msg.sender] > 0);
        (bool sent, ) = msg.sender.call{value: balances[msg.sender]}("");
        require(sent, "Faild to send ether");
        balances[msg.sender] = 0;
    }
}
