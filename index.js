import{a as f,S as p,i as s}from"./assets/vendor-CYMld6vM.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="52389108-9de8a863b1caabc6aa6df9d02",h="https://pixabay.com/api/";function g(n){return f.get(h,{params:{key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),y=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(n){const o=n.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
        </a>
        <div class="info">
          <span>👍 ${t.likes}</span>
          <span>👁 ${t.views}</span>
          <span>💬 ${t.comments}</span>
          <span>⬇ ${t.downloads}</span>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",o),y.refresh()}function b(){l.innerHTML=""}function S(){u.classList.remove("hidden")}function v(){u.classList.add("hidden")}const d=document.querySelector(".form"),c=d.querySelector('input[name="search-text"]');d.addEventListener("submit",E);function E(n){n.preventDefault();const o=c.value.trim();if(!o){s.warning({title:"Warning",message:"Enter a search query",position:"topRight"});return}b(),S(),c.value="",g(o).then(t=>{if(!t.hits.length){s.info({title:"No results",message:"No images found",position:"topRight"});return}L(t.hits),s.success({title:"Success",message:`Found ${t.hits.length} images`,position:"topRight"})}).catch(()=>{s.error({title:"Error",message:"Something went wrong",position:"topRight"})}).finally(()=>v())}
//# sourceMappingURL=index.js.map
