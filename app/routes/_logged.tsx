import { useUserContext } from '@/core/context'
import { NavigationLayout } from '@/designSystem/layouts/NavigationLayout'
import { MetaMask, WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi'
import { Outlet, useNavigate } from '@remix-run/react'
import { useEffect } from 'react'
import { MrbSplashScreen } from '~/designSystem'

export default function LoggedLayout() {
  const { isLoggedIn, isLoading } = useUserContext()

  const router = useNavigate()

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router('/login')
    }
  }, [isLoading, isLoggedIn])

  if (isLoading) {
    return <MrbSplashScreen />
  }

  if (isLoggedIn) {
    return (
      <NavigationLayout>
        <WagmiWeb3ConfigProvider
        eip6963={{
          autoAddInjectedWallets: true,
        }}
        wallets={[MetaMask()]}
      >
        <Outlet />
      </WagmiWeb3ConfigProvider>
      </NavigationLayout>
    )
  }
}
