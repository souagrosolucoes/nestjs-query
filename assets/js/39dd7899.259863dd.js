"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[5420],{6837:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=t(4848),o=t(8453);t(1470),t(9365);const a={title:"v0.10.x to v0.11.x"},u=void 0,i={id:"migration-guides/v0.10.x-to-v0.11.x",title:"v0.10.x to v0.11.x",description:"@InjectQueryService",source:"@site/docs/migration-guides/v0.10.x-to-v0.11.x.mdx",sourceDirName:"migration-guides",slug:"/migration-guides/v0.10.x-to-v0.11.x",permalink:"/nestjs-query/docs/migration-guides/v0.10.x-to-v0.11.x",draft:!1,unlisted:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/migration-guides/v0.10.x-to-v0.11.x.mdx",tags:[],version:"current",frontMatter:{title:"v0.10.x to v0.11.x"},sidebar:"docs",previous:{title:"v0.12.x to v0.13.x",permalink:"/nestjs-query/docs/migration-guides/v0.12.x-to-v0.13.x"},next:{title:"v0.5.x to v0.6.x",permalink:"/nestjs-query/docs/migration-guides/v0.5.x-to-v0.6.x"}},s={},l=[{value:"<code>@InjectQueryService</code>",id:"injectqueryservice",level:3}];function c(e){const r={admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h3,{id:"injectqueryservice",children:(0,n.jsx)(r.code,{children:"@InjectQueryService"})}),"\n",(0,n.jsxs)(r.p,{children:["In ",(0,n.jsx)(r.code,{children:"v0.11.x"})," an new decorator was added ",(0,n.jsx)(r.code,{children:"@InjectQueryService"}),", this decorator replaces the ORM specific decorators:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"@InjectTypeOrmQueryService"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"@InjectSequelizeQueryService"})}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["To migrate replace all ",(0,n.jsx)(r.code,{children:"@InjectTypeOrmQueryService"})," and ",(0,n.jsx)(r.code,{children:"@InjectSequelizeQueryService"})," with ",(0,n.jsx)(r.code,{children:"@InjectQueryService"}),"."]}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsxs)(r.p,{children:["You still need to import the ",(0,n.jsx)(r.code,{children:"NestjsQueryTypeOrmModule"})," or ",(0,n.jsx)(r.code,{children:"NestjsQuerySequelizeModule"})," to use ",(0,n.jsx)(r.code,{children:"@InjectQueryService"}),"."]})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"import { QueryService, InjectQueryService } from '@souagrosolucoes/nestjs-query-core';\nimport { CRUDResolver } from '@souagrosolucoes/nestjs-query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO) {\n  constructor(@InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>) {\n    super(service);\n  }\n}\n"})})]})}function d(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},9365:(e,r,t)=>{t.d(r,{A:()=>u});t(6540);var n=t(4164);const o={tabItem:"tabItem_Ymn6"};var a=t(4848);function u(e){var r=e.children,t=e.hidden,u=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,u),hidden:t,children:r})}},1470:(e,r,t)=>{t.d(r,{A:()=>I});var n=t(6540),o=t(4164),a=t(3104),u=t(6347),i=t(205),s=t(7485),l=t(1682),c=t(8760);function d(e){var r,t;return null!=(r=null==(t=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?r:[]}function v(e){var r=e.values,t=e.children;return(0,n.useMemo)((function(){var e=null!=r?r:function(e){return d(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(t);return function(e){var r=(0,l.XI)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,t])}function m(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function f(e){var r=e.queryString,t=void 0!==r&&r,o=e.groupId,a=(0,u.W6)(),i=function(e){var r=e.queryString,t=void 0!==r&&r,n=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:o});return[(0,s.aZ)(i),(0,n.useCallback)((function(e){if(i){var r=new URLSearchParams(a.location.search);r.set(i,e),a.replace(Object.assign({},a.location,{search:r.toString()}))}}),[i,a])]}function p(e){var r,t,o,a,u=e.defaultValue,s=e.queryString,l=void 0!==s&&s,d=e.groupId,p=v(e),h=(0,n.useState)((function(){return function(e){var r,t=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var o=null!=(r=n.find((function(e){return e.default})))?r:n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:u,tabValues:p})})),x=h[0],b=h[1],j=f({queryString:l,groupId:d}),g=j[0],y=j[1],I=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,c.Dv)(r),o=t[0],a=t[1],[o,(0,n.useCallback)((function(e){r&&a.set(e)}),[r,a])]),S=I[0],T=I[1],q=function(){var e=null!=g?g:S;return m({value:e,tabValues:p})?e:null}();return(0,i.A)((function(){q&&b(q)}),[q]),{selectedValue:x,selectValue:(0,n.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),T(e)}),[y,T,p]),tabValues:p}}var h=t(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(4848);function j(e){var r=e.className,t=e.block,n=e.selectedValue,u=e.selectValue,i=e.tabValues,s=[],l=(0,a.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var r=e.currentTarget,t=s.indexOf(r),o=i[t].value;o!==n&&(l(r),u(o))},d=function(e){var r,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var n,o=s.indexOf(e.currentTarget)+1;t=null!=(n=s[o])?n:s[0];break;case"ArrowLeft":var a,u=s.indexOf(e.currentTarget)-1;t=null!=(a=s[u])?a:s[s.length-1]}null==(r=t)||r.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},r),children:i.map((function(e){var r=e.value,t=e.label,a=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:function(e){return s.push(e)},onKeyDown:d,onClick:c},a,{className:(0,o.A)("tabs__item",x.tabItem,null==a?void 0:a.className,{"tabs__item--active":n===r}),children:null!=t?t:r}),r)}))})}function g(e){var r=e.lazy,t=e.children,a=e.selectedValue,u=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){var i=u.find((function(e){return e.props.value===a}));return i?(0,n.cloneElement)(i,{className:(0,o.A)("margin-top--md",i.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:u.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})}))})}function y(e){var r=p(e);return(0,b.jsxs)("div",{className:(0,o.A)("tabs-container",x.tabList),children:[(0,b.jsx)(j,Object.assign({},r,e)),(0,b.jsx)(g,Object.assign({},r,e))]})}function I(e){var r=(0,h.A)();return(0,b.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(r))}},8453:(e,r,t)=>{t.d(r,{R:()=>u,x:()=>i});var n=t(6540);const o={},a=n.createContext(o);function u(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:u(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);