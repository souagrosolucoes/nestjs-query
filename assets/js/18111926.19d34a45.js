"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[6586],{6776:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=t(5893),o=t(1151);const r={title:"Serialization"},i=void 0,a={id:"persistence/sequelize/serialization",title:"Serialization",description:"Using class-transformer is a popular libarary used in nestjs, unfortunately class-transformer does not place nicely with sequelize models.",source:"@site/docs/persistence/sequelize/serialization.md",sourceDirName:"persistence/sequelize",slug:"/persistence/sequelize/serialization",permalink:"/nestjs-query/docs/persistence/sequelize/serialization",draft:!1,unlisted:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/persistence/sequelize/serialization.md",tags:[],version:"current",frontMatter:{title:"Serialization"},sidebar:"docs",previous:{title:"Custom Service",permalink:"/nestjs-query/docs/persistence/sequelize/custom-service"},next:{title:"Getting Started",permalink:"/nestjs-query/docs/persistence/mongoose/getting-started"}},c={},l=[];function d(e){const s={a:"a",code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Using ",(0,n.jsx)(s.code,{children:"class-transformer"})," is a popular libarary used in ",(0,n.jsx)(s.code,{children:"nestjs"}),", unfortunately ",(0,n.jsx)(s.code,{children:"class-transformer"})," does not place nicely with ",(0,n.jsx)(s.code,{children:"sequelize"})," models."]}),"\n",(0,n.jsxs)(s.p,{children:["For most use cases ",(0,n.jsx)(s.code,{children:"nestjs-query"})," will take care of the serialization for you through ",(0,n.jsx)(s.a,{href:"/nestjs-query/docs/concepts/advanced/assemblers",children:"assemblers"}),". If you find yourself in a situation where you want to use ",(0,n.jsx)(s.code,{children:"class-transformer"})," with a model you should use the following patterns."]}),"\n",(0,n.jsxs)(s.p,{children:["To convert your DTO into a model you can use the ",(0,n.jsx)(s.code,{children:"build"})," method on the model."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"TodoItemEntity.build(todoItemDTO);\n"})}),"\n",(0,n.jsx)(s.p,{children:"When converting your entity into a DTO you can use the following."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"const dto = plainToClass(TodoItemDTO, todoItemEntity.get({ plain: true }));\n"})})]})}function u(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>i});var n=t(7294);const o={},r=n.createContext(o);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);