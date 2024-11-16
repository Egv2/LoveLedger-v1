import { Typography, Card, Button, Row, Col, Empty, Spin, message } from 'antd'
import { Account, Address, ConnectButton, Connector, useConnection } from '@ant-design/web3'
import { WagmiWeb3ConfigProvider, MetaMask } from '@ant-design/web3-wagmi'
import { Mainnet, Polygon } from '@ant-design/web3-assets'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { useState } from 'react'

export default function HomePage() {
  const navigate = useNavigate()
  const { user, isLoggedIn } = useUserContext()
  const { disconnect } = useConnection();
  const [account, setAccount] = useState<Account>()
  const { mutateAsync: updateUser } = Api.user.update.useMutation()

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

  function handleWalletConnected(account: Account) {
    if (!user.address) {
      updateUser({
        where: { id: user.id },
        data: { address: account.address },
      }).then(() => {
        setAccount(account);
      }).catch(error => {
        console.error('Error updating user address:', error);
        message.error(`Wallet is associated with other user`);
        disconnect();
      });
    } else if (user.address === account.address) {
      setAccount(account);
    } else {
      message.error('User is associated with other wallet');
      disconnect();
    }
  }
  
  function handleWalletDisconnected() {
    setAccount(null);
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
                {user.address && <Col>
                  <Title level={4}>
                    Associated wallet: 
                    <Address address={user.address} ellipsis />
                  </Title>
                </Col>}
                <Col>
                  <Connector
                    availableChains={[Mainnet, Polygon]}
                    account={account}
                    onConnected={handleWalletConnected}
                    onDisconnected={handleWalletDisconnected}
                  >
                    <ConnectButton type="primary" />
                  </Connector>
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
                        <Text type="secondary">
                          Status: {proposal.status}
                        </Text>
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
                          {marriage.partner1?.name} &{' '}
                          {marriage.partner2?.name}
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
