"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[68966],{93981:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),c=n(66816),l=n(71871),i=["components"],s={keywords:["value","Synchronous functions","function descriptor","smart contract chain","views","funcs"],description:"Synchronous calls can only be made between contracts that are running on the same contract chain. When calling a smart contract function you can only access the memory assigned to that specific smart contract, the only way to share data between smart contracts that call each other is through function parameters and return values.",image:"/img/logo/WASP_logo_dark.png"},u="Calling Functions",d={unversionedId:"guide/schema/call",id:"guide/schema/call",isDocsHomePage:!1,title:"Calling Functions",description:"Synchronous calls can only be made between contracts that are running on the same contract chain. When calling a smart contract function you can only access the memory assigned to that specific smart contract, the only way to share data between smart contracts that call each other is through function parameters and return values.",source:"@site/external/wasp/documentation/docs/guide/schema/call.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/call",permalink:"/wasp/guide/schema/call",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/schema/call.mdx",tags:[],version:"current",frontMatter:{keywords:["value","Synchronous functions","function descriptor","smart contract chain","views","funcs"],description:"Synchronous calls can only be made between contracts that are running on the same contract chain. When calling a smart contract function you can only access the memory assigned to that specific smart contract, the only way to share data between smart contracts that call each other is through function parameters and return values.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Function Descriptors",permalink:"/wasp/guide/schema/funcdesc"},next:{title:"Posting Asynchronous Requests",permalink:"/wasp/guide/schema/post"}},p=[],m={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"calling-functions"},"Calling Functions"),(0,o.kt)("p",null,"Synchronous function calls between smart contracts act very similar to how normal function\ncalls work in any programming language, but with a slight twist. With normal function\ncalls you share all the global memory that you can access with every function that you\ncall. However, when calling a smart contract function you can only access the memory\nassigned to that specific smart contract. Remember, each smart contract runs in its own\nsandbox environment. Therefore, the only way to share data between smart contracts that\ncall each other is through function parameters and return values."),(0,o.kt)("p",null,"Synchronous calls can only be made between contracts that are running on the same contract\nchain. The ISCP host knows about all the contracts it is running on a chain, and therefore\nis able to dispatch the call to the correct contract function. The function descriptor is\nused to specify the call parameters (if any) through its ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," proxy, and to invoke the\nfunction through its ",(0,o.kt)("inlineCode",{parentName:"p"},"func")," interface."),(0,o.kt)("p",null,"In addition, when the function that is called is not a ",(0,o.kt)("a",{parentName:"p",href:"/wasp/guide/schema/views"},"View"),", it is possible\nto pass tokens to the function call through this interface. Note that the only way to call\na function and properly pass tokens to it ",(0,o.kt)("em",{parentName:"p"},"within the same chain")," is through the function\ndescriptor. Otherwise, the incoming() function will not register any incoming tokens."),(0,o.kt)("p",null,"When the call is made, the calling function will be paused and wait for the called\nfunction to complete. After completion, it may access the returned values (if any) through\nthe ",(0,o.kt)("a",{parentName:"p",href:"/wasp/guide/schema/results"},(0,o.kt)("inlineCode",{parentName:"a"},"results")," proxy")," of the function descriptor."),(0,o.kt)("p",null,"When calling a function from a View function, it is only possible to call other View\nfunctions. The ScFuncs interface enforces this at compile-time through the ISCP function\ncontext that needs to be passed to the function that creates the function descriptor."),(0,o.kt)("p",null,"Here's how a smart contract would tell a ",(0,o.kt)("inlineCode",{parentName:"p"},"dividend")," contract on the same chain to divide\nthe 1000 tokens it passes to the function:"),(0,o.kt)(c.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"f := dividend.ScFuncs.Divide(ctx)\nf.Func.TransferIotas(1000).Call()\n"))),(0,o.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"let f = dividend::ScFuncs::divide(ctx);\nf.func.transfer_iotas(1000).call();\n"))),(0,o.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let f = dividend.ScFuncs.divide(ctx);\nf.func.transferIotas(1000).call();\n")))),(0,o.kt)("p",null,"And here is how a smart contract would ask a ",(0,o.kt)("inlineCode",{parentName:"p"},"dividend")," contract on the same chain to\nreturn the dispersion factor for a specific address:"),(0,o.kt)(c.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"f := dividend.ScFuncs.GetFactor(ctx)\nf.Params.Address().SetValue(address)\nf.Func.Call()\nfactor := f.Results.Factor().Value()\n"))),(0,o.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"let f = dividend::ScFuncs::get_factor(ctx);\nf.params.address().set_value(&address);\nf.func.call();\nlet factor = f.results.factor().value();\n"))),(0,o.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let f = dividend.ScFuncs.getFactor(ctx);\nf.params.address().setValue(address);\nf.func.call();\nlet factor = f.results.factor().value();\n")))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a function descriptor for the desired function."),(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"params")," proxy in the function descriptor to set any required parameters."),(0,o.kt)("li",{parentName:"ol"},"Direct the ",(0,o.kt)("inlineCode",{parentName:"li"},"func")," member of the function descriptor to call the associated function"),(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"results")," proxy in the function descriptor to retrieve any results we are\ninterested in.")),(0,o.kt)("p",null,'The function descriptors assume that the function to be called is associated with the\ndefault Hname of the contract, in this case ScHname::new("dividend"). If you deployed the\ncontract that contains the function you want to call under a different name, then you\nwould have to provide its associated Hname to the ',(0,o.kt)("inlineCode",{parentName:"p"},"func")," member through the of_contract()\nmember function like this:"),(0,o.kt)(c.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'altContract := NewScHname("alternateName")\nf := dividend.ScFuncs.Divide(ctx)\nf.Func.OfContract(altContract).TransferIotas(1000).Call()\n'))),(0,o.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let alt_contract = ScHname::new("alternateName");\nlet f = dividend::ScFuncs::divide(ctx);\nf.func.of_contract(alt_contract).transfer_iotas(1000).call();\n'))),(0,o.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'let altContract = ScHname.fromString("alternateName");\nlet f = dividend.ScFuncs.divide(ctx);\nf.func.ofContract(altContract).transferIotas(1000).call();\n')))),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/wasp/guide/schema/post"},"next section")," we will look at how we can request smart contract functions in a\ndifferent chain to be executed in a similar way."))}f.isMDXComponent=!0},71871:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},66816:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(87462),r=n(67294),o=n(5730),c=n(54179);var l=function(){var e=(0,r.useContext)(c.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86881),s=n(86010),u="tabItem_1uMI";function d(e){var t,n,a,o=e.lazy,c=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=h[0])?void 0:a.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),k=b.tabGroupChoices,w=b.setTabGroupChoices,T=(0,r.useState)(y),N=T[0],x=T[1],C=[],S=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=k[m];null!=O&&O!==N&&v.some((function(e){return e.value===O}))&&x(O)}var I=function(e){var t=e.currentTarget,n=C.indexOf(t),a=v[n].value;a!==N&&(S(t),x(a),null!=m&&w(m,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},f)},v.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,s.Z)("tabs__item",u,{"tabs__item--active":N===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:E,onFocus:I,onClick:I},null!=n?n:t)}))),o?(0,r.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function p(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},54179:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,c(c({ref:t},u),{},{components:n})):a.createElement(f,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);