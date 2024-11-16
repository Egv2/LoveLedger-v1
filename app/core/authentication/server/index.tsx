import { createTrpcContext, createSocketContext } from './context'
import { expressSetup, getProviders } from './expressSetup'
import { getHttpContext, getHttpContextPublic } from './middleware'
import { AuthenticationRouter } from './router'
import { AuthenticationService } from './service'

export const AuthenticationServer = {
  createTrpcContext,

  createSocketContext,

  getHttpContext,
  getHttpContextPublic,
  trpcRouter: AuthenticationRouter,
  service: AuthenticationService,
  expressSetup,
  getProviders,
}
