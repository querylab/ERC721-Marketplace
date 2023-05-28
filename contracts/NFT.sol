// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721 {
  uint public supply;
 constructor() ERC721("Pokemon Card", "TCG") {}

  function mint() public
  {
    _mint(msg.sender, supply);
    supply  += 1;
  }

  function supportsInterface(bytes4 interfaceId) public view override (ERC721) returns (bool)
  {
    return super.supportsInterface(interfaceId);
  }


}