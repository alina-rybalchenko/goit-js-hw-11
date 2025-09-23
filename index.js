import{a as d,S as p,i}from"./assets/vendor-CYMld6vM.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="52389108-9de8a863b1caabc6aa6df9d02",m="https://pixabay.com/api/";function h(o){return d.get(m,{params:{key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}const c=document.querySelector(".gallery"),g=new p(".gallery a",{captionsData:"alt",captionDelay:250});function y(o){const s=o.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy"/>
        </a>
        <div class="info">
          <div class="info-item">
            <p class="label">Likes</p>
            <p class="value">${t.likes}</p>
          </div>
          <div class="info-item">
            <p class="label">Views</p>
            <p class="value">${t.views}</p>
          </div>
          <div class="info-item">
            <p class="label">Comments</p>
            <p class="value">${t.comments}</p>
          </div>
          <div class="info-item">
            <p class="label">Downloads</p>
            <p class="value">${t.downloads}</p>
          </div>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",s),g.refresh()}function v(){c.innerHTML=""}function L(){document.querySelector(".loader").classList.remove("hidden")}function b(){document.querySelector(".loader").classList.add("hidden")}const u=document.querySelector(".form"),l=u.querySelector('input[name="search-text"]');u.addEventListener("submit",S);function S(o){o.preventDefault();const s=l.value.trim();if(!s){i.warning({title:"Warning",message:"Enter a search query",position:"topRight"});return}v(),L(),l.value="",h(s).then(t=>{if(!t.hits.length){i.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(t.hits),i.success({title:"Success",message:`Found ${t.hits.length} images`,position:"topRight"})}).catch(()=>{i.error({title:"Error",message:"Something went wrong",position:"topRight"})}).finally(()=>b())}
//# sourceMappingURL=index.js.map
