(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Ovsy:function(e,t,n){"use strict";n.r(t),n.d(t,"DemoModule",(function(){return O}));var r=n("Valr"),o=n("QJY3"),i=n("DUip"),c=n("TYT/"),a=n("2xHj"),s=n("mrSG"),l=n("8DIt"),p=n("cUzu"),h=n("G6CK");function u(e,t){1&e&&c.Qb(0,"i",15)}function d(e,t){1&e&&c.Qb(0,"i",16)}var g=function(e){return{error:e}};function f(e,t){if(1&e){var n=c.Wb();c.Vb(0,"div",11),c.dc("click",(function(e){c.pc(n);var r=t.$implicit;return c.fc().searchClick(e,r)}))("dblclick",(function(){c.pc(n);var e=t.$implicit;return c.fc().searchDblClick(e)})),c.Vb(1,"input",12),c.dc("ngModelChange",(function(e){return c.pc(n),t.$implicit.val=e}))("keyup",(function(e){c.pc(n);var r=t.$implicit;return c.fc().searchKeyUp(e,r)}))("keydown",(function(e){c.pc(n);var r=t.$implicit;return c.fc().searchKeyDown(e,r)}))("blur",(function(){c.pc(n);var e=t.$implicit;return c.fc().searchBlur(e)}))("focus",(function(){c.pc(n);var e=t.$implicit;return c.fc().searchFocus(e)})),c.Ub(),c.wc(2,u,1,0,"i",13),c.wc(3,d,1,0,"i",14),c.Ub()}if(2&e){var r=t.$implicit;c.Eb("type",r.isText?"text":"button"),c.Db(1),c.kc("ngClass",c.lc(7,g,r.isError))("ngModel",r.val),c.Eb("id",r.id)("type",r.isText?"text":"button"),c.Db(1),c.kc("ngIf",!r.isText&&!r.isShowBox),c.Db(1),c.kc("ngIf",!r.isText&&r.isShowBox)}}var b=function(e){return{bg:e}};function m(e,t){if(1&e){var n=c.Wb();c.Vb(0,"li",17),c.dc("click",(function(){c.pc(n);var e=t.$implicit;return c.fc().getCode(e)})),c.yc(1),c.Ub()}if(2&e){var r=t.$implicit,o=t.index,i=c.fc();c.kc("ngClass",c.lc(2,b,i.parameterPage.pnIndex==o+1)),c.Db(1),c.Ac(" ",r.code," ")}}var C=function(e){return{top:e}},x=function(){function e(e,t,n){this.http=e,this.route=t,this.router=n,this.searchContentArr=[{id:"asdfsdflkj00",val:"B0540034",oldVal:"B0540034",isText:!1,isError:!1,isShowBox:!1},{id:"asdfsdflkj01",val:"E0740093",oldVal:"E0740093",isText:!1,isError:!1,isShowBox:!1}],this.thinkList=[],this.curEditSearch={id:"asdfsdflkj10086",val:"E0740093",oldVal:"",isText:!0,isError:!1,isShowBox:!1},this.parameterPage={pnIndex:0,getCodeList$:null,searchClickTimeout:null,isDblClick:!1,keyWord:"",curEditItem:{}}}return e.prototype.ngOnInit=function(){},e.prototype.searchClick=function(e,t){var n=this;clearTimeout(this.parameterPage.searchClickTimeout),this.parameterPage.searchClickTimeout=setTimeout((function(){if(n.parameterPage.isDblClick)return n.parameterPage.isDblClick=!1,void clearTimeout(n.parameterPage.searchClickTimeout);var r=n.getParentEle(e.target,".search-wrapper"),o=document.querySelector(".search-box"),i=document.querySelector(".operator-box");n.parameterPage.curEditItem=t,t.isText?n.searchContentArr.map((function(e,n){e.id!==t.id&&e.oldVal&&(e.isText=!1,e.val=e.oldVal,e.isError=!1,e.isShowBox=!1)})):(n.searchContentArr.map((function(e,n){e.id!==t.id&&(e.isShowBox=!1)})),i.style.left=r.offsetLeft-o.scrollLeft+r.offsetWidth-(i.offsetWidth+20)/2+"px",t.isShowBox=!t.isShowBox)}),300)},e.prototype.searchDblClick=function(e){this.parameterPage.isDblClick=!0,this.setEditStatus(e)},e.prototype.searchKeyUp=function(e,t){return Object(s.b)(this,void 0,void 0,(function(){var n,r,o,i,c;return Object(s.e)(this,(function(a){switch(a.label){case 0:return t.val=t.val.replace(/;|\uff1b/,""),n=e.keyCode,o=t.isText,(r=t.val)&&o?(i=this.searchInput38Or40(n,t),console.log(i),i?13!==n&&186!==n?[3,1]:(this.enter(t),[3,3]):[2]):(this.thinkList.length=0,[2]);case 1:return this.parameterPage.keyWord=r,[4,this.getCodeList(r)];case 2:c=a.sent(),console.log(c),t.isError=!1,this.thinkList=c.data,a.label=3;case 3:return[2]}}))}))},e.prototype.searchKeyDown=function(e,t){var n=e.keyCode,r=t.id,o=t.val,i=t.isText;if(38===n)return e.preventDefault(),!1;if(8===n&&i&&(o.length<=1&&(this.thinkList.length=0),0===o.length))if(this.getIsCurEditSearch(r)&&this.searchContentArr.length>0)this.searchContentArr.pop();else if(!this.getIsCurEditSearch(r)){var c=this.searchContentArr.findIndex((function(e){return e.id===r}));this.searchContentArr.splice((c=c>0?c:1)-1,1)}},e.prototype.editCode=function(e){event.stopPropagation(),this.setEditStatus(e)},e.prototype.copyCode=function(e){var t=e.val;event.stopPropagation();var n=document.createElement("input");n.id="copyCode",n.value=t,document.body.appendChild(n),n.select(),document.execCommand("Copy"),document.body.removeChild(n),this.removeOperatorBox(e),console.log("\u5df2\u590d\u5236\u597d\uff0c\u53ef\u8d34\u7c98\u3002")},e.prototype.removeCode=function(e){event.stopPropagation();var t=this.searchContentArr.findIndex((function(t){return t.id===e.id}));this.searchContentArr.splice(t,1)},e.prototype.searchFocus=function(e){this.parameterPage.curEditItem=e},e.prototype.searchBlur=function(e){return Object(s.b)(this,void 0,void 0,(function(){var t;return Object(s.e)(this,(function(n){switch(n.label){case 0:return[4,this.showError(e)];case 1:return t=n.sent(),console.log(t),[2]}}))}))},e.prototype.getCode=function(e){var t=e.code;this.parameterPage.curEditItem.val=t,this.parameterPage.curEditItem.oldVal=t,this.setTextToBtn(this.parameterPage.curEditItem)},e.prototype.getParentEle=function(e,t){var n=t.replace(/\.|\#/,"");return console.log(e,e.className,e.parentElement,e.parentElement.className),-1!==t.indexOf(".")&&"string"==typeof e.parentElement.className&&-1!==e.parentElement.className.indexOf(n)||-1!==t.indexOf("#")&&e.parentElement.id===n||e.parentElement.tagName===t.toUpperCase()?e.parentElement:-1!==t.indexOf(".")&&"string"==typeof e.className&&-1!==e.className.indexOf(n)||-1!==t.indexOf("#")&&e.id===n||e.tagName===t.toUpperCase()?e:"BODY"!==e.tagName?this.getParentEle(e.parentElement,t):void console.log("zhaobudao")},e.prototype.setEditStatus=function(e){console.log("dblClick",e),this.searchContentArr.map((function(e,t){e.isShowBox&&(e.isShowBox=!1),e.isText&&e.oldVal&&(e.val=e.oldVal,e.isError=!1,e.isText=!1)})),e.isText=!0,this.setFocus(e)},e.prototype.getCodeList=function(e){var t=this;return new Promise((function(n,r){t.parameterPage.getCodeList$=t.http.get("http://ai-dps-test.lenovo.com/machine-learning/1.0/app/es/getCodeBySearch?code="+e).subscribe((function(e){n(e)}),(function(e){r(e)}))}))},e.prototype.enter=function(e){return Object(s.b)(this,void 0,void 0,(function(){return Object(s.e)(this,(function(t){switch(t.label){case 0:return e.val?[4,this.showError(e)]:[2];case 1:return t.sent()&&this.setTextToBtn(e),[2]}}))}))},e.prototype.showError=function(e){return Object(s.b)(this,void 0,void 0,(function(){var t,n;return Object(s.e)(this,(function(r){switch(r.label){case 0:return(t=e.val)?[4,this.getCodeList(t)]:[2,!1];case 1:return n=r.sent(),this.parameterPage.getCodeList$.unsubscribe(),console.log(n),0===n.data.length||n.data.every((function(e){return e.code!==t}))?(this.thinkList.length=0,e.isError=!0,[2,!1]):[2,!0]}}))}))},e.prototype.setTextToBtn=function(e){var t=this,n=e.id,r=e.val;console.log(e),this.getIsCurEditSearch(n)?(this.searchContentArr.push({id:n,val:r,oldVal:r,isError:!1,isShowBox:!1,isText:!1}),this.curEditSearch={id:Object(l.b)(),val:"",oldVal:"",isError:!1,isShowBox:!1,isText:!0}):(e.oldVal=r,e.isShowBox=!1,e.isText=!1,e.isError=!1),e.isError=!1,this.thinkList.length=0,setTimeout((function(){t.setFocus(t.curEditSearch)}),100)},e.prototype.setFocus=function(e){var t=e.val,n=document.getElementById(e.id);n&&(e.val="",n.focus(),setTimeout((function(n){e.val=t}),10))},e.prototype.removeOperatorBox=function(e){e.isShowBox=!1},e.prototype.getIsCurEditSearch=function(e){return this.curEditSearch.id===e},e.prototype.searchInput38Or40=function(e,t){var n=this;if(this.thinkList.length<=0)return this.parameterPage.pnIndex=0,"nonePnArr";var r=document.querySelectorAll(".pnCont");return 40!==e&&38!==e?(this.parameterPage.pnIndex=0,!0):(40===e?(this.parameterPage.pnIndex++,this.parameterPage.pnIndex>=r.length&&(this.parameterPage.pnIndex=0),console.log(this.parameterPage.pnIndex)):38===e&&(this.parameterPage.pnIndex--,this.parameterPage.pnIndex<=-1&&(this.parameterPage.pnIndex=r.length-1),console.log(this.parameterPage.pnIndex)),Array.from(r,(function(e,o){o===n.parameterPage.pnIndex&&(t.val=r[n.parameterPage.pnIndex].innerHTML.replace(/\s+/g,""))})),38!==e&&40!==e&&void 0)},e.\u0275fac=function(t){return new(t||e)(c.Pb(p.c),c.Pb(i.a),c.Pb(i.f))},e.\u0275cmp=c.Jb({type:e,selectors:[["app-search"]],decls:17,vars:11,consts:[[1,"search-body"],[1,"search-area"],[1,"search-box",2,"width","500px","border","1px solid #000"],["class","search-wrapper",3,"click","dblclick",4,"ngFor","ngForOf"],[1,"search-wrapper",3,"click"],["type","text",3,"ngClass","ngModel","ngModelChange","keyup","keydown","blur","focus"],[1,"operator-box",3,"ngStyle"],[3,"click"],[1,"think-list"],[1,"pnCont",2,"display","none"],["class","pnCont",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"search-wrapper",3,"click","dblclick"],["type","button",3,"ngClass","ngModel","ngModelChange","keyup","keydown","blur","focus"],["nz-icon","","nzType","down","nzTheme","outline",4,"ngIf"],["nz-icon","","nzType","up","nzTheme","outline",4,"ngIf"],["nz-icon","","nzType","down","nzTheme","outline"],["nz-icon","","nzType","up","nzTheme","outline"],[1,"pnCont",3,"ngClass","click"]],template:function(e,t){1&e&&(c.Vb(0,"section",0),c.Vb(1,"div",1),c.Vb(2,"div",2),c.wc(3,f,4,9,"div",3),c.Vb(4,"div",4),c.dc("click",(function(e){return t.searchClick(e,t.curEditSearch)})),c.Vb(5,"input",5),c.dc("ngModelChange",(function(e){return t.curEditSearch.val=e}))("keyup",(function(e){return t.searchKeyUp(e,t.curEditSearch)}))("keydown",(function(e){return t.searchKeyDown(e,t.curEditSearch)}))("blur",(function(){return t.searchBlur(t.curEditSearch)}))("focus",(function(){return t.searchFocus(t.curEditSearch)})),c.Ub(),c.Ub(),c.Vb(6,"div",6),c.Vb(7,"span",7),c.dc("click",(function(){return t.editCode(t.parameterPage.curEditItem)})),c.yc(8,"\u7f16\u8f91\u7f16\u53f7"),c.Ub(),c.Vb(9,"span",7),c.dc("click",(function(){return t.copyCode(t.parameterPage.curEditItem)})),c.yc(10,"\u62f7\u8d1d\u7f16\u53f7"),c.Ub(),c.Vb(11,"span",7),c.dc("click",(function(){return t.removeCode(t.parameterPage.curEditItem)})),c.yc(12,"\u79fb\u9664\u7f16\u53f7"),c.Ub(),c.Ub(),c.Ub(),c.Vb(13,"ul",8),c.Vb(14,"li",9),c.yc(15),c.Ub(),c.wc(16,m,2,4,"li",10),c.Ub(),c.Ub(),c.Ub()),2&e&&(c.Db(3),c.kc("ngForOf",t.searchContentArr),c.Db(2),c.kc("ngClass",c.lc(7,g,t.curEditSearch.isError))("ngModel",t.curEditSearch.val),c.Eb("id",t.curEditSearch.id),c.Db(1),c.kc("ngStyle",c.lc(9,C,!t.parameterPage.curEditItem.isText&&t.parameterPage.curEditItem.isShowBox?"50%":"9999999999px")),c.Db(9),c.zc(t.parameterPage.keyWord),c.Db(1),c.kc("ngForOf",t.thinkList))},directives:[r.j,o.b,r.i,o.e,o.f,r.l,r.k,h.a],styles:[".search-body[_ngcontent-%COMP%]{background-color:grey;height:100%;width:100%}.search-body[_ngcontent-%COMP%]   .search-area[_ngcontent-%COMP%]{width:500px;position:relative}.search-body[_ngcontent-%COMP%]   ul.think-list[_ngcontent-%COMP%]{width:100%;position:absolute;top:100%;background-color:#fff}.search-body[_ngcontent-%COMP%]   ul.think-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{height:61px;line-height:61px;font-family:PingFangSC-Regular;font-size:20px;color:#152c2c;cursor:pointer}.search-body[_ngcontent-%COMP%]   ul.think-list[_ngcontent-%COMP%]   li.bg[_ngcontent-%COMP%], .search-body[_ngcontent-%COMP%]   ul.think-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#949eb6}.search-body[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]{height:80px;line-height:80px;display:flex;align-items:center;overflow-x:auto;overflow-y:hidden;cursor:text}.search-body[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   div.search-wrapper[_ngcontent-%COMP%]{float:left}.search-body[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   div.search-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:100%;font-family:PingFangSC-Regular;font-size:20px;color:#3f4659;background:transparent}.search-body[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   div.search-wrapper[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%]{color:red}.search-body[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   div.search-wrapper[type=text][_ngcontent-%COMP%]{width:150px;height:100%;line-height:0}.search-body[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   div.search-wrapper[type=button][_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 10px;height:28px;line-height:28px;border-radius:12px;background:#edf1f5;margin-right:18px}.search-body[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   div.search-wrapper[type=button][_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:20px;color:#3f4659;background:transparent}.search-body[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   div.search-wrapper[type=button][_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:14px;margin-left:5px}.search-body[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   div.operator-box[_ngcontent-%COMP%]{position:absolute;top:50%;box-shadow:-6px 3px 11px 0 rgba(204,214,223,.22);border-radius:2px;border:1px solid rgba(124,134,159,.16);background:#fff;left:0;margin-top:25px}.search-body[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   div.operator-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;font-size:12px;padding:2px 10px;margin:6px 0;color:#3f4659;line-height:normal;font-family:MicrosoftYaHeiUI;cursor:pointer;white-space:nowrap}.search-body[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   div.operator-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{background:#40424c;color:#fff}"]}),e}();function y(e,t){1&e&&c.Qb(0,"app-search")}var v=function(){function e(){this.cb={search:!0}}return e.prototype.ngOnInit=function(){console.log("Fetching heros...")},e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Jb({type:e,selectors:[["app-demo"]],decls:4,vars:2,consts:[["nz-checkbox","",3,"ngModel","ngModelChange"],[4,"ngIf"]],template:function(e,t){1&e&&(c.Vb(0,"label",0),c.dc("ngModelChange",(function(e){return t.cb.search=e})),c.yc(1,"search"),c.Ub(),c.Qb(2,"br"),c.wc(3,y,1,0,"app-search",1)),2&e&&(c.kc("ngModel",t.cb.search),c.Db(3),c.kc("ngIf",t.cb.search))},directives:[a.a,o.e,o.f,r.k,x],styles:[""]}),e}(),P=function(){function e(){}return e.\u0275mod=c.Nb({type:e}),e.\u0275inj=c.Mb({factory:function(t){return new(t||e)},providers:[],imports:[[r.b,o.c,h.b]]}),e}(),k=[{path:"",component:v}],O=function(){function e(){}return e.\u0275mod=c.Nb({type:e}),e.\u0275inj=c.Mb({factory:function(t){return new(t||e)},imports:[[i.i.forChild(k),o.c,P,a.b,r.b],i.i]}),e}()}}]);