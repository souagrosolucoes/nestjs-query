import { Inject } from '@nestjs/common'
import { Class } from '@souagrosolucoes/nestjs-query-core'

import { getAuthorizerToken } from '../auth'

export const InjectAuthorizer = <DTO>(DTOClass: Class<DTO>): ParameterDecorator => Inject(getAuthorizerToken(DTOClass))
