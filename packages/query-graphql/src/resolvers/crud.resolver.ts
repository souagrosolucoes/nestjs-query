import { Class, DeepPartial, QueryService } from '@souagrosolucoes/nestjs-query-core'

import { mergeBaseResolverOpts } from '../common'
import { BaseResolverOptions } from '../decorators/resolver-method.decorator'
import { ConnectionOptions, PagingStrategies } from '../types'
import { Aggregateable, AggregateResolver, AggregateResolverOpts } from './aggregate.resolver'
import { Creatable, CreateResolver, CreateResolverOpts } from './create.resolver'
import { DeleteResolver, DeleteResolverOpts } from './delete.resolver'
import { Readable, ReadResolverFromOpts, ReadResolverOpts } from './read.resolver'
import { Referenceable, ReferenceResolverOpts } from './reference.resolver'
import { Relatable } from './relations'
import { RelatableOpts } from './relations/relations.resolver'
import { MergePagingStrategyOpts, ResolverClass } from './resolver.interface'
import { Updatable, UpdateResolver, UpdateResolverOpts } from './update.resolver'

export interface CRUDResolverOpts<
  DTO,
  C = DeepPartial<DTO>,
  U = DeepPartial<DTO>,
  R extends ReadResolverOpts<DTO> = ReadResolverOpts<DTO>,
  PS extends PagingStrategies = PagingStrategies.CURSOR
> extends BaseResolverOptions,
    Pick<ConnectionOptions, 'enableTotalCount'> {
  /**
   * The DTO that should be used as input for create endpoints.
   */
  CreateDTOClass?: Class<C>
  /**
   * The DTO that should be used as input for update endpoints.
   */
  UpdateDTOClass?: Class<U>
  /**
   * The DTO that should be used for filter of the aggregate endpoint.
   */
  AggregateDTOClass?: Class<DTO>
  enableSubscriptions?: boolean
  pagingStrategy?: PS
  enableAggregate?: boolean
  create?: CreateResolverOpts<DTO, C>
  read?: R
  update?: UpdateResolverOpts<DTO, U>
  delete?: DeleteResolverOpts<DTO>
  referenceBy?: ReferenceResolverOpts
  aggregate?: AggregateResolverOpts<DTO>
}

export interface CRUDResolver<
  DTO,
  C,
  U,
  R extends ReadResolverOpts<DTO>,
  QS extends QueryService<DTO, C, U> = QueryService<DTO, C, U>
> extends CreateResolver<DTO, C, QS>,
    ReadResolverFromOpts<DTO, R, QS>,
    UpdateResolver<DTO, U, QS>,
    DeleteResolver<DTO, QS>,
    AggregateResolver<DTO, QS> {}

function extractRelatableOpts<DTO>(
  opts: CRUDResolverOpts<DTO, unknown, unknown, ReadResolverOpts<DTO>, PagingStrategies>
): RelatableOpts {
  const { enableTotalCount, enableAggregate } = opts
  return mergeBaseResolverOpts<RelatableOpts>({ enableAggregate, enableTotalCount }, opts)
}

function extractAggregateResolverOpts<DTO>(
  opts: CRUDResolverOpts<DTO, unknown, unknown, ReadResolverOpts<DTO>, PagingStrategies>
): AggregateResolverOpts<DTO> {
  const { AggregateDTOClass, enableAggregate, aggregate } = opts
  return mergeBaseResolverOpts<AggregateResolverOpts<DTO>>({ enabled: enableAggregate, AggregateDTOClass, ...aggregate }, opts)
}

function extractCreateResolverOpts<DTO, C>(
  opts: CRUDResolverOpts<DTO, C, unknown, ReadResolverOpts<DTO>, PagingStrategies>
): CreateResolverOpts<DTO, C> {
  const { CreateDTOClass, enableSubscriptions, create } = opts
  return mergeBaseResolverOpts<CreateResolverOpts<DTO, C>>({ CreateDTOClass, enableSubscriptions, ...create }, opts)
}

function extractReadResolverOpts<DTO, R extends ReadResolverOpts<DTO>, PS extends PagingStrategies>(
  opts: CRUDResolverOpts<DTO, unknown, unknown, R, PagingStrategies>
): MergePagingStrategyOpts<DTO, R, PS> {
  const { enableTotalCount, pagingStrategy, read } = opts
  return mergeBaseResolverOpts({ enableTotalCount, pagingStrategy, ...read } as MergePagingStrategyOpts<DTO, R, PS>, opts)
}

function extractUpdateResolverOpts<DTO, U>(
  opts: CRUDResolverOpts<DTO, unknown, U, ReadResolverOpts<DTO>, PagingStrategies>
): UpdateResolverOpts<DTO, U> {
  const { UpdateDTOClass, enableSubscriptions, update } = opts
  return mergeBaseResolverOpts<UpdateResolverOpts<DTO, U>>({ UpdateDTOClass, enableSubscriptions, ...update }, opts)
}

function extractDeleteResolverOpts<DTO>(
  opts: CRUDResolverOpts<DTO, unknown, unknown, ReadResolverOpts<DTO>, PagingStrategies>
): DeleteResolverOpts<DTO> {
  const { enableSubscriptions, delete: deleteArgs } = opts
  return mergeBaseResolverOpts<DeleteResolverOpts<DTO>>({ enableSubscriptions, ...deleteArgs }, opts)
}

/**
 * Factory to create a resolver that includes all CRUD methods from [[CreateResolver]], [[ReadResolver]],
 * [[UpdateResolver]], and [[DeleteResolver]].
 *
 * ```ts
 * import { CRUDResolver } from '@souagrosolucoes/nestjs-query-graphql';
 * import { Resolver } from '@nestjs/graphql';
 * import { TodoItemDTO } from './dto/todo-item.dto';
 * import { TodoItemService } from './todo-item.service';
 *
 * @Resolver()
 * export class TodoItemResolver extends CRUDResolver(TodoItemDTO) {
 *   constructor(readonly service: TodoItemService) {
 *     super(service);
 *   }
 * }
 * ```
 * @param DTOClass - The DTO Class that the resolver is for. All methods will use types derived from this class.
 * @param opts - Options to customize the resolver.
 */
// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentional
export const CRUDResolver = <
  DTO,
  C = DeepPartial<DTO>,
  U = DeepPartial<DTO>,
  R extends ReadResolverOpts<DTO> = ReadResolverOpts<DTO>,
  PS extends PagingStrategies = PagingStrategies.CURSOR
>(
  DTOClass: Class<DTO>,
  opts: CRUDResolverOpts<DTO, C, U, R, PS> = {}
): ResolverClass<DTO, QueryService<DTO, C, U>, CRUDResolver<DTO, C, U, MergePagingStrategyOpts<DTO, R, PS>>> => {
  const referenceable = Referenceable(DTOClass, opts.referenceBy ?? {})
  const relatable = Relatable(DTOClass, extractRelatableOpts(opts))
  const aggregateable = Aggregateable(DTOClass, extractAggregateResolverOpts(opts))
  const creatable = Creatable(DTOClass, extractCreateResolverOpts(opts))
  const readable = Readable(DTOClass, extractReadResolverOpts(opts))
  const updatable = Updatable(DTOClass, extractUpdateResolverOpts(opts))
  const deleteResolver = DeleteResolver(DTOClass, extractDeleteResolverOpts(opts))

  return referenceable(relatable(aggregateable(creatable(readable(updatable(deleteResolver))))))
}
