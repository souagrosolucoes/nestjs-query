import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'json_task' })
export class JsonTaskEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  title!: string

  @Column({ nullable: true })
  description?: string

  @Column({ type: 'json', nullable: true })
  display: Object

  @Column({ nullable: true })
  createdBy?: string

  @Column({ nullable: true })
  updatedBy?: string
}
