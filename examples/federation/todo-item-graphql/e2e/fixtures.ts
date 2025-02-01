import { DataSource } from 'typeorm'

import { executeTruncate } from '../../../helpers'
import { TodoItemEntity } from '../src/todo-item/todo-item.entity'

const tables = ['todo_item']
export const truncate = async (dataSource: DataSource): Promise<void> => executeTruncate(dataSource, tables)

export const refresh = async (dataSource: DataSource): Promise<void> => {
  await truncate(dataSource)

  const todoRepo = dataSource.getRepository(TodoItemEntity)
  await todoRepo.save([
    { title: 'Create Nest App', completed: true, assigneeId: 1 },
    { title: 'Create Entity', completed: false, assigneeId: 2 },
    { title: 'Create Entity Service', completed: false, assigneeId: 3 },
    { title: 'Add Todo Item Resolver', completed: false },
    { title: 'How to create item With Sub Tasks', completed: false }
  ])
}
