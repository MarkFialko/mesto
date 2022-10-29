(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n=e.nameSelector,r=e.aboutSelector,o=e.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameSelector=n,this._aboutSelector=r,this._avatarSelector=o}var n,r;return n=t,(r=[{key:"getUserInfo",value:function(){return{name:document.querySelector(this._nameSelector).textContent,about:document.querySelector(this._aboutSelector).textContent,avatar:document.querySelector(this._avatarSelector).src}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;document.querySelector(this._nameSelector).textContent=t,document.querySelector(this._aboutSelector).textContent=n}},{key:"setUserAvatar",value:function(e){var t=e.avatar;document.querySelector(this._avatarSelector).src=t}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,r;return t=e,(r=[{key:"setItem",value:function(e){this._container.prepend(e)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"render",value:function(){var e=this;this.clear(),this._items.forEach((function(t){e._renderer(t)}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){document.body.classList.add("body_active"),this._popup.classList.add("popup_active")}},{key:"close",value:function(){document.body.classList.remove("body_active"),this._popup.classList.remove("popup_active")}},{key:"_handleEscClose",value:function(){var e=this;document.addEventListener("keydown",(function(t){"Escape"===t.key&&e.close()}))}},{key:"_handleOutsideClick",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.closest(".popup__inner")&&!t.target.closest(".popup__close")||e.close()}))}},{key:"setEventListeners",value:function(){this.open(),this._handleEscClose(),this._handleOutsideClick()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=l(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},u.apply(this,arguments)}function l(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function f(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"open",value:function(e){document.body.classList.add("body_active"),this._popup.classList.add("popup_active"),this._popup.querySelector(".popup__image_link").src=e}},{key:"setEventListeners",value:function(e){this.open(e),u(p(a.prototype),"_handleEscClose",this).call(this),u(p(a.prototype),"_handleOutsideClick",this).call(this)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t,n){var r=t.title,o=t.link;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=r,this._link=o,this._cardSelector=n}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return this._cardElement=document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0),this._cardElement}},{key:"_handlePopup",value:function(){var e=this;this._cardElement.querySelector(".card__image").addEventListener("click",(function(){new d(".popup__image").setEventListeners(e._link)}))}},{key:"_handleLike",value:function(){var e=this._cardElement.querySelector(".icon__like");e.addEventListener("click",(function(){e.classList.toggle("icon__like_active")}))}},{key:"_handleTrash",value:function(){var e=this;this._cardElement.querySelector(".icon__trash").addEventListener("click",(function(){e._cardElement.remove()}))}},{key:"_setEventListeners",value:function(){this._handleLike(),this._handleTrash(),this._handlePopup()}},{key:"generateCard",value:function(){var e=this._getTemplate();return this._setEventListeners(),e.querySelector(".description-card__title").textContent=this._title,e.querySelector(".card__image_link").src=this._link,e}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/v1/users/me"),{headers:this._headers}).then((function(t){return e._handleResponse(t)}))}},{key:"editProfile",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/v1/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._handleResponse(e)}))}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/v1/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(){}))}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),_={formSelector:".popup__form",inputSelector:".form__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"form__input_type_error"},b=document.querySelector(".user-title__pen"),k=document.querySelector(".content-info__button"),g=document.querySelector(".content-info-user__image"),S=document.forms.userForm,E=document.forms.cardForm,w=document.forms.avatarForm,O=document.querySelector("[name=user-save]"),j=(document.querySelector("[name=card-save]"),document.querySelector("[name=avatar-save]"));function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._settings=t,this._form=n,this._requiredElements=this._form.querySelectorAll("[required]"),this._button=this._form.querySelector("button")}var t,n;return t=e,n=[{key:"changeButton",value:function(e,t){var n=t.inactiveButtonClass;e?this._button.classList.remove(n):this._button.classList.add(n)}},{key:"_checkTrim",value:function(e){return e.value.trim()===e.value}},{key:"_checkFormValid",value:function(){var e=this;if(1===this._requiredElements.length)return this._requiredElements[0].validity.valid&&this._checkTrim(this._requiredElements[0]);var t=Array.from(this._requiredElements).reduce((function(t,n){return e._checkTrim(t),Number(t.validity.valid&&e._checkTrim(t))+Number(n.validity.valid&&e._checkTrim(n))}));return this._requiredElements.length===t}},{key:"showError",value:function(e){this._form.querySelector(".".concat(e.id,"-error")).textContent=e.dataset.error}},{key:"hideError",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(n)Array.from(this._requiredElements).forEach((function(t){e._form.querySelector(".".concat(t.id,"-error")).textContent=""}));else{var r=this._form.querySelector(".".concat(t.id,"-error"));r.textContent=""}}},{key:"_isEmpty",value:function(e){return e.value.trim().length}},{key:"_handleInput",value:function(){var e=this;this._requiredElements.forEach((function(t){t.addEventListener("input",(function(){e.changeButton(e._checkFormValid(),e._settings),t.validity.valid&&e._isEmpty(t)?e.hideError(t):e.showError(t)}))}))}},{key:"setEventListeners",value:function(){this._handleInput()}}],n&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=x(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},T.apply(this,arguments)}function x(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function A(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function a(e){var t,n=e.popupSelector,r=e.submitCallback;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._submitCallback=r,t._form=t._popup.querySelector("form"),t._requiredElements=t._form.querySelectorAll("[required]"),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formData={},Array.from(this._requiredElements).forEach((function(t){e._formData[t.dataset.info]=t.value})),this._formData}},{key:"close",value:function(){T(I(a.prototype),"close",this).call(this),this._form.reset()}},{key:"_submitHandle",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),t.stopImmediatePropagation(),e._submitCallback(e._getInputValues())}))}},{key:"setEventListeners",value:function(){T(I(a.prototype),"setEventListeners",this).call(this),this._submitHandle()}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var D=new m({baseUrl:"http://95.82.203.66",headers:{Authorization:"29b84512-1e63-45c6-a826-743e655134f6","Content-Type":"application/json"}}),F=new t({nameSelector:".user-title__name",aboutSelector:".user-description__subtitle",avatarSelector:".content-info-user__avatar"}),H=D.getUserInfo().then((function(e){return e})).catch((function(e){return console.log("Ошибка загрузки информации о профиле: ".concat(e))})),N=new r({items:[{title:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{title:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{title:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{title:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{title:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{title:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=new h(e,".card-template").generateCard();N.setItem(t)}},".content__gallery");N.render();var V=new P(_,S),z=new P(_,E),J=new P(_,w),M=new U({popupSelector:".popup__user",submitCallback:function(e){O.textContent="Сохранение...",D.editProfile(e).then((function(e){F.setUserInfo({name:e.name,about:e.about})})).catch((function(e){console.log("Ошибка редактирования профиля ".concat(e))})).finally((function(){O.textContent="Сохранить",M.close()}))}}),$=new U({popupSelector:".popup__card",submitCallback:function(e){var t=e.name,n=e.info,r=new h({title:t,link:n},".card-template").generateCard();N.setItem(r)}}),G=new U({popupSelector:".popup__avatar",submitCallback:function(e){j.textContent="Сохранение...",D.updateAvatar(e).then((function(){F.setUserAvatar({avatar:e.avatar})})).catch((function(e){console.log("Ошибка редактирования профиля ".concat(e))})).finally((function(){j.textContent="Сохранить",G.close()}))}});g.addEventListener("click",(function(e){e.preventDefault(),J.hideError(null,!0),J.changeButton(!1,_),G.setEventListeners()})),b.addEventListener("click",(function(e){e.preventDefault(),V.hideError(null,!0),V.changeButton(!0,_),document.querySelector("#name-input").value=F.getUserInfo().name,document.querySelector("#description-input").value=F.getUserInfo().about,M.setEventListeners()})),k.addEventListener("click",(function(e){e.preventDefault(),z.changeButton(!1,_),z.hideError(null,!0),$.setEventListeners()})),V.setEventListeners(),z.setEventListeners(),J.setEventListeners(),Promise.all([H]).then((function(e){var t,n,r=(t=e,n=1,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];F.setUserInfo({name:r.name,about:r.about}),F.setUserAvatar({avatar:r.avatar})})).catch((function(e){console.log("Ошибка загрузки данных: ".concat(e))}))})();