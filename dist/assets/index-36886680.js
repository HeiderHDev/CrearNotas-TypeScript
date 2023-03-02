(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&l(t)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();let g;const O=new Uint8Array(16);function k(){if(!g&&(g=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!g))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return g(O)}const d=[];for(let o=0;o<256;++o)d.push((o+256).toString(16).slice(1));function C(o,i=0){return(d[o[i+0]]+d[o[i+1]]+d[o[i+2]]+d[o[i+3]]+"-"+d[o[i+4]]+d[o[i+5]]+"-"+d[o[i+6]]+d[o[i+7]]+"-"+d[o[i+8]]+d[o[i+9]]+"-"+d[o[i+10]]+d[o[i+11]]+d[o[i+12]]+d[o[i+13]]+d[o[i+14]]+d[o[i+15]]).toLowerCase()}const S=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),T={randomUUID:S};function I(o,i,e){if(T.randomUUID&&!i&&!o)return T.randomUUID();o=o||{};const l=o.random||(o.rng||k)();if(l[6]=l[6]&15|64,l[8]=l[8]&63|128,i){e=e||0;for(let n=0;n<16;++n)i[e+n]=l[n];return i}return C(l)}var M=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x={},U={get exports(){return x},set exports(o){x=o}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(o){(function(i,e){o.exports?o.exports=e():i.Toastify=e()})(M,function(i){var e=function(t){return new e.lib.init(t)},l="1.12.0";e.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},e.lib=e.prototype={toastify:l,constructor:e,init:function(t){return t||(t={}),this.options={},this.toastElement=null,this.options.text=t.text||e.defaults.text,this.options.node=t.node||e.defaults.node,this.options.duration=t.duration===0?0:t.duration||e.defaults.duration,this.options.selector=t.selector||e.defaults.selector,this.options.callback=t.callback||e.defaults.callback,this.options.destination=t.destination||e.defaults.destination,this.options.newWindow=t.newWindow||e.defaults.newWindow,this.options.close=t.close||e.defaults.close,this.options.gravity=t.gravity==="bottom"?"toastify-bottom":e.defaults.gravity,this.options.positionLeft=t.positionLeft||e.defaults.positionLeft,this.options.position=t.position||e.defaults.position,this.options.backgroundColor=t.backgroundColor||e.defaults.backgroundColor,this.options.avatar=t.avatar||e.defaults.avatar,this.options.className=t.className||e.defaults.className,this.options.stopOnFocus=t.stopOnFocus===void 0?e.defaults.stopOnFocus:t.stopOnFocus,this.options.onClick=t.onClick||e.defaults.onClick,this.options.offset=t.offset||e.defaults.offset,this.options.escapeMarkup=t.escapeMarkup!==void 0?t.escapeMarkup:e.defaults.escapeMarkup,this.options.ariaLive=t.ariaLive||e.defaults.ariaLive,this.options.style=t.style||e.defaults.style,t.backgroundColor&&(this.options.style.background=t.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var t=document.createElement("div");t.className="toastify on "+this.options.className,this.options.position?t.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(t.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):t.className+=" toastify-right",t.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var a in this.options.style)t.style[a]=this.options.style[a];if(this.options.ariaLive&&t.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)t.appendChild(this.options.node);else if(this.options.escapeMarkup?t.innerText=this.options.text:t.innerHTML=this.options.text,this.options.avatar!==""){var p=document.createElement("img");p.src=this.options.avatar,p.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?t.appendChild(p):t.insertAdjacentElement("afterbegin",p)}if(this.options.close===!0){var r=document.createElement("button");r.type="button",r.setAttribute("aria-label","Close"),r.className="toast-close",r.innerHTML="&#10006;",r.addEventListener("click",function(m){m.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var c=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&c>360?t.insertAdjacentElement("afterbegin",r):t.appendChild(r)}if(this.options.stopOnFocus&&this.options.duration>0){var u=this;t.addEventListener("mouseover",function(m){window.clearTimeout(t.timeOutValue)}),t.addEventListener("mouseleave",function(){t.timeOutValue=window.setTimeout(function(){u.removeElement(t)},u.options.duration)})}if(typeof this.options.destination<"u"&&t.addEventListener("click",function(m){m.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&t.addEventListener("click",function(m){m.stopPropagation(),this.options.onClick()}.bind(this)),typeof this.options.offset=="object"){var f=n("x",this.options),h=n("y",this.options),w=this.options.position=="left"?f:"-"+f,L=this.options.gravity=="toastify-top"?h:"-"+h;t.style.transform="translate("+w+","+L+")"}return t},showToast:function(){this.toastElement=this.buildToast();var t;if(typeof this.options.selector=="string"?t=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?t=this.options.selector:t=document.body,!t)throw"Root element is not defined";var a=e.defaults.oldestFirst?t.firstChild:t.lastChild;return t.insertBefore(this.toastElement,a),e.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(t){t.className=t.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),t.parentNode&&t.parentNode.removeChild(t),this.options.callback.call(t),e.reposition()}.bind(this),400)}},e.reposition=function(){for(var t={top:15,bottom:15},a={top:15,bottom:15},p={top:15,bottom:15},r=document.getElementsByClassName("toastify"),c,u=0;u<r.length;u++){s(r[u],"toastify-top")===!0?c="toastify-top":c="toastify-bottom";var f=r[u].offsetHeight;c=c.substr(9,c.length-1);var h=15,w=window.innerWidth>0?window.innerWidth:screen.width;w<=360?(r[u].style[c]=p[c]+"px",p[c]+=f+h):s(r[u],"toastify-left")===!0?(r[u].style[c]=t[c]+"px",t[c]+=f+h):(r[u].style[c]=a[c]+"px",a[c]+=f+h)}return this};function n(t,a){return a.offset[t]?isNaN(a.offset[t])?a.offset[t]:a.offset[t]+"px":"0px"}function s(t,a){return!t||typeof a!="string"?!1:!!(t.className&&t.className.trim().split(/\s+/gi).indexOf(a)>-1)}return e.lib.init.prototype=e.lib,e})})(U);const E=x;const y=document.querySelector("#task-form"),b=document.querySelector("#task-list");let v=[];y==null||y.addEventListener("submit",o=>{o.preventDefault();const i=y.title,e=y.description;v.push({title:i.value,description:e.value,id:I()}),localStorage.setItem("tasks",JSON.stringify(v)),E({text:"Tarea agregada con éxito",style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast(),N(v),y.reset(),i.focus()});document.addEventListener("DOMContentLoaded",()=>{v=JSON.parse(localStorage.getItem("tasks")||"[]"),N(v)});const N=o=>{b.innerHTML="",o.forEach(i=>{const e=document.createElement("div");e.className="bg-zinc-800 mb-1 rounded-lg hover:bg-zinc-700 hover:cursor-pointer";const l=document.createElement("header");l.className="flex justify-between";const n=document.createElement("span");n.innerText=i.title;const s=document.createElement("button");s.className="bg-red-500 px-2 py-1 rounded-md hover:bg-red-800",s.innerText="Delete",s.addEventListener("click",()=>{const p=o.findIndex(r=>r.id===i.id);console.log(p),o.splice(p,1),localStorage.setItem("tasks",JSON.stringify(o)),N(o),E({text:"Tarea eliminada con éxito"}).showToast()}),l.append(n),l.append(s);const t=document.createElement("p");t.innerText=i.description,e.append(l),e.append(t);const a=document.createElement("p");a.innerText=i.id,a.className="text-gray-400 text-xs",e.append(a),b==null||b.append(e)})};
