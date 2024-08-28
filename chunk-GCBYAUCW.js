import{a as te}from"./chunk-TKRDDROI.js";import{$ as u,A as V,C as H,E as S,F as n,G as l,H as z,J as q,M as a,O as s,Q as r,R as o,S as _,T as G,U as J,V as K,W as D,X as p,Z as m,_ as d,c as P,ca as Q,da as f,ea as b,fa as W,ka as x,l as j,la as C,ma as E,na as X,oa as Y,q as B,ta as Z,u as g,v as y,va as ee,w as h,wa as L,x as A,ya as M,z as U,za as T}from"./chunk-DLVEWVSQ.js";var w=class t{confirmText;confirm=new H;onClick(){window.confirm(this.confirmText)&&this.confirm.emit()}static \u0275fac=function(e){return new(e||t)};static \u0275dir=h({type:t,selectors:[["","bmConfirm",""]],hostBindings:function(e,c){e&1&&D("click",function(){return c.onClick()})},inputs:{confirmText:[0,"bmConfirm","confirmText"]},outputs:{confirm:"confirm"}})};var F=class t{constructor(i,e,c){this.template=i;this.viewContainer=e;this.authService=c;this.authService.isAuthenticated$.pipe(j(this.destroy$)).subscribe(k=>{k?this.viewContainer.createEmbeddedView(this.template):this.viewContainer.clear()})}destroy$=new P;ngOnDestroy(){this.destroy$.next()}static \u0275fac=function(e){return new(e||t)(l(z),l(q),l(te))};static \u0275dir=h({type:t,selectors:[["","bmLoggedinOnly",""]]})};var I=class t{transform(i){return i?`${i.substring(0,3)}-${i.substring(3)}`:""}static \u0275fac=function(e){return new(e||t)};static \u0275pipe=A({name:"isbn",type:t,pure:!0})};var le=t=>["/admin/edit",t];function fe(t,i){if(t&1&&(r(0,"p",9),m(1),o()),t&2){let e=p().ngIf;n(),d(e.subtitle)}}function de(t,i){if(t&1&&(r(0,"li"),m(1),o()),t&2){let e=i.$implicit;n(),d(e)}}function ue(t,i){if(t&1&&(r(0,"div")(1,"h2"),m(2,"Published"),o(),m(3),f(4,"date"),o()),t&2){let e=p().ngIf;n(3),u(" ",W(4,1,e.published,"longDate")," ")}}function be(t,i){if(t&1&&_(0,"img",10),t&2){let e=p().ngIf;s("src",e.thumbnailUrl,S)}}function ve(t,i){if(t&1){let e=K();G(0),r(1,"button",11),D("confirm",function(){U(e);let k=p().ngIf,me=p();return V(me.removeBook(k.isbn))}),m(2," Remove book "),o(),r(3,"a",12),m(4," Edit book "),o(),J()}if(t&2){let e=p().ngIf;n(3),s("routerLink",Q(1,le,e.isbn))}}function ke(t,i){if(t&1&&(r(0,"div",1)(1,"h1"),m(2),o(),a(3,fe,2,1,"p",2),r(4,"div",3)(5,"div")(6,"h2"),m(7,"Authors"),o(),r(8,"ul"),a(9,de,2,1,"li",4),o()(),r(10,"div")(11,"h2"),m(12,"ISBN"),o(),m(13),f(14,"isbn"),o(),a(15,ue,5,4,"div",5),o(),r(16,"h2"),m(17,"Description"),o(),r(18,"p"),m(19),o(),a(20,be,1,1,"img",6),r(21,"a",7),m(22,"Back to list"),o(),a(23,ve,5,3,"ng-container",8),o()),t&2){let e=i.ngIf;n(2),d(e.title),n(),s("ngIf",e.subtitle),n(6),s("ngForOf",e.authors),n(4),u(" ",b(14,7,e.isbn)," "),n(2),s("ngIf",e.published),n(4),d(e.description),n(),s("ngIf",e.thumbnailUrl)}}var O=class t{constructor(i,e,c){this.service=i;this.route=e;this.router=c;let k=this.route.snapshot.paramMap.get("isbn");this.book$=this.service.getSingle(k)}book$;removeBook(i){this.service.remove(i).subscribe(()=>{this.router.navigateByUrl("/books")})}static \u0275fac=function(e){return new(e||t)(l(T),l(Z),l(ee))};static \u0275cmp=g({type:t,selectors:[["bm-book-details"]],decls:2,vars:3,consts:[["class","details",4,"ngIf"],[1,"details"],["role","doc-subtitle",4,"ngIf"],[1,"header"],[4,"ngFor","ngForOf"],[4,"ngIf"],["alt","Cover",3,"src",4,"ngIf"],["routerLink","..",1,"button","arrow-left"],[4,"bmLoggedinOnly"],["role","doc-subtitle"],["alt","Cover",3,"src"],["bmConfirm","Remove book?",1,"red",3,"confirm"],[1,"button",3,"routerLink"]],template:function(e,c){e&1&&(a(0,ke,24,9,"div",0),f(1,"async")),e&2&&s("ngIf",b(1,1,c.book$))},dependencies:[x,C,L,w,F,E,X,I]})};function ge(t,i){if(t&1&&_(0,"img",6),t&2){let e=p(2);s("src",e.book.thumbnailUrl,S)}}function _e(t,i){if(t&1&&(r(0,"p",7),m(1),o()),t&2){let e=p(2);n(),u(" ",e.book.subtitle," ")}}function xe(t,i){if(t&1&&(r(0,"li"),m(1),o()),t&2){let e=i.$implicit;n(),u(" ",e," ")}}function Ce(t,i){if(t&1&&(r(0,"a",1),a(1,ge,1,1,"img",2),r(2,"h2"),m(3),o(),a(4,_e,2,1,"p",3),r(5,"ul",4),a(6,xe,2,1,"li",5),o(),r(7,"div"),m(8),f(9,"isbn"),o()()),t&2){let e=p();s("routerLink",e.book.isbn),n(),s("ngIf",e.book.thumbnailUrl),n(2),d(e.book.title),n(),s("ngIf",e.book.subtitle),n(2),s("ngForOf",e.book.authors),n(2),u("ISBN ",b(9,6,e.book.isbn),"")}}var R=class t{book;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=g({type:t,selectors:[["bm-book-list-item"]],inputs:{book:"book"},decls:1,vars:1,consts:[["class","list-item",3,"routerLink",4,"ngIf"],[1,"list-item",3,"routerLink"],["alt","Cover",3,"src",4,"ngIf"],["role","doc-subtitle",4,"ngIf"],[1,"comma-list"],[4,"ngFor","ngForOf"],["alt","Cover",3,"src"],["role","doc-subtitle"]],template:function(e,c){e&1&&a(0,Ce,10,8,"a",0),e&2&&s("ngIf",c.book)},dependencies:[x,C,L,I]})};function Be(t,i){if(t&1&&(r(0,"li"),_(1,"bm-book-list-item",4),o()),t&2){let e=i.$implicit;n(),s("book",e)}}function ye(t,i){t&1&&(r(0,"li"),m(1," No books available. "),o())}function he(t,i){if(t&1&&(r(0,"ul",1),a(1,Be,2,1,"li",2)(2,ye,2,0,"li",3),o()),t&2){let e=i.ngIf;n(),s("ngForOf",e),n(),s("ngIf",!e.length)}}var N=class t{constructor(i){this.service=i;this.books$=this.service.getAll()}books$;static \u0275fac=function(e){return new(e||t)(l(T))};static \u0275cmp=g({type:t,selectors:[["bm-book-list"]],decls:4,vars:3,consts:[["class","book-list",4,"ngIf"],[1,"book-list"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"book"]],template:function(e,c){e&1&&(r(0,"h1"),m(1,"Books"),o(),a(2,he,3,2,"ul",0),f(3,"async")),e&2&&(n(2),s("ngIf",b(3,1,c.books$)))},dependencies:[x,C,R,E]})};var Se=[{path:"",component:N},{path:":isbn",component:O}],$=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=y({type:t});static \u0275inj=B({imports:[M.forChild(Se),M]})};var re=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=y({type:t});static \u0275inj=B({imports:[Y,$]})};export{re as BooksModule};