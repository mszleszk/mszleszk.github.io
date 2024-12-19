(()=>{"use strict";const e=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=document.getElementsByClassName(e)[o],i=r.querySelectorAll(".tm-dialog-open");if(i){for(var n=r.querySelector(".tm-dialog-bg"),l=r.querySelector(".tm-dialog"),a=l.querySelector(".tm-dialog__close"),d=0;d<i.length;d++)i[d].addEventListener("click",(function(){n.style.display="unset",l.style.display="unset",t()}));n.addEventListener("click",(function(){n.style.display="none",l.style.display="none"})),a.addEventListener("click",(function(){n.style.display="none",l.style.display="none"}));var s=l.querySelector(".tm-dialog__tabs");if(s.children.length>1){var c=l.querySelector(".tm-tab-1"),m=l.querySelector(".tm-tab-2");s.children[1].classList.add("tm-dialog__tab--active"),m.style.display="block",c.style.display="none",s.children[0].classList.remove("tm-dialog__tab--active"),s.children[0].addEventListener("click",(function(){s.children[0].classList.add("tm-dialog__tab--active"),c.style.display="block",m.style.display="none",s.children[1].classList.remove("tm-dialog__tab--active")})),s.children[1].addEventListener("click",(function(){s.children[1].classList.add("tm-dialog__tab--active"),m.style.display="block",c.style.display="none",s.children[0].classList.remove("tm-dialog__tab--active")}))}else{var u=l.querySelector(".tm-tab-2");s.children[0].classList.add("tm-dialog__tab--active"),u.style.display="block"}}};const t=function(e){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=document.querySelectorAll(e)[0];o&&(r=o);var i,n=r.querySelector("[data-tm-reviews-count]");n&&(null==n||null===(t=n.dataset)||void 0===t?void 0:t.tmReviewsCount)>9999&&(n.textContent=null==n||null===(i=n.dataset)||void 0===i||null===(i=i.tmReviewsCount)||void 0===i?void 0:i.replace(/\B(?=(\d{3})+(?!\d))/g," "))};function o(e){var t,o,r,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(null==e||null===(t=e.classList)||void 0===t||!t.contains("tm-widget__vote--disabled")){e.classList.add("tm-widget__vote--disabled");var n=i?null==e||null===(o=e.dataset)||void 0===o?void 0:o.helpfulurl:null==e||null===(r=e.dataset)||void 0===r?void 0:r.unhelpfulurl;fetch(n,{method:"POST"}).then((function(e){return 200!==e.status?null:e.json()})).then((function(t){t&&(i?(e.nextElementSibling.classList.remove("tm-widget__vote--disabled"),e.children[1].textContent=null==t?void 0:t.helpfulTagsCount,e.nextElementSibling.children[1].textContent=null==t?void 0:t.unhelpfulTagsCount):(e.previousElementSibling.classList.remove("tm-widget__vote--disabled"),e.children[1].textContent=null==t?void 0:t.unhelpfulTagsCount,e.previousElementSibling.children[1].textContent=null==t?void 0:t.helpfulTagsCount))})).catch((function(e){console.log(e,"error")}))}}function r(e){var t,o=e.widgetClass,r=e.customClass,i=void 0===r?"tm-widget-review":r,n=e.currentWidget,l=void 0===n?null:n;if(l)t=l;else{var a=document.querySelectorAll(o)[0];if(!(a instanceof HTMLElement))throw new Error("renderStars - Widget not found");t=a}var d=t.querySelectorAll("[data-tm-review-grade]"),s=t.dataset.url,c=t.dataset.ratingImage;d.forEach((function(e){e instanceof HTMLElement&&function(e){var t=e.starsDiv,o=e.url,r=e.ratingImage,i=e.customClass,n=parseFloat(t.dataset.tmReviewGrade),l=i;t.dataset.tmCustomClass&&(l=t.dataset.tmCustomClass);var a="";a+='<div class="'.concat(l,'__stars">');for(var d=1;d<=5;d++)d-n>0&&d-n<1?(a+='<div class="'.concat(l,'__half-star"><div style="width: ').concat(100*(n-d+1),'%" class="').concat(l,"__star ").concat(l,'__star--first-half">'),a+="tm-new-star"===r?'<img width="40" height="38" src="data:," alt class="trustmate-star__icon" />':'<img width="40" height="38" src="'.concat(o,"images/widgets/rating/stars/").concat(r,'.svg" alt="star').concat(d,'">'),a+="</div>",a+='<div class="'.concat(l,"__star ").concat(l,"__star--second-half ").concat(i,'__star--dimmed">'),a+="tm-new-star"===r?'<img width="40" height="38" src="data:," alt class="trustmate-star__icon" />':'<img width="40" height="38" src="'.concat(o,"images/widgets/rating/stars/").concat(r,'.svg" alt="star').concat(d,'">'),a+="</div></div>"):(a+='<div class="'.concat(l,"__star ").concat(d>n?"".concat(l,"__star--dimmed"):"",'">'),a+="tm-new-star"===r?'<img width="40" height="38" src="data:," alt class="trustmate-star__icon" />':'<img width="40" height="38" src="'.concat(o,"images/widgets/rating/stars/").concat(r,'.svg" alt="star').concat(d,'">'),a+="</div>");"hydra-main-reviews"===l&&(a+='<div class="hydra-main-reviews__grade">'.concat(n,"</div>")),a+="</div>",t.innerHTML=a}({starsDiv:e,url:s,ratingImage:c,customClass:i})}))}const i=function(e){var t,o,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=document.getElementsByClassName(e)[0];r&&(i=r);var n=[].slice.call(null===(t=i)||void 0===t?void 0:t.querySelectorAll(".tm-lazy-background")),l=[].slice.call(null===(o=i)||void 0===o?void 0:o.querySelectorAll(".tm-lazy-video")),a=new IntersectionObserver((function(e){e.forEach((function(e){if(e.isIntersecting){var t=e.target.dataset.img;e.target.style.backgroundImage="url('".concat(t,"')"),a.unobserve(e.target)}}))})),d=new IntersectionObserver((function(e){e.forEach((function(e){if(e.isIntersecting){var t=e.target.dataset.video;e.target.src=t,d.unobserve(e.target)}}))}));n.forEach((function(e){a.observe(e)})),l.forEach((function(e){d.observe(e)}))};function n(e){var t=document.querySelector(".tm-omnibus-modal");t?t.style.removeProperty("display"):function(e){fetch(e,{method:"GET"}).then((function(e){return 200!==e.status?null:e.text()})).then((function(e){if(e){var t=document.createElement("div");t.classList.add("tm-omnibus-modal"),t.innerHTML=e,document.body.appendChild(t);var o=document.querySelectorAll(".tm-omnibus-modal-close");if((null==o?void 0:o.length)>0)for(var r=0;r<(null==o?void 0:o.length);r++)o[r].addEventListener("click",(function(){document.querySelector(".tm-omnibus-modal").style.display="none"}))}})).catch((function(e){console.log(e,"error")}))}(e)}const l=function(e){var t,o,r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=null===(t=document)||void 0===t||null===(t=t.getElementsByClassName(e))||void 0===t?void 0:t[i],l=null==n?void 0:n.querySelector(".tm-dialog__section-form"),a=l.querySelector("form"),d=null===(o=a.dataset)||void 0===o?void 0:o.tmReviewUrl,s=null==a||null===(r=a.dataset)||void 0===r?void 0:r.tmIsPreview;function c(e,t,o){var r=e.querySelector(t),i=e.querySelectorAll(".tm__info--error");r.addEventListener("input",(function(t){if(o.querySelector(".form-submit-error").setAttribute("style","display: none"),i.forEach((function(e){e.setAttribute("style","display: block")})),"review-body"===t.target.id){if(t.target.value.length>window.tmDialogForm.schema.body)return e.querySelector(".tm__info--error").setAttribute("style","display: none"),window.tmDialogForm.errors.body=!1,t.target.value;window.tmDialogForm.errors.body=!0}if("review-author"===t.target.id){if(t.target.value.length>window.tmDialogForm.schema.name)return e.querySelector(".tm__info--error").setAttribute("style","display: none"),window.tmDialogForm.errors.name=!1,t.target.value;window.tmDialogForm.errors.name=!0}if("review-author-email"===t.target.id){if(r=t.target.value,/\S+@\S+\.\S+/.test(r))return e.querySelector(".tm__info--error").setAttribute("style","display: none"),window.tmDialogForm.errors.email=!1,t.target.value;window.tmDialogForm.errors.email=!0}var r;if("review-order-id"===t.target.id){if(t.target.value.length>window.tmDialogForm.schema.orderIdentifier)return e.querySelector(".tm__info--error").setAttribute("style","display: none"),window.tmDialogForm.errors.orderIdentifier=!1,t.target.value;window.tmDialogForm.errors.orderIdentifier=!0}return null}))}window.tmDialogForm={},window.tmDialogForm.grade=0,window.tmDialogForm.temporaryGrade=0,window.tmDialogForm.errors={grade:!0,body:!0,name:!0,email:!0,orderIdentifier:!0},window.tmDialogForm.schema={body:6,name:2,orderIdentifier:2};var m=l.querySelectorAll(".tm-dialog__form-group");c(m[0],"#review-body",l),c(m[1],"#review-author",l),c(m[2],"#review-author-email",l),c(m[3],"#review-order-id",l),window.tmDialogForm.isFormValid=function(){return!(!0===window.tmDialogForm.errors.grade||!0===window.tmDialogForm.errors.body||!0===window.tmDialogForm.errors.name||!0===window.tmDialogForm.errors.email||window.tmDialogForm.grade<=3&&!0===window.tmDialogForm.errors.orderIdentifier)};var u=n.querySelector(".tm-dialog__info-wrap"),g=n.querySelector(".form-submit-error"),v=n.querySelector(".tm-error-text"),w=n.querySelector(".tm-dialog__form-wrapper");window.tmDialogForm.handleErrors=function(){window.tmDialogForm.errors.grade&&v.setAttribute("style","display: block"),window.tmDialogForm.errors.body&&m[0].querySelector(".tm__info--error").setAttribute("style","display: block"),window.tmDialogForm.errors.name&&m[1].querySelector(".tm__info--error").setAttribute("style","display: block"),window.tmDialogForm.errors.email&&m[2].querySelector(".tm__info--error").setAttribute("style","display: block"),window.tmDialogForm.errors.orderIdentifier&&m[3].querySelector(".tm__info--error").setAttribute("style","display: block")},window.tmDialogForm.handleSubmit=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(e&&e.preventDefault(),!window.tmDialogForm.isFormValid())return window.tmDialogForm.handleErrors(),null;if(o)return null;var r={grade:window.tmDialogForm.grade,body:e.target.elements[0].value,name:e.target.elements[1].value,email:e.target.elements[2].value};return window.tmDialogForm.grade<=3&&(r.orderIdentifier=e.target.elements[3].value),fetch(t,{method:"POST",body:JSON.stringify(r)}).then((function(e){201===e.status?(w.style.display="none",u.style.display="unset",g.style.display="none"):(g.style.display="unset",u.style.display="none")})).catch((function(){g.style.display="unset",u.style.display="none"})),null},l.addEventListener("submit",(function(e){return window.tmDialogForm.handleSubmit(e,d,s)}));var y=n.querySelector(".tm-dialog__stars-label");window.tmDialogForm.changeStarsLabel=function(e){for(var t=0;t<y.children.length;t++)y.children[t].style.display=e!==t+1?"none":"unset"},window.tmDialogForm.handleOrderId=function(e){m[3].style.display=e>3||0===e?"none":"unset"},window.tmDialogForm.handleActionsAfterGradeChange=function(e,t){function o(e){window.tmDialogForm.handleOrderId(e),window.tmDialogForm.changeStarsLabel(e),window.tmDialogForm.errors.grade&&"click"===t&&(window.tmDialogForm.errors.grade=!1,v.setAttribute("style","display: none"))}"click"===t?(window.tmDialogForm.grade=e,o(e)):"mouseenter"===t&&0===window.tmDialogForm.grade?(window.tmDialogForm.temporaryGrade=e,o(e)):"mouseleave"===t&&0===window.tmDialogForm.grade&&(window.tmDialogForm.temporaryGrade=0,o(0))};var f=n.querySelectorAll(".tm-dialog__singleStar");window.tmDialogForm.handleStar=function(e,t){window.tmDialogForm.handleActionsAfterGradeChange(e,t);var o=window.tmDialogForm.grade;"mouseenter"===t&&0===window.tmDialogForm.grade?o=window.tmDialogForm.temporaryGrade:"mouseleave"===t&&0===window.tmDialogForm.grade&&(o=0);for(var r=0;r<f.length;r++)o>r?f[r].classList.add("tm-dialog__singleStar--active"):f[r].classList.remove("tm-dialog__singleStar--active")};for(var h=function(e){f[e].addEventListener("click",(function(){return window.tmDialogForm.handleStar(e+1,"click")})),f[e].addEventListener("mouseenter",(function(){return window.tmDialogForm.handleStar(e+1,"mouseenter")})),f[e].addEventListener("mouseleave",(function(){return window.tmDialogForm.handleStar(e+1,"mouseleave")}))},_=0;_<f.length;_++)h(_)};function a(e){var t=e.reviewsModalUrl,o=e.widgetClassName,r=e.onSuccess,i=document.querySelector(".".concat(o,"-dialog"));if(i&&window.tmReviewsModalUrl===t){var n=i.querySelector(".tm-dialog"),l=i.querySelector(".tm-dialog-bg");n.style.removeProperty("display"),l.style.removeProperty("display")}else!function(e,t,o,r){fetch(e,{method:"GET"}).then((function(e){return 200!==e.status?null:e.text()})).then((function(i){if(i){var n=document.querySelector(".".concat(t,"-dialog"));if(r&&n&&n.remove(),!document.querySelector(".".concat(t,"-dialog"))||window.tmReviewsModalUrl!==e){var l=document.createElement("div");l.classList.add("".concat(t,"-dialog")),l.innerHTML=i;var a=l.querySelector(".tm-dialog-bg"),d=l.querySelector(".tm-dialog");a.style.removeProperty("display"),d.style.removeProperty("display"),document.body.appendChild(l),o()}}})).catch((function(e){console.log(e,"error")}))}(t,o,r,window.tmReviewsModalUrl!==t),window.tmReviewsModalUrl=t}function d(e){var t=e.widgetClassName,o=e.onSuccess,r=e.isProductWidget,i=void 0!==r&&r,n=e.currentWidget,l=void 0===n?null:n;if(t){var d=document.querySelectorAll(t)[0];l&&(d=l);var s,c=(s=new URLSearchParams(window.location.search)).has("tmAccountReviewId")?s.get("tmAccountReviewId"):null,m=d.querySelectorAll(".tm-dialog-open");if((null==m?void 0:m.length)>0){var u,g,v=(null===(u=m[0])||void 0===u?void 0:u.dataset).reviewsModalUrl;!c||null!==(g=window)&&void 0!==g&&g.isTmFocusedReview||i||(window.isTmFocusedReview=!0,a({widget:d,reviewsModalUrl:"".concat(v,"?tmAccountReviewId=").concat(c),widgetClassName:t,onSuccess:o}));for(var w=0;w<(null==m?void 0:m.length);w++)m[w].addEventListener("click",(function(){a({reviewsModalUrl:v,widgetClassName:t,onSuccess:o})}))}}}var s=new MutationObserver((function(){for(var a,c=document.getElementsByClassName("tm-dodo2"),m=0,u=0;u<(null==c?void 0:c.length);u+=1){var g;null!==(g=c[u].dataset)&&void 0!==g&&g.tmWidgetDodoNumber?m+=1:a=c[u]}a&&(a.dataset.tmWidgetDodoNumber=m);var v=new IntersectionObserver((function(s){s[0].isIntersecting&&(d({widgetClassName:"tm-dodo2",onSuccess:function(){i("tm-dodo2-dialog"),function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(e||t){var r=document.querySelectorAll(e)[0];o&&(r=o);var i=r.querySelectorAll(t);(r||i)&&i.forEach((function(e){var t;if(!("DIV"===(null==e||null===(t=e.children[0])||void 0===t?void 0:t.tagName)||e.children.length>1||e.textContent.length<30)){for(var o=e.textContent.split(/\r?\n/),r="",i=0;i<o.length;i++){var n;(null===(n=o[i])||void 0===n?void 0:n.length)>0&&(r+="<p>".concat(o[i],"</p>"))}e.innerHTML=r}}))}}(".tm-dodo2-dialog",".tm-widget-review__text"),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=document.querySelectorAll(e)[0];t&&(r=t),r.addEventListener("click",(function(e){(e.target.classList.contains("tm-widget__up-vote")||e.target.parentElement.classList.contains("tm-widget__up-vote"))&&o(e.target.classList.contains("tm-widget__up-vote")?e.target:e.target.parentElement,!0),(e.target.classList.contains("tm-widget__down-vote")||e.target.parentElement.classList.contains("tm-widget__down-vote"))&&o(e.target.classList.contains("tm-widget__down-vote")?e.target:e.target.parentElement)}))}(".tm-dodo2-dialog"),t(".tm-dodo2-dialog"),r({widgetClass:".tm-dodo2-dialog > .tm-dialog"}),function(e){var t=e.widgetClass,o=e.currentWidget,r=void 0===o?null:o,i=e.secondRender,l=void 0!==i&&i,a=document.querySelectorAll(t)[0];r&&(a=r),function(e){var t=e.querySelectorAll(".tm-abuse-report");t&&t.forEach((function(e){e.addEventListener("click",(function(){var t=e.querySelector(".tm-abuse-report__text");t.style.display&&"none"!==t.style.display?t.style.display="none":t.style.display="block"}))}))}(a);var d=a.querySelector(".tm-omnibus-modal__button");if(d&&!l){var s=(null==d?void 0:d.dataset).omnibusModalUrl;d.addEventListener("click",(function(){n(s)}))}var c=a.querySelectorAll(".tm-review-source");if((null==c?void 0:c.length)>0)for(var m,u=(null===(m=c[0])||void 0===m?void 0:m.dataset).omnibusModalUrl,g=0;g<(null==c?void 0:c.length);g++)c[g].addEventListener("click",(function(){n(u)}))}({widgetClass:".tm-dodo2-dialog"}),l("tm-dodo2-dialog"),e("tm-dodo2-dialog",(function(){}))},isProductWidget:!1,currentWidget:a}),v.unobserve(a))}),{rootMargin:"600px",threshold:.01});document.contains(a)&&(v.observe(a),s.disconnect())}));s.observe(document,{attributes:!1,childList:!0,characterData:!1,subtree:!0})})();