(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{31:function(e,a,t){e.exports=t(60)},36:function(e,a,t){},37:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(28),i=t.n(r),o=(t(36),t(37),t(1)),m=t(12),c=t(11),s=t(2),d=t(3),u=t(6),h=t(4),p=t(5),F=t(9),E=t.n(F);function f(e){return E.a.post("http://35.240.221.96:6000/facce_verification",{face:e}).then((function(e){alert("Photo is captured.Press capture photo to capture again otherwise press Done."),console.log(e)})).then((function(e){console.log(e)}))}n.Component,n.Component;var b=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).fileInput=l.a.createRef(),e.handleSubmit=e.handleSubmit.bind(Object(u.a)(e)),e}return Object(d.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var a=this.fileInput.current.files[0];(new FormData).append("file",a),E.a.post("http://35.240.221.96:6000/parse_nid",a,{headers:{"content-Type":"multipart/form-data"}}).then((function(e){localStorage.setItem("user",JSON.stringify(e.data)),console.log(e.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("form",{className:"FormField"},l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Info",htmlFor:"nidFront"},"Upload Nid Front Side"),l.a.createElement("input",{type:"file",accept:"image/*",multiple:"false",ref:this.fileInput}),l.a.createElement("button",{type:"submit",onClick:this.handleSubmit},"Upload")),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Info",htmlFor:"nidBack"},"Upload Nid Back Side"),l.a.createElement("input",{type:"file",accept:"image/*",multiple:"false",ref:this.fileInput}),l.a.createElement("button",{type:"submit",onClick:this.handleSubmit},"Upload")),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Info",htmlFor:"facePic"},"Upload your picture"),l.a.createElement("br",null),l.a.createElement(o.b,{exact:!0,to:"/upload-photo",className:"FormField__Button mr-20"},"Open camera")),l.a.createElement(m.a,{exact:!0,path:"/upload-done"},l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Info",htmlFor:"facePicDone"},"Picture Upload Done"))),l.a.createElement("div",{className:"FormField"},l.a.createElement(o.b,{to:"/parsed-info",className:"FormField__Button mr-20",type:"submit"},"Show parsed data")))}}]),t}(n.Component),v=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).state={pin:"",verify_pin:""},e.handleChange=e.handleChange.bind(Object(u.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(u.a)(e)),e}return Object(d.a)(t,[{key:"handleChange",value:function(e){var a=e.target,t=a.value,n=a.name;this.setState(Object(c.a)({},n,t))}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("Just wanna check: "),console.log(this.state.pin),console.log(this.state.verify_pin),function(e){if(console.log("here we go"),e.pin.length<6)console.log("oops!"),alert("Pin must contain 6 digits");else{if(e.pin==e.verify_pin)return E.a.post(" http://35.240.221.96:6000/save_pin/",{nid:"09911236445",pin:e.pin}).then((function(e){return alert("Verified!"),e.data})).then((function(e){console.log("Error! again!")}));alert("Verification Pin must be the same as the Pin")}}(this.state).catch((function(e){return alert(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{className:"FormField",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"pin"},"PIN"),l.a.createElement("input",{className:"FormField__Input",type:"password",id:"pin",placeholder:"PIN: ",name:"pin",value:this.state.pin,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"verify_pin"},"RE-ENTER PIN"),l.a.createElement("input",{className:"FormField__Input",type:"password",id:"verify_pin",placeholder:"Re-enter PIN: ",name:"verify_pin",value:this.state.verify_pin,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement(o.b,{exact:!0,to:"/verified",className:"FormField__Button mr-20",type:"submit",onClick:this.handleSubmit},"Verify PIN")),l.a.createElement("div",{className:"FormField"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.b,{exact:!0,to:"/save-info",className:"FormField__Label"},"Continue to next page..."))))}}]),t}(n.Component),N=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"Pin Verification is Done!")}}]),t}(n.Component),_=t(17),g=t.n(_),y=(l.a.Component,function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).setRef=function(a){e.webcam=a},e.capture=function(){var a=e.webcam.getScreenshot();console.log(a),f().catch((function(e){return alert("Server is down.")}))},e}return Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Camera"},l.a.createElement(g.a,{audio:!1,height:720,ref:this.setRef,screenshotFormat:"image/jpeg",width:1280,videoConstraints:{width:1280,height:720,facingMode:"user"}}),l.a.createElement("div",null,l.a.createElement("button",{onClick:this.capture},"Capture photo"),l.a.createElement(o.b,{to:"/upload-done"},"Done")))}}]),t}(l.a.Component)),C=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={name:"",fName:"",mName:"",sName:"",gender:"",relation:"",nominee:"",pNo:"",prof:"",presentAddr:"",permAddr:""},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(d.a)(t,[{key:"handleChange",value:function(e){var a=e.target,t=a.value,n=a.name;this.setState(Object(c.a)({},n,t))}},{key:"handleSubmit",value:function(e){var a;e.preventDefault(),console.log("The form was submitted with the following data: "),console.log(this.state),(a=this.state,E.a.post("http://35.240.221.96:6000/verify_nid_data",{name:a.name,fathers_name:a.fName,mothers_name:a.mName,spouse_name:a.sName,gender:a.gender,profession:a.prof,mobile:a.pNo,present_address:a.presentAddr,permanent_address:a.parmAddr,Nominee:a.nominee,Relation:a.relation}).then((function(e){alert("Verifying your data...."),alert("Congratulations. Your information is verified."),console.log(e)}))).catch((function(e){return alert("Sorry!!! Your given data is not correct.")}))}},{key:"componentDidMount",value:function(){this.userData=JSON.parse(localStorage.getItem("user")),localStorage.getItem("user")?this.setState({name:this.userData.name,fName:this.userData.fathers_name,mName:this.userData.mothers_name}):this.setState({name:"",fName:"",mName:""})}},{key:"componentWillUpdate",value:function(e,a){localStorage.setItem("user",JSON.stringify(a))}},{key:"render",value:function(){return l.a.createElement("form",{className:"FormField"},l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"name"},"Applicant's Name"),l.a.createElement("input",{className:"FormField__Input",type:"text",id:"name",placeholder:"",name:"name",value:this.state.name,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"mName"},"Mother's Name"),l.a.createElement("input",{className:"FormField__Input",type:"text",id:"mName",placeholder:"",name:"mName",value:this.state.mName,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"fName"},"Father's Name"),l.a.createElement("input",{className:"FormField__Input",type:"text",id:"fName",placeholder:"",name:"fName",value:this.state.fName,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"sName"},"Spouse Name"),l.a.createElement("input",{className:"FormField__Input",type:"text",id:"sName",placeholder:"",name:"sName",value:this.state.sName,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"gender"},"Gender(M/F/T)"),l.a.createElement("input",{className:"FormField__Input",type:"text",id:"gender",placeholder:"Enter your gender",name:"gender",value:this.state.gender,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"prof"},"Profesion"),l.a.createElement("input",{className:"FormField__Input",type:"text",id:"prof",placeholder:"Enter your profession",name:"prof",value:this.state.prof,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"pNo"},"Phone Number"),l.a.createElement("input",{className:"FormField__Input",type:"text",id:"pNo",placeholder:"Enter your phone no.",name:"pNo",value:this.state.pNo,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"presentAddr"},"Present Address"),l.a.createElement("input",{className:"FormField__Input",type:"text",id:"presentAddr",placeholder:"Confirm your present Address",name:"presentAddr",value:this.state.presentAddr,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"permAddr"},"Permanent Address"),l.a.createElement("input",{className:"FormField__Input",type:"text",id:"permAddr",placeholder:"Confirm your permanent address",name:"permAddr",value:this.state.permAddr,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"nominee"},"Nominee"),l.a.createElement("input",{className:"FormField__Input",type:"text",id:"nominee",placeholder:"Enter nominee name",name:"nominee",value:this.state.nominee,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"relation"},"Relation"),l.a.createElement("input",{className:"FormField__Input",type:"text",id:"relation",placeholder:"Relation with nominee",name:"relation",value:this.state.relation,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"picture"},"Picture")),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__CheckboxLabel"},l.a.createElement("input",{className:"FormField__Checkbox",type:"checkbox",name:"hasAgreed",value:this.state.hasAgreed,onChange:this.handleChange})," Make sure your given data is correct.")),l.a.createElement("div",{className:"FormField"},l.a.createElement(o.b,{onClick:this.handleSubmit,exact:!0,to:"/verify-pin",className:"FormField__Button mr-20",type:"submit"},"Verify Data")),l.a.createElement("div",{className:"FormField"},l.a.createElement(o.b,{exact:!0,to:"/verify-pin",className:"FormField__Label"},"Continue to next page...")))}}]),t}(n.Component),O=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"handleSubmit",value:function(){E.a.post("http://35.240.221.96:6000/insert_nid_info",{}).then((function(e){alert("Your information is saved."),console.log(e)})).catch((function(e){return alert("Sorry!!! Unable to save")}))}},{key:"render",value:function(){return l.a.createElement("form",{className:"FormField"},l.a.createElement("div",{className:"FormField"},l.a.createElement("h3",null,"We are at the end of our E-KYC registration process."),l.a.createElement("h3",null,"Finally please save your information."),l.a.createElement("br",null),l.a.createElement(o.b,{onClick:this.handleSubmit,exact:!0,to:"/end",className:"FormField__Button mr-20"},"Save Data")))}}]),t}(l.a.Component),S=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Title"},l.a.createElement("br",null),l.a.createElement("h2",null,"Your all information is saved."),l.a.createElement("br",null)," ",l.a.createElement("br",null)," ",l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("div",{className:"Title"},l.a.createElement("h1",null,"THANK YOU"),l.a.createElement("h1",null,"&"),l.a.createElement("h1",null,"STAY SAFE")),l.a.createElement("div",{className:"FormField"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.b,{exact:!0,to:"/",className:"FormField__Label"},"Go to Home page...")))}}]),t}(l.a.Component);var j=function(){return l.a.createElement(o.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(m.a,{exact:!0,path:"/(|upload-info|verify-pin|verified|parsed-info|upload-done|save-info|end)"},l.a.createElement("div",{className:"App__Aside"},l.a.createElement("div",{className:"Text__Set"},l.a.createElement("h1",null,"EKYC DEMO"),l.a.createElement("h2",null,"Electronic Know Your Customer"),l.a.createElement("h2",null,'"We promise to protect your digital financial processes"'))),l.a.createElement("div",{className:"App__Form"},l.a.createElement(m.a,{exact:!0,path:"/(|upload-info|verify-pin|verified|parsed-info|upload-done|save-info|end)"},l.a.createElement(m.a,{exact:!0,path:"/(|upload-info|verify-pin|verified|parsed-info|upload-done|save-info)"},l.a.createElement("div",{className:"Title"},l.a.createElement("h1",null,l.a.createElement("ul",null,"Registration Process")))),l.a.createElement(m.a,{exact:!0,path:"/(|upload-info|upload-done)"},l.a.createElement("div",{className:"FormCenter"},l.a.createElement(b,null))),l.a.createElement(m.a,{exact:!0,path:"/verify-pin"},l.a.createElement("div",{className:"FormCenter"},l.a.createElement(v,null))),l.a.createElement(m.a,{exact:!0,path:"/verified"},l.a.createElement("div",{className:"FormCenter"},l.a.createElement(N,null))),l.a.createElement(m.a,{exact:!0,path:"/parsed-info"},l.a.createElement("div",{className:"FormCenter"},l.a.createElement(C,null))),l.a.createElement(m.a,{exact:!0,path:"/(save-info)"},l.a.createElement("div",{className:"FormCenter"},l.a.createElement(O,null))),l.a.createElement(m.a,{exact:!0,path:"/end"},l.a.createElement(S,null))))),l.a.createElement(m.a,{exact:!0,path:"/upload-photo"},l.a.createElement("div",null,l.a.createElement(y,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=l.a.createElement("div",null,l.a.createElement(j,null));i.a.render(x,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.96279d6d.chunk.js.map