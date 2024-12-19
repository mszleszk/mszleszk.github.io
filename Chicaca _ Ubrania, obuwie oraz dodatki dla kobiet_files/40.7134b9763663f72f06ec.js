(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{BeCU:function(n,t,e){"use strict";e.r(t);var i=e("CcnG"),o=function(){return function(){}}(),a=e("pMnS"),r=e("lBFt"),l=e("ypAQ"),c=e("A7o+"),u=e("Ip0R"),s=e("mrSG"),p=e("lNG3"),d=e("pugT"),m=function(){function n(n,t,e,i){this.route=n,this.router=t,this.translateService=e,this.notificationService=i,this.subscription=new d.a}return n.prototype.ngOnInit=function(){var n=this;this.subscription.add(this.route.data.subscribe((function(t){return n.processNotificationType(t.type)})))},n.prototype.processNotificationType=function(n){throw new Error("processNotificationType must be implemented")},n.prototype.redirect=function(n){var t=this;void 0===n&&(n="/"),setTimeout((function(){return t.router.navigateByUrl(n)}),100)},n.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},n}(),f=(e("sHrg"),e("fFjP"),e("J8Vw")),y=function(){function n(n){this.apiHttpClient=n}return n.prototype.getPaymentUrl=function(n,t){return this.apiHttpClient.get("/payment/url/"+n+"/"+t)},n.ngInjectableDef=i["ɵɵdefineInjectable"]({factory:function(){return new n(i["ɵɵinject"](f.a))},token:n,providedIn:"root"}),n}(),h=function(n){function t(t,e,i,o,a,r,l){var c=n.call(this,t,e,i,o)||this;return c.route=t,c.router=e,c.translateService=i,c.notificationService=o,c.apiNewsletterService=a,c.apiCartService=r,c.apiPaymentService=l,c.subscription=new d.a,c.isPayment=!1,c}return s.__extends(t,n),t.prototype.ngOnInit=function(){n.prototype.ngOnInit.call(this)},t.prototype.processNotificationType=function(n){"product-unsubscribe"===n?this.handleUnsubcribe():"payment-link"===n?(this.isPayment=!0,this.handlePaymentRedirect()):this.redirect()},t.prototype.handleUnsubcribe=function(){var n=this,t=this.route.snapshot.queryParams;t.mailId&&t.email&&t.cs&&this.apiNewsletterService.unsubscribe(t).subscribe((function(t){t.action_status?n.notificationService.success("",n.translateService.instant("notification.unsubscribe.success")):n.notificationService.warn("",n.translateService.instant("notification.unsubscribe.warn"))})),this.redirect()},t.prototype.handlePaymentRedirect=function(){var n=this;this.apiPaymentService.getPaymentUrl(this.route.snapshot.params.id,this.route.snapshot.params.hash).subscribe((function(t){var e=t.data,i=t.message;e&&e.url?window.location.href=e.url:i&&(n.notificationService.warn("",n.translateService.instant("notification.payment.warning.payment_not_allowed_by_order_status")),n.redirect())}),(function(t){n.notificationService.error("",n.translateService.instant("notification.payment.redirect.error")),n.redirect()}))},t.prototype.ngOnDestroy=function(){n.prototype.ngOnDestroy.call(this)},t}(m),b=e("ZYCi"),v=e("90P0"),g=e("4dX6"),w=i["ɵcrt"]({encapsulation:0,styles:[""],data:{}});function S(n){return i["ɵvid"](0,[(n()(),i["ɵeld"](0,0,null,null,3,null,null,null,null,null,null,null)),(n()(),i["ɵeld"](1,0,null,null,2,"div",[["class","title"]],null,null,null,null,null)),(n()(),i["ɵeld"](2,0,null,null,1,"span",[["translate","notification.payment.title"]],null,null,null,null,null)),i["ɵdid"](3,8536064,null,0,c.e,[c.l,i.ElementRef,i.ChangeDetectorRef],{translate:[0,"translate"]},null)],(function(n,t){n(t,3,0,"notification.payment.title")}),null)}function C(n){return i["ɵvid"](2,[(n()(),i["ɵand"](16777216,null,null,1,null,S)),i["ɵdid"](1,16384,null,0,u.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,t){n(t,1,0,t.component.isPayment)}),null)}function I(n){return i["ɵvid"](0,[(n()(),i["ɵeld"](0,0,null,null,1,"ma-notification",[],null,null,null,C,w)),i["ɵdid"](1,245760,null,0,h,[b.a,b.m,c.l,p.NotificationsService,v.a,g.a,y],null,null)],(function(n,t){n(t,1,0)}),null)}var N=i["ɵccf"]("ma-notification",h,I,{},{},[]),P=e("gIcY"),R=e("S8NE"),_=e("KbAS"),k=e("elCX"),U=e("F3IN"),j=e("bse0"),E=e("ICLs"),F=e("uSEU"),M=e("ZZEo"),O=e("WXZK"),T=e("vx3Z"),A=e("mPam"),D=e("PCNd"),z={type:"product-unsubscribe"},G={type:"cart-creation"},L={type:"payment-link"},V=function(){return function(){}}(),Z=e("W2UE");e.d(t,"NotificationViewModuleNgFactory",(function(){return q}));var q=i["ɵcmf"](o,[],(function(n){return i["ɵmod"]([i["ɵmpd"](512,i.ComponentFactoryResolver,i["ɵCodegenComponentFactoryResolver"],[[8,[a.a,r.a,l.a,N]],[3,i.ComponentFactoryResolver],i.NgModuleRef]),i["ɵmpd"](4608,u.NgLocalization,u.NgLocaleLocalization,[i.LOCALE_ID,[2,u["ɵangular_packages_common_common_a"]]]),i["ɵmpd"](4608,P.A,P.A,[]),i["ɵmpd"](4608,P.g,P.g,[]),i["ɵmpd"](4608,c.h,c.g,[]),i["ɵmpd"](4608,c.c,c.f,[]),i["ɵmpd"](4608,c.j,c.d,[]),i["ɵmpd"](4608,c.b,c.a,[]),i["ɵmpd"](4608,c.l,c.l,[c.m,c.h,c.c,c.j,c.b,c.n,c.o]),i["ɵmpd"](1073742336,u.CommonModule,u.CommonModule,[]),i["ɵmpd"](1073742336,b.q,b.q,[[2,b.w],[2,b.m]]),i["ɵmpd"](1073742336,P.z,P.z,[]),i["ɵmpd"](1073742336,P.l,P.l,[]),i["ɵmpd"](1073742336,P.w,P.w,[]),i["ɵmpd"](1073742336,R.d,R.d,[]),i["ɵmpd"](1073742336,_.b,_.b,[]),i["ɵmpd"](1073742336,c.i,c.i,[]),i["ɵmpd"](512,k.d,k.d,[]),i["ɵmpd"](512,k.c,k.c,[i.ComponentFactoryResolver,i.ApplicationRef,i.Injector,u.DOCUMENT,k.d]),i["ɵmpd"](1073742336,k.b,k.b,[k.c]),i["ɵmpd"](1073742336,U.InlineSVGModule,U.InlineSVGModule,[]),i["ɵmpd"](1073742336,j.d,j.d,[]),i["ɵmpd"](1073742336,E.b,E.b,[]),i["ɵmpd"](1073742336,F.a,F.a,[]),i["ɵmpd"](1073742336,M.a,M.a,[]),i["ɵmpd"](1073742336,O.a,O.a,[]),i["ɵmpd"](1073742336,T.a,T.a,[]),i["ɵmpd"](1073742336,A.c,A.c,[]),i["ɵmpd"](1073742336,D.a,D.a,[]),i["ɵmpd"](1073742336,V,V,[]),i["ɵmpd"](1073742336,o,o,[]),i["ɵmpd"](256,A.d,A.e,[]),i["ɵmpd"](256,c.o,void 0,[]),i["ɵmpd"](256,c.n,void 0,[]),i["ɵmpd"](256,Z.InlineSVGConfig,void 0,[]),i["ɵmpd"](1024,b.k,(function(){return[[{path:"powiadomienia/rezygnacja",component:h,data:z},{path:"koszyk/:id/:hash",component:h,data:G},{path:"payment/:id/:hash",component:h,data:L}]]}),[])])}))}}]);