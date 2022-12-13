# Re-Entrance

The Reentrancy attack is one of the most destructive attacks in the Solidity smart contract. A reentrancy attack occurs when a function makes an external call to another untrusted contract. Reentrancy attack is considered quite old over the past two years.

# How Does Reentrancy Attack Work?

A reentrancy attack involves two smart contracts. A vulnerable contract and an untrusted attacker’s contract.

![image](https://user-images.githubusercontent.com/76695769/207332328-33abe875-9590-4e3a-a58b-5b8bcb24d9bd.png)


# How to Protect Smart Contract Against a Reentrancy Attack?


To prevent a reentrancy attack in a Solidity smart contract, you should:


Ensure all state changes happen before calling external contracts, i.e., update balances or code internally before calling external code
Use function modifiers that prevent reentrancy.

# For more Info refer- 

https://hackernoon.com/hack-solidity-reentrancy-attack
