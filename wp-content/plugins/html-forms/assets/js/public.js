(()=>{var e={176:()=>{function e(e,t){const n=!!e.getAttribute("data-show-if"),r=!!e.getAttribute("data-hide-if"),o=n?e.getAttribute("data-show-if").split(":"):e.getAttribute("data-hide-if").split(":"),a=o[0],s=(o.length>1?o[1]:"*").split("|"),i=function(e,t,n){const r=[],o=e.querySelectorAll(`input[name="${t}"], select[name="${t}"], textarea[name="${t}"], button[name="${t}"]`);return[].forEach.call(o,(o=>{const a=o.type.toLowerCase();if("radio"!==a&&"checkbox"!==a||o.checked){if("button"===a||"submit"===a||"BUTTON"===o.tagName){if((!n||n.target!==o)&&e.dataset[t]!==o.value)return;e.dataset[t]=o.value}r.push(o.value)}})),0===r.length&&r.push(""),r}(function(e){let t=e;for(;t.parentElement;)if(t=t.parentElement,"FORM"===t.tagName)return t;return null}(e),a,t);let c=!1;for(let e=0;e<i.length;e++){const t=i[e];if(c=s.indexOf(t)>-1||s.indexOf("*")>-1&&t.length>0,c)break}e.style.display=n?c?"":"none":c?"none":"";const l=e.querySelectorAll("input, select, textarea");[].forEach.call(l,(e=>{n&&(c&&e.getAttribute("data-was-required")&&(e.required=!0,e.removeAttribute("data-was-required")),!c&&e.required&&(e.setAttribute("data-was-required","true"),e.required=!1)),r&&(!c&&e.getAttribute("data-was-required")&&(e.required=!0,e.removeAttribute("data-was-required")),c&&e.required&&(e.setAttribute("data-was-required","true"),e.required=!1))}))}function t(){const t=document.querySelectorAll(".hf-form [data-show-if], .hf-form [data-hide-if]");[].forEach.call(t,e)}function n(t){if(!t.target||!t.target.form||t.target.form.className.indexOf("hf-form")<0)return;const{form:n}=t.target,r=n.querySelectorAll("[data-show-if], [data-hide-if]");[].forEach.call(r,(n=>{e(n,t)}))}document.addEventListener("click",n),document.addEventListener("keyup",n),document.addEventListener("change",n),document.addEventListener("hf-refresh",t),document.addEventListener("swup:contentReplaced",t),window.addEventListener("load",t),t()},232:e=>{function t(e){return e.innerHTML?e.innerHTML:e.value}function n(e,t){e.innerHTML?e.innerHTML=t:e.value=t}e.exports=function(e,r){const o=e.querySelector('input[type="submit"], button[type="submit"]');let a,s;function i(){const e=t(o);n(o,e.length>=5?r:`${e} ${r}`)}return r=r||"·",o&&(a=o.cloneNode(!0)),{start:function(){if(o){const e=o.getAttribute("data-loading-text");e?n(o,e):(o.style.width=window.getComputedStyle(o).width,n(o,r),s=window.setInterval(i,500))}else e.style.opacity="0.5";e.classList&&e.classList.add("mc4wp-loading")},stop:function(){if(o){o.style.width=a.style.width;const e=t(a);n(o,e),window.clearInterval(s)}else e.style.opacity="";e.className=e.className.replace("mc4wp-loading","")}}}},528:(e,t,n)=>{const r=n(328),o=[].filter.call(document.forms,(e=>e.className.indexOf("hf-form")>-1));if(o){const e=function(e){const t={},n=new URLSearchParams(e).entries();for(let e=0;e<n.length;e++){const[r,o]=n[e];if("[]"===r.substring(r.length-2)){const e=r.substring(0,r.length-2);t[e]=t[e]||[],t[e].push(o)}else t[r]=o}return t}(window.location.search);o.forEach((t=>{r(t,e)}))}},328:e=>{e.exports&&(e.exports=function e(t,n,r){for(const o in n){if(!n.hasOwnProperty(o))continue;const a=o;let s=n[o];if(void 0===s&&(s=""),null===s&&(s=""),void 0!==r&&(a=r+"["+o+"]"),s.constructor===Array)a+="[]";else if("object"==typeof s){e(t,s,a);continue}const i=t.elements.namedItem(a);if(!i)continue;const c=i.type||i[0].type;switch(c){default:i.value=s;break;case"radio":case"checkbox":{const e=s.constructor===Array?s:[s];for(let t=0;t<i.length;t++)i[t].checked=e.indexOf(i[t].value)>-1}break;case"select-multiple":{const e=s.constructor===Array?s:[s];for(let t=0;t<i.options.length;t++)i.options[t].selected=e.indexOf(i.options[t].value)>-1}break;case"select":case"select-one":i.value=s.toString()||s;break;case"date":i.value=new Date(s).toISOString().split("T")[0]}const l=new Event("change",{bubbles:!0});switch(c){default:i.dispatchEvent(l);break;case"radio":case"checkbox":for(let e=0;e<i.length;e++)i[e].checked&&i[e].dispatchEvent(l)}}})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(528),n(176);const e={},t={trigger:function(t,n){e[t]=e[t]||[],e[t].forEach((e=>e.apply(null,n)))},on:function(t,n){e[t]=e[t]||[],e[t].push(n)},off:function(t,n){e[t]=e[t]||[],e[t]=e[t].filter((e=>e!==n))}};var r=n(232),o=n.n(r);function a(e){!function(e){const t=e.querySelectorAll(".hf-message");[].forEach.call(t,(e=>{e.parentNode.removeChild(e)}))}(e),s("submit",e);const t=new FormData(e),n=e.querySelectorAll("[data-was-required=true]");[].forEach.call(n,(e=>{t.append("_was_required[]",e.getAttribute("name"))}));const r=window.hf_js_vars||{ajax_url:window.location.href};let a=new XMLHttpRequest;a.onreadystatechange=function(e){const t=new(o())(e);return t.start(),function(){if(4===this.readyState){let n;if(t.stop(),this.status>=200&&this.status<400){try{n=JSON.parse(this.responseText)}catch(e){return void console.log(`HTML Forms: failed to parse AJAX response.\n\nError: "${e}"`)}s("submitted",e),n.error?s("error",e):s("success",e),n.message&&(function(e,t){const n=document.createElement("p");n.className=`hf-message hf-message-${t.type}`,n.innerHTML=t.text,n.role="alert",(e.querySelector(".hf-messages")||e).appendChild(n)}(e,n.message),s("message",e)),n.hide_form&&(e.querySelector(".hf-fields-wrap").style.display="none"),n.redirect_url&&(window.location=n.redirect_url),n.error||e.reset()}else console.log(this.responseText)}}}(e),a.open("POST",r.ajax_url,!0),a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.send(t),a=null}function s(e,n){n.dispatchEvent(new CustomEvent(`hf-${e}`)),t.trigger(e,[n])}void 0===window.html_forms&&(document.addEventListener("submit",(function(e){const t=e.target;t.className.indexOf("hf-form")<0||(e.preventDefault(),a(t))}),!1),window.html_forms={on:t.on,off:t.off,submit:a})})()})();