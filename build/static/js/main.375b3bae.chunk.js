(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__18cr8",control:"Checkout_control__1LqZC",total:"Checkout_total__27VWa",actions:"Checkout_actions__25Kxw",submit:"Checkout_submit__1dK4U",invalid:"Checkout_invalid__3pFuE",hr:"Checkout_hr__96pNo"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__C6Xzy",total:"Cart_total__1lofp",actions:"Cart_actions__1zwe3","button--alt":"Cart_button--alt__10M1B",button:"Cart_button__HmnRe"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3Bpfv",summary:"CartItem_summary__2w78I",price:"CartItem_price__3z_2v",amount:"CartItem_amount__1Z3Jx",actions:"CartItem_actions__3lSiU"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__1tCj7",icon:"HeaderCartButton_icon__9kzwJ",badge:"HeaderCartButton_badge__RZguG",bump:"HeaderCartButton_bump__3rQLH"}},,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__3kGH0",modal:"Modal_modal__2ei4W","slide-down":"Modal_slide-down__2yhHf"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__1X_vk","meals-appear":"AvailableMeals_meals-appear__3oS8S",mealsLoading:"AvailableMeals_mealsLoading__fqkj3",mealsError:"AvailableMeals_mealsError__2KIJR"}},function(e,t,n){e.exports={meal:"MealItem_meal__1fyzt",description:"MealItem_description__1xRr9",price:"MealItem_price__3bKSW"}},,function(e,t,n){e.exports={header:"Header_header__3zIiQ","main-image":"Header_main-image__2ffyb"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__3BVlR"}},function(e,t,n){e.exports={card:"Card_card__L7zvJ"}},function(e,t,n){e.exports={input:"Input_input__Hiqgt"}},function(e,t,n){e.exports={form:"MealItemForm_form__oUTG6"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),r=(n(27),n(2)),s=n(1),i=n.n(s),o=n(12),l=n(4),u=n(6),d=n.n(u),j=n(13),m=n.n(j),b=n(0),O=function(e){return Object(b.jsx)("div",{className:m.a.backdrop,onClick:e.onCloseCart})},h=function(e){return Object(b.jsx)("div",{className:m.a.modal,children:Object(b.jsx)("div",{className:m.a.content,children:e.children})})},x=document.getElementById("overlays"),p=function(e){return Object(b.jsxs)(b.Fragment,{children:[c.a.createPortal(Object(b.jsx)(O,{onCloseCart:e.onCloseCart}),x),c.a.createPortal(Object(b.jsx)(h,{children:e.children}),x)]})},f=n(5),_=n.n(f),v=i.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),C=n(7),y=n.n(C),N=function(e){var t="$".concat(e.price.toFixed(2));return Object(b.jsxs)("li",{className:y.a["cart-item"],children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:e.name}),Object(b.jsxs)("div",{className:y.a.summary,children:[Object(b.jsx)("span",{className:y.a.price,children:t}),Object(b.jsxs)("span",{className:y.a.amount,children:["x ",e.amount]})]})]}),Object(b.jsxs)("div",{className:y.a.actions,children:[Object(b.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(b.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},g=n(3),k=n.n(g),A=function(e){var t=Object(s.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useRef)(),o=Object(s.useRef)(),l=Object(s.useRef)(),u=Object(s.useRef)(),d=function(e){return""===e.trim()},j="".concat(k.a.control," ").concat(!a.name&&k.a.invalid),m="".concat(k.a.control," ").concat(!a.street&&k.a.invalid),O="".concat(k.a.control," ").concat(!a.postalCode&&k.a.invalid),h="".concat(k.a.control," ").concat(!a.city&&k.a.invalid);return Object(b.jsxs)("form",{className:k.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=o.current.value,r=l.current.value,s=document.getElementById("city").value,u=!d(n),j=!d(a),m=!d(s),b=5===r.trim().length;c({name:u,street:j,city:m,postalCode:b}),u&&j&&m&&b&&e.onConfirm({name:n,street:a,city:s,postalCode:r})},children:[Object(b.jsxs)("div",{className:j,children:[Object(b.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(b.jsx)("input",{type:"text",id:"name",ref:i}),!a.name&&Object(b.jsx)("p",{children:"Please enter a valid Name."})]}),Object(b.jsxs)("div",{className:m,children:[Object(b.jsx)("label",{htmlFor:"street",children:"Street"}),Object(b.jsx)("input",{type:"text",id:"street",ref:o}),!a.street&&Object(b.jsx)("p",{children:"Please enter a valid Street."})]}),Object(b.jsxs)("div",{className:O,children:[Object(b.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(b.jsx)("input",{type:"text",id:"postal",ref:l}),!a.postalCode&&Object(b.jsx)("p",{children:"Please enter a valid Postal Code (5 characters)."})]}),Object(b.jsxs)("div",{className:h,children:[Object(b.jsx)("label",{htmlFor:"city",children:"City"}),Object(b.jsx)("input",{type:"text",id:"city",ref:u}),!a.city&&Object(b.jsx)("p",{children:"Please enter a valid City."})]}),Object(b.jsx)("div",{className:k.a.hr}),Object(b.jsxs)("div",{className:k.a.total,children:[Object(b.jsx)("span",{children:"Total Amount"}),Object(b.jsx)("span",{children:e.totalAmount})]}),Object(b.jsxs)("div",{className:k.a.actions,children:[Object(b.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(b.jsx)("button",{className:k.a.submit,children:"Confirm"})]})]})},S=function(e){var t=Object(s.useContext)(v),n=Object(r.a)(t,1)[0],a=Object(s.useState)(!1),c=Object(r.a)(a,2),i=c[0],u=c[1],j=Object(s.useState)(!1),m=Object(r.a)(j,2),O=m[0],h=m[1],x=Object(s.useState)(!1),f=Object(r.a)(x,2),C=f[0],y=f[1],g="$".concat(n.totalAmount.toFixed(2)),k=n.items.length>0,S=function(e){n.removeItem(e)},w=function(e){n.addItem(Object(l.a)(Object(l.a)({},e),{},{amount:1}))},I=function(){var e=Object(o.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,fetch("https://first-31763-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:n.items})});case 3:h(!1),y(!0),n.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=Object(b.jsx)("ul",{className:_.a["cart-items"],children:n.items.map((function(e){return Object(b.jsx)(N,{name:e.name,price:e.price,amount:e.amount,onRemove:S.bind(null,e.id),onAdd:w.bind(null,e)},e.id)}))}),F=Object(b.jsxs)("div",{className:_.a.actions,children:[Object(b.jsx)("button",{className:_.a["button--alt"],onClick:e.onCloseCart,children:"Close"}),k&&Object(b.jsx)("button",{className:_.a.button,onClick:function(){u(!0)},children:"Order"})]}),R=Object(b.jsxs)(b.Fragment,{children:[!i&&Object(b.jsxs)(b.Fragment,{children:[M,Object(b.jsxs)("div",{className:_.a.total,children:[Object(b.jsx)("span",{children:"Total Amount"}),Object(b.jsx)("span",{children:g})]})]}),i&&Object(b.jsx)(A,{totalAmount:g,onConfirm:I,onCancel:e.onCloseCart}),!i&&F]}),H=Object(b.jsx)("p",{children:"Sending Order Data..."}),E=Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{children:"Successfully sent the order!"}),Object(b.jsx)("div",{className:_.a.actions,children:Object(b.jsx)("button",{className:_.a.button,onClick:e.onCloseCart,children:"Close"})})]});return Object(b.jsxs)(p,{onCloseCart:e.onCloseCart,children:[!O&&!C&&R,O&&H,C&&E]})},w=n(17),I=n.n(w),M=n.p+"static/media/meals.2971f633.jpg",F=n(10),R=n.n(F),H=function(){return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(b.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},E=function(e){var t=Object(s.useContext)(v),n=Object(r.a)(t,1)[0],a=Object(s.useState)(!1),c=Object(r.a)(a,2),i=c[0],o=c[1],l=void 0===n.items?0:n.items.reduce((function(e,t){return e+t.amount}),0),u="".concat(R.a.button," ").concat(i?R.a.bump:"");return Object(s.useEffect)((function(){if(0!==n.items.length){o(!0);var e=setTimeout((function(){o(!1)}),300);return function(){clearTimeout(e)}}}),[n.items]),Object(b.jsxs)("button",{className:u,onClick:e.onShowCart,children:[Object(b.jsx)("span",{className:R.a.icon,children:Object(b.jsx)(H,{})}),Object(b.jsx)("span",{children:"Your Cart"}),Object(b.jsx)("span",{className:R.a.badge,children:l})]})},B=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("header",{className:I.a.header,children:[Object(b.jsx)("h1",{children:"ReactMeals"}),Object(b.jsx)(E,{onShowCart:e.onShowCart})]}),Object(b.jsx)("div",{className:I.a["main-image"],children:Object(b.jsx)("img",{src:M,alt:"Food"})})]})},P=n(19),z=n.n(P),D=function(){return Object(b.jsxs)("section",{className:z.a.summary,children:[Object(b.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(b.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(b.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},T=n(14),L=n.n(T),J=n(20),V=n.n(J),q=function(e){return Object(b.jsx)("div",{className:V.a.card,children:e.children})},K=n(15),G=n.n(K),U=n(21),W=n.n(U),Y=i.a.forwardRef((function(e,t){return Object(b.jsxs)("div",{className:W.a.input,children:[Object(b.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(b.jsx)("input",Object(l.a)({ref:t},e.input))]})})),Z=n(22),$=n.n(Z),Q=function(e){var t=Object(s.useRef)(),n=Object(s.useState)(!0),a=Object(r.a)(n,2),c=a[0],i=a[1];return Object(b.jsxs)("form",{className:$.a.form,onSubmit:function(n){n.preventDefault();var a=t.current.value,c=+a;0===a.trim().length||c<0||c>5?i(!1):e.onAddToCart(c)},children:[Object(b.jsx)(Y,{ref:t,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(b.jsx)("button",{children:"+ Add"}),!c&&Object(b.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},X=function(e){var t=Object(s.useContext)(v),n=Object(r.a)(t,1)[0],a="$".concat(e.price.toFixed(2));return Object(b.jsxs)("li",{className:G.a.meal,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsx)("div",{className:G.a.description,children:e.description}),Object(b.jsx)("div",{className:G.a.price,children:a})]}),Object(b.jsx)("div",{children:Object(b.jsx)(Q,{onAddToCart:function(t){n.addItem({id:e.id,name:e.name,amount:t,price:e.price})},id:e.id})})]})},ee=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(!1),i=Object(r.a)(c,2),l=i[0],u=i[1],j=Object(s.useState)(),m=Object(r.a)(j,2),O=m[0],h=m[1];if(Object(s.useEffect)((function(){var e=function(){var e=Object(o.a)(d.a.mark((function e(){var t,n,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,fetch("https://first-31763-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Something went wrong!");case 6:return e.next=8,t.json();case 8:for(r in n=e.sent,c=[],n)c.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});a(c),u(!1),console.log(c);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){u(!1),h(e.message)}))}),[]),l)return Object(b.jsx)("section",{className:L.a.mealsLoading,children:Object(b.jsx)("p",{children:"Loading..."})});if(O)return Object(b.jsx)("section",{className:L.a.mealsError,children:Object(b.jsx)("p",{children:O})});var x=n.map((function(e){return Object(b.jsx)(X,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(b.jsx)("section",{className:L.a.meals,children:Object(b.jsx)(q,{children:Object(b.jsx)("ul",{children:x})})})},te=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(D,{}),Object(b.jsx)(ee,{})]})},ne=n(18),ae={items:[],totalAmount:0},ce=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var s=Object(l.a)(Object(l.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ne.a)(e.items))[c]=s}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var i,o=e.items.findIndex((function(e){return e.id===t.id})),u=e.items[o],d=e.totalAmount-u.price;if(1===u.amount)i=e.items.filter((function(e){return e.id!==t.id}));else{var j=Object(l.a)(Object(l.a)({},u),{},{amount:u.amount-1});(i=Object(ne.a)(e.items))[o]=j}return{items:i,totalAmount:d}}return t.type,ae},re=function(e){var t=Object(s.useReducer)(ce,ae),n=Object(r.a)(t,2),a=n[0],c=n[1],i=[{items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearCart:function(){c({type:"CLEAR"})}}];return Object(b.jsx)(v.Provider,{value:i,children:e.children})};var se=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)(re,{children:[n&&Object(b.jsx)(S,{onCloseCart:function(){a(!1)}}),Object(b.jsx)(B,{onShowCart:function(){a(!0)}}),Object(b.jsx)("main",{children:Object(b.jsx)(te,{})})]})};c.a.render(Object(b.jsx)(se,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.375b3bae.chunk.js.map