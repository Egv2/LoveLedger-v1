import { Typography, Card, Button, Space, Spin, Alert, Tag } from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ProposalDetailsPage() {
  const { proposalId } = useParams()
  const navigate = useNavigate()
  const { user } = useUserContext()

  // Fetch proposal details with related user data
  const {
    data: proposal,
    isLoading,
    refetch,
  } = Api.proposal.findFirst.useQuery({
    where: { id: proposalId },
    include: {
      sender: true,
      receiver: true,
    },
  })

  // Mutations for accepting/rejecting proposals
  const { mutateAsync: updateProposal } = Api.proposal.update.useMutation()

  const handleProposalResponse = async (status: 'ACCEPTED' | 'REJECTED') => {
    try {
      await updateProposal({
        where: { id: proposalId },
        data: { status },
      })
      await refetch()
    } catch (error) {
      console.error('Error updating proposal:', error)
    }
  }

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <Spin size="large" />
        </div>
      </PageLayout>
    )
  }

  if (!proposal) {
    return (
      <PageLayout layout="narrow">
        <Alert
          message="Proposal Not Found"
          description="The proposal you're looking for doesn't exist."
          type="error"
          showIcon
        />
      </PageLayout>
    )
  }

  const isReceiver = user?.id === proposal.receiverId
  const isSender = user?.id === proposal.senderId
  const isPending = proposal.status === 'PENDING'

  return (
    <PageLayout layout="narrow">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <Title level={2}>
          <i className="las la-ring" style={{ marginRight: '8px' }}></i>
          Proposal Details
        </Title>

        <Card>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div>
              <Text type="secondary">Status:</Text>
              <Tag
                color={
                  proposal.status === 'PENDING'
                    ? 'processing'
                    : proposal.status === 'ACCEPTED'
                    ? 'success'
                    : 'error'
                }
                style={{ marginLeft: '8px' }}
              >
                {proposal.status}
              </Tag>
            </div>

            <div>
              <Text type="secondary">From:</Text>
              <Text strong style={{ marginLeft: '8px' }}>
                {proposal.sender?.name || 'Unknown'} ({proposal.sender?.email})
              </Text>
            </div>

            <div>
              <Text type="secondary">To:</Text>
              <Text strong style={{ marginLeft: '8px' }}>
                {proposal.receiver?.name || 'Unknown'} (
                {proposal.receiver?.email})
              </Text>
            </div>

            <div>
              <Text type="secondary">Sent on:</Text>
              <Text style={{ marginLeft: '8px' }}>
                {dayjs(proposal.createdAt).format('MMMM D, YYYY')}
              </Text>
            </div>

            {proposal.message && (
              <div>
                <Text type="secondary">Message:</Text>
                <Paragraph
                  style={{
                    marginTop: '8px',
                    background: '#f5f5f5',
                    padding: '12px',
                    borderRadius: '4px',
                  }}
                >
                  {proposal.message}
                </Paragraph>
              </div>
            )}

            {isReceiver && isPending && (
              <Space>
                <Button
                  type="primary"
                  onClick={() => handleProposalResponse('ACCEPTED')}
                  icon={<i className="las la-check"></i>}
                >
                  Accept Proposal
                </Button>
                <Button
                  danger
                  onClick={() => handleProposalResponse('REJECTED')}
                  icon={<i className="las la-times"></i>}
                >
                  Reject Proposal
                </Button>
              </Space>
            )}

            {proposal.status === 'ACCEPTED' && (
              <Alert
                message="Proposal Accepted!"
                description="Congratulations! This proposal has been accepted."
                type="success"
                showIcon
                icon={<i className="las la-heart"></i>}
              />
            )}

            {proposal.status === 'REJECTED' && (
              <Alert
                message="Proposal Rejected"
                description="This proposal has been rejected."
                type="error"
                showIcon
                icon={<i className="las la-heart-broken"></i>}
              />
            )}
          </Space>
        </Card>

        <div style={{ marginTop: '20px', textAlign: 'right' }}>
          <Button
            onClick={() => navigate('/my-marriages')}
            icon={<i className="las la-arrow-left"></i>}
          >
            Back to My Marriages
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}
