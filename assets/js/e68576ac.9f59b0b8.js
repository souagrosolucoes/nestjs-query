"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[8055],{433:(e,n,t)=>{t.d(n,{Z:()=>s});t(7294);var o=t(6905);const r={tabItem:"tabItem_Ymn6"};var l=t(5893);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,s),hidden:t,children:n})}},2808:(e,n,t)=>{t.d(n,{Z:()=>I});var o=t(7294),r=t(6905),l=t(3735),s=t(6550),a=t(613),d=t(4423),i=t(636),u=t(9747);function c(e){var n,t;return null!=(n=null==(t=o.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,o.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function p(e){var n=e.values,t=e.children;return(0,o.useMemo)((function(){var e=null!=n?n:function(e){return c(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,i.lx)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function h(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,l=(0,s.k6)(),a=function(e){var n=e.queryString,t=void 0!==n&&n,o=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=o?o:null}({queryString:t,groupId:r});return[(0,d._X)(a),(0,o.useCallback)((function(e){if(a){var n=new URLSearchParams(l.location.search);n.set(a,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[a,l])]}function g(e){var n,t,r,l,s=e.defaultValue,d=e.queryString,i=void 0!==d&&d,c=e.groupId,g=p(e),j=(0,o.useState)((function(){return function(e){var n,t=e.defaultValue,o=e.tabValues;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+o.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=o.find((function(e){return e.default})))?n:o[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:g})})),x=j[0],y=j[1],f=h({queryString:i,groupId:c}),v=f[0],T=f[1],I=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,u.Nk)(n),r=t[0],l=t[1],[r,(0,o.useCallback)((function(e){n&&l.set(e)}),[n,l])]),b=I[0],q=I[1],M=function(){var e=null!=v?v:b;return m({value:e,tabValues:g})?e:null}();return(0,a.Z)((function(){M&&y(M)}),[M]),{selectedValue:x,selectValue:(0,o.useCallback)((function(e){if(!m({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);y(e),T(e),q(e)}),[T,q,g]),tabValues:g}}var j=t(5730);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(5893);function f(e){var n=e.className,t=e.block,o=e.selectedValue,s=e.selectValue,a=e.tabValues,d=[],i=(0,l.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=d.indexOf(n),r=a[t].value;r!==o&&(i(n),s(r))},c=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var o,r=d.indexOf(e.currentTarget)+1;t=null!=(o=d[r])?o:d[0];break;case"ArrowLeft":var l,s=d.indexOf(e.currentTarget)-1;t=null!=(l=d[s])?l:d[d.length-1]}null==(n=t)||n.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:a.map((function(e){var n=e.value,t=e.label,l=e.attributes;return(0,y.jsx)("li",Object.assign({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:function(e){return d.push(e)},onKeyDown:c,onClick:u},l,{className:(0,r.Z)("tabs__item",x.tabItem,null==l?void 0:l.className,{"tabs__item--active":o===n}),children:null!=t?t:n}),n)}))})}function v(e){var n=e.lazy,t=e.children,l=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var a=s.find((function(e){return e.props.value===l}));return a?(0,o.cloneElement)(a,{className:(0,r.Z)("margin-top--md",a.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==l})}))})}function T(e){var n=g(e);return(0,y.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,y.jsx)(f,Object.assign({},n,e)),(0,y.jsx)(v,Object.assign({},n,e))]})}function I(e){var n=(0,j.Z)();return(0,y.jsx)(T,Object.assign({},e,{children:c(e.children)}),String(n))}},5003:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>u,toc:()=>p});var o=t(5893),r=t(1151),l=t(2808),s=t(433),a=t(1402);const d={title:"Example",sidebar_label:"Example"},i=void 0,u={id:"introduction/example",title:"Example",description:"Let's create a simple todo-item graphql example.",source:"@site/docs/introduction/example.mdx",sourceDirName:"introduction",slug:"/introduction/example",permalink:"/nestjs-query/docs/introduction/example",draft:!1,unlisted:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/introduction/example.mdx",tags:[],version:"current",frontMatter:{title:"Example",sidebar_label:"Example"},sidebar:"docs",previous:{title:"Install",permalink:"/nestjs-query/docs/introduction/install"},next:{title:"DTOs",permalink:"/nestjs-query/docs/concepts/dtos"}},c={},p=[{value:"Set up a new nest app",id:"set-up-a-new-nest-app",level:2},{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"Generate the Module",id:"generate-the-module",level:2},{value:"Create the Entity",id:"create-the-entity",level:2},{value:"Create the DTO",id:"create-the-dto",level:2},{value:"Create the create DTO class.",id:"create-the-create-dto-class",level:2},{value:"Wire everything up.",id:"wire-everything-up",level:2},{value:"Running the Example",id:"running-the-example",level:2},{value:"Exploring The GraphQL Endpoint",id:"exploring-the-graphql-endpoint",level:2},{value:"Create a TodoItem",id:"create-a-todoitem",level:3},{value:"Create Multiple TodoItems",id:"create-multiple-todoitems",level:3},{value:"Query For Multiple TodoItems",id:"query-for-multiple-todoitems",level:3},{value:"Query for all todo items",id:"query-for-all-todo-items",level:4},{value:"Query for completed todo items",id:"query-for-completed-todo-items",level:4},{value:"Query For One TodoItem",id:"query-for-one-todoitem",level:3},{value:"Query by id",id:"query-by-id",level:4},{value:"Update a TodoItem",id:"update-a-todoitem",level:3},{value:"Update Multiple TodoItems",id:"update-multiple-todoitems",level:3},{value:"Delete One TodoItem",id:"delete-one-todoitem",level:3},{value:"Delete Many TodoItems",id:"delete-many-todoitems",level:3}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Let's create a simple todo-item graphql example."}),"\n",(0,o.jsx)(n.h2,{id:"set-up-a-new-nest-app",children:"Set up a new nest app"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"npm i -g @nestjs/cli\nnest new nestjs-query-getting-started\n"})}),"\n",(0,o.jsx)(n.h2,{id:"install-dependencies",children:"Install Dependencies"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/nestjs-query/docs/introduction/install",children:"Install your packages"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Be sure to install the correct ORM package!"})}),"\n",(0,o.jsx)(n.p,{children:"Install extra dependencies for the example."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"npm i pg apollo-server-express\n"})}),"\n",(0,o.jsx)(n.h2,{id:"generate-the-module",children:"Generate the Module"}),"\n",(0,o.jsx)(n.p,{children:"From the root of your project run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"npx nest g mo todo-item\n"})}),"\n",(0,o.jsx)(n.h2,{id:"create-the-entity",children:"Create the Entity"}),"\n",(0,o.jsx)(n.p,{children:"From the root of your project run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"npx nest g cl todo-item.entity todo-item --flat\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now lets fill out the entity."}),"\n",(0,o.jsxs)(n.p,{children:["Add the following to ",(0,o.jsx)(n.code,{children:"src/todo-item/todo-item.entity.ts"}),"."]}),"\n",(0,o.jsxs)(l.Z,{defaultValue:"typeorm",groupId:"orm",values:[{label:"TypeOrm",value:"typeorm"},{label:"Sequelize",value:"sequelize"},{label:"Mongoose",value:"mongoose"},{label:"Typegoose",value:"typegoose"}],children:[(0,o.jsx)(s.Z,{value:"typeorm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="todo-item/todo-item.entity.ts"',children:"import {\n  Column,\n  CreateDateColumn,\n  Entity,\n  PrimaryGeneratedColumn,\n  UpdateDateColumn,\n} from 'typeorm';\n\n@Entity()\nexport class TodoItemEntity {\n  @PrimaryGeneratedColumn()\n  id!: string;\n\n  @Column()\n  title!: string;\n\n  @Column()\n  completed!: boolean;\n\n  @CreateDateColumn()\n  created!: Date;\n\n  @UpdateDateColumn()\n  updated!: Date;\n}\n"})})}),(0,o.jsx)(s.Z,{value:"sequelize",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="todo-item/todo-item.entity.ts"',children:"import {\n  Table,\n  Column,\n  Model,\n  CreatedAt,\n  UpdatedAt,\n  PrimaryKey,\n  AutoIncrement,\n} from 'sequelize-typescript';\n\n@Table\nexport class TodoItemEntity extends Model<TodoItemEntity, Partial<TodoItemEntity>> {\n  @PrimaryKey\n  @AutoIncrement\n  @Column\n  id!: number;\n\n  @Column\n  title!: string;\n\n  @Column\n  completed!: boolean;\n\n  @CreatedAt\n  created!: Date;\n\n  @UpdatedAt\n  updated!: Date;\n}\n\n"})})}),(0,o.jsx)(s.Z,{value:"mongoose",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="todo-item/todo-item.entity.ts"',children:"import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';\nimport { Document } from 'mongoose';\n\n@Schema({ timestamps: { createdAt: 'created', updatedAt: 'updated' } })\nexport class TodoItemEntity extends Document {\n  @Prop({ required: true })\n  title!: string;\n\n  @Prop()\n  description?: string;\n\n  @Prop({ required: true })\n  completed!: boolean;\n\n  @Prop({ default: Date.now })\n  created!: Date;\n\n  @Prop({ default: Date.now })\n  updated!: Date;\n}\n\nexport const TodoItemEntitySchema = SchemaFactory.createForClass(TodoItemEntity);\n\n"})})}),(0,o.jsx)(s.Z,{value:"typegoose",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="todo-item/todo-item.entity.ts"',children:"import { ObjectId } from '@souagrosolucoes/nestjs-query-graphql'\nimport { Base } from '@typegoose/typegoose/lib/defaultClasses';\nimport { Prop, modelOptions, Ref } from '@typegoose/typegoose';\nimport { Types } from 'mongoose';\nimport { SubTaskEntity } from '../sub-task/sub-task.entity';\nimport { TagEntity } from '../tag/tag.entity';\n\n@modelOptions({\n  schemaOptions: {\n    timestamps: { createdAt: 'created', updatedAt: 'updated' },\n    collection: 'todo-items',\n    toObject: { virtuals: true },\n  },\n})\nexport class TodoItemEntity implements Base {\n  @ObjectId()\n  _id!: Types.ObjectId\n\n  id!: string  \n\n  @Prop({ required: true })\n  title!: string;\n\n  @Prop()\n  description?: string;\n\n  @Prop({ required: true })\n  completed!: boolean;\n\n  @Prop({ default: Date.now })\n  created!: Date;\n\n  @Prop({ default: Date.now })\n  updated!: Date;\n}\n"})})})]}),"\n",(0,o.jsx)(n.h2,{id:"create-the-dto",children:"Create the DTO"}),"\n",(0,o.jsx)(n.p,{children:"The DTO (Data Transfer Object) is used by the resolver to represent incoming requests and outgoing responses."}),"\n",(0,o.jsx)(n.p,{children:"The DTO is where you can:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Define fields that should be rendered by graphql."}),"\n",(0,o.jsxs)(n.li,{children:["Define fields that should be filterable using the ",(0,o.jsx)(n.code,{children:"@FilterableField"})," decorator."]}),"\n",(0,o.jsx)(n.li,{children:"Define validation that will be used by mutations."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In this example the DTO and entity are two different classes to clearly demonstrate what is required for ",(0,o.jsx)(n.code,{children:"graphql"})," vs\nthe persistence layer. However, you can combine the two into a single class."]}),"\n",(0,o.jsx)(n.p,{children:"From the root of your project run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"npx nest g cl todo-item.dto todo-item --flat\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now lets fill out the DTO. Add the following to ",(0,o.jsx)(n.code,{children:"src/todo-item/todo-item.dto.ts"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="todo-item/todo-item.dto.ts"',children:"import { FilterableField, IDField } from '@souagrosolucoes/nestjs-query-graphql';\nimport { ObjectType, GraphQLISODateTime, Field, ID } from '@nestjs/graphql';\n\n@ObjectType('TodoItem')\nexport class TodoItemDTO {\n  @IDField(() => ID)\n  id!: number;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @Field(() => GraphQLISODateTime)\n  created!: Date;\n\n  @Field(() => GraphQLISODateTime)\n  updated!: Date;\n}\n\n\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Notice the use of ",(0,o.jsx)(n.code,{children:"@FilterableField"})," this will let ",(0,o.jsx)(n.code,{children:"@souagrosolucoes/nestjs-query-graphql"})," know to allow filtering on the\ncorresponding field. If you just use ",(0,o.jsx)(n.code,{children:"@Field"})," then you will not be able to filter on the corresponding field."]}),"\n",(0,o.jsx)(n.h2,{id:"create-the-create-dto-class",children:"Create the create DTO class."}),"\n",(0,o.jsxs)(n.p,{children:["From the previously created DTO, ",(0,o.jsx)(n.code,{children:"@souagrosolucoes/nestjs-query-graphql"})," will automatically create a ",(0,o.jsx)(n.code,{children:"CreateTodoItem"})," graphql type:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"input CreateTodoItem {\n  id: ID!\n  title: String!\n  completed: Boolean!\n  created: DateTime!\n  updated: DateTime!\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["But in our case, the fields ",(0,o.jsx)(n.code,{children:"id"}),", ",(0,o.jsx)(n.code,{children:"created"})," and ",(0,o.jsx)(n.code,{children:"updated"})," are actually not\nrequired when creating a ",(0,o.jsx)(n.code,{children:"TodoItem"}),": they will be autogenerated. We only need to\nprovide ",(0,o.jsx)(n.code,{children:"title"})," and ",(0,o.jsx)(n.code,{children:"completed"}),". To create a DTO that does not require these\nfields, we can create a custom create DTO:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"npx nest g cl todo-item.create.dto todo-item --flat\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="todo-item/todo-item.create.dto.ts"',children:"import { IsBoolean, IsString } from 'class-validator';\n\n@InputType('CreateTodoItem')\nexport class TodoItemCreateDTO {\n  @IsString()\n  @Field()\n  title!: string;\n\n  @IsBoolean()\n  @Field()\n  completed!: boolean;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"wire-everything-up",children:"Wire everything up."}),"\n",(0,o.jsxs)(n.p,{children:["Update the ",(0,o.jsx)(n.code,{children:"todo-item.module"})," to set up the ",(0,o.jsx)(n.code,{children:"NestjsQueryGraphQLModule"})," and the entities to provide a ",(0,o.jsx)(n.code,{children:"QueryService"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"NestjsQueryGraphQLModule"})," will automatically create a Resolver that will expose the following ",(0,o.jsx)(n.code,{children:"queries"})," and ",(0,o.jsx)(n.code,{children:"mutations"}),":"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Queries"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"todoItems"})," - find multiple ",(0,o.jsx)(n.code,{children:"TodoItem"}),"s."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"todoItem"})," - find one ",(0,o.jsx)(n.code,{children:"TodoItem"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Mutations"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"createManyTodoItems"})," - create multiple ",(0,o.jsx)(n.code,{children:"TodoItem"}),"s."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"createOneTodoItems"})," - create one ",(0,o.jsx)(n.code,{children:"TodoItem"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"updateManyTodoItems"})," - update multiple ",(0,o.jsx)(n.code,{children:"TodoItems"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"updateOneTodoItems"})," - update one ",(0,o.jsx)(n.code,{children:"TodoItem"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"deleteManyTodoItems"})," - delete multiple ",(0,o.jsx)(n.code,{children:"TodoItems"}),"s."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"deleteOneTodoItems"})," - delete one ",(0,o.jsx)(n.code,{children:"TodoItem"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(l.Z,{defaultValue:"typeorm",groupId:"orm",values:[{label:"TypeOrm",value:"typeorm"},{label:"Sequelize",value:"sequelize"},{label:"Mongoose",value:"mongoose"},{label:"Typegoose",value:"typegoose"}],children:[(0,o.jsx)(s.Z,{value:"typeorm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"{10-22}",children:"import { NestjsQueryGraphQLModule } from '@souagrosolucoes/nestjs-query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@souagrosolucoes/nestjs-query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemCreateDTO } from './todo-item.create.dto';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      // import the NestjsQueryTypeOrmModule to register the entity with typeorm\n      // and provide a QueryService\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      // describe the resolvers you want to expose\n      resolvers: [\n        {\n          EntityClass: TodoItemEntity,\n          DTOClass: TodoItemDTO,\n          CreateDTOClass: TodoItemCreateDTO,\n        },\n      ],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n"})})}),(0,o.jsx)(s.Z,{value:"sequelize",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"{9-15}",children:"import { NestjsQueryGraphQLModule } from '@souagrosolucoes/nestjs-query-graphql';\nimport { NestjsQuerySequelizeModule } from '@souagrosolucoes/nestjs-query-sequelize';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      // import the NestjsQuerySequelizeModule to register the entity with sequelize\n      // and provide a QueryService\n      imports: [NestjsQuerySequelizeModule.forFeature([TodoItemEntity])],\n      // describe the resolvers you want to expose\n      resolvers: [{ DTOClass: TodoItemDTO, EntityClass: TodoItemEntity }],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n"})})}),(0,o.jsx)(s.Z,{value:"mongoose",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"{9-19}",children:"import { NestjsQueryGraphQLModule } from '@souagrosolucoes/nestjs-query-graphql';\nimport { NestjsQueryMongooseModule } from '@souagrosolucoes/nestjs-query-mongoose';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity, TodoItemEntitySchema } from './todo-item.entity';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      // import the NestjsQueryMongooseModule to register the entity with mongoose\n      // and provide a QueryService\n      imports: [\n        NestjsQueryMongooseModule.forFeature([\n          { document: TodoItemEntity, name: TodoItemEntity.name, schema: TodoItemEntitySchema },\n        ]),\n      ],\n      // describe the resolvers you want to expose\n      resolvers: [{ DTOClass: TodoItemDTO, EntityClass: TodoItemEntity }],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n"})})}),(0,o.jsx)(s.Z,{value:"typegoose",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"{9-19}",children:"import { NestjsQueryGraphQLModule } from '@souagrosolucoes/nestjs-query-graphql';\nimport { Module } from '@nestjs/common';\nimport { NestjsQueryTypegooseModule } from '@souagrosolucoes/nestjs-query-typegoose';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\nconst guards = [AuthGuard];\n@Module({\n  providers: [TodoItemResolver],\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypegooseModule.forFeature([TodoItemEntity])],\n      resolvers: [{ DTOClass: TodoItemDTO, EntityClass: TodoItemEntity }],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["Next update ",(0,o.jsx)(n.code,{children:"app.module"})," to set up your db connection and the ",(0,o.jsx)(n.code,{children:"graphql"})," nest modules."]}),"\n",(0,o.jsxs)(l.Z,{defaultValue:"typeorm",groupId:"orm",values:[{label:"TypeOrm",value:"typeorm"},{label:"Sequelize",value:"sequelize"},{label:"Mongoose",value:"mongoose"},{label:"Typegoose",value:"typegoose"}],children:[(0,o.jsx)(s.Z,{value:"typeorm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';\nimport { Module } from '@nestjs/common';\nimport { GraphQLModule } from '@nestjs/graphql';\nimport { TypeOrmModule } from '@nestjs/typeorm';\nimport { AppController } from './app.controller';\nimport { AppService } from './app.service';\nimport { TodoItemModule } from './todo-item/todo-item.module';\n\n@Module({\n  imports: [\n    TypeOrmModule.forRoot({\n      type: 'postgres',\n      database: 'gettingstarted',\n      username: 'gettingstarted',\n      autoLoadEntities: true,\n      synchronize: true,\n      logging: true,\n    }),\n    GraphQLModule.forRoot<ApolloDriverConfig>({\n      driver: ApolloDriver,\n      // set to true to automatically generate schema\n      autoSchemaFile: true,\n    }),\n    TodoItemModule,\n  ],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}\n"})})}),(0,o.jsx)(s.Z,{value:"sequelize",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';\nimport { Module } from '@nestjs/common';\nimport { GraphQLModule } from '@nestjs/graphql';\nimport { SequelizeModule } from '@nestjs/sequelize';\nimport { AppController } from './app.controller';\nimport { AppService } from './app.service';\nimport { TodoItemModule } from './todo-item/todo-item.module';\n\n@Module({\n  imports: [\n    TodoItemModule,\n    SequelizeModule.forRoot({\n      dialect: 'postgres',\n      database: 'gettingstarted',\n      username: 'gettingstarted',\n      autoLoadModels: true,\n      synchronize: true,\n      logging: true,\n    }),\n    GraphQLModule.forRoot<ApolloDriverConfig>({\n      driver: ApolloDriver,\n      // set to true to automatically generate schema\n      autoSchemaFile: true,\n    }),\n  ],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}\n\n\n"})})}),(0,o.jsx)(s.Z,{value:"mongoose",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';\nimport { Module } from '@nestjs/common';\nimport { GraphQLModule } from '@nestjs/graphql';\nimport { MongooseModule } from '@nestjs/mongoose';\nimport { AppController } from './app.controller';\nimport { AppService } from './app.service';\nimport { TodoItemModule } from './todo-item/todo-item.module';\n\n@Module({\n  imports: [\n    MongooseModule.forRoot('mongodb://localhost/nest', options),\n    GraphQLModule.forRoot<ApolloDriverConfig>({\n      driver: ApolloDriver,\n      // set to true to automatically generate schema\n      autoSchemaFile: true,\n    }),\n    TodoItemModule,\n  ],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}\n\n\n"})})}),(0,o.jsxs)(s.Z,{value:"typegoose",children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';\nimport { Module } from '@nestjs/common';\nimport { GraphQLModule } from '@nestjs/graphql';\nimport { TypegooseModule } from '@m8a/nestjs-typegoose';\nimport { TodoItemModule } from './todo-item/todo-item.module';\n\n@Module({\n  imports: [\n    TypegooseModule.forRoot('mongodb://localhost/nest', options),\n    GraphQLModule.forRoot<ApolloDriverConfig>({\n      driver: ApolloDriver,\n      // set to true to automatically generate schema\n      autoSchemaFile: true,\n    }),\n    TodoItemModule,\n  ],\n})\nexport class AppModule {}\n\n\n"})}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"NOTE"})," For the sake of brevity, the ",(0,o.jsx)(n.code,{children:"options"})," object in the Mongoose and Typegoose examples aren't defined. If you'd like to see full examples of all of the persistence services, please refer to the ",(0,o.jsx)(n.code,{children:"./examples"})," directory in the ",(0,o.jsx)(n.a,{href:"https://github.com/tripss/nestjs-query/tree/master/examples",children:"source code"}),"."]})]})]}),"\n",(0,o.jsxs)(n.p,{children:["Create a ",(0,o.jsx)(n.code,{children:"docker-compose.yml"})," file in the root of the project"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dockerfile",children:'version: "3"\n\nservices:\n  postgres:\n    image: "postgres:11.5"\n    environment:\n      - "POSTGRES_USER=gettingstarted"\n      - "POSTGRES_DB=gettingstarted"\n    expose:\n      - "5432"\n    ports:\n      - "5432:5432"\n  # only needed if using mongoose\n  mongo:\n    image: "mongo:4.4"\n    restart: always\n    ports:\n      - "27017:27017"\n  mongo-express:\n    image: "mongo-express:latest"\n    restart: always\n    ports:\n      - 8081:8081\n\n\n'})}),"\n",(0,o.jsx)(n.h2,{id:"running-the-example",children:"Running the Example"}),"\n",(0,o.jsx)(n.p,{children:"Start the backing services"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"docker compose up -d\n"})}),"\n",(0,o.jsx)(n.p,{children:"Start the app"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"npm start\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Visit ",(0,o.jsx)(n.a,{href:"http://localhost:3000/graphql",children:"http://localhost:3000/graphql"})," where you should see the playground"]}),"\n",(0,o.jsx)("img",{alt:"Example playground",src:(0,a.ZP)("img/introduction/getting-started-playground.png")}),"\n",(0,o.jsx)(n.h2,{id:"exploring-the-graphql-endpoint",children:"Exploring The GraphQL Endpoint"}),"\n",(0,o.jsx)(n.h3,{id:"create-a-todoitem",children:"Create a TodoItem"}),"\n",(0,o.jsxs)(l.Z,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],children:[(0,o.jsx)(s.Z,{value:"graphql",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:'mutation {\n  createOneTodoItem(\n    input: { todoItem: { title: "Create One Todo Item", completed: false } }\n  ) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n'})})}),(0,o.jsx)(s.Z,{value:"response",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "createOneTodoItem": {\n      "id": "1",\n      "title": "Create One Todo Item",\n      "completed": false,\n      "created": "2020-01-01T00:43:16.000Z",\n      "updated": "2020-01-01T00:43:16.000Z"\n    }\n  }\n}\n'})})})]}),"\n",(0,o.jsx)(n.h3,{id:"create-multiple-todoitems",children:"Create Multiple TodoItems"}),"\n",(0,o.jsxs)(l.Z,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],children:[(0,o.jsx)(s.Z,{value:"graphql",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:'mutation {\n  createManyTodoItems(\n    input: {\n      todoItems: [\n        { title: "Create Many Todo Items - 1", completed: false }\n        { title: "Create Many Todo Items - 2", completed: true }\n      ]\n    }\n  ) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n'})})}),(0,o.jsx)(s.Z,{value:"response",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "createManyTodoItems": [\n      {\n        "id": "2",\n        "title": "Create Many Todo Items - 1",\n        "completed": false,\n        "created": "2020-01-01T00:49:01.000Z",\n        "updated": "2020-01-01T00:49:01.000Z"\n      },\n      {\n        "id": "3",\n        "title": "Create Many Todo Items - 2",\n        "completed": true,\n        "created": "2020-01-01T00:49:01.000Z",\n        "updated": "2020-01-01T00:49:01.000Z"\n      }\n    ]\n  }\n}\n'})})})]}),"\n",(0,o.jsx)(n.h3,{id:"query-for-multiple-todoitems",children:"Query For Multiple TodoItems"}),"\n",(0,o.jsx)(n.h4,{id:"query-for-all-todo-items",children:"Query for all todo items"}),"\n",(0,o.jsxs)(l.Z,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],children:[(0,o.jsx)(s.Z,{value:"graphql",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"{\n  todoItems {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        id\n        title\n        completed\n        created\n        updated\n      }\n      cursor\n    }\n  }\n}\n"})})}),(0,o.jsx)(s.Z,{value:"response",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "todoItems": {\n      "pageInfo": {\n        "hasNextPage": false,\n        "hasPreviousPage": false,\n        "startCursor": "YXJyYXljb25uZWN0aW9uOjA=",\n        "endCursor": "YXJyYXljb25uZWN0aW9uOjI="\n      },\n      "edges": [\n        {\n          "node": {\n            "id": "1",\n            "title": "Create One Todo Item",\n            "completed": false,\n            "created": "2020-01-01T00:43:16.000Z",\n            "updated": "2020-01-01T00:43:16.000Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjA="\n        },\n        {\n          "node": {\n            "id": "2",\n            "title": "Create Many Todo Items - 1",\n            "completed": false,\n            "created": "2020-01-01T00:49:01.000Z",\n            "updated": "2020-01-01T00:49:01.000Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjE="\n        },\n        {\n          "node": {\n            "id": "3",\n            "title": "Create Many Todo Items - 2",\n            "completed": true,\n            "created": "2020-01-01T00:49:01.000Z",\n            "updated": "2020-01-01T00:49:01.000Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjI="\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,o.jsx)(n.h4,{id:"query-for-completed-todo-items",children:"Query for completed todo items"}),"\n",(0,o.jsxs)(l.Z,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],children:[(0,o.jsx)(s.Z,{value:"graphql",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"{\n  todoItems(filter: { completed: { is: true } }) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        id\n        title\n        completed\n        created\n        updated\n      }\n      cursor\n    }\n  }\n}\n"})})}),(0,o.jsx)(s.Z,{value:"response",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "todoItems": {\n      "pageInfo": {\n        "hasNextPage": false,\n        "hasPreviousPage": false,\n        "startCursor": "YXJyYXljb25uZWN0aW9uOjA=",\n        "endCursor": "YXJyYXljb25uZWN0aW9uOjA="\n      },\n      "edges": [\n        {\n          "node": {\n            "id": "3",\n            "title": "Create Many Todo Items - 2",\n            "completed": true,\n            "created": "2020-01-01T00:49:01.000Z",\n            "updated": "2020-01-01T00:49:01.000Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjA="\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,o.jsx)(n.h3,{id:"query-for-one-todoitem",children:"Query For One TodoItem"}),"\n",(0,o.jsx)(n.h4,{id:"query-by-id",children:"Query by id"}),"\n",(0,o.jsxs)(l.Z,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],children:[(0,o.jsx)(s.Z,{value:"graphql",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"{\n  todoItem(id: 1) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n"})})}),(0,o.jsx)(s.Z,{value:"response",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "todoItem": {\n      "id": "1",\n      "title": "Create One Todo Item",\n      "completed": false,\n      "created": "2020-01-13T06:19:17.543Z",\n      "updated": "2020-01-13T06:19:17.543Z"\n    }\n  }\n}\n'})})})]}),"\n",(0,o.jsx)(n.h3,{id:"update-a-todoitem",children:"Update a TodoItem"}),"\n",(0,o.jsxs)(n.p,{children:["Lets update the completed ",(0,o.jsx)(n.code,{children:"TodoItem"})," we created earlier to not be completed."]}),"\n",(0,o.jsxs)(l.Z,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],children:[(0,o.jsx)(s.Z,{value:"graphql",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"mutation {\n  updateOneTodoItem(input: { id: 3, update: { completed: false } }) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n"})})}),(0,o.jsx)(s.Z,{value:"response",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "updateOneTodoItem": {\n      "id": "3",\n      "title": "Create Many Todo Items - 2",\n      "completed": false,\n      "created": "2020-01-13T09:19:46.727Z",\n      "updated": "2020-01-13T09:23:37.658Z"\n    }\n  }\n}\n'})})})]}),"\n",(0,o.jsx)(n.h3,{id:"update-multiple-todoitems",children:"Update Multiple TodoItems"}),"\n",(0,o.jsxs)(n.p,{children:["Lets update the completed ",(0,o.jsx)(n.code,{children:"TodoItem"})," we created earlier to not be completed."]}),"\n",(0,o.jsxs)(l.Z,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],children:[(0,o.jsx)(s.Z,{value:"graphql",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"mutation {\n  updateManyTodoItems(\n    input: { filter: { id: { in: [1, 2] } }, update: { completed: true } }\n  ) {\n    updatedCount\n  }\n}\n\n"})})}),(0,o.jsx)(s.Z,{value:"response",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "updateManyTodoItems": {\n      "updatedCount": 2\n    }\n  }\n}\n'})})})]}),"\n",(0,o.jsx)(n.p,{children:"You can check this by running the completed query from above."}),"\n",(0,o.jsx)(n.h3,{id:"delete-one-todoitem",children:"Delete One TodoItem"}),"\n",(0,o.jsxs)(n.p,{children:["Lets update delete the first ",(0,o.jsx)(n.code,{children:"TodoItem"}),"."]}),"\n",(0,o.jsxs)(l.Z,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],children:[(0,o.jsx)(s.Z,{value:"graphql",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"mutation {\n  deleteOneTodoItem(input: { id: 1 }) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n"})})}),(0,o.jsx)(s.Z,{value:"response",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "deleteOneTodoItem": {\n      "id": null,\n      "title": "Create One Todo Item",\n      "completed": true,\n      "created": "2020-01-13T09:44:41.176Z",\n      "updated": "2020-01-13T09:44:54.822Z"\n    }\n  }\n}\n'})})})]}),"\n",(0,o.jsx)(n.h3,{id:"delete-many-todoitems",children:"Delete Many TodoItems"}),"\n",(0,o.jsxs)(n.p,{children:["Lets update delete the create many todo items ",(0,o.jsx)(n.code,{children:"TodoItem"})," using a filter."]}),"\n",(0,o.jsxs)(l.Z,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],children:[(0,o.jsx)(s.Z,{value:"graphql",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:'mutation {\n  deleteManyTodoItems(\n    input: { filter: { title: { like: "Create Many Todo Items%" } } }\n  ) {\n    deletedCount\n  }\n}\n'})})}),(0,o.jsx)(s.Z,{value:"response",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "deleteManyTodoItems": {\n      "deletedCount": 2\n    }\n  }\n}\n'})})})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(7294);const r={},l=o.createContext(r);function s(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);