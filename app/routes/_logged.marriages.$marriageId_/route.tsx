import { Typography, Button, Card, Row, Col, Spin, message } from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function MarriageCertificatePage() {
  const { marriageId } = useParams()
  const navigate = useNavigate()

  // Fetch marriage details with related data
  const { data: marriage, isLoading } = Api.marriage.findFirst.useQuery({
    where: { id: marriageId },
    include: {
      partner1: true,
      partner2: true,
      certificates: true,
      proposal: true,
    },
  })

  // Mutation for minting NFT certificate
  const { mutateAsync: createCertificate, isLoading: isMinting } =
    Api.certificate.create.useMutation()

  const handleMintCertificate = async () => {
    try {
      await createCertificate({
        data: {
          marriage: { connect: { id: marriageId } },
          mintStatus: 'PENDING',
        },
      })
      message.success('Certificate minting initiated')
    } catch (error) {
      message.error('Failed to mint certificate')
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Marriage Certificate',
        text: `View our marriage certificate - ${marriage?.partner1?.name} & ${marriage?.partner2?.name}`,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      message.success('Certificate link copied to clipboard!')
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

  return (
    <PageLayout layout="narrow">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Title level={2}>
          <i className="las la-heart" style={{ color: '#ff4d4f' }}></i> Marriage
          Certificate
        </Title>
        <Paragraph>View and manage your marriage certificate details</Paragraph>
      </div>

      <Card>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Title level={4}>
              <i className="las la-user"></i> Partner 1
            </Title>
            <Paragraph>
              <Text strong>Name:</Text> {marriage?.partner1?.name}
            </Paragraph>
            <Paragraph>
              <Text strong>Email:</Text> {marriage?.partner1?.email}
            </Paragraph>
            <Paragraph>
              <Text strong>Wallet:</Text>{' '}
              {marriage?.walletAddressPartner1 || 'Not connected'}
            </Paragraph>
          </Col>

          <Col xs={24} md={12}>
            <Title level={4}>
              <i className="las la-user"></i> Partner 2
            </Title>
            <Paragraph>
              <Text strong>Name:</Text> {marriage?.partner2?.name}
            </Paragraph>
            <Paragraph>
              <Text strong>Email:</Text> {marriage?.partner2?.email}
            </Paragraph>
            <Paragraph>
              <Text strong>Wallet:</Text>{' '}
              {marriage?.walletAddressPartner2 || 'Not connected'}
            </Paragraph>
          </Col>
        </Row>

        <div style={{ marginTop: '2rem' }}>
          <Title level={4}>
            <i className="las la-certificate"></i> Certificate Details
          </Title>
          <Paragraph>
            <Text strong>Marriage Date:</Text>{' '}
            {dayjs(marriage?.createdAt).format('MMMM D, YYYY')}
          </Paragraph>
          <Paragraph>
            <Text strong>Status:</Text> {marriage?.status}
          </Paragraph>
          {marriage?.certificates?.[0] && (
            <Paragraph>
              <Text strong>NFT Token ID:</Text>{' '}
              {marriage.certificates[0].nftTokenId || 'Pending'}
            </Paragraph>
          )}
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          {!marriage?.certificates?.length && (
            <Button
              type="primary"
              icon={<i className="las la-coins"></i>}
              onClick={handleMintCertificate}
              loading={isMinting}
              style={{ marginRight: '1rem' }}
            >
              Mint as NFT
            </Button>
          )}
          <Button icon={<i className="las la-share"></i>} onClick={handleShare}>
            Share Certificate
          </Button>
        </div>
      </Card>
    </PageLayout>
  )
}
