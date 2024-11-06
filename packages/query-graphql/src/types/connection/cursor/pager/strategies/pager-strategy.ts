import { Query, SortField } from '@souagrosolucoes/nestjs-query-core'

import { CursorPagingType } from '../../../../query'

export interface OffsetPagingOpts {
  offset: number
  limit: number
  isForward: boolean
  isBackward: boolean
  hasBefore: boolean
}

export type KeySetField<DTO, K extends keyof DTO> = {
  field: K
  value: DTO[K]
}

export type KeySetCursorPayload<DTO> = {
  type: 'keyset'
  fields: KeySetField<DTO, keyof DTO>[]
}

export interface KeySetPagingOpts<DTO> {
  payload?: KeySetCursorPayload<DTO>
  limit: number
  defaultSort: SortField<DTO>[]
  isForward: boolean
  isBackward: boolean
  hasBefore: boolean
}

export type CursorPagingOpts<DTO> = OffsetPagingOpts | KeySetPagingOpts<DTO>

export interface PagerStrategy<DTO> {
  toCursor(dto: DTO, index: number, opts: CursorPagingOpts<DTO>, query: Query<DTO>): string

  fromCursorArgs(cursor: CursorPagingType): CursorPagingOpts<DTO>

  isEmptyCursor(opts: CursorPagingOpts<DTO>): boolean

  createQuery<Q extends Query<DTO>>(query: Q, opts: CursorPagingOpts<DTO>, includeExtraNode: boolean): Q

  checkForExtraNode(nodes: DTO[], opts: CursorPagingOpts<DTO>): DTO[]
}
