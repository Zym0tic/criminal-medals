(this["webpackJsonpcriminal-medals"]=this["webpackJsonpcriminal-medals"]||[]).push([[0],{79:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(63),s=a.n(r),i=(a(79),a(10)),A=a(68),o=a(95),l=a(97),d=a(94),j=a(65),b=a(11),u=a(6),m=a.p+"static/media/jumbotron.1010229c.jpg",h=a(0);var O,p,g,x=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("img",{className:"banner",src:m,alt:"criminal medals logo over image of jewlery"}),Object(h.jsx)("div",{className:"centered",children:Object(h.jsx)("h1",{children:"Criminal Medals"})})]})},v=a.p+"static/media/bracelet.d8378cdd.PNG",w=a.p+"static/media/sterling.b5053482.PNG",f=a.p+"static/media/cord.63fe827f.PNG",N=a.p+"static/media/rings.fe802ffa.PNG",k=a.p+"static/media/chain.a372f276.PNG",B=a.p+"static/media/earring.0a64556c.PNG",y=function(){return Object(h.jsxs)("section",{id:"collections-list",children:[Object(h.jsx)("h2",{className:"collections-heading",children:"Collection List"}),Object(h.jsx)("div",{className:"container-fluid c-list-links",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-lg-4 col-md-6 col-xs-12",children:Object(h.jsx)(b.b,{to:"sterling",children:Object(h.jsx)("img",{className:"collections",src:w,alt:"sterling silver collection"})})}),Object(h.jsx)("div",{className:"col-lg-4 col-md-6 col-xs-12",children:Object(h.jsx)(b.b,{to:"cord-necklaces",children:Object(h.jsx)("img",{className:"collections",src:f,alt:"cord collection"})})}),Object(h.jsx)("div",{className:"col-lg-4 col-md-6 col-xs-12",children:Object(h.jsx)(b.b,{to:"rings",children:Object(h.jsx)("img",{className:"collections",src:N,alt:"ring collection"})})}),Object(h.jsx)("div",{className:"col-lg-4 col-md-6 col-xs-12",children:Object(h.jsx)(b.b,{to:"chains",children:Object(h.jsx)("img",{className:"collections",src:k,alt:"chain collection"})})}),Object(h.jsx)("div",{className:"col-lg-4 col-md-6 col-xs-12",children:Object(h.jsx)(b.b,{to:"bracelets",children:Object(h.jsx)("img",{className:"collections",src:v,alt:"bracelet collection"})})}),Object(h.jsx)("div",{className:"col-lg-4 col-md-6 col-xs-12",children:Object(h.jsx)(b.b,{to:"earrings",children:Object(h.jsx)("img",{className:"collections",src:B,alt:"earring collection"})})})]})})]})},C=a.p+"static/media/market-img.c2221be1.jpg",I=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("section",{id:"instagram",children:Object(h.jsxs)("div",{className:"insta-row row",children:[Object(h.jsx)("div",{className:"col-lg-6",children:Object(h.jsx)("img",{className:"market-img",src:C,alt:""})}),Object(h.jsxs)("div",{className:"col-lg-6",children:[Object(h.jsx)("h2",{className:"insta-content insta-header",children:"Criminal Medals on Instagram"}),Object(h.jsx)("p",{className:"insta-content insta-para",children:"For the most up to date information check out our instagram and give it a follow! Lots of vending dates coming up to see off summer, new releases, and giveaways!"}),Object(h.jsx)("a",{rel:"",href:"https://www.instagram.com/criminalmedals/",className:"btn btn-outline-light btn-lg insta-button",role:"button","aria-pressed":"true",children:"Instagram"})]})]})})})},Q=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x,{}),Object(h.jsx)(y,{}),Object(h.jsx)(I,{})]})},E=a(15),S=a(9),R=a(16),D=a(7),F=a(90),G=a(27),T=a(26),M=a(54),Z=a.n(M),Y=new(function(){function e(){Object(G.a)(this,e)}return Object(T.a)(e,[{key:"getProfile",value:function(){return Z()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"adminCheck",value:function(){var e=this.getAdmin();if("true"==e)return!!e;console.log(e)}},{key:"adminAuth",value:function(e){localStorage.setItem("admin_token",e),window.location.assign("/")}},{key:"isTokenExpired",value:function(e){try{return Z()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"getAdmin",value:function(){return localStorage.getItem("admin_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),localStorage.removeItem("admin_token"),window.location.assign("/")}}]),e}()),H=a(25),K=a(96),P=Object(K.a)(O||(O=Object(H.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        isAdmin\n      }\n    }\n  }\n"]))),W=(Object(K.a)(p||(p=Object(H.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),Object(K.a)(g||(g=Object(H.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])))),L=function(){var e=Object(n.useState)({email:"",firstName:"",lastName:"",password:""}),t=Object(D.a)(e,2),a=t[0],c=t[1],r=Object(F.a)(W),s=Object(D.a)(r,2),A=s[0],o=s[1],l=(o.error,o.data,function(){var e=Object(R.a)(Object(S.a)().mark((function e(t){var n,c,r,s;return Object(S.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,A({variables:{email:a.email,password:a.password,firstName:a.firstName,lastName:a.lastName}});case 3:return n=e.sent,c=n.data.addUser.token,Y.login(c),t.preventDefault(),console.log(a),e.prev=8,e.next=11,A({variables:Object(i.a)({},a)});case 11:r=e.sent,s=r.data,Y.login(s.addUser.token),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(8),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[8,16]])})));return function(t){return e.apply(this,arguments)}}()),d=function(e){var t=e.target,n=t.name,r=t.value;c(Object(i.a)(Object(i.a)({},a),{},Object(E.a)({},n,r)))};return Object(h.jsxs)("div",{className:"container my-1",children:[Object(h.jsx)(b.b,{to:"/login",children:"\u2190 Go to Login"}),Object(h.jsx)("h2",{children:"Signup"}),Object(h.jsxs)("form",{onSubmit:l,children:[Object(h.jsxs)("div",{className:"form-group col-md-12 col-lg-6",children:[Object(h.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(h.jsx)("input",{className:"form-control",placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:d})]}),Object(h.jsxs)("div",{className:"form-group col-md-12 col-lg-6",children:[Object(h.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(h.jsx)("input",{className:"form-control",placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:d})]}),Object(h.jsxs)("div",{className:"form-group col-md-12 col-lg-6",children:[Object(h.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(h.jsx)("input",{className:"form-control",placeholder:"youremail@email.com",name:"email",type:"email",id:"email",onChange:d})]}),Object(h.jsxs)("div",{className:"form-group col-md-12 col-lg-6",children:[Object(h.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(h.jsx)("input",{className:"form-control",placeholder:"******",name:"password",type:"password",id:"pwd",onChange:d})]}),Object(h.jsx)("div",{className:"flex-row flex-start",children:Object(h.jsx)("button",{className:"btn btn-outline-dark btn-lg",type:"submit",children:"Submit"})})]})]})};var U,J,q,z,X,V=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(D.a)(t,2),c=a[0],r=a[1],s=Object(F.a)(P),A=Object(D.a)(s,2),o=A[0],l=A[1].error,d=function(){var e=Object(R.a)(Object(S.a)().mark((function e(t){var a,n,r;return Object(S.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,o({variables:{email:c.email,password:c.password}});case 4:a=e.sent,n=a.data.login.token,r=a.data.login.user.isAdmin,Y.login(n),Y.adminAuth(r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,a=t.name,n=t.value;r(Object(i.a)(Object(i.a)({},c),{},Object(E.a)({},a,n)))};return Object(h.jsxs)("div",{className:"container my-1",children:[Object(h.jsx)(b.b,{to:"/signup",children:"\u2190 Go to Signup"}),Object(h.jsx)("h2",{children:"Login"}),Object(h.jsxs)("form",{onSubmit:d,children:[Object(h.jsxs)("div",{className:"form-group col-md-12 col-lg-6",children:[Object(h.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(h.jsx)("input",{className:"form-control",placeholder:"youremail@email.com",name:"email",type:"email",id:"email",onChange:j})]}),Object(h.jsxs)("div",{className:"form-group col-md-12 col-lg-6",children:[Object(h.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(h.jsx)("input",{className:"form-control",placeholder:"******",name:"password",type:"password",id:"pwd",onChange:j})]}),l?Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(h.jsx)("div",{className:"flex-row flex-start",children:Object(h.jsx)("button",{className:"btn btn-outline-dark btn-lg",type:"submit",children:"Submit"})})]})]})},_=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("section",{id:"shipping-refund",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h2",{className:"shipping-heading",children:"Care Instructions"}),Object(h.jsx)("h3",{children:"Sterling Silver"}),Object(h.jsx)("p",{children:"To prevent tarnishing keep your silver stored in a clean, dry airtight container. Minimize your jewelry's contact with harsh chemicals. Do not wear your jewelry in water ( swimming, bathing or showering ). Take jewelry off for bed, wipe clean with a soft cloth and place back in the airtight container"}),Object(h.jsx)("h3",{children:"Copper, Nickel, Brass"}),Object(h.jsx)("p",{children:"To slow down tarnishing keep your silver stored in a clean, dry airtight container. Minimize your jewelry's contact with harsh chemicals. Do not wear your jewelry in water ( swimming, bathing or showering ). Take jewelry off for bed, wipe clean with a soft cloth and place back in the airtight container. If your jewelry begins to lose its protective coat over time clear nail polish works wonders."}),Object(h.jsx)(b.b,{className:"back-button",to:"/",children:"Home"})]})})})},$=a(17),ee=a(64),te=a(91),ae=Object(K.a)(U||(U=Object(H.a)(["\n  query getProducts($collection: ID) {\n    products(collection: $collection) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),ne=Object(K.a)(J||(J=Object(H.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),ce=(Object(K.a)(q||(q=Object(H.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(K.a)(z||(z=Object(H.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),re=Object(K.a)(X||(X=Object(H.a)(["\n  {\n    user {\n      firstName\n      lastName\n      email\n      password\n      isAdmin\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"])));function se(e,t){return 1===t?e:e+"s"}function ie(e,t,a){return new Promise((function(n,c){var r,s,i,A=window.indexedDB.open("shop-shop",1);A.onupgradeneeded=function(e){var t=A.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},A.onerror=function(e){console.log("There was an error")},A.onsuccess=function(c){switch(r=A.result,s=r.transaction(e,"readwrite"),i=s.objectStore(e),r.onerror=function(e){console.log("error",e)},t){case"put":i.put(a),n(a);break;case"get":var o=i.getAll();o.onsuccess=function(){n(o.result)};break;case"delete":i.delete(a._id);break;default:console.log("No valid method")}s.oncomplete=function(){r.close()}}}))}var Ae=a(69),oe="UPDATE_PRODUCTS",le="ADD_TO_CART",de="ADD_MULTIPLE_TO_CART",je="REMOVE_FROM_CART",be="UPDATE_CART_QUANTITY",ue="UPDATE_CATEGORIES",me="UPDATE_CURRENT_CATEGORY",he=function(e,t){switch(t.type){case oe:return Object(i.a)(Object(i.a)({},e),{},{products:Object($.a)(t.products)});case le:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!0,cart:[].concat(Object($.a)(e.cart),[t.product])});case de:return Object(i.a)(Object(i.a)({},e),{},{cart:[].concat(Object($.a)(e.cart),Object($.a)(t.products))});case be:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case je:var a=e.cart.filter((function(e){return e._id!==t._id}));return Object(i.a)(Object(i.a)({},e),{},{cartOpen:a.length>0,cart:a});case"CLEAR_CART":return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!1,cart:[]});case"TOGGLE_CART":return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!e.cartOpen});case ue:return Object(i.a)(Object(i.a)({},e),{},{categories:Object($.a)(t.categories)});case me:return Object(i.a)(Object(i.a)({},e),{},{currentCatergory:t.currentCategory});default:return e}};var Oe=["value"],pe=Object(n.createContext)(),ge=pe.Provider,xe=function(e){e.value;var t,a=Object(Ae.a)(e,Oe),c=(t={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(n.useReducer)(he,t)),r=Object(D.a)(c,2),s=r[0],A=r[1];return Object(h.jsx)(ge,Object(i.a)({value:[s,A]},a))},ve=function(){return Object(n.useContext)(pe)},we=function(e){var t=e.item,a=ve(),n=Object(D.a)(a,2)[1];return Object(h.jsxs)("div",{className:"flex-row",children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:"/images/".concat(t.image),alt:""})}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:[t.name,", $",t.price]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Qty:"}),Object(h.jsx)("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var a=e.target.value;"0"===a?(n({type:je,_id:t._id}),ie("cart","delete",Object(i.a)({},t))):(n({type:be,_id:t._id,purchaseQuantity:parseInt(a)}),ie("cart","put",Object(i.a)(Object(i.a)({},t),{},{purchaseQuantity:parseInt(a)})))}}),Object(h.jsx)("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){n({type:je,_id:e._id}),ie("cart","delete",Object(i.a)({},e))}(t)},children:"\ud83d\uddd1\ufe0f"})]})]})]})},fe=Object(ee.a)("pk_test_TYooMQauvdEDq54NiTphI7jx"),Ne=function(){var e=ve(),t=Object(D.a)(e,2),a=t[0],c=t[1],r=Object(te.a)(ne),s=Object(D.a)(r,2),i=s[0],A=s[1].data;return Object(n.useEffect)((function(){A&&fe.then((function(e){e.redirectToCheckout({sessionId:A.checkout.session})}))}),[A]),Object(n.useEffect)((function(){function e(){return(e=Object(R.a)(Object(S.a)().mark((function e(){var t;return Object(S.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie("cart","get");case 2:t=e.sent,c({type:de,products:Object($.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.cart.length||function(){e.apply(this,arguments)}()}),[a.cart.length,c]),Object(h.jsxs)("div",{className:"cart",children:[Object(h.jsx)("h2",{children:"Shopping Cart"}),a.cart.length?Object(h.jsxs)("div",{children:[a.cart.map((function(e){return Object(h.jsx)(we,{item:e},e._id)})),Object(h.jsxs)("div",{className:"flex-row space-between",children:[Object(h.jsxs)("strong",{children:["Total: $",function(){var e=0;return a.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()]}),Y.loggedIn()?Object(h.jsx)("button",{onClick:function(){var e=[];a.cart.forEach((function(t){for(var a=0;a<t.purchaseQuantity;a++)e.push(t._id)})),i({variables:{products:e}})},children:"Checkout"}):Object(h.jsx)("span",{children:"(log in to check out)"})]})]}):Object(h.jsx)("h3",{children:"You haven't added anything to your cart yet!"})]})},ke=a(70);var Be=function(){var e=ve(),t=Object(D.a)(e,2),a=t[0],c=t[1],r=a.categories,s=Object(ke.b)(ce),i=s.loading,A=s.data;return Object(n.useEffect)((function(){A?(c({type:ue,categories:A.categories}),A.categories.forEach((function(e){ie("categories","put",e)}))):i||ie("categories","get").then((function(e){c({type:ue,categories:e})}))}),[A,i,c]),Object(h.jsx)("div",{children:r.map((function(e){return Object(h.jsx)(b.b,{className:"dropdown-item",onClick:function(){var t;t=e._id,c({type:me,currentCategory:t})},children:e.name},e._id)}))})};var ye=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light",children:[Object(h.jsx)(b.b,{className:"navbar-brand",to:"/",children:Object(h.jsx)("img",{className:"cm-logo",src:"data:image/jpeg;base64,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",alt:""})}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02",children:Object(h.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(h.jsx)("div",{children:Y.loggedIn()?Object(h.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{className:"nav-link",to:"/orderHistory",children:"Order History"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{className:"nav-link",to:"/",onClick:function(){return Y.logout()},children:"Logout"})})]}):Object(h.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{className:"nav-link",to:"/signup",children:"Signup"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{className:"nav-link",to:"/login",children:"Login"})})]})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{className:"nav-link",to:"/",children:"Home"})}),Object(h.jsxs)("li",{className:"nav-item dropdown",children:[Object(h.jsx)(b.b,{className:"nav-link dropdown-toggle",to:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Collections"}),Object(h.jsx)("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"navbarDropdown",children:Object(h.jsx)(Be,{})})]}),Object(h.jsxs)("li",{className:"nav-item dropdown",children:[Object(h.jsx)(b.b,{className:"nav-link dropdown-toggle",to:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"faq"}),Object(h.jsxs)("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"navbarDropdown",children:[Object(h.jsx)(b.b,{className:"dropdown-item",to:"care",children:"Care"}),Object(h.jsx)(b.b,{className:"dropdown-item",to:"return",children:"Return Policy"})]})]}),Object(h.jsxs)("li",{className:"nav-item dropdown",children:[Object(h.jsx)(b.b,{className:"nav-link dropdown-toggle",to:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Cart"}),Object(h.jsx)("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"navbarDropdown",children:Object(h.jsx)(Ne,{})})]})]})})]})})};var Ce=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("section",{id:"footer",children:Object(h.jsx)("div",{className:"navbar navbar-inverse navbar-fixed-bottom",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("p",{className:"navbar-text",children:Object(h.jsx)("span",{className:"copyright-icon",children:"\xa92022 CriminalMedals"})})})})})})},Ie=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("section",{id:"shipping-refund",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h2",{className:"shipping-heading",children:"return policy"}),Object(h.jsx)("p",{children:"Criminal medals does not accept returns unless it is found there are flaws in the workmanship. The item must be in its unworn and original condition. We reserve the right to deny a refund to sender without prior return approval"}),Object(h.jsx)(b.b,{className:"back-button",to:"/",children:"Home"})]})})})};var Qe=function(){var e,t=Object(ke.b)(re).data;return t&&(e=t.user),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"container my-1",children:[Object(h.jsx)(b.b,{to:"/",children:"\u2190 Back to Products"}),e?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h2",{children:["Order History for ",e.firstName," ",e.lastName]}),e.orders.map((function(e){return Object(h.jsxs)("div",{className:"my-2",children:[Object(h.jsx)("h3",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object(h.jsx)("div",{className:"flex-row",children:e.products.map((function(e,t){var a=e._id,n=e.image,c=e.name,r=e.price;return Object(h.jsxs)("div",{className:"card px-1 py-1",children:[Object(h.jsxs)(b.b,{to:"/products/".concat(a),children:[Object(h.jsx)("img",{alt:c,src:"/images/".concat(n)}),Object(h.jsx)("p",{children:c})]}),Object(h.jsx)("div",{children:Object(h.jsxs)("span",{children:["$",r]})})]},t)}))})]},e._id)}))]}):null]})})};var Ee=function(e){var t=ve(),a=Object(D.a)(t,2),n=a[0],c=a[1],r=e.image,s=e.name,A=e._id,o=e.price,l=e.quantity,d=n.cart;return Object(h.jsxs)("div",{className:"card px-1 py-1",children:[Object(h.jsxs)(b.b,{to:"/products/".concat(A),children:[Object(h.jsx)("img",{alt:s,src:"/images/".concat(r)}),Object(h.jsx)("p",{children:s})]}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:[l," ",se("item",l)," in stock"]}),Object(h.jsxs)("span",{children:["$",o]})]}),Object(h.jsx)("button",{onClick:function(){var t=d.find((function(e){return e._id===A}));t?(c({type:be,_id:A,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),ie("cart","put",Object(i.a)(Object(i.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(c({type:le,product:Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:1})}),ie("cart","put",Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:1})))},children:"Add to cart"})]})};var Se=function(){var e=ve(),t=Object(D.a)(e,2),a=t[0],c=t[1],r=a.currentCategory;console.log(a);var s=Object(ke.b)(ae),i=s.loading,A=s.data;return Object(n.useEffect)((function(){A?(c({type:oe,products:A.products}),A.products.forEach((function(e){ie("products","put",e)}))):i||ie("products","get").then((function(e){c({type:oe,products:e})}))}),[A,i,c]),Object(h.jsxs)("div",{className:"my-2",children:[Object(h.jsx)("h2",{children:"Our Products:"}),a.products.length?Object(h.jsx)("div",{className:"flex-row",children:(r?a.products.filter((function(e){return e.category._id===r})):a.products).map((function(e){return Object(h.jsx)(Ee,{_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity},e._id)}))}):Object(h.jsx)("h3",{children:"You haven't added any products yet!"}),i?Object(h.jsx)("div",{className:"spinner-border",role:"status",children:Object(h.jsx)("span",{className:"sr-only",children:"Loading..."})}):null]})},Re=function(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(Se,{})})},De=Object(A.a)({uri:"/graphql"}),Fe=Object(j.a)((function(e,t){var a=t.headers,n=localStorage.getItem("id_token");return{headers:Object(i.a)(Object(i.a)({},a),{},{authorization:n?"Bearer ".concat(n):""})}})),Ge=new o.a({link:Fe.concat(De),cache:new l.a});var Te=function(){return Object(h.jsx)(d.a,{client:Ge,children:Object(h.jsx)(b.a,{children:Object(h.jsxs)(xe,{children:[Object(h.jsx)(ye,{}),Object(h.jsxs)(u.c,{children:[Object(h.jsx)(u.a,{path:"/",element:Object(h.jsx)(Q,{})}),Object(h.jsx)(u.a,{path:"/signup",element:Object(h.jsx)(L,{})}),Object(h.jsx)(u.a,{path:"/login",element:Object(h.jsx)(V,{})}),Object(h.jsx)(u.a,{path:"/care",element:Object(h.jsx)(_,{})}),Object(h.jsx)(u.a,{path:"/Return",element:Object(h.jsx)(Ie,{})}),Object(h.jsx)(u.a,{path:"/orderHistory",element:Object(h.jsx)(Qe,{})}),Object(h.jsx)(u.a,{path:"/shop",element:Object(h.jsx)(Re,{})})]}),Object(h.jsx)(Ce,{})]})})})};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(Te,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.22b6f2d2.chunk.js.map