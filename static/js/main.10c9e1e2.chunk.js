(this.webpackJsonplist=this.webpackJsonplist||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),s=n.n(i),o=n(5),a=n.n(o),r=(n(4),n(2)),d=function(e){var t=e.index,n=e.active,s=e.type,o=e.switcher,a=Object(i.useState)("collapsed"),d=Object(r.a)(a,2),l=d[0],j=d[1];return Object(c.jsx)("div",{className:"btn "+s+" "+("radio"===s?n:l),onClick:function(){console.log(t),"radio"===s?o(t):j("collapsed"===l?"unfold":"collapsed")}})};var l=function e(t){var n=t.index,o=t.nested,a=o.sections,l=o.options,j=Object(i.useState)(-1),p=Object(r.a)(j,2),u=p[0],b=p[1],x=Object(i.useState)(""),O=Object(r.a)(x,2),h=(O[0],O[1],[]);function f(e){return Number.isInteger(+e)?"":e}function m(e){b(e===u?-1:e)}function y(e){return e===u?"unfold":"collapsed"}function k(e,t){if("object"===typeof e&&null!==e)return Object(c.jsx)(d,{index:t,active:y(t),type:l.type,switcher:m},t)}function v(t,n){return"object"===typeof t&&null!==t&&0===Object.keys(t).length?Object(c.jsx)("ul",{className:"nestedList",children:Object(c.jsx)("li",{children:Object(c.jsx)("span",{children:"Empty list"})})}):"object"===typeof t&&null!==t?(n+=100,Object(c.jsx)("ul",{className:"nestedList",children:Object(c.jsx)(e,{index:n+100,nested:t},n)})):void 0}for(var g in a)n++,h.push(Object(c.jsxs)("li",{className:"object"===typeof a[g]&&"group",children:[k(a[g],n),Object(c.jsx)("span",{"data-group-name":l.caption||"",children:f(g)}),v(a[g],n)]}));return Object(c.jsx)(s.a.Fragment,{children:h})};var j=function(){var e={listName:"Nag\u0142\xf3wek drzewa wielowierszowy",mainList:{options:{caption:"Poddodzia\u0142",type:"radio"},sections:{1:{options:{caption:"Zesp\xf3\u0142",type:"checkbox"},sections:{HR:!1,Marketing:!1,Analitycy:{options:{caption:"Podzesp\xf3\u0142",type:"checkbox"},sections:{Kalendarz:!1,Kokpit:!1,Widok:!1,"R\xf3\u017cno\u015bci":!1,Szukaj:!1}},"Programi\u015bci":{options:{caption:"Podzesp\xf3\u0142",type:"checkbox"},sections:{"Front-end":!1,"Middle-front-end":!1,"Middle-end":!1,"Middle-back-end":!1,"Back-end":!1}}}},2:{},3:{},Niezrzeszeni:!1}}};return Object(c.jsx)(s.a.Fragment,{children:Object(c.jsx)("ul",{className:"main-list",children:Object(c.jsxs)("li",{children:[Object(c.jsx)(d,{type:"checkbox",index:"-10",active:"unfold",switcher:function(){return!1}},"1000"),Object(c.jsx)("span",{children:e.listName}),Object(c.jsx)("ul",{className:"nestedList",children:Object(c.jsx)(l,{index:0,nested:e.mainList})})]})})})};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root"))},4:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.10c9e1e2.chunk.js.map