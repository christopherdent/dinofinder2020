(this.webpackJsonpdinofinder2020=this.webpackJsonpdinofinder2020||[]).push([[0],{59:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),i=n.n(r),s=n(19),c=n.n(s),o=n(11),d=n(20),l=n(38),u=n(33),j=n(7);var h=n(9),b=n(10),p=n(13),O=n(12),m=n(18),x=n(67),v=function(e){return Object(a.jsx)(x.a,{variant:"top",style:{width:"200"},className:"mb-2",children:Object(a.jsxs)(m.b,{to:"./".concat(e.name,"/dino_types"),children:[Object(a.jsx)(x.a.Img,{src:e.pictureUrl,alt:"prehistoric world"}),Object(a.jsx)(x.a.Title,{children:Object(a.jsx)("h4",{className:"text-center",children:e.name})})]})},e.id)},f=n(61),y=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("center",{children:Object(a.jsx)(f.a,{children:Object(a.jsx)("div",{children:e.listEras})})})})};var g=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).listEras=function(){return e.props.eras.eras.map((function(e,t){return Object(a.jsx)(v,{id:e.id,name:e.name,pictureUrl:e.picture_url},t)}))},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchEras()}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("h2",{className:"text-center",children:["Choose an Era to Begin! ",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{})]}),Object(a.jsx)("div",{children:Object(a.jsx)(y,{listEras:this.listEras()})})]})}}]),n}(i.a.Component),C=Object(o.b)((function(e){return{eras:e.eras}}),{fetchEras:function(){return function(e){return fetch("https://murmuring-mesa-24613.herokuapp.com/api/v1/eras").then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_ERAS",payload:t})}))}}})(g),_=function(e){return Object(a.jsx)(x.a,{children:Object(a.jsxs)(m.b,{to:"/".concat(e.name,"/dinosaurs"),children:[Object(a.jsx)("img",{src:e.pictureUrl,alt:"Category of Dinosaur",className:"card-img-top"}),Object(a.jsx)("span",{className:"align-bottom",children:Object(a.jsx)("h4",{className:"text-center",children:e.name})})]})},e.id)},D=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"text-center",children:"And what type of creatures are you looking for?"}),Object(a.jsx)("div",{className:"d-flex mt-5 justify-content-center",children:e.listDinoTypes})]})},k=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).listDinoTypes=function(){if(r.props.dinotypes.dinotypes)return r.props.dinotypes.dinotypes.map((function(e,t){return Object(a.jsx)(_,{id:e.id,name:e.name,pictureUrl:e.picture_url},t)}))},r.state={url:r.routeParam=e.match.params.name,dinotypes:""},r}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchDinoTypes(this.state.url)}},{key:"render",value:function(){return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsx)("div",{className:"container",id:"centered",children:Object(a.jsx)("div",{children:Object(a.jsx)(D,{listDinoTypes:this.listDinoTypes()})})})})}}]),n}(i.a.Component),w=Object(o.b)((function(e){return{dinotypes:e.dinotypes,url:e.url}}),{fetchDinoTypes:function(e){var t="Triassic"===e?"1":"Jurassic"===e?"2":"3";return function(e){return fetch("https://murmuring-mesa-24613.herokuapp.com/api/v1/eras/".concat(t,"/dino_types")).then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_DINOTYPES",payload:t})}))}}})(k),T=n(24),N=n(23),E=function(e){return function(t){fetch("https://murmuring-mesa-24613.herokuapp.com/api/v1/eras/".concat(e.era_id,"/dino_types/").concat(e.dino_type_id,"/dinosaurs/").concat(e.id),{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"PATCH",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return t({type:"EDIT_DINOSAUR",payload:e})}))}},A=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).handleOnChange=function(e){a.setState(Object(N.a)({},e.target.name,e.target.value))},a.handleOnSubmit=function(e){e.preventDefault();var t=Object(j.a)(Object(j.a)({},a.state),{},{id:a.state.id});a.props.editDinosaur(t)},a.collapse=function(){document.getElementById(a.state.id).click()},a.state={id:a.props.dinoId,name:a.props.dinoName,size:a.props.dinoSize,weight:a.props.dinoWeight,temporal_range:a.props.dinoRange,year_discovered:a.props.dinoYear,picture_url:a.props.dinoPic,summary:a.props.dinoSummary,dino_type_id:a.props.dinoTypeId,era_id:a.props.era},a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:this.handleOnSubmit,children:[Object(a.jsx)("h5",{children:"Edit a Dinosaur"}),Object(a.jsxs)("small",{children:["HINT: You can find most of the info below from ",Object(a.jsx)("a",{href:"https://en.wikipedia.org/wiki/Dinosaur",children:"Wikipedia."}),"  At a minimum, please include the category, name and picture URL. "]}),Object(a.jsx)("br",{})," ",Object(a.jsx)("br",{}),Object(a.jsxs)("small",{children:[Object(a.jsx)("label",{children:"Category: When did it live and what kind of dinosaur was it? "}),Object(a.jsx)("br",{}),Object(a.jsxs)("select",{className:"form-control",name:"dino_type_id",id:"dino_type_id",value:this.state.dino_type_id?this.state.dino_type_id:"",onChange:this.handleOnChange,required:!0,children:[Object(a.jsx)("option",{value:""}),Object(a.jsx)("option",{value:"1",children:"Triassic Herbivore"}),Object(a.jsx)("option",{value:"2",children:"Triassic Carnivore"}),Object(a.jsx)("option",{value:"3",children:"Triassic Avian"}),Object(a.jsx)("option",{value:"4",children:"Triassic Marine"}),Object(a.jsx)("option",{value:"5",children:"Jurassic Herbivore"}),Object(a.jsx)("option",{value:"6",children:"Jurassic Carnivore"}),Object(a.jsx)("option",{value:"7",children:"Jurassic Avian"}),Object(a.jsx)("option",{value:"8",children:"Jurassic Marine"}),Object(a.jsx)("option",{value:"9",children:"Cretaceous Herbivore"}),Object(a.jsx)("option",{value:"10",children:"Cretaceous Carnivore"}),Object(a.jsx)("option",{value:"11",children:"Cretaceous Avian"}),Object(a.jsx)("option",{value:"12",children:"Cretaceous Marine"})]}),Object(a.jsx)("br",{})," ",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"hidden",name:"dino_type",value:this.props.dinoType}),Object(a.jsxs)("div",{className:"form-row align-items-center",children:[Object(a.jsxs)("div",{className:"col-auto",children:[Object(a.jsx)("label",{children:"Dinosaur Name"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",name:"name",placeholder:"Dinosaur Name",value:this.state.name,onChange:this.handleOnChange,required:!0}),Object(a.jsx)("br",{})]}),Object(a.jsxs)("div",{className:"col-auto",children:[Object(a.jsx)("label",{children:"Dinosaur Size"}),Object(a.jsx)("br",{}),Object(a.jsx)("small",{children:"In feet"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"number",name:"size",placeholder:"Dinosaur Size",value:this.state.size,onChange:this.handleOnChange})]}),Object(a.jsxs)("div",{className:"col-auto",children:[Object(a.jsx)("label",{children:"Dinosaur Weight"}),Object(a.jsx)("br",{}),Object(a.jsx)("small",{children:Object(a.jsx)("a",{href:"https://www.google.com/search?q=convert+tons+to+pounds&oq=convert+tons+to+pounds",children:"Convert from tons"})}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"number",name:"weight",placeholder:"Dinosaur Weight",value:this.state.weight,onChange:this.handleOnChange})]}),Object(a.jsxs)("div",{className:"col-auto",children:[Object(a.jsx)("label",{children:"Temporal Range"}),Object(a.jsx)("small",{id:"passwordHelpBlock",className:"form-text text-muted",children:"When did it live? Example: 150-140 MYA)"}),Object(a.jsx)("input",{type:"text",name:"temporal_range",placeholder:"Temporal Range",value:this.state.temporal_range,onChange:this.handleOnChange})]}),Object(a.jsxs)("div",{className:"col-auto",children:[Object(a.jsx)("label",{children:"Year Discovered"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"number",name:"year_discovered",placeholder:"Year Discovered",value:this.state.year_discovered,onChange:this.handleOnChange})]}),Object(a.jsxs)("div",{className:"col-auto",children:[Object(a.jsx)("label",{children:"Picture URL"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"url",name:"picture_url",placeholder:"Paste the URL of a picture of this dinosaur here.",value:this.state.picture_url,onChange:this.handleOnChange,required:!0}),Object(a.jsx)("br",{})]}),Object(a.jsxs)("div",{className:"col-auto",children:[Object(a.jsx)("label",{id:"description",children:"Fun Fact or Brief Description"}),Object(a.jsx)("br",{}),Object(a.jsx)("textarea",{name:"summary",id:"description",maxLength:"500",rows:"12",cols:"30",placeholder:"Description",value:this.state.summary,onChange:this.handleOnChange}),Object(a.jsx)("br",{})]})]})]}),Object(a.jsx)("input",{type:"submit",value:"Commit Changes",onClick:this.collapse})]})})}}]),n}(i.a.Component);A.defaultProps={dinosaurs:{}};var S=Object(o.b)(null,{editDinosaur:E})(A),I=function(e){return Object(a.jsx)("div",{children:Object(a.jsxs)("button",{className:"btn btn-danger",onClick:function(){return e.handleDelete(e.dinosaur)},children:["Delete ",e.name]})})},H=n(42),R=(i.a.Component,n(39)),z=n(65),J=function(e){return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsx)(R.a,{xs:"4",children:Object(a.jsxs)(x.a,{className:"card card-inverse card-success card-primary mb-3 text-center",children:[Object(a.jsx)("img",{src:e.pictureUrl,alt:"Artist impression of {props.name}"}),Object(a.jsx)(x.a.Header,{children:e.name}),Object(a.jsxs)("p",{children:["Size: ",e.size," ",e.size?"feet":"?"," "]}),Object(a.jsxs)("p",{children:["Weight: ",e.weight," ",e.weight?"pounds":"?","  "]}),Object(a.jsxs)("p",{children:["Year Discovered:  ",e.yearDiscovered," ",e.yearDiscovered?"":"?"," "]}),Object(a.jsxs)("p",{children:["Years Lived: ",e.temporalRange]}),Object(a.jsx)(x.a.Text,{children:e.summary}),Object(a.jsxs)(z.a,{children:[Object(a.jsxs)(x.a,{children:[Object(a.jsx)(x.a.Header,{children:Object(a.jsx)(z.a.Toggle,{as:H.a,id:e.id,eventKey:"0",children:Object(a.jsxs)("span",{children:["Edit ",e.name]})})}),Object(a.jsx)(z.a.Collapse,{eventKey:"0",children:Object(a.jsx)(x.a.Body,{children:Object(a.jsx)(S,{dinosaur:e.dinosaur,url:e.url,dinoId:e.id,dinoName:e.name,dinoSize:null!==e.size?e.size:"",dinoWeight:null!==e.weight?e.weight:"",dinoRange:null!==e.temporalRange?e.temporalRange:"",dinoYear:null!==e.yearDiscovered?e.yearDiscovered:"",dinoPic:e.pictureUrl,dinoSummary:null!==e.summary?e.summary:"",era:e.dinosaur.dino_type.era_id,dinoTypeId:e.dinotypeId})})})]}),Object(a.jsx)(x.a,{children:Object(a.jsx)(x.a.Body,{children:Object(a.jsx)(I,{dinosaur:e.dinosaur,dinosaurId:e.id,name:e.name,handleDelete:e.handleDelete})})})]})]})})})};J.defaultProps={dinoPic:"https://ecdn.teacherspayteachers.com/thumbitem/Dinosaur-with-hand-sanitizer-and-face-mask-5487390-1587563440/original-5487390-1.jpg"};var M=J;function U(e){return function(t){return fetch("https://murmuring-mesa-24613.herokuapp.com/api/v1/eras/".concat(function(e){return e.includes("Triassic")?1:e.includes("Jurassic")?2:e.includes("Cretaceous")?3:void 0}(e),"/dino_types/").concat(function(e){var t;switch(e){case"Triassic Herbivore":t="1";break;case"Triassic Carnivore":t="2";break;case"Triassic Avian":t="3";break;case"Triassic Marine":t="4";break;case"Jurassic Herbivore":t="5";break;case"Jurassic Carnivore":t="6";break;case"Jurassic Avian":t="7";break;case"Jurassic Marine":t="8";break;case"Cretaceous Herbivore":t="9";break;case"Cretaceous Carnivore":t="10";break;case"Cretaceous Avian":t="11";break;case"Cretaceous Marine":t="12";break;default:console.log("it did not match anything")}return t}(e),"/dinosaurs")).then((function(e){return e.json()})).then((function(e){return t({type:"FETCH_DINOSAURS",payload:e})}))}}var L=function(e){var t;switch(e){case"Triassic Herbivore":t="1";break;case"Triassic Carnivore":t="2";break;case"Triassic Avian":t="3";break;case"Triassic Marine":t="4";break;case"Jurassic Herbivore":t="5";break;case"Jurassic Carnivore":t="6";break;case"Jurassic Avian":t="7";break;case"Jurassic Marine":t="8";break;case"Cretaceous Herbivore":t="9";break;case"Cretaceous Carnivore":t="10";break;case"Cretaceous Avian":t="11";break;case"Cretaceous Marine":t="12";break;default:console.log("it did not match anything")}return t},P=function(e,t){return L(t),function(n){return fetch("https://murmuring-mesa-24613.herokuapp.com/api/v1/eras/".concat(function(e){return e.includes("Triassic")?1:e.includes("Jurassic")?2:e.includes("Cretaceous")?3:void 0}(t),"/dino_types/").concat(L(t),"/dinosaurs"),{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return n({type:"ADD_DINOSAUR",payload:e})}))}},F=n(66),Y=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={name:"",size:"",weight:"",temporal_range:"",year_discovered:"",picture_url:"",summary:"",dino_type_id:e.props.dinoType},e.handleOnChange=function(t){e.setState(Object(N.a)({},t.target.name,t.target.value))},e.handleOnSubmit=function(t){t.preventDefault(),e.props.addDinosaur(e.state,e.props.url),e.setState({name:"",size:"",weight:"",temporal_range:"",year_discovered:"",picture_url:"",summary:"",dino_type_id:""}),e.collapse()},e.collapse=function(){document.getElementById("add").click()},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)("h5",{children:"Add a Dinosaur"}),Object(a.jsxs)("small",{className:"form-text text-muted",children:["HINT: You can find most of the info below from the ",Object(a.jsx)("a",{href:"https://en.wikipedia.org/wiki/Portal:Mesozoic",target:"_blank",rel:"noreferrer",children:"Wikipedia Mesozoic Portal."}),"  At a minimum, please include the category, name and picture URL. "]}),Object(a.jsx)("br",{}),Object(a.jsxs)(F.a,{onSubmit:this.handleOnSubmit,children:[Object(a.jsxs)(F.a.Group,{controlId:"formBasic",children:[Object(a.jsx)(F.a.Label,{children:"Category: When did it live and what kind of dinosaur was it? "}),Object(a.jsxs)(F.a.Control,{as:"select",custom:!0,size:"lg",name:"dino_type_id",id:"dino_type_id",value:this.props.dinoType,onChange:this.handleOnChange,required:!0,children:[Object(a.jsx)("option",{value:""}),Object(a.jsx)("option",{value:"1",children:"Triassic Herbivore"}),Object(a.jsx)("option",{value:"2",children:"Triassic Carnivore"}),Object(a.jsx)("option",{value:"3",children:"Triassic Avian"}),Object(a.jsx)("option",{value:"4",children:"Triassic Marine"}),Object(a.jsx)("option",{value:"5",children:"Jurassic Herbivore"}),Object(a.jsx)("option",{value:"6",children:"Jurassic Carnivore"}),Object(a.jsx)("option",{value:"7",children:"Jurassic Avian"}),Object(a.jsx)("option",{value:"8",children:"Jurassic Marine"}),Object(a.jsx)("option",{value:"9",children:"Cretaceous Herbivore"}),Object(a.jsx)("option",{value:"10",children:"Cretaceous Carnivore"}),Object(a.jsx)("option",{value:"11",children:"Cretaceous Avian"}),Object(a.jsx)("option",{value:"12",children:"Cretaceous Marine"})]})]}),Object(a.jsxs)(F.a.Row,{children:[Object(a.jsxs)(F.a.Group,{as:R.a,children:[Object(a.jsx)(F.a.Label,{children:"Dinosaur Name"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(F.a.Control,{type:"text",name:"name",placeholder:"Dinosaur Name",value:this.state.name,onChange:this.handleOnChange,required:!0})]}),Object(a.jsxs)(F.a.Group,{as:R.a,children:[Object(a.jsx)(F.a.Label,{children:"Dinosaur Size"}),Object(a.jsx)("small",{className:"form-text text-muted",children:"In feet"}),Object(a.jsx)(F.a.Control,{type:"number",name:"size",placeholder:"Dinosaur Size",value:this.state.size,onChange:this.handleOnChange})]}),Object(a.jsxs)(F.a.Group,{as:R.a,children:[Object(a.jsx)(F.a.Label,{children:"Dinosaur Weight"}),Object(a.jsx)("small",{className:"form-text text-muted",children:Object(a.jsx)("a",{href:"https://www.google.com/search?q=convert+tons+to+pounds&oq=convert+tons+to+pounds",target:"_blank",rel:"noreferrer",children:"Convert from tons"})}),Object(a.jsx)(F.a.Control,{type:"number",name:"weight",placeholder:"Dinosaur Weight",value:this.state.weight,onChange:this.handleOnChange})]})]}),Object(a.jsxs)(F.a.Row,{children:[Object(a.jsxs)(F.a.Group,{as:R.a,children:[Object(a.jsx)(F.a.Label,{children:"Temporal Range"}),Object(a.jsx)("small",{className:"form-text text-muted",children:"When did it live? Example: 150-140 MYA)"}),Object(a.jsx)(F.a.Control,{type:"text",name:"temporal_range",placeholder:"Temporal Range",value:this.state.temporal_range,onChange:this.handleOnChange})]}),Object(a.jsxs)(F.a.Group,{as:R.a,children:[Object(a.jsx)(F.a.Label,{children:"Year Discovered"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(F.a.Control,{type:"number",name:"year_discovered",placeholder:"Year Discovered",value:this.state.year_discovered,onChange:this.handleOnChange})]}),Object(a.jsxs)(F.a.Group,{as:R.a,children:[Object(a.jsx)(F.a.Label,{children:"Picture URL"}),Object(a.jsxs)("small",{className:"form-text text-muted",children:["Google Images:  ",Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.google.com/search?tbm=isch&as_q=".concat(this.state.name,"&tbs=isz:lt,islt:4mp,sur:fmc"),children:this.state.name})]}),Object(a.jsx)(F.a.Control,{type:"url",name:"picture_url",placeholder:"Paste the URL of a picture of this dinosaur here.",value:this.state.picture_url,onChange:this.handleOnChange,required:!0})]})]}),Object(a.jsx)(F.a.Row,{children:Object(a.jsxs)(F.a.Group,{children:[Object(a.jsx)(F.a.Label,{id:"description",children:"Fun Fact or Brief Description"}),Object(a.jsx)("br",{}),Object(a.jsx)("small",{className:"form-text text-muted",children:"(500 Characters Max)"}),Object(a.jsx)(F.a.Control,{as:"textarea",name:"summary",maxLength:"500",id:"description",rows:"5",cols:"80",placeholder:"Description",value:this.state.summary,onChange:this.handleOnChange})]})}),Object(a.jsx)(H.a,{type:"submit",variant:"primary",size:"lg",block:!0,children:"Add Dinosaur!"})]})]})}}]),n}(i.a.Component),W=Object(o.b)(null,{addDinosaur:P})(Y),q=n(62),B=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("center",{children:Object(a.jsx)(q.a,{children:e.listDinos})})})},G=n(63),K=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).handleDelete=function(e){r.props.deleteDinosaur(e.id,e.dino_type.id,e.dino_type.era_id)},r.listDinos=function(){if(r.props.dinosaurs.dinosaurs)return r.props.dinosaurs.dinosaurs.map((function(e,t){return Object(a.jsx)("div",{children:Object(a.jsx)(M,{id:e.id,name:e.name,size:e.size,weight:e.weight,temporalRange:e.temporal_range,yearDiscovered:e.year_discovered,pictureUrl:e.picture_url,summary:e.summary,dinotypeId:e.dino_type_id,handleDelete:r.handleDelete,dinosaur:e})},e.id)}))},r.state={url:r.routeParam=e.match.params.name,showHide:!1,dinosaurs:[]},r.hideComponent=r.hideComponent.bind(Object(T.a)(r)),r}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchDinosaurs(this.state.url)}},{key:"hideComponent",value:function(e){"showHide"===e&&this.setState({showHide:!this.state.showHide})}},{key:"render",value:function(){var e=this,t=this.state.showHide;return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsxs)(G.a,{children:[Object(a.jsx)("div",{className:"text-center",children:Object(a.jsx)(H.a,{id:"add",variant:"success",onClick:function(){return e.hideComponent("showHide")},children:!1===t?"Add Dinosaur to Collection":"Hide Form"})}),Object(a.jsxs)("div",{children:[" ",t&&Object(a.jsx)(W,{url:this.state.url,dinoType:L(this.state.url)}),Object(a.jsx)("hr",{})]}),Object(a.jsx)(B,{listDinos:this.listDinos()})]})})}}]),n}(i.a.Component);var X=Object(o.b)((function(e){return{dinosaurs:e.dinosaurs,url:e.url}}),{fetchDinosaurs:U,addDinosaur:P,editDinosaur:E,deleteDinosaur:function(e,t,n){return function(a){fetch("https://murmuring-mesa-24613.herokuapp.com/api/v1/eras/".concat(n,"/dino_types/").concat(t,"/dinosaurs/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){return a({type:"DELETE_DINOSAUR",dinosaurId:e})}))}}})(K),V=n(6),Q=n(64),Z=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){return Object(h.a)(this,n),t.call(this)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){document.getElementById("main-heading").click()}},{key:"render",value:function(){return Object(a.jsx)(m.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)(Q.a,{children:[Object(a.jsx)(m.b,{to:"/",children:Object(a.jsx)("h1",{className:"text-center",id:"main-heading",children:"DinoFinder 2020"})}),Object(a.jsx)("br",{}),Object(a.jsx)("center",{children:Object(a.jsx)("h5",{children:"The prehistoric card collection anyone can edit!"})})]}),Object(a.jsxs)(V.c,{children:[Object(a.jsx)(V.a,{exact:!0,path:"/",component:C}),Object(a.jsx)(V.a,{exact:!0,path:"/:name/dino_types",component:w}),Object(a.jsx)(V.a,{exact:!0,path:"/:name/dinosaurs",component:X}),Object(a.jsx)(V.a,{exact:!0,path:"/dinosaurs/new",component:W}),Object(a.jsx)(V.a,{exact:!0,path:"/dinosaurs/:name/edit",component:S})]})]})})}}]),n}(i.a.Component),$=Object(o.b)(null)(Z),ee=(n(58),Object(d.c)({eras:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{eras:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ERAS":return Object(j.a)(Object(j.a)({},e),{},{eras:t.payload});default:return e}},dinotypes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{dinotypes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DINOTYPES":return Object(j.a)(Object(j.a)({},e),{},{dinotypes:t.payload});default:return e}},dinosaurs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{dinosaurs:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DINOSAURS":return Object(j.a)(Object(j.a)({},e),{},{dinosaurs:t.payload});case"ADD_DINOSAUR":return Object(j.a)(Object(j.a)({},e),{},{dinosaurs:[].concat(Object(u.a)(e.dinosaurs),[t.payload])});case"DELETE_DINOSAUR":return Object(j.a)(Object(j.a)({},e),{},{dinosaurs:Object(u.a)(e.dinosaurs.filter((function(e){return e.id!==t.dinosaurId})))});case"EDIT_DINOSAUR":var n=e.dinosaurs.map((function(e){return e.id===t.payload.id?t.payload:e})),a=e.dinosaurs[0].dino_type_id;return Object(j.a)(Object(j.a)({},e),{},{dinosaurs:n.filter((function(e){return e.dino_type_id===a}))});default:return e}}})),te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.d,ne=Object(d.e)(ee,te(Object(d.a)(l.a)));c.a.render(Object(a.jsx)(o.a,{store:ne,children:Object(a.jsx)($,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.cd6945a7.chunk.js.map