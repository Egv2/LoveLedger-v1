import { Typography, Input, Form, Button, message } from 'antd'
import { useState } from 'react'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function SendProposalPage() {
  const { user } = useUserContext()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const { mutateAsync: createProposal } = Api.proposal.create.useMutation()

  const handleSubmit = async (values: {
    walletAddress: string
    message: string
  }) => {
    if (!user) {
      message.error('You must be logged in to send a proposal')
      return
    }

    try {
      setLoading(true)
      const proposal = await createProposal({
        data: {
          status: 'PENDING',
          message: values.message,
          walletAddressReceiver: values.walletAddress,
          walletAddressSender: user.id, // Assuming the user's ID is their wallet address
          senderId: user.id,
          receiverId: user.id, // This will be updated once the receiver accepts
        },
      })

      message.success('Proposal sent successfully!')
      navigate(`/proposals/${proposal.id}`)
    } catch (error) {
      message.error('Failed to send proposal. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="narrow">
      <div
        style={{
          textAlign: 'center',
          maxWidth: 600,
          margin: '0 auto',
          padding: '20px',
        }}
      >
        <i
          className="las la-heart"
          style={{ fontSize: '48px', color: '#ff4d4f', marginBottom: '16px' }}
        ></i>

        <Title level={2}>Send a Marriage Proposal</Title>
        <Paragraph>
          Express your love by sending a blockchain marriage proposal. Enter
          your partner's wallet address and write a heartfelt message to make
          this moment special.
        </Paragraph>

        <Form
          layout="vertical"
          onFinish={handleSubmit}
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
      </div>
    </PageLayout>
  )
}
