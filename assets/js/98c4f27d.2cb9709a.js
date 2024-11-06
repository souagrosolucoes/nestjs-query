"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[1686],{5439:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var t=r(5893),n=r(1151);const s={title:"v0.5.x to v0.6.x"},i=void 0,c={id:"migration-guides/v0.5.x-to-v0.6.x",title:"v0.5.x to v0.6.x",description:"@InjectTypeOrmQueryService",source:"@site/docs/migration-guides/v0.5.x-to-v0.6.x.md",sourceDirName:"migration-guides",slug:"/migration-guides/v0.5.x-to-v0.6.x",permalink:"/nestjs-query/docs/migration-guides/v0.5.x-to-v0.6.x",draft:!1,unlisted:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/migration-guides/v0.5.x-to-v0.6.x.md",tags:[],version:"current",frontMatter:{title:"v0.5.x to v0.6.x"},sidebar:"docs",previous:{title:"v0.10.x to v0.11.x",permalink:"/nestjs-query/docs/migration-guides/v0.10.x-to-v0.11.x"}},d={},m=[{value:"<code>@InjectTypeOrmQueryService</code>",id:"injecttypeormqueryservice",level:3},{value:"<code>TypeOrmQueryService</code>",id:"typeormqueryservice",level:2},{value:"<code>AssemblerQueryService</code>",id:"assemblerqueryservice",level:2}];function u(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h3,{id:"injecttypeormqueryservice",children:(0,t.jsx)(o.code,{children:"@InjectTypeOrmQueryService"})}),"\n",(0,t.jsxs)(o.p,{children:["In the ",(0,t.jsx)(o.code,{children:"v0.6.x"})," an new decorator was added ",(0,t.jsx)(o.code,{children:"@InjectTypeOrmQueryService"})," to auto-create a TypeOrm query service."]}),"\n",(0,t.jsx)(o.p,{children:"This means you no longer need to manually create a service in order to expose your CRUD endpoints."}),"\n",(0,t.jsxs)(o.p,{children:["To enable decorator import the ",(0,t.jsx)(o.code,{children:"NestjsQueryTypeOrmModule"})," to your module definition"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-ts",children:"import { NestjsQueryTypeOrmModule } from '@souagrosolucoes/nestjs-query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemResolver } from './todo-item.resolver';\n\n@Module({\n  providers: [TodoItemResolver],\n  imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n})\nexport class TodoItemModule {}\n"})}),"\n",(0,t.jsxs)(o.p,{children:["One you have imported the module you can inject a ",(0,t.jsx)(o.code,{children:"TypeOrmQueryService"}),"."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-ts",children:"import { QueryService } from '@souagrosolucoes/nestjs-query-core';\nimport { CRUDResolver } from '@souagrosolucoes/nestjs-query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { InjectTypeOrmQueryService } from '@souagrosolucoes/nestjs-query-typeorm';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO) {\n  constructor(@InjectTypeOrmQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>) {\n    super(service);\n  }\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"typeormqueryservice",children:(0,t.jsx)(o.code,{children:"TypeOrmQueryService"})}),"\n",(0,t.jsxs)(o.p,{children:["In the previous version of ",(0,t.jsx)(o.code,{children:"@nestjs-query"})," the ",(0,t.jsx)(o.code,{children:"TypeOrmQueryService"})," translated between the DTO and Entity. For a more in-depth description see ",(0,t.jsx)(o.a,{href:"https://github.com/tripss/nestjs-query/issues/41",children:"#41"})]}),"\n",(0,t.jsxs)(o.p,{children:["In the latest version the ",(0,t.jsx)(o.code,{children:"TypeOrmQueryService"})," only operates on entities."]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.code,{children:"v0.5.x"})}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-ts",children:"import { QueryService } from '@souagrosolucoes/nestjs-query-core';\nimport { TypeOrmQueryService } from '@souagrosolucoes/nestjs-query-typeorm';\nimport { InjectRepository } from '@nestjs/typeorm';\nimport { Repository } from 'typeorm';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@QueryService(TodoItemDTO)\nexport class TodoItemService extends TypeOrmQueryService<TodoItemDTO, TodoItemEntity> {\n  constructor(@InjectRepository(TodoItemEntity) readonly repo: Repository<TodoItemEntity>) {\n    super(repo);\n  }\n}\n"})}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.code,{children:"v0.6.x"})}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-ts",children:"import { QueryService } from '@souagrosolucoes/nestjs-query-core';\nimport { TypeOrmQueryService } from '@souagrosolucoes/nestjs-query-typeorm';\nimport { InjectRepository } from '@nestjs/typeorm';\nimport { Repository } from 'typeorm';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@QueryService(TodoItemEntity)\nexport class TodoItemService extends TypeOrmQueryService<TodoItemEntity> {\n  constructor(@InjectRepository(TodoItemEntity) readonly repo: Repository<TodoItemEntity>) {\n    super(repo);\n  }\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"assemblerqueryservice",children:(0,t.jsx)(o.code,{children:"AssemblerQueryService"})}),"\n",(0,t.jsxs)(o.p,{children:["In previous versions of ",(0,t.jsx)(o.code,{children:"nestjs-query"})," the ",(0,t.jsx)(o.code,{children:"QueryService"})," would automatically translate betwen your DTO and database type. This created a soft-dependecy between the persistence service and the view layer. In ",(0,t.jsx)(o.code,{children:"v0.6.0"})," ",(0,t.jsx)(o.code,{children:"AssemblerQueryService"})," was introduced to handle translating between your DTO and persistence type."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-ts",children:"import { AssemblerQueryService, QueryService } from '@souagrosolucoes/nestjs-query-core';\nimport { InjectTypeOrmQueryService } from '@souagrosolucoes/nestjs-query-typeorm';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemAssembler } from './todo-item.assembler';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@QueryService(TodoItemDTO)\nexport class TodoItemService extends AssemblerQueryService<TodoItemDTO, TodoItemEntity> {\n  constructor(\n    assembler: TodoItemAssembler,\n    @InjectTypeOrmQueryService(TodoItemEntity) queryService: QueryService<TodoItemEntity>,\n  ) {\n    super(assembler, queryService);\n  }\n}\n"})})]})}function y(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},1151:(e,o,r)=>{r.d(o,{Z:()=>c,a:()=>i});var t=r(7294);const n={},s=t.createContext(n);function i(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);