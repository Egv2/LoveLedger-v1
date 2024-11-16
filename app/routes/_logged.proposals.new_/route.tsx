import { Typography, Input, Form, Button, message } from 'antd'
import { useEffect, useState } from 'react'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { ethers } from 'ethers';
import MarriageProposalABI from '../../../abis/MarriageProposal.json';

export const CONTRACT_ADDRESS = '0xaC257EEFBcDBb147E301267E7F4056E381dd3002';

export default function SendProposalPage() {
  const { user } = useUserContext()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [receiverId, setReceiverId] = useState<string | null>(null)
  const [formValues, setFormValues] = useState<{ walletAddress: string; message: string }>({ walletAddress: '', message: '' })

  const { mutateAsync: createProposal } = Api.proposal.create.useMutation()

  const { data: receiverData } = Api.user.findUnique.useQuery(
    {
      where: { address: formValues.walletAddress },
    },
    {
      enabled: !!formValues.walletAddress,
    }
  )

  useEffect(() => {
    if (receiverData) {
      setReceiverId(receiverData.id)
    }
  }, [receiverData])

  const handleSubmit = async (values) => {
    if (!user) {
      message.error('You must be logged in to send a proposal');
      return;
    }

    if (!user.address) {
      message.error('You must verify yourself by connecting wallet to your account')
      return
    }

    if (!receiverId) {
      message.error('Receiver not found, the wallet must be connected to one of registered account')
      return
    }
  
    try {
      setLoading(true);
  
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
  
      const marriageProposalContract = new ethers.Contract(CONTRACT_ADDRESS, MarriageProposalABI.abi, signer);
  
      const tx = await marriageProposalContract.createProposal(values.walletAddress, values.message);
      console.log("tx to", tx.to);
      console.log("CONTRACT_ADDRESS", CONTRACT_ADDRESS);
      const receipt = await tx.wait();

      console.log("RECIEPT", receipt);
      window.reccc = receipt;
      const event = receipt.events.find(event => event.event === 'ProposalCreated');
      console.log("event", event);
      const proposalId = event.args?.proposalId;

      console.log('Created proposal with ID:', proposalId);

      const proposal = await createProposal({
        data: {
          status: 'PENDING',
          message: values.message,
          walletAddressReceiver: values.walletAddress,
          walletAddressSender: user.address,
          senderId: user.id,
          receiverId,
          onContractId: proposalId._hex,
        },
      })
      
      message.success('Proposal sent successfully!');
    } catch (error) {
      message.error('Failed to send proposal. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // const handleSubmit = async (values: { walletAddress: string; message: string }) => {
  //   if (!user) {
  //     message.error('You must be logged in to send a proposal')
  //     return
  //   }

  //   if (!user.address) {
  //     message.error('You must verify yourself by connecting wallet to your account')
  //     return
  //   }

  //   if (!receiverId) {
  //     message.error('Receiver not found, the wallet must be connected to one of registered account')
  //     return
  //   }

  //   try {
  //     setLoading(true)
  //     const proposal = await createProposal({
  //       data: {
  //         status: 'PENDING',
  //         message: values.message,
  //         walletAddressReceiver: values.walletAddress,
  //         walletAddressSender: user.address,
  //         senderId: user.id,
  //         receiverId,
  //       },
  //     })

  //     message.success('Proposal sent successfully!')
  //     navigate(`/proposals/${proposal.id}`)
  //   } catch (error) {
  //     message.error('Failed to send proposal. Please try again.')
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  return (
    <PageLayout layout="narrow">
      <Form
        layout="vertical"
        onFinish={handleSubmit}
        onValuesChange={(changedValues, allValues) => setFormValues(allValues)}
        style={{ textAlign: 'left', marginTop: '32px' }}
      >
        <Form.Item
          label="Partner's Wallet Address"
          name="walletAddress"
          rules={[
            { required: true, message: 'Please enter a wallet address' },
            {
              pattern: /^0x[a-fA-F0-9]{40}$/,
              message: 'Please enter a valid Ethereum wallet address',
            },
          ]}
        >
          <Input
            prefix={<i className="las la-wallet" />}
            placeholder="0x..."
          />
        </Form.Item>

        <Form.Item
          label="Your Proposal Message"
          name="message"
          rules={[
            { required: true, message: 'Please write a message' },
            { max: 500, message: 'Message cannot exceed 500 characters' },
          ]}
        >
          <Input.TextArea
            placeholder="Write your heartfelt message here..."
            rows={4}
            showCount
            maxLength={500}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            block
            size="large"
            style={{ marginTop: '16px' }}
          >
            <i className="las la-ring" style={{ marginRight: '8px' }}></i>
            Send Proposal
          </Button>
        </Form.Item>
      </Form>
    </PageLayout>
  )
}
