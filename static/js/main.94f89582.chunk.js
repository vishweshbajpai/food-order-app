(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__18cr8",control:"Checkout_control__1LqZC",total:"Checkout_total__27VWa",actions:"Checkout_actions__25Kxw",submit:"Checkout_submit__1dK4U",invalid:"Checkout_invalid__3pFuE",hr:"Checkout_hr__96pNo"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__C6Xzy",total:"Cart_total__1lofp",actions:"Cart_actions__1zwe3","button--alt":"Cart_button--alt__10M1B",button:"Cart_button__HmnRe"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3Bpfv",summary:"CartItem_summary__2w78I",price:"CartItem_price__3z_2v",amount:"CartItem_amount__1Z3Jx",actions:"CartItem_actions__3lSiU"}},function(e,t,n){e.exports={button:"HeaderCartButton_button__1tCj7",icon:"HeaderCartButton_icon__9kzwJ",badge:"HeaderCartButton_badge__RZguG",bump:"HeaderCartButton_bump__3rQLH",text:"HeaderCartButton_text__HHEVu"}},,,,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__3kGH0",modal:"Modal_modal__2ei4W","slide-down":"Modal_slide-down__2yhHf"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__1X_vk","meals-appear":"AvailableMeals_meals-appear__3oS8S",mealsLoading:"AvailableMeals_mealsLoading__fqkj3",mealsError:"AvailableMeals_mealsError__2KIJR"}},function(e,t,n){e.exports={meal:"MealItem_meal__1fyzt",description:"MealItem_description__1xRr9",price:"MealItem_price__3bKSW"}},,function(e,t,n){e.exports={header:"Header_header__3zIiQ","main-image":"Header_main-image__2ffyb"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__3BVlR"}},function(e,t,n){e.exports={card:"Card_card__L7zvJ"}},function(e,t,n){e.exports={input:"Input_input__Hiqgt"}},function(e,t,n){e.exports={form:"MealItemForm_form__oUTG6"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(9),c=n.n(a),r=(n(27),n(2)),s=n(1),i=n.n(s),o=n(12),l=n(4),u=n(6),j=n.n(u),d=n(13),m=n.n(d),b=n(0),O=function(e){return Object(b.jsx)("div",{className:m.a.backdrop,onClick:e.onCloseCart})},h=function(e){return Object(b.jsx)("div",{className:m.a.modal,children:Object(b.jsx)("div",{className:m.a.content,children:e.children})})},x=document.getElementById("overlays"),p=function(e){return Object(b.jsxs)(b.Fragment,{children:[c.a.createPortal(Object(b.jsx)(O,{onCloseCart:e.onCloseCart}),x),c.a.createPortal(Object(b.jsx)(h,{children:e.children}),x)]})},f=n(5),_=n.n(f),v=i.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),C=n(7),y=n.n(C),N=function(e){var t="".concat(e.price.toFixed(2));return Object(b.jsxs)("li",{className:y.a["cart-item"],children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:e.name}),Object(b.jsxs)("div",{className:y.a.summary,children:[Object(b.jsxs)("span",{className:y.a.price,children:["\u20b9",t]}),Object(b.jsxs)("span",{className:y.a.amount,children:["x ",e.amount]})]})]}),Object(b.jsxs)("div",{className:y.a.actions,children:[Object(b.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(b.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},g=n(3),A=n.n(g),k=function(e){var t=Object(s.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useRef)(),o=Object(s.useRef)(),l=Object(s.useRef)(),u=Object(s.useRef)(),j=function(e){return""===e.trim()},d="".concat(A.a.control," ").concat(!a.name&&A.a.invalid),m="".concat(A.a.control," ").concat(!a.street&&A.a.invalid),O="".concat(A.a.control," ").concat(!a.postalCode&&A.a.invalid),h="".concat(A.a.control," ").concat(!a.city&&A.a.invalid);return Object(b.jsxs)("form",{className:A.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=o.current.value,r=l.current.value,s=document.getElementById("city").value,u=!j(n),d=!j(a),m=!j(s),b=6===r.trim().length;c({name:u,street:d,city:m,postalCode:b}),u&&d&&m&&b&&e.onConfirm({name:n,street:a,city:s,postalCode:r})},children:[Object(b.jsxs)("div",{className:d,children:[Object(b.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(b.jsx)("input",{type:"text",id:"name",ref:i}),!a.name&&Object(b.jsx)("p",{children:"Please enter a valid Name."})]}),Object(b.jsxs)("div",{className:m,children:[Object(b.jsx)("label",{htmlFor:"street",children:"Street"}),Object(b.jsx)("input",{type:"text",id:"street",ref:o}),!a.street&&Object(b.jsx)("p",{children:"Please enter a valid Street."})]}),Object(b.jsxs)("div",{className:O,children:[Object(b.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(b.jsx)("input",{type:"text",id:"postal",ref:l}),!a.postalCode&&Object(b.jsx)("p",{children:"Please enter a valid Postal Code (6 characters)."})]}),Object(b.jsxs)("div",{className:h,children:[Object(b.jsx)("label",{htmlFor:"city",children:"City"}),Object(b.jsx)("input",{type:"text",id:"city",ref:u}),!a.city&&Object(b.jsx)("p",{children:"Please enter a valid City."})]}),Object(b.jsx)("div",{className:A.a.hr}),Object(b.jsxs)("div",{className:A.a.total,children:[Object(b.jsx)("span",{children:"Total Amount"}),Object(b.jsxs)("span",{children:["\u20b9",e.totalAmount]})]}),Object(b.jsxs)("div",{className:A.a.actions,children:[Object(b.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(b.jsx)("button",{className:A.a.submit,children:"Confirm"})]})]})},w=function(e){var t=Object(s.useContext)(v),n=Object(r.a)(t,1)[0],a=Object(s.useState)(!1),c=Object(r.a)(a,2),i=c[0],u=c[1],d=Object(s.useState)(!1),m=Object(r.a)(d,2),O=m[0],h=m[1],x=Object(s.useState)(!1),f=Object(r.a)(x,2),C=f[0],y=f[1],g="".concat(Math.abs(n.totalAmount.toFixed(2))),A=n.items.length>0,w=function(e){n.removeItem(e)},S=function(e){n.addItem(Object(l.a)(Object(l.a)({},e),{},{amount:1}))},I=function(){var e=Object(o.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,fetch("https://first-31763-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:n.items})});case 3:h(!1),y(!0),n.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=Object(b.jsx)("ul",{className:_.a["cart-items"],children:n.items.map((function(e){return Object(b.jsx)(N,{name:e.name,price:e.price,amount:e.amount,onRemove:w.bind(null,e.id),onAdd:S.bind(null,e)},e.id)}))}),F=Object(b.jsxs)("div",{className:_.a.actions,children:[Object(b.jsx)("button",{className:_.a["button--alt"],onClick:e.onCloseCart,children:"Close"}),A&&Object(b.jsx)("button",{className:_.a.button,onClick:function(){u(!0)},children:"Order"})]}),H=Object(b.jsxs)(b.Fragment,{children:[!i&&Object(b.jsxs)(b.Fragment,{children:[M,Object(b.jsxs)("div",{className:_.a.total,children:[Object(b.jsx)("span",{children:"Total Amount"}),Object(b.jsxs)("span",{children:["\u20b9",g]})]})]}),i&&Object(b.jsx)(k,{totalAmount:g,onConfirm:I,onCancel:e.onCloseCart}),!i&&F]}),R=Object(b.jsx)("p",{children:"Sending Order Data..."}),E=Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{children:"Successfully sent the order!"}),Object(b.jsx)("div",{className:_.a.actions,children:Object(b.jsx)("button",{className:_.a.button,onClick:e.onCloseCart,children:"Close"})})]});return Object(b.jsxs)(p,{onCloseCart:e.onCloseCart,children:[!O&&!C&&H,O&&R,C&&E]})},S=function(){return Object(b.jsx)("p",{style:{color:"white",textAlign:"center",marginBottom:"20px"},children:"Developed By: Vishwesh Bajpai"})},I=n(17),M=n.n(I),F=n.p+"static/media/meals.2971f633.jpg",H=n(8),R=n.n(H),E=function(){return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(b.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},B=function(e){var t=Object(s.useContext)(v),n=Object(r.a)(t,1)[0],a=Object(s.useState)(!1),c=Object(r.a)(a,2),i=c[0],o=c[1],l=void 0===n.items?0:n.items.reduce((function(e,t){return e+t.amount}),0),u="".concat(R.a.button," ").concat(i?R.a.bump:"");return Object(s.useEffect)((function(){if(0!==n.items.length){o(!0);var e=setTimeout((function(){o(!1)}),300);return function(){clearTimeout(e)}}}),[n.items]),Object(b.jsxs)("button",{className:u,onClick:e.onShowCart,children:[Object(b.jsx)("span",{className:R.a.icon,children:Object(b.jsx)(E,{})}),Object(b.jsx)("span",{className:R.a.text,children:"Your Cart"}),Object(b.jsx)("span",{className:R.a.badge,children:l})]})},P=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("header",{className:M.a.header,children:[Object(b.jsx)("h1",{children:"ReactMeals"}),Object(b.jsx)(B,{onShowCart:e.onShowCart})]}),Object(b.jsx)("div",{className:M.a["main-image"],children:Object(b.jsx)("img",{src:F,alt:"Food"})})]})},z=n(19),D=n.n(z),T=function(){return Object(b.jsxs)("section",{className:D.a.summary,children:[Object(b.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(b.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(b.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},L=n(14),J=n.n(L),V=n(20),q=n.n(V),K=function(e){return Object(b.jsx)("div",{className:q.a.card,children:e.children})},G=n(15),U=n.n(G),W=n(21),Y=n.n(W),Z=i.a.forwardRef((function(e,t){return Object(b.jsxs)("div",{className:Y.a.input,children:[Object(b.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(b.jsx)("input",Object(l.a)({ref:t},e.input))]})})),Q=n(22),X=n.n(Q),$=function(e){var t=Object(s.useRef)(),n=Object(s.useState)(!0),a=Object(r.a)(n,2),c=a[0],i=a[1];return Object(b.jsxs)("form",{className:X.a.form,onSubmit:function(n){n.preventDefault();var a=t.current.value,c=+a;0===a.trim().length||c<0||c>5?i(!1):e.onAddToCart(c)},children:[Object(b.jsx)(Z,{ref:t,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(b.jsx)("button",{children:"+ Add"}),!c&&Object(b.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},ee=function(e){var t=Object(s.useContext)(v),n=Object(r.a)(t,1)[0],a="".concat(e.price.toFixed(2));return Object(b.jsxs)("li",{className:U.a.meal,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsx)("div",{className:U.a.description,children:e.description}),Object(b.jsxs)("div",{className:U.a.price,children:["\u20b9",a]})]}),Object(b.jsx)("div",{children:Object(b.jsx)($,{onAddToCart:function(t){n.addItem({id:e.id,name:e.name,amount:t,price:e.price})},id:e.id})})]})},te=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(!1),i=Object(r.a)(c,2),l=i[0],u=i[1],d=Object(s.useState)(),m=Object(r.a)(d,2),O=m[0],h=m[1];if(Object(s.useEffect)((function(){var e=function(){var e=Object(o.a)(j.a.mark((function e(){var t,n,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,fetch("https://first-31763-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Something went wrong!");case 6:return e.next=8,t.json();case 8:for(r in n=e.sent,c=[],n)c.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});a(c),u(!1),console.log(c);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){u(!1),h(e.message)}))}),[]),l)return Object(b.jsx)("section",{className:J.a.mealsLoading,children:Object(b.jsx)("p",{children:"Loading..."})});if(O)return Object(b.jsx)("section",{className:J.a.mealsError,children:Object(b.jsx)("p",{children:O})});var x=n.map((function(e){return Object(b.jsx)(ee,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(b.jsx)("section",{className:J.a.meals,children:Object(b.jsx)(K,{children:Object(b.jsx)("ul",{children:x})})})},ne=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(T,{}),Object(b.jsx)(te,{})]})},ae=n(18),ce={items:[],totalAmount:0},re=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var s=Object(l.a)(Object(l.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ae.a)(e.items))[c]=s}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var i,o=e.items.findIndex((function(e){return e.id===t.id})),u=e.items[o],j=e.totalAmount-u.price;if(1===u.amount)i=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(l.a)(Object(l.a)({},u),{},{amount:u.amount-1});(i=Object(ae.a)(e.items))[o]=d}return{items:i,totalAmount:j}}return t.type,ce},se=function(e){var t=Object(s.useReducer)(re,ce),n=Object(r.a)(t,2),a=n[0],c=n[1],i=[{items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearCart:function(){c({type:"CLEAR"})}}];return Object(b.jsx)(v.Provider,{value:i,children:e.children})};var ie=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(se,{children:[n&&Object(b.jsx)(w,{onCloseCart:function(){a(!1)}}),Object(b.jsx)(P,{onShowCart:function(){a(!0)}}),Object(b.jsx)("main",{children:Object(b.jsx)(ne,{})}),Object(b.jsx)(S,{})]})})};c.a.render(Object(b.jsx)(ie,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.94f89582.chunk.js.map