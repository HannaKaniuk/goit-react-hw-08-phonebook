"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[220],{3939:function(t,e,n){n.d(e,{N:function(){return r}});var a={title:"SectionTitle_title__gZ1-f"},s=n(3329),r=function(t){var e=t.title,n=t.children;return(0,s.jsxs)("section",{className:a.section,children:[(0,s.jsx)("h1",{className:a.title,children:e}),n]})}},5173:function(t,e,n){n.r(e),n.d(e,{default:function(){return E}});n(1138);var a=n(4221),s="ContactsListItem_contactListItem__3Ppke",r="ContactsListItem_button_delete__AHx9n",c="ContactsListItem_icon__Qi9Cw",i="ContactsListItem_iconTel__E9arR",o=n(2942),u=n(2202),l=n(3329),m=function(t){var e=t.id,n=t.name,a=t.number,m=t.onDeleteContact;return(0,l.jsxs)("li",{className:s,children:[(0,l.jsx)(u.BKo,{className:i}),n,": ",a," ",(0,l.jsx)("button",{className:r,type:"button",onClick:function(){return m(e)},children:(0,l.jsx)(o.kAP,{className:c})})]})},d=n(4420),_="ContactList_contactList__n4ZkG",f=n(3634),b=n(3553),p=function(t){return t.contacts.contacts},h=function(t){return t.filter.filter},x=function(t){return t.contacts.isLoading},C=function(t){return t.contacts.error},j=(0,b.P1)([p,h],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),v=function(){var t=(0,d.I0)(),e=(0,d.v9)(j),n=function(e){return t((0,f.GK)(e))};return(0,l.jsx)("ul",{className:_,children:e.map((function(t){var e=t.id,a=t.name,s=t.number;return(0,l.jsx)(m,{id:e,name:a,number:s,onDeleteContact:n},e)}))})},N=n(3939),w={subtitle:"SectionSubtitle_subtitle__Eh57z",subtitleIcon:"SectionSubtitle_subtitleIcon__7Z+Cz"},k=n(5804),I=function(t){t.subtitle;var e=t.children;return(0,l.jsxs)("section",{className:w.section,children:[(0,l.jsx)("h1",{className:w.subtitle,children:(0,l.jsx)(k.DRM,{className:w.subtitleIcon})}),e]})},L=n(9439),y={formContact:"ContactForm_formContact__RTRHN",input:"ContactForm_input__TWImw",button_add:"ContactForm_button_add__cPWQT"},g=n(2791),F=function(){var t=(0,g.useState)(""),e=(0,L.Z)(t,2),n=e[0],s=e[1],r=(0,g.useState)(""),c=(0,L.Z)(r,2),i=c[0],o=c[1],u=(0,d.v9)(p),m=(0,d.I0)(),_=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":s(a);break;case"number":o(a);break;default:return}};return(0,l.jsxs)("form",{className:y.formContact,onSubmit:function(t){t.preventDefault(),u.some((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?a.fn.info("".concat(n," is already in contacts.")):(m((0,f.uK)({name:n,number:i})),s(""),o(""))},children:[(0,l.jsxs)("label",{className:y.label,children:["Name",(0,l.jsx)("input",{className:y.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:n,onChange:_,required:!0})]}),(0,l.jsxs)("label",{className:y.label,children:["Number",(0,l.jsx)("input",{className:y.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:i,onChange:_,required:!0})]}),(0,l.jsx)("button",{className:y.button_add,type:"submit",children:"Add contact"})]})},Z="Filter_wrapperFilter__RUcfr",A="Filter_filterInput__1Cysk",S="Filter_label__vEd1E",R=n(4808),T=function(){var t=(0,d.v9)(h),e=(0,d.I0)();return(0,l.jsx)("div",{className:Z,children:(0,l.jsxs)("label",{className:S,children:["Find contacts by name",(0,l.jsx)("input",{className:A,type:"text",name:"filter",value:t,onChange:function(t){var n=t.currentTarget.value.toLowerCase();e((0,R.T)(n))}})]})})},z=n(985),E=function(){var t=(0,d.I0)(),e=(0,d.v9)(x),n=(0,d.v9)(C);return(0,g.useEffect)((function(){t((0,f.yF)())}),[t]),(0,l.jsxs)("div",{className:z.Z.wrapper,children:[(0,l.jsx)(a.mh,{}),(0,l.jsx)(N.N,{title:"Phonebook"}),(0,l.jsx)(F,{}),(0,l.jsx)(I,{subtitle:"Contacts"}),(0,l.jsx)(T,{}),e&&!n&&(0,l.jsx)("b",{children:"Request in progress..."}),(0,l.jsx)(v,{})]})}},985:function(t,e){e.Z={wrapper:"Contacts_wrapper__s7EJR",text:"Contacts_text__kop-x"}}}]);
//# sourceMappingURL=220.83f1c813.chunk.js.map