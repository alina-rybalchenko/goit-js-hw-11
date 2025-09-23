import{a as d,S as p,i}from"./assets/vendor-CYMld6vM.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const f="52389108-9de8a863b1caabc6aa6df9d02",m="https://pixabay.com/api/";function h(o){return d.get(m,{params:{key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),g=new p(".gallery a",{captionsData:"alt",captionDelay:250});function y(o){const r=o.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy"/>
        </a>
        <div class="info">
          <div class="info-item">
            <p class="label">Likes</p>
            <p class="value">${e.likes}</p>
          </div>
          <div class="info-item">
            <p class="label">Views</p>
            <p class="value">${e.views}</p>
          </div>
          <div class="info-item">
            <p class="label">Comments</p>
            <p class="value">${e.comments}</p>
          </div>
          <div class="info-item">
            <p class="label">Downloads</p>
            <p class="value">${e.downloads}</p>
          </div>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),g.refresh()}function v(){c.innerHTML=""}function L(){document.querySelector(".loader").classList.remove("hidden")}function b(){document.querySelector(".loader").classList.add("hidden")}const u=document.querySelector(".form"),l=u.querySelector('input[name="search-text"]');u.addEventListener("submit",S);function S(o){o.preventDefault();const r=l.value.trim();if(!r){i.warning({title:"Warning",message:"Enter a search query",position:"topRight"});return}v(),L(),h(r).then(e=>{if(!e.hits.length){i.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(e.hits),i.success({title:"Success",message:`Found ${e.hits.length} images`,position:"topRight"})}).catch(e=>{i.error({title:"Error",message:`Something went wrong: ${e.message}`,position:"topRight"})}).finally(()=>{b(),l.value=""})}
//# sourceMappingURL=index.js.map
