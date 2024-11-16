import { Typography, Card, Button, Row, Col, Empty, Spin, message } from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const navigate = useNavigate()
  const { user, isLoggedIn } = useUserContext()

  // Fetch user's proposals
  const { data: myProposals, isLoading: loadingProposals } =
    Api.proposal.findMany.useQuery({
      where: {
        OR: [{ senderId: user?.id }, { receiverId: user?.id }],
      },
      include: {
        sender: true,
        receiver: true,
      },
    })

  // Fetch user's marriages
  const { data: myMarriages, isLoading: loadingMarriages } =
    Api.marriage.findMany.useQuery({
      where: {
        OR: [{ partner1Id: user?.id }, { partner2Id: user?.id }],
      },
      include: {
        partner1: true,
        partner2: true,
      },
    })

  // Fetch recent marriages
  const { data: recentMarriages, isLoading: loadingRecent } =
    Api.marriage.findMany.useQuery({
      take: 5,
      orderBy: { createdAt: 'desc' },
      include: {
        partner1: true,
        partner2: true,
      },
    })

  const handleConnectWallet = async () => {
    // This is where you would implement wallet connection
    message.info('Wallet connection would be implemented here')
  }

  if (loadingProposals || loadingMarriages || loadingRecent) {
    return (
      <PageLayout layout="narrow">
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <Spin size="large" />
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <div style={{ padding: '20px' }}>
        <Title level={2}>
          <i className="las la-home"></i> Welcome to Marriage Platform
        </Title>
        <Text type="secondary">
          Connect your wallet and manage your marriage proposals
        </Text>

        {!isLoggedIn ? (
          <Card style={{ marginTop: '20px' }}>
            <Text>Please log in to access all features</Text>
          </Card>
        ) : (
          <>
            <Card style={{ marginTop: '20px' }}>
              <Row align="middle" justify="space-between">
                <Col>
                  <Title level={4}>
                    <i className="las la-wallet"></i> Wallet Status
                  </Title>
                </Col>
                <Col>
                  <Button type="primary" onClick={handleConnectWallet}>
                    Connect Polygon Wallet
                  </Button>
                </Col>
              </Row>
            </Card>

            <Card style={{ marginTop: '20px' }}>
              <Title level={4}>
                <i className="las la-envelope"></i> My Proposals
              </Title>
              {myProposals?.length ? (
                myProposals.map(proposal => (
                  <Card
                    key={proposal.id}
                    size="small"
                    style={{ marginBottom: '10px' }}
                  >
                    <Row justify="space-between">
                      <Col>
                        <Text>From: {proposal.sender?.name}</Text>
                        <br />
                        <Text>To: {proposal.receiver?.name}</Text>
                      </Col>
                      <Col>
                        <Text type="secondary">Status: {proposal.status}</Text>
                        <br />
                        <Text type="secondary">
                          {dayjs(proposal.createdAt).format('MMM D, YYYY')}
                        </Text>
                      </Col>
                    </Row>
                  </Card>
                ))
              ) : (
                <Empty description="No proposals yet" />
              )}
              <Button
                type="primary"
                style={{ marginTop: '10px' }}
                onClick={() => navigate('/proposals/new')}
              >
                <i className="las la-plus"></i> Send New Proposal
              </Button>
            </Card>

            <Card style={{ marginTop: '20px' }}>
              <Title level={4}>
                <i className="las la-heart"></i> Recent Marriages
              </Title>
              {recentMarriages?.length ? (
                recentMarriages.map(marriage => (
                  <Card
                    key={marriage.id}
                    size="small"
                    style={{ marginBottom: '10px' }}
                  >
                    <Row justify="space-between">
                      <Col>
                        <Text>
                          {marriage.partner1?.name} & {marriage.partner2?.name}
                        </Text>
                      </Col>
                      <Col>
                        <Text type="secondary">
                          {dayjs(marriage.createdAt).format('MMM D, YYYY')}
                        </Text>
                      </Col>
                    </Row>
                  </Card>
                ))
              ) : (
                <Empty description="No recent marriages" />
              )}
            </Card>
          </>
        )}
      </div>
    </PageLayout>
  )
}
