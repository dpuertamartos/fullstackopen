(this.webpackJsonptelephone=this.webpackJsonptelephone||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var a=t(17),c=t.n(a),o=t(8),u=t(3),r=t(2),i=t(4),l=t.n(i),s="/api/persons",d=function(){return l.a.get(s).then((function(e){return e.data}))},j=function(e){return l.a.post(s,e).then((function(e){return e.data}))},b=function(e,n){return l.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},h=function(e){return l.a.delete("".concat(s,"/").concat(e)).then((function(e){return e.data}))},m=t(0),f=function(e){var n=e.message;return null===n?null:Object(m.jsx)("div",{className:"notification",children:n})},O=function(e){var n=e.message;return null===n?null:Object(m.jsx)("div",{className:"error",children:n})},v=function(e){var n=e.name,t=e.handle;return Object(m.jsxs)("form",{children:["filter shown with : ",Object(m.jsx)("input",{value:n,onChange:t})]})},g=function(e){var n=e.onSubmit,t=e.namevalue,a=e.nameonChange,c=e.telvalue,o=e.telonChange;return Object(m.jsxs)("form",{onSubmit:n,children:[Object(m.jsxs)("div",{children:["name: ",Object(m.jsx)("input",{value:t,onChange:a})]}),Object(m.jsxs)("div",{children:["telephone: ",Object(m.jsx)("input",{value:c,onChange:o})]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{type:"submit",children:"add"})})]})},p=function(e){var n=e.persons,t=e.nameFilter,a=e.handleRemove;return n.map((function(e){return!0===e.name.toLowerCase().includes(t.toLowerCase())?Object(m.jsxs)("div",{children:[e.name," ",e.number," ",Object(m.jsx)("button",{onClick:function(){return a(e)},children:"delete"})]},e.id):console.log("No match")}))},x=function(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(""),i=Object(u.a)(c,2),l=i[0],s=i[1],x=Object(r.useState)(""),w=Object(u.a)(x,2),C=w[0],S=w[1],y=Object(r.useState)(""),k=Object(u.a)(y,2),N=k[0],T=k[1],D=Object(r.useState)(null),E=Object(u.a)(D,2),F=E[0],J=E[1],L=Object(r.useState)(null),R=Object(u.a)(L,2),B=R[0],I=R[1];Object(r.useEffect)((function(){d().then((function(e){console.log("show all telephones"),a(e)}))}),[]),console.log("render",t.length,"persons");return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Phonebook"}),Object(m.jsx)(f,{message:F}),Object(m.jsx)(O,{message:B}),Object(m.jsx)(v,{name:N,handle:function(e){console.log(e.target.value),T(e.target.value)}}),Object(m.jsx)("h2",{children:"add a new"}),Object(m.jsx)(g,{onSubmit:function(e){e.preventDefault();var n={name:l,number:C,id:t.slice(-1).id+1};if(!0===t.map((function(e){return e.name})).includes(n.name)){var c=t.find((function(e){return e.name===n.name})),u=Object(o.a)(Object(o.a)({},c),{},{number:n.number});window.confirm("".concat(n.name," is already in the database, do you want to\n      update the number?"))&&b(c.id,u).then((function(e){a(t.map((function(n){return n.id!==c.id?n:e}))),J("telephone updated"),setTimeout((function(){J(null)}),3e3)})).catch((function(e){I("Telephone of '".concat(c.name,"' was already removed from server")),setTimeout((function(){I(null)}),5e3),a(t.filter((function(e){return e.id!==c.id})))}))}else j(n).then((function(e){a(t.concat(e)),s(""),S(""),J("telephone added"),setTimeout((function(){J(null)}),3e3)})),console.log("success adding");console.log("add button clicked",e.target)},namevalue:l,nameonChange:function(e){console.log(e.target.value),s(e.target.value)},telvalue:C,telonChange:function(e){console.log(e.target.value),S(e.target.value)}}),Object(m.jsx)("h2",{children:"Numbers"}),Object(m.jsx)(p,{persons:t,nameFilter:N,handleRemove:function(e){window.confirm("Do you want to remove ".concat(e.name,"?"))&&h(e.id).then(a(t.filter((function(n){return n.id!==e.id}))))}})]})};t(41);c.a.render(Object(m.jsx)(x,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.1e86e814.chunk.js.map