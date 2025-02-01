"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[773],{7941:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var n=r(4848),o=r(8453),s=r(1470),i=r(9365);const a={title:"Federation"},l=void 0,d={id:"graphql/federation",title:"Federation",description:"nestjs-query provides basic federation support, with the intention of helping to",source:"@site/docs/graphql/federation.mdx",sourceDirName:"graphql",slug:"/graphql/federation",permalink:"/nestjs-query/docs/graphql/federation",draft:!1,unlisted:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/graphql/federation.mdx",tags:[],version:"current",frontMatter:{title:"Federation"},sidebar:"docs",previous:{title:"Types",permalink:"/nestjs-query/docs/graphql/types"},next:{title:"Query Helpers",permalink:"/nestjs-query/docs/utilities/query-helpers"}},c={},u=[{value:"Base Type",id:"base-type",level:2},{value:"Base Type",id:"base-type-1",level:3},{value:"Auto Generated Resolver",id:"auto-generated-resolver",level:3},{value:"Manual Resolver",id:"manual-resolver",level:3},{value:"App Module",id:"app-module",level:3},{value:"Reference Base Type",id:"reference-base-type",level:2},{value:"@Reference Decorator",id:"reference-decorator",level:3},{value:"Resolver",id:"resolver",level:3},{value:"Federated Relations",id:"federated-relations",level:2},{value:"RelationQueryService",id:"relationqueryservice",level:3},{value:"Add the Connection",id:"add-the-connection",level:3},{value:"Federation Resolver",id:"federation-resolver",level:3},{value:"Complete Example",id:"complete-example",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"nestjs-query"})," provides ",(0,n.jsx)(t.strong,{children:"basic"})," federation support, with the intention of helping to"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Plug into existing federated graphs, through references."}),"\n",(0,n.jsx)(t.li,{children:"Create a federated relations/connections on types defined in other services."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"These docs assume you have read"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.nestjs.com/graphql/federation",children:"https://docs.nestjs.com/graphql/federation"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.apollographql.com/docs/apollo-server/federation/introduction/",children:"https://www.apollographql.com/docs/apollo-server/federation/introduction/"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"base-type",children:"Base Type"}),"\n",(0,n.jsx)(t.p,{children:"The simplest way to integrate with a federated graph is through references."}),"\n",(0,n.jsx)(t.p,{children:"A reference is an object that looks like"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"{ __typename: 'TodoItem', id: subTask.todoItemId }\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"__typename"})," lets the gateway know which type is being referenced with additional fields that can be used to uniquely identify the type."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Both of the examples below add a ",(0,n.jsx)(t.code,{children:"resolveReference"})," function see ",(0,n.jsx)(t.a,{href:"https://www.apollographql.com/docs/apollo-server/federation/entities/#resolving",children:"https://www.apollographql.com/docs/apollo-server/federation/entities/#resolving"})]})}),"\n",(0,n.jsxs)(t.p,{children:["To reference a type in ",(0,n.jsx)(t.code,{children:"nestjs-query"})," you must first create DTO that defines the base type."]}),"\n",(0,n.jsx)(t.h3,{id:"base-type-1",children:"Base Type"}),"\n",(0,n.jsx)(t.p,{children:"The base type in its own service must be decorated with federated directives specifying its key."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="todo-item/todo-item.dto.ts"',children:"import { FilterableField } from '@souagrosolucoes/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime, Directive } from '@nestjs/graphql';\n\n@ObjectType('TodoItem')\n@Directive('@key(fields: \"id\")')\nexport class TodoItemDTO {\n  @FilterableField(() => ID)\n  id!: number;\n  ...\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"auto-generated-resolver",children:"Auto Generated Resolver"}),"\n",(0,n.jsxs)(t.p,{children:["When using the ",(0,n.jsx)(t.code,{children:"NestjsQueryGraphQLModule"})," module add the ",(0,n.jsx)(t.code,{children:"referenceBy"})," option that ",(0,n.jsx)(t.code,{children:"nestjs-query"})," will use to automatically expose add a ",(0,n.jsx)(t.code,{children:"@ResolveReference"})," decorator and method that the gateway can use."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="todo-item/todo-item.module.ts" {14-15}',children:"import { NestjsQueryGraphQLModule } from '@souagrosolucoes/nestjs-query-graphql';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [ /* import the nestjs-query persistence module*/],\n      resolvers: [\n        {\n          DTOClass: TodoItemDTO,\n          EntityClass: TodoItemEntity,\n          // specify the referenceBy option letting nestjs-query know to to resolve a reference\n          referenceBy: { key: 'id' },\n        },\n      ],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"referenceBy.key"})," should be the field you want to look up the DTO by."]})}),"\n",(0,n.jsx)(t.h3,{id:"manual-resolver",children:"Manual Resolver"}),"\n",(0,n.jsxs)(t.p,{children:["If you want to manually define your resolver pass in the ",(0,n.jsx)(t.code,{children:"referenceBy"})," option to the ",(0,n.jsx)(t.code,{children:"CRUDResolver"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="todo-item.resolver.ts" {3-4}',children:"@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO, {\n  // specify the referenceBy option letting nestjs-query know to to resolve a reference\n  referenceBy: { key: 'id' },\n}) {\n  constructor(@InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>) {\n    super(service);\n  }\n}\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"referenceBy.key"})," should be the field you want to look up the DTO by."]})}),"\n",(0,n.jsx)(t.h3,{id:"app-module",children:"App Module"}),"\n",(0,n.jsxs)(t.p,{children:["This app module ",(0,n.jsx)(t.strong,{children:"must"})," also use the ",(0,n.jsx)(t.code,{children:"GraphQLFederationModule"})," in order for the base type to be resolved by the gateway."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="app.module.ts"',children:"import { GraphQLFederationModule } from '@nestjs/graphql';\n\n@Module({\n  imports: [\n    TypeOrmModule.forRoot(ormconfig as TypeOrmModuleOptions),\n    GraphQLFederationModule.forRoot({\n      autoSchemaFile: 'schema.gql',\n    }),\n    TodoItemModule,\n  ],\n})\nexport class AppModule {}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"reference-base-type",children:"Reference Base Type"}),"\n",(0,n.jsx)(t.p,{children:"In a separate service from the one defining the base type above, we can use Apollo Federation to extend that base type."}),"\n",(0,n.jsxs)(t.p,{children:["To do this with ",(0,n.jsx)(t.code,{children:"nestjs-query"})," you must create a type that extends the base type contained in some other graphql service."]}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"The type name must be the same name as the type it extends in the graph."})}),"\n",(0,n.jsx)(t.p,{children:"For example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="sub-task/todo-item-reference.dto.ts" {4-5}',children:"import { ObjectType, Directive, Field, ID } from '@nestjs/graphql';\n\n@ObjectType('TodoItem')\n@Directive('@extends')\n@Directive('@key(fields: \"id\")')\nexport class TodoItemReferenceDTO {\n  @Field(() => ID)\n  @Directive('@external')\n  id!: number;\n}\n\n"})}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsxs)(t.p,{children:["Notice how the ",(0,n.jsx)(t.code,{children:"@Directive"})," decorator is used to add the ",(0,n.jsx)(t.code,{children:"@extends"})," annotation along with the ",(0,n.jsx)(t.code,{children:"@keys"}),"."]}),(0,n.jsxs)(t.p,{children:["To read more about ",(0,n.jsx)(t.code,{children:"@extends"})," annotation see ",(0,n.jsx)(t.a,{href:"https://www.apollographql.com/docs/apollo-server/federation/entities/#extending",children:"https://www.apollographql.com/docs/apollo-server/federation/entities/#extending"})]})]}),"\n",(0,n.jsx)(t.h3,{id:"reference-decorator",children:"@Reference Decorator"}),"\n",(0,n.jsxs)(t.p,{children:["To reference a type defined in another service you can use the ",(0,n.jsx)(t.code,{children:"@Reference"})," decorator."]}),"\n",(0,n.jsxs)(t.p,{children:["When using the ",(0,n.jsx)(t.code,{children:"@Reference"})," decorator ",(0,n.jsx)(t.code,{children:"nestjs-query"})," will ",(0,n.jsx)(t.strong,{children:"NOT"})," look up the relation through the ",(0,n.jsx)(t.code,{children:"QueryService"}),", instead return a reference type like the one described above."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="sub-task/sub-task.dto.ts" {5-6}',children:"import { FilterableField, Reference } from '@souagrosolucoes/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\n\n@ObjectType('SubTask')\n// add a todoItem reference and use the subTask.todoItemId as the id\n@Reference('todoItem', () => TodoItemReferenceDTO, { id: 'todoItemId' })\nexport class SubTaskDTO {\n  @FilterableField(() => ID)\n  id!: number;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField({ nullable: true })\n  description?: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n\n  @FilterableField()\n  todoItemId!: string;\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"In the above example we provided the keys which look like the following"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"{ id: 'todoItemId' }\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Which will map the ",(0,n.jsx)(t.code,{children:"SubTask.todoItemId"})," to the ",(0,n.jsx)(t.code,{children:"id"})," field in the reference type."]}),"\n",(0,n.jsxs)(t.p,{children:["Assuming you have the following ",(0,n.jsx)(t.code,{children:"SubTask"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"{id: 1, title: 'Sub Task 1', completed: false, todoItemId: 2}\n"})}),"\n",(0,n.jsx)(t.p,{children:"The reference type would be"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"{ __typename: 'TodoItem', id: 2 }\n"})}),"\n",(0,n.jsx)(t.h3,{id:"resolver",children:"Resolver"}),"\n",(0,n.jsxs)(t.p,{children:["Now that we have added the decorator the ",(0,n.jsx)(t.code,{children:"nestjs-query"})," resolver will automatically add the reference to the graphql type when using ",(0,n.jsx)(t.code,{children:"NestjsQueryGraphQLModule"})," or ",(0,n.jsx)(t.code,{children:"CRUDResolver"})]}),"\n",(0,n.jsxs)(s.A,{defaultValue:"module",values:[{label:"NestjsQueryGraphQLModule",value:"module"},{label:"CRUDResolver",value:"resolver"}],children:[(0,n.jsx)(i.A,{value:"module",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="sub-task/sub-task.module.ts"',children:"import { NestjsQueryGraphQLModule } from '@souagrosolucoes/nestjs-query-graphql';\nimport { Module } from '@nestjs/common';\nimport { SubTaskDTO } from './dto/sub-task.dto';\nimport { SubTaskEntity } from './sub-task.entity';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [ /* import the nestjs-query persistence module*/],\n      resolvers: [{ DTOClass: SubTaskDTO, EntityClass: SubTaskEntity }],\n    }),\n  ],\n})\nexport class SubTaskModule {}\n"})})}),(0,n.jsx)(i.A,{value:"resolver",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="sub-task/sub-task.resolver.ts"',children:"import { QueryService, InjectQueryService } from '@souagrosolucoes/nestjs-query-core';\nimport { CRUDResolver } from '@souagrosolucoes/nestjs-query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { SubTaskDTO } from './sub-task.dto';\nimport { TodoItemReferenceDTO } from './dto/todo-item-reference.dto';\nimport { SubTaskEntity } from './sub-task.entity';\n\n@Resolver(() => SubTaskDTO)\nexport class SubTaskResolver extends CRUDResolver(SubTaskDTO) {\n  constructor(@InjectQueryService(SubTaskEntity) readonly service: QueryService<SubTaskEntity>) {\n    super(service);\n  }\n}\n"})})})]}),"\n",(0,n.jsx)(t.h2,{id:"federated-relations",children:"Federated Relations"}),"\n",(0,n.jsxs)(t.p,{children:["Another common use case is to add ",(0,n.jsx)(t.code,{children:"relations"})," to a federated type from another service."]}),"\n",(0,n.jsxs)(t.p,{children:["Lets continue with the ",(0,n.jsx)(t.code,{children:"SubTask"})," example used above. We have add a ",(0,n.jsx)(t.code,{children:"todoItem"})," reference to the ",(0,n.jsx)(t.code,{children:"SubTask"})," but now lets add subTasks to the ",(0,n.jsx)(t.code,{children:"TodoItem"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"relationqueryservice",children:"RelationQueryService"}),"\n",(0,n.jsxs)(t.p,{children:["The first step is to create a ",(0,n.jsx)(t.code,{children:"RelationQueryService"}),". The ",(0,n.jsx)(t.code,{children:"RelationQueryService"})," is a special type of ",(0,n.jsx)(t.code,{children:"QueryService"})," that allows looking up relations without defining them in your entity."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="todo-item.service.ts"',children:"import { InjectQueryService, QueryService, RelationQueryService } from '@souagrosolucoes/nestjs-query-core';\nimport { TodoItemReferenceDTO } from './todo-item-reference.dto';\nimport { SubTaskEntity } from './sub-task.entity';\n\n@QueryService(TodoItemReferenceDTO)\nexport class TodoItemService extends RelationQueryService<TodoItemReferenceDTO> {\n  constructor(@InjectQueryService(SubTaskEntity) readonly subTaskService: QueryService<SubTaskEntity>) {\n    super({\n      // the name of the relation\n      subTasks: {\n        service: subTaskService,\n        // a query factory that will take in the reference to create a query.\n        query: (todoItemReferenceDTO) => ({ filter: { todoItemId: { eq: todoItemReferenceDTO.id } } }),\n      },\n    });\n  }\n}\n\n"})}),"\n",(0,n.jsxs)(t.p,{children:["In this example we inject a ",(0,n.jsx)(t.code,{children:"SubTask"})," service that will be used to look up ",(0,n.jsx)(t.code,{children:"subTask"})," relations. The ",(0,n.jsx)(t.code,{children:"query"})," method is used to filter relations when ",(0,n.jsx)(t.code,{children:"findRelation"})," or ",(0,n.jsx)(t.code,{children:"queryRelations"})," is called."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"{\n  // the name of the relation\n  subTasks: {\n    // the service to delegate to when looking up the relations\n    service: subTaskService,\n    // a query factory that will take in the reference to create a query.\n    query: (todoItemReferenceDTO) => ({ filter: { todoItemId: { eq: todoItemReferenceDTO.id } } }),\n  },\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"add-the-connection",children:"Add the Connection"}),"\n",(0,n.jsxs)(t.p,{children:["Next we add the ",(0,n.jsx)(t.code,{children:"subTasks"})," connection to the ",(0,n.jsx)(t.code,{children:"TodoItemReferenceDTO"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["The name of the relation should match the name of the relation defined by your ",(0,n.jsx)(t.code,{children:"RelationQueryService"}),"."]})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["The same pattern applies when you have a single relation and use the ",(0,n.jsx)(t.code,{children:"@Relation"})," decorator."]})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:"title='sub-task/todo-item-reference.dto.ts'",children:"import { Connection } from '@souagrosolucoes/nestjs-query-graphql';\nimport { ObjectType, Directive, Field, ID } from '@nestjs/graphql';\nimport { SubTaskDTO } from './sub-task.dto';\n\n@ObjectType('TodoItem')\n@Directive('@extends')\n@Directive('@key(fields: \"id\")')\n@CursorConnection('subTasks', () => SubTaskDTO)\nexport class TodoItemReferenceDTO {\n  @Field(() => ID)\n  @Directive('@external')\n  id!: number;\n}\n\n"})}),"\n",(0,n.jsx)(t.h3,{id:"federation-resolver",children:"Federation Resolver"}),"\n",(0,n.jsxs)(t.p,{children:["Next we set up our resolver that exposes the relations in the schema. As with other resolvers you can use the ",(0,n.jsx)(t.code,{children:"NestjsQueryGraphQLModule"})," or define your own ",(0,n.jsx)(t.code,{children:"FederationResolver"}),"."]}),"\n",(0,n.jsxs)(s.A,{defaultValue:"module",values:[{label:"NestjsQueryGraphQLModule",value:"module"},{label:"FederationResolver",value:"resolver"}],children:[(0,n.jsxs)(i.A,{value:"module",children:[(0,n.jsxs)(t.p,{children:["When using the ",(0,n.jsx)(t.code,{children:"NestjsQueryGraphQLModule"})," set the ",(0,n.jsx)(t.code,{children:"type"})," of the resolver to ",(0,n.jsx)(t.code,{children:"federated"}),", and specify the ",(0,n.jsx)(t.code,{children:"Service"}),"."]}),(0,n.jsxs)(t.p,{children:["Also, add the ",(0,n.jsx)(t.code,{children:"TodoItemService"})," to the ",(0,n.jsx)(t.code,{children:"services"})," option to make it available for nest to inject the service into the auto-generated resolver."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="sub-task/sub-task.module.ts" {12,18-22}',children:"import { NestjsQueryGraphQLModule } from '@souagrosolucoes/nestjs-query-graphql';\nimport { Module } from '@nestjs/common';\nimport { SubTaskDTO } from './dto/sub-task.dto';\nimport { SubTaskEntity } from './sub-task.entity';\nimport { TodoItemReferenceDTO } from './dto/todo-item-reference.dto';\nimport { TodoItemService } from './todo-item.service';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [/* import the nestjs-query persistence module*/],\n      services: [TodoItemService],\n      resolvers: [\n        {\n          DTOClass: SubTaskDTO,\n          EntityClass: SubTaskEntity,\n        },\n        {\n          type: 'federated',\n          DTOClass: TodoItemReferenceDTO,\n          Service: TodoItemService,\n        },\n      ],\n    }),\n  ],\n})\nexport class SubTaskModule {}\n\n"})})]}),(0,n.jsxs)(i.A,{value:"resolver",children:[(0,n.jsxs)(t.p,{children:["When manually defining the resolver extend the ",(0,n.jsx)(t.code,{children:"FederationResolver"}),"."]}),(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"FederationResolver"})," this will not set up any queries or mutations in the graph. Instead, it is used set up the reading of relations for a type that originates from another service."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="sub-task/todo-item.resolver.ts"',children:"import { FederationResolver } from '@souagrosolucoes/nestjs-query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { TodoItemReferenceDTO } from './todo-item-reference.dto';\nimport { TodoItemService } from './todo-item.service';\n\n@Resolver(() => TodoItemReferenceDTO)\nexport class TodoItemResolver extends FederationResolver(TodoItemReferenceDTO) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n}\n"})})]})]}),"\n",(0,n.jsx)(t.h2,{id:"complete-example",children:"Complete Example"}),"\n",(0,n.jsxs)(t.p,{children:["To see a complete example checkout ",(0,n.jsx)(t.a,{href:"https://github.com/tripss/nestjs-query/tree/master/examples/federation",children:"https://github.com/tripss/nestjs-query/tree/master/examples/federation"})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>i});r(6540);var n=r(4164);const o={tabItem:"tabItem_Ymn6"};var s=r(4848);function i(e){var t=e.children,r=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,i),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>T});var n=r(6540),o=r(4164),s=r(3104),i=r(6347),a=r(205),l=r(7485),d=r(1682),c=r(8760);function u(e){var t,r;return null!=(t=null==(r=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}function h(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:function(e){return u(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(r);return function(e){var t=(0,d.XI)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,r=void 0!==t&&t,o=e.groupId,s=(0,i.W6)(),a=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:o});return[(0,l.aZ)(a),(0,n.useCallback)((function(e){if(a){var t=new URLSearchParams(s.location.search);t.set(a,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[a,s])]}function f(e){var t,r,o,s,i=e.defaultValue,l=e.queryString,d=void 0!==l&&l,u=e.groupId,f=h(e),v=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var o=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:i,tabValues:f})})),j=v[0],x=v[1],y=m({queryString:d,groupId:u}),b=y[0],g=y[1],T=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),r=(0,c.Dv)(t),o=r[0],s=r[1],[o,(0,n.useCallback)((function(e){t&&s.set(e)}),[t,s])]),k=T[0],I=T[1],w=function(){var e=null!=b?b:k;return p({value:e,tabValues:f})?e:null}();return(0,a.A)((function(){w&&x(w)}),[w]),{selectedValue:j,selectValue:(0,n.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);x(e),g(e),I(e)}),[g,I,f]),tabValues:f}}var v=r(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(4848);function y(e){var t=e.className,r=e.block,n=e.selectedValue,i=e.selectValue,a=e.tabValues,l=[],d=(0,s.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,r=l.indexOf(t),o=a[r].value;o!==n&&(d(t),i(o))},u=function(e){var t,r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var n,o=l.indexOf(e.currentTarget)+1;r=null!=(n=l[o])?n:l[0];break;case"ArrowLeft":var s,i=l.indexOf(e.currentTarget)-1;r=null!=(s=l[i])?s:l[l.length-1]}null==(t=r)||t.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t),children:a.map((function(e){var t=e.value,r=e.label,s=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:function(e){return l.push(e)},onKeyDown:u,onClick:c},s,{className:(0,o.A)("tabs__item",j.tabItem,null==s?void 0:s.className,{"tabs__item--active":n===t}),children:null!=r?r:t}),t)}))})}function b(e){var t=e.lazy,r=e.children,s=e.selectedValue,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var a=i.find((function(e){return e.props.value===s}));return a?(0,n.cloneElement)(a,{className:(0,o.A)("margin-top--md",a.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})}))})}function g(e){var t=f(e);return(0,x.jsxs)("div",{className:(0,o.A)("tabs-container",j.tabList),children:[(0,x.jsx)(y,Object.assign({},t,e)),(0,x.jsx)(b,Object.assign({},t,e))]})}function T(e){var t=(0,v.A)();return(0,x.jsx)(g,Object.assign({},e,{children:u(e.children)}),String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var n=r(6540);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);