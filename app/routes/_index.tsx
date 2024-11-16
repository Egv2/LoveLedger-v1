import {
  LandingContainer,
  LandingCTA,
  LandingFAQ,
  LandingFeatures,
  LandingHero,
  LandingHowItWorks,
  LandingPricing,
  LandingSocialProof,
  LandingSocialRating,
  LandingTestimonials,
} from '~/designSystem'

export default function LandingPage() {
  const features = [
    {
      heading: `Eternal Love on the Blockchain`,
      description: `Your marriage vows are permanently recorded on the blockchain, creating an immutable record of your commitment that lasts forever.`,
      icon: <i className="las la-heart"></i>,
    },
    {
      heading: `Beautiful NFT Certificate`,
      description: `Receive a unique, artistic NFT marriage certificate that you can proudly display, share, and cherish.`,
      icon: <i className="las la-certificate"></i>,
    },
    {
      heading: `Global Recognition`,
      description: `Your blockchain marriage transcends borders and bureaucracy, recognized anywhere in the digital world.`,
      icon: <i className="las la-globe"></i>,
    },
    {
      heading: `Instant Processing`,
      description: `No more waiting months for paperwork. Get married in minutes, not months, with our streamlined digital process.`,
      icon: <i className="las la-bolt"></i>,
    },
    {
      heading: `Secure & Private`,
      description: `Your marriage details are protected by military-grade encryption and blockchain security.`,
      icon: <i className="las la-shield-alt"></i>,
    },
    {
      heading: `Smart Contract Binding`,
      description: `Your marriage is secured by smart contracts, ensuring complete transparency and trust.`,
      icon: <i className="las la-file-contract"></i>,
    },
  ]

  const testimonials = [
    {
      name: `Alex & Sarah Chen`,
      designation: `Newlyweds`,
      content: `"As a tech couple working remotely from different countries, traditional marriage wasn't an option. LoveLedger made our dream wedding possible!"`,
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: `Maria Rodriguez`,
      designation: `Digital Nomad`,
      content: `"The NFT certificate is absolutely beautiful. It's amazing to have our love story permanently recorded on the blockchain."`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `David & James Wilson`,
      designation: `Blockchain Entrepreneurs`,
      content: `"Finally, a marriage solution that matches our digital lifestyle. The smart contract feature gives us peace of mind."`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `How It Works`,
      link: `#how-it-works`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Digital Love`,
      description: `Perfect for tech-savvy couples`,
      monthly: 99,
      yearly: 999,
      features: [
        `Basic NFT Certificate`,
        `Blockchain Recording`,
        `Smart Contract Marriage`,
      ],
    },
    {
      title: `Forever & Ever`,
      description: `Our most popular package`,
      monthly: 199,
      yearly: 1999,
      features: [
        `Premium NFT Certificate`,
        `Priority Processing`,
        `Custom Smart Contract`,
        `Anniversary Reminders`,
      ],
      highlight: true,
    },
    {
      title: `Infinite Bond`,
      description: `The ultimate expression of love`,
      monthly: 499,
      yearly: 4999,
      features: [
        `Exclusive NFT Collection`,
        `Dedicated Support`,
        `Custom Ceremony`,
        `Legacy Planning`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `Is blockchain marriage legally binding?`,
      answer: `While our blockchain marriages create an immutable record of your commitment, we recommend checking your local jurisdiction for legal recognition requirements.`,
    },
    {
      question: `What happens if I lose access to my wallet?`,
      answer: `We provide backup solutions and recovery mechanisms to ensure you never lose access to your marriage certificate.`,
    },
    {
      question: `Can we customize our NFT certificate?`,
      answer: `Yes! Our premium packages allow for custom designs and personalization of your NFT marriage certificate.`,
    },
    {
      question: `How long does the process take?`,
      answer: `The entire process can be completed in minutes once both partners accept the smart contract proposal.`,
    },
  ]

  const steps = [
    {
      heading: `Create Your Profile`,
      description: `Connect your wallet and create your digital identity.`,
    },
    {
      heading: `Send Your Proposal`,
      description: `Propose to your partner by sending a smart contract to their wallet.`,
    },
    {
      heading: `Accept & Sign`,
      description: `Both partners digitally sign the marriage smart contract.`,
    },
    {
      heading: `Receive Your NFT`,
      description: `Get your unique NFT marriage certificate and celebrate!`,
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Write Your Love Story on the Blockchain`}
        subtitle={`Join thousands of modern couples who have immortalized their commitment through NFT marriage certificates and smart contracts.`}
        buttonText={`Start Your Forever`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/ZtqEe8-loveledger-LX8C`}
        socialProof={
          <LandingSocialRating
            numberOfUsers={2500}
            suffixText={`happy couples united`}
          />
        }
      />
      <LandingSocialProof title={`Featured in Blockchain Media`} />
      <LandingHowItWorks title={`Four Steps to Forever`} steps={steps} />
      <LandingFeatures
        id="features"
        title={`Marriage Made for the Digital Age`}
        subtitle={`Experience the future of matrimony with blockchain technology`}
        features={features}
      />
      <LandingTestimonials
        title={`Love Stories from the Blockchain`}
        subtitle={`Join thousands of couples who've made history with their digital "I do"`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Invest in Your Forever`}
        subtitle={`Choose the perfect package to immortalize your love`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Common Questions About Digital Matrimony`}
        subtitle={`Everything you need to know about blockchain marriage`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Write Your Love Story?`}
        subtitle={`Join the future of marriage today`}
        buttonText={`Begin Your Journey`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
