(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{322:function(e,t,n){"use strict";var a=n(3),r=n.n(a),o=(n(44),n(5)),c=n.n(o),i=(n(7),n(0)),s=n.n(i),l=n(15),u=n(58),d=n(59),p=n(4);function f(e){var t=e.children,n=e.className,a=e.compact,o=e.content,i=e.horizontal,h=e.piled,b=e.raised,m=e.size,O=e.stacked,y=c()("ui",m,Object(l.a)(a,"compact"),Object(l.a)(i,"horizontal"),Object(l.a)(h,"piled"),Object(l.a)(b,"raised"),Object(l.a)(O,"stacked"),"segments",n),g=Object(u.a)(f,e),j=Object(d.a)(f,e);return s.a.createElement(j,r()({},g,{className:y}),p.a.isNil(t)?o:t)}f.handledProps=["as","children","className","compact","content","horizontal","piled","raised","size","stacked"],f.propTypes={};var h=f;function b(e){var t=e.children,n=e.className,a=e.content,o=c()("inline",n),i=Object(u.a)(b,e),l=Object(d.a)(b,e);return s.a.createElement(l,r()({},i,{className:o}),p.a.isNil(t)?a:t)}b.handledProps=["as","children","className","content"],b.propTypes={};var m=b;function O(e){var t=e.attached,n=e.basic,a=e.children,o=e.circular,i=e.className,f=e.clearing,h=e.color,b=e.compact,m=e.content,y=e.disabled,g=e.floated,j=e.inverted,v=e.loading,x=e.placeholder,P=e.padded,T=e.piled,w=e.raised,_=e.secondary,E=e.size,N=e.stacked,k=e.tertiary,R=e.textAlign,z=e.vertical,M=c()("ui",h,E,Object(l.a)(n,"basic"),Object(l.a)(o,"circular"),Object(l.a)(f,"clearing"),Object(l.a)(b,"compact"),Object(l.a)(y,"disabled"),Object(l.a)(j,"inverted"),Object(l.a)(v,"loading"),Object(l.a)(x,"placeholder"),Object(l.a)(T,"piled"),Object(l.a)(w,"raised"),Object(l.a)(_,"secondary"),Object(l.a)(N,"stacked"),Object(l.a)(k,"tertiary"),Object(l.a)(z,"vertical"),Object(l.b)(t,"attached"),Object(l.b)(P,"padded"),Object(l.d)(R),Object(l.e)(g,"floated"),"segment",i),C=Object(u.a)(O,e),L=Object(d.a)(O,e);return s.a.createElement(L,r()({},C,{className:M}),p.a.isNil(a)?m:a)}O.handledProps=["as","attached","basic","children","circular","className","clearing","color","compact","content","disabled","floated","inverted","loading","padded","piled","placeholder","raised","secondary","size","stacked","tertiary","textAlign","vertical"],O.Group=h,O.Inline=m,O.propTypes={};t.a=O},405:function(e,t,n){var a;e.exports=(a=n(0),function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(1),c=(a=o)&&a.__esModule?a:{default:a},i=n(2),s=(0,i.oneOfType)([i.string,i.number]),l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));if(n.state={title:"",contents:""},n.handleTitle=function(e){n.setState({title:e.target.value})},n.handleContents=function(e){n.setState({contents:e.target.value})},!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n.props.to))throw new Error("Invalid email address");return n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.PureComponent),r(t,[{key:"render",value:function(){var e=this.props,t=e.to,n=e.className,a=e.titleMaxLength,r=e.titlePlaceholder,o=e.contentsRows,i=e.contentsMaxLength,s=e.contentsPlaceholder,l=e.buttonText;return c.default.createElement("div",{className:n},c.default.createElement("input",{type:"email",value:this.state.title,onChange:this.handleTitle,maxLength:a,placeholder:r}),c.default.createElement("textarea",{value:this.state.contents,onChange:this.handleContents,rows:o,maxLength:i,placeholder:s}),c.default.createElement("a",{href:"mailto:"+t+"?subject="+this.state.title+"&body="+this.state.contents.replace(/\n/g,"%0D%0A")},l))}}]),t}();l.propTypes={to:i.string.isRequired,className:i.string,titleMaxLength:s,titlePlaceholder:i.string,contentsRows:s,contentsMaxLength:s,contentsPlaceholder:i.string,buttonText:i.string},l.defaultProps={className:"",titleMaxLength:50,titlePlaceholder:"Title...",contentsRows:8,contentsMaxLength:500,contentsPlaceholder:"Contents...",buttonText:"Send E-mail"},t.default=l},function(e,t){e.exports=a},function(e,t,n){e.exports=n(3)()},function(e,t,n){"use strict";var a=n(4),r=n(5),o=n(6);e.exports=function(){function e(e,t,n,a,c,i){i!==o&&r(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=a,n.PropTypes=n,n}},function(e,t,n){"use strict";function a(e){return function(){return e}}var r=function(){};r.thatReturns=a,r.thatReturnsFalse=a(!1),r.thatReturnsTrue=a(!0),r.thatReturnsNull=a(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,n){"use strict";e.exports=function(e,t,n,a,r,o,c,i){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,a,r,o,c,i],u=0;(s=new Error(t.replace(/%s/g,function(){return l[u++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}]))},413:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var a=n(87),r=n(88),o=n(92),c=n(89),i=n(93),s=n(0),l=n.n(s),u=n(322),d=n(302),p=n(405),f=n.n(p),h=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(u.a,{textAlign:"center",id:"contact-container"},l.a.createElement(d.a,{style:{marginTop:"2rem"},id:"contact-header"},"To: elizabethlemk@gmail.com"),l.a.createElement(f.a,{to:"elizabethlemk@gmail.com",className:"contact-form",titlePlaceholder:"In regards to....",contentsPlaceholder:"Hi Elizabeth, I wanted to reach out about....",buttonText:"Submit"}))}}]),t}(l.a.Component)}}]);
//# sourceMappingURL=5.175c6afa.chunk.js.map