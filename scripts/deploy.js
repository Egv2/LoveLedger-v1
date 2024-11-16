import hardhat from "hardhat";
const { ethers } = hardhat;

async function main() {
  const MarriageProposal = await ethers.getContractFactory("MarriageProposal");
  const marriageProposal = await MarriageProposal.deploy();

  await marriageProposal.deployed();

  console.log("MarriageProposal deployed to:", marriageProposal.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
