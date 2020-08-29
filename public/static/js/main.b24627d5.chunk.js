(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},170:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(15),s=a.n(l),o=(a(97),a(98),a(99),a(100),a(16)),c=a(17),m=a(18),i=a(19),u=(a(101),a(2)),d=a(5),E=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))},h="http://localhost:3001/";function f(e){var t=e.dish;e.onClick;return r.a.createElement(u.d,null,r.a.createElement(d.b,{to:"/menu/".concat(t.id)},r.a.createElement(u.g,{width:"100%",src:h+t.image,alt:t.name}),r.a.createElement(u.h,{body:!0,className:"ml-5"},r.a.createElement(u.k,null,t.name))))}var p=function(e){var t=e.dishes.dishes.map((function(t){return r.a.createElement("div",{key:t.id,className:"col-12 col-md-5 m-1"},r.a.createElement(f,{dish:t,onClick:e.onClick}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(E,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u.a,null,r.a.createElement(u.b,null,r.a.createElement(d.b,{to:"/home"},"Home")),r.a.createElement(u.b,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},t))},g=a(20),b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(g.a)(n)),n.toggleModal=n.toggleModal.bind(Object(g.a)(n)),n.handleLogin=n.handleLogin.bind(Object(g.a)(n)),n}return Object(c.a)(a,[{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+"Remember: "+this.remember.checked),e.preventDefault()}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.y,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(u.A,{onClick:this.toggleNav}),r.a.createElement(u.z,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(u.m,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(u.w,{navbar:!0},r.a.createElement(u.x,null,r.a.createElement(d.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"}," Home"))),r.a.createElement(u.x,null,r.a.createElement(d.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"}," About Us"))),r.a.createElement(u.x,null,r.a.createElement(d.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"}," Menu"))),r.a.createElement(u.x,null,r.a.createElement(d.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-addres fa-lg"}," Contact Us")))),r.a.createElement(u.w,{className:"ml-auto",navbar:!0},r.a.createElement(u.x,null,r.a.createElement(u.c,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"}," Login"))))))),r.a.createElement(u.q,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante Con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and a unique fusion experience. Our lipsmaking creation will tickle your culinary sens"))))),r.a.createElement(u.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(u.v,{toggle:this.toggleModal},"Login"),r.a.createElement(u.u,null,r.a.createElement(u.n,{onSubmit:this.handleLogin},r.a.createElement(u.o,null,r.a.createElement(u.r,{htmlFor:"username"},"Username"),r.a.createElement(u.p,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})),r.a.createElement(u.o,null,r.a.createElement(u.r,{htmlFor:"password",innerRef:function(t){return e.password=t}},"Password"),r.a.createElement(u.p,{type:"password",id:"password",name:"password"})),r.a.createElement(u.o,{check:!0},r.a.createElement(u.r,{check:!0},r.a.createElement(u.p,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me")),r.a.createElement(u.c,{type:"submit",color:"primary"},"Login")))))}}]),a}(n.Component),N=a(4),v=a(25),y=function(e){return e&&e.length},w=function(e){return function(t){return!t||t.length<=e}};function O(e){var t=e.dish;return r.a.createElement(v.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50)"}},r.a.createElement(u.d,null,r.a.createElement(u.g,{src:h+t.image}),r.a.createElement(u.e,null,r.a.createElement(u.k,null,t.name),r.a.createElement(u.j,null,t.description))))}function M(e){var t=e.comments,a=e.postComment,n=e.dishId;return null!=t?r.a.createElement("div",{className:"container"},r.a.createElement("h4",{className:"row m-2"},"Comments"),r.a.createElement("div",{className:"row"},r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(v.Stagger,{in:!0},t.map((function(e){var t=new Date(e.date);return r.a.createElement(v.Fade,{in:!0},r.a.createElement("li",{className:"container",key:e.id},r.a.createElement("div",{className:"row m-2"},e.comment),r.a.createElement("div",{className:"row m-2"},"-- ",e.author,", ",["Jan","Feb","March","April","June","July","Aug","Sep","Oct","Nov","Dec"][t.getMonth()-1]," ",t.getDate(),", ",t.getFullYear())))})))),r.a.createElement(k,{dishId:n,postComment:a}))):r.a.createElement("div",null)}var k=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isOpen:!1},n.toggleModal=n.toggleModal.bind(Object(g.a)(n)),n}return Object(c.a)(a,[{key:"toggleModal",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e,t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.c,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil"}," Submit Comment")),r.a.createElement(u.t,{isOpen:this.state.isOpen,toggle:this.toggleModal},r.a.createElement(u.v,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(u.u,null,r.a.createElement(N.LocalForm,{onSubmit:function(e){return t.handleSubmit(e)}},r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.l,null,r.a.createElement(u.r,{htmlFor:"rating"},r.a.createElement("h6",null,"Rating")),r.a.createElement(N.Control.select,{model:".rating",id:"rating",className:"form-control",name:"rating"},r.a.createElement("option",null," 1"),r.a.createElement("option",null," 2"),r.a.createElement("option",null," 3"),r.a.createElement("option",null," 4"),r.a.createElement("option",null," 5")))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.l,null,r.a.createElement(u.r,{htmlFor:"author"},r.a.createElement("h6",null,"Your Name")),r.a.createElement(N.Control.text,{model:".author",id:"author",className:"form-control",name:"author",validators:{required:y,minLength:(e=3,function(t){return t&&t.length>=e}),maxLength:w(15)}}),r.a.createElement(N.Errors,{className:"text-danger",model:".name",show:"touched",messages:{minLength:"Must be greater than 2 characters",maxLength:"Must be less than or equal to 15 characters"}}))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.l,null,r.a.createElement(u.r,{htmlFor:"comment"},r.a.createElement("h6",null,"Commen")),r.a.createElement(N.Control.textarea,{model:".comment",id:"comment",className:"form-control",name:"comment",rows:"6"}))),r.a.createElement(u.c,{type:"submit",color:"primary"},"Submit")))))}}]),a}(n.Component),L=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(E,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u.a,null,r.a.createElement(u.b,null,r.a.createElement(d.b,{to:"/menu"},"Menu")),r.a.createElement(u.b,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null)),r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(O,{dish:e.dish})),r.a.createElement("div",{className:"col-12 col-md-5 m1"},r.a.createElement(M,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id}),r.a.createElement("div",{className:"col-12 col-md-5 m1"})))):r.a.createElement("div",null)},S=function(e){return e&&e.length},C=function(e){return function(t){return!t||t.length<=e}},D=function(e){return function(t){return t&&t.length>=e}},j=function(e){return!isNaN(Number(e))},F=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},x=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n}return Object(c.a)(a,[{key:"handleSubmit",value:function(e){this.props.postFeedback(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u.a,null,r.a.createElement(u.b,null,r.a.createElement(d.b,{to:"/home"},"Home")),r.a.createElement(u.b,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send Us Your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(N.Form,{model:"feedback",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(u.l,{md:10},r.a.createElement(N.Control.text,{model:".firstname",className:"form-control",id:"firstname",name:"firstname",placeholder:"First Name",validators:{required:S,minLength:D(3),maxLength:C(15)}}),r.a.createElement(N.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 or less"}}))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(u.l,{md:10},r.a.createElement(N.Control.text,{model:".lastname",className:"form-control",id:"lastname",name:"lastname",placeholder:"Last Name",validators:{required:S,minLength:D(3),maxLength:C(15)}}),r.a.createElement(N.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 or less"}}))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(u.l,{md:10},r.a.createElement(N.Control.text,{model:".telnum",className:"form-control",id:"telnum",name:"telnum",placeholder:"Tel. Number",validators:{required:S,minLength:D(3),maxLength:C(15),isNumber:j}}),r.a.createElement(N.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"email",md:2},"Email"),r.a.createElement(u.l,{md:10},r.a.createElement(N.Control.text,{model:".email",className:"form-control",id:"email",name:"email",placeholder:"Email",validators:{required:S,validEmail:F}}),r.a.createElement(N.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}}))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.l,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(u.r,{checked:!0,htmlFor:"agree"},r.a.createElement(N.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"}),"",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(u.l,{md:{size:3,offset:1}},r.a.createElement(N.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"feedback",md:2},"Your Feedback"),r.a.createElement(u.l,{md:10},r.a.createElement(N.Control.textarea,{model:".message",className:"form-control",id:"message",name:"message",rows:"12"}))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.l,{md:{size:10,offset:2}},r.a.createElement(u.c,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),a}(n.Component);var A=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(d.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"contactus"},"Contact")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))};function I(e){var t=e.item,a=e.isLoading,n=e.errMess;return a?r.a.createElement(E,null):n?r.a.createElement("h4",null,n):r.a.createElement(v.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50)"}},r.a.createElement(u.d,null,r.a.createElement(u.g,{src:h+t.image,alt:t.name}),r.a.createElement(u.e,null,r.a.createElement(u.k,null,t.name),t.designation?r.a.createElement(u.i,null,t.designation):null,r.a.createElement(u.j,null,t.description))))}var T=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(I,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(I,{item:e.promotion,isLoading:e.promosLoading,errMess:e.promosErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(I,{item:e.leaders,isLoading:e.leadersLoading,errMess:e.leadersErrMess}))))};function R(e){var t=e.leader;return r.a.createElement(u.s,{tag:"li",className:"m-2"},r.a.createElement(u.s,{left:!0,middle:!0},r.a.createElement(u.s,{object:!0,src:h+t.image,alt:t.name})),r.a.createElement(u.s,{body:!0,className:"ml-5"},r.a.createElement(u.s,{heading:!0},t.name),r.a.createElement("p",null,t.designation),r.a.createElement("p",null,t.description)))}var _=function(e){var t=e.leaders.leaders.map((function(t){return e.leaders.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(E,null))):e.leaders.errMess?r.a.createElement("h4",{color:"bg-danger"},e.leaders.errMess):r.a.createElement(v.Fade,{in:!0},r.a.createElement(R,{leader:t}))}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u.a,null,r.a.createElement(u.b,null,r.a.createElement(d.b,{to:"/home"},"Home")),r.a.createElement(u.b,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(u.d,null,r.a.createElement(u.f,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(u.e,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(u.d,null,r.a.createElement(u.e,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(u.s,{list:!0},r.a.createElement(v.Stagger,{in:!0},t)))))},P=a(6),q=a(23),B=function(){return{type:"DISHES_LOADING"}},H=function(e){return{type:"DISHES_FAILED",payload:e}},G=function(e){return{type:"ADD_DISHES",payload:e}},W=function(e){return{type:"COMMENTS_FAILED",payload:e}},Y=function(e){return{type:"ADD_COMMENTS",payload:e}},U=function(){return{type:"PROMOS_LOADING"}},K=function(e){return{type:"PROMOS_FAILED",payload:e}},J=function(e){return{type:"ADD_PROMOS",payload:e}},z=function(e){return{type:"ADD_LEADERS",payload:e}},Z=function(){return{type:"LEADERS_LOADING"}},$=function(e){return{type:"LEADERS_FAILED",payload:e}},Q=a(51),V=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(Q.TransitionGroup,null,r.a.createElement(Q.CSSTransition,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(P.d,null,r.a.createElement(P.b,{path:"/home",component:function(){return r.a.createElement(T,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promosLoading:e.props.promotions.isLoading,promosErrMess:e.props.promotions.errMess,leaders:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leadersLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errMess})}}),r.a.createElement(P.b,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(x,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),r.a.createElement(P.b,{exact:!0,path:"/menu",component:function(){return r.a.createElement(p,{dishes:e.props.dishes})}}),r.a.createElement(P.b,{path:"/menu/:dishId",component:function(t){var a=t.match;return r.a.createElement(L,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(a.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(a.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(P.b,{exact:!0,path:"/aboutus",component:function(){return r.a.createElement(_,{leaders:e.props.leaders})}}),r.a.createElement(P.a,{to:"/home"})))),r.a.createElement(A,null))}}]),a}(n.Component),X=Object(P.g)(Object(q.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(t,a,n,r){return e(function(e,t,a,n){return function(r){var l={dishId:e,rating:t,author:a,comment:n};return l.date=(new Date).toISOString(),fetch(h+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+" : "+e.statusText);throw e.error=e,t})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("Post comments ",e.message),alert("Your comment could not be posted\nError"+e.message)}))}}(t,a,n,r))},fetchDishes:function(){e((function(e){e(B(!0)),fetch(h+"dishes").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+" : "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(G(t))})).catch((function(t){return e(H(t.message))}))}))},fetchComments:function(){e((function(e){fetch(h+"comments").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+" : "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Y(t))})).catch((function(t){return e(W(t.message))}))}))},fetchPromos:function(){e((function(e){e(U(!0)),fetch(h+"promotions").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+" : "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(J(t))})).catch((function(t){return e(K(t.message))}))}))},fetchLeaders:function(){e((function(e){e(Z(!0)),fetch(h+"leaders").then((function(e){if(e.ok)return e;var t=new Error("Error"+e.status+" : "+e.statusText);throw e.error=t,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(z(t))})).catch((function(t){return e($(t))}))}))},postFeedback:function(t){return e(function(e){return function(t){var a={firstname:e.firstname,lastname:e.lastname,telnum:e.telnum,email:e.email,agree:e.agree,contactType:e.contactType,message:e.message};a.date=(new Date).toISOString(),fetch(h+"feedback",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return alert("Thank you for your feedback!"),e;var t=new Error("Error"+e.status+" : "+e.statusText);throw e.error=t,t})).then((function(e){return e.json()})).then((function(e){return t(function(e){return{type:"ADD_FEEDBACK",payload:e}}(e))})).catch((function(e){console.log("Post Feedback ",e.message),alert("We are facing some issues on regestering your feedback. Pleasetry again later\nError : "+e.message)}))}}(t))},resetFeedbackForm:function(){e(N.actions.reset("feedback"))}}}))(V)),ee=a(8),te=a(24),ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DISHES":return Object(ee.a)({},e,{isLoading:!1,errMess:null,dishes:t.payload});case"DISHES_LOADING":return Object(ee.a)({},e,{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(ee.a)({},e,{isLoading:!1,errMess:t.payload,dishes:[]});default:return e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENTS":return Object(ee.a)({},e,{isLoading:!1,errMess:null,comments:t.payload});case"COMMENTS_FAILED":return Object(ee.a)({},e,{isLoading:!1,errMess:t.payload});case"ADD_COMMENT":var a=t.payload;return a.id=e.comments.length,a.date=(new Date).toISOString(),Object(ee.a)({},e,{comments:e.comments.concat(a)});default:return e}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,isLoading:!1,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PROMOS":return Object(ee.a)({},e,{isLoading:!1,errMess:null,promotions:t.payload});case"PROMOS_LOADING":return Object(ee.a)({},e,{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(ee.a)({},e,{isLoading:!1,errMess:t.payload,promotions:[]});default:return e}},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,errMess:null,leaders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LEADERS_LOADING":return Object(ee.a)({},e,{isLoading:!0,errMess:null,leaders:[]});case"LEADERS_FAILED":return Object(ee.a)({},e,{isLoading:!1,errMess:t.payload,leaders:[]});case"ADD_LEADERS":return Object(ee.a)({},e,{isLoading:!1,errMess:null,leaders:t.payload});default:return e}},se=a(90),oe=a.n(se),ce=a(91),me=a.n(ce),ie={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},ue=Object(te.createStore)(Object(te.combineReducers)(Object(ee.a)({dishes:ae,comments:ne,promotions:re,leaders:le},Object(N.createForms)({feedback:ie}))),Object(te.applyMiddleware)(oe.a,me.a)),de=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(q.Provider,{store:ue},r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(X,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},92:function(e,t,a){e.exports=a(170)}},[[92,1,2]]]);
//# sourceMappingURL=main.b24627d5.chunk.js.map