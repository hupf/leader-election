(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const u=Symbol.for("constructDateFrom");function g(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&u in e?e[u](t):e instanceof Date?new e.constructor(t):new Date(t)}function y(e,t){return g(e,e)}function p(e,t){const r=y(e);return r.setSeconds(59,999),r}const l=document.getElementById("container"),f=document.getElementById("text"),m=document.getElementById("scheduled"),d=document.getElementById("time");async function h(){i("Waiting...","salmon"),await navigator.locks.request("my_resource",async()=>{i("Current leader!","lightgreen"),await new Promise(e=>{setTimeout(()=>{e(null)},1e4)})}),i("Idle","lightgray"),a()}a();function i(e,t){console.log(e),f&&(f.textContent=e),l&&(l.style.backgroundColor=t)}function a(){const e=new Date,t=p(e);m&&(m.textContent=t.toLocaleString("de-CH",{hour:"numeric",minute:"numeric",second:"numeric"}));const r=t.getTime()-e.getTime();setTimeout(h,r)}setInterval(()=>{d&&(d.textContent=new Date().toLocaleString("de-CH",{hour:"numeric",minute:"numeric",second:"numeric"}))},1e3);
