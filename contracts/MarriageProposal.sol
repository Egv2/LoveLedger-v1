// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MarriageProposal {
    enum ProposalStatus { PENDING, ACCEPTED, REJECTED }

    struct Proposal {
        address sender;
        address receiver;
        string message;
        ProposalStatus status;
    }

    uint256 public proposalCount;
    mapping(uint256 => Proposal) public proposals;

    event ProposalCreated(uint256 proposalId, address indexed sender, address indexed receiver, string message);
    event ProposalResponded(uint256 proposalId, ProposalStatus status);

    function createProposal(address _receiver, string calldata _message) external {
        proposals[proposalCount] = Proposal({
            sender: msg.sender,
            receiver: _receiver,
            message: _message,
            status: ProposalStatus.PENDING
        });

        emit ProposalCreated(proposalCount, msg.sender, _receiver, _message);
        proposalCount++;
    }

    function respondToProposal(uint256 _proposalId, ProposalStatus _status) external {
        Proposal storage proposal = proposals[_proposalId];

        require(msg.sender == proposal.receiver, "Only the receiver can respond to the proposal.");
        require(proposal.status == ProposalStatus.PENDING, "Proposal has already been responded to.");

        proposal.status = _status;

        emit ProposalResponded(_proposalId, _status);

        // Здесь можно добавить логику создания NFT после принятия предложения
    }

    function getProposal(uint256 _proposalId) external view returns (
        address sender,
        address receiver,
        string memory message,
        ProposalStatus status
    ) {
        require(_proposalId < proposalCount, "Proposal does not exist.");
        Proposal memory proposal = proposals[_proposalId];
        return (proposal.sender, proposal.receiver, proposal.message, proposal.status);
    }
}
