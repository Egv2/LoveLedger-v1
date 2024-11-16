import { Typography, Card, Row, Col, Tag, Empty, Spin } from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function MyProfilePage() {
  const { user } = useUserContext()
  const navigate = useNavigate()

  // Fetch proposals with included relations
  const { data: proposals, isLoading: loadingProposals } =
    Api.proposal.findMany.useQuery({
      where: {
        OR: [{ senderId: user?.id }, { receiverId: user?.id }],
      },
      include: {
        sender: true,
        receiver: true,
        marriages: {
          include: {
            certificates: true,
          },
        },
      },
    })

  // Fetch marriages with included relations
  const { data: marriages, isLoading: loadingMarriages } =
    Api.marriage.findMany.useQuery({
      where: {
        OR: [{ partner1Id: user?.id }, { partner2Id: user?.id }],
      },
      include: {
        partner1: true,
        partner2: true,
        certificates: true,
        proposal: true,
      },
    })

  if (loadingProposals || loadingMarriages) {
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
      <div style={{ padding: '24px' }}>
        <Title level={2}>
          <i className="las la-user-circle" style={{ marginRight: '8px' }}></i>
          My Marriage Profile
        </Title>
        <Text type="secondary">
          Manage your marriage proposals, view your certificates, and update
          your profile information.
        </Text>

        <Card style={{ marginTop: '24px' }}>
          <Title level={4}>
            <i className="las la-id-card" style={{ marginRight: '8px' }}></i>
            Profile Information
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Text strong>Name: </Text>
              <Text>{user?.name || 'Not set'}</Text>
            </Col>
            <Col xs={24} sm={12}>
              <Text strong>Email: </Text>
              <Text>{user?.email || 'Not set'}</Text>
            </Col>
          </Row>
        </Card>

        <Card style={{ marginTop: '24px' }}>
          <Title level={4}>
            <i className="las la-heart" style={{ marginRight: '8px' }}></i>
            Marriage Proposals
          </Title>
          {proposals?.length ? (
            <Row gutter={[16, 16]}>
              {proposals?.map(proposal => (
                <Col xs={24} sm={12} key={proposal.id}>
                  <Card
                    hoverable
                    onClick={() => navigate(`/proposals/${proposal.id}`)}
                    size="small"
                  >
                    <Text strong>
                      {proposal.senderId === user?.id
                        ? 'Sent to: '
                        : 'Received from: '}
                    </Text>
                    <Text>
                      {proposal.senderId === user?.id
                        ? proposal.receiver?.name
                        : proposal.sender?.name}
                    </Text>
                    <br />
                    <Text strong>Status: </Text>
                    <Tag
                      color={
                        proposal.status === 'PENDING'
                          ? 'processing'
                          : proposal.status === 'ACCEPTED'
                          ? 'success'
                          : 'error'
                      }
                    >
                      {proposal.status}
                    </Tag>
                    <br />
                    <Text type="secondary">
                      {dayjs(proposal.createdAt).format('MMMM D, YYYY')}
                    </Text>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <Empty description="No proposals found" />
          )}
        </Card>

        <Card style={{ marginTop: '24px' }}>
          <Title level={4}>
            <i
              className="las la-certificate"
              style={{ marginRight: '8px' }}
            ></i>
            Marriage Certificates
          </Title>
          {marriages?.length ? (
            <Row gutter={[16, 16]}>
              {marriages?.map(marriage => (
                <Col xs={24} sm={12} key={marriage.id}>
                  <Card
                    hoverable
                    onClick={() => navigate(`/marriages/${marriage.id}`)}
                    size="small"
                  >
                    <Text strong>Partners: </Text>
                    <Text>
                      {marriage.partner1?.name} & {marriage.partner2?.name}
                    </Text>
                    <br />
                    <Text strong>Status: </Text>
                    <Tag
                      color={
                        marriage.status === 'ACTIVE' ? 'success' : 'default'
                      }
                    >
                      {marriage.status}
                    </Tag>
                    <br />
                    <Text strong>Certificates: </Text>
                    <Tag color="blue">{marriage.certificates?.length || 0}</Tag>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <Empty description="No marriages found" />
          )}
        </Card>
      </div>
    </PageLayout>
  )
}
