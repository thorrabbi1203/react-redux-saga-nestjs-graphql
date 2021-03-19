import { action } from 'typesafe-actions'

import { RouterActionTypes } from './type'

export const handleRouterNavigate = (pathName: string) =>
  action(RouterActionTypes.ROUTER_REQUEST, pathName)
