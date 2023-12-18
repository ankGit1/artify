(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function d(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var oe=T(function(e){return typeof e=="string"?e:null}),v=function(t){return t!=null};function T(e){return function(t){return v(e(t))}}var ae=function(t){return t.length>0},p=function(t){return Object.keys(t).reduce(function(n,r){var o,a=t[r];return c({},n,v(a)?(o={},o[r]=a,o):{})},{})};function C(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.length-1;return function(){for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];for(var m=t[0].apply(this,a),f=1;f<=r;f++)m=t[f].call(this,m);return m}}var ie=T(function(e){return v(e)&&typeof e=="object"&&!Array.isArray(e)?e:null}),se=T(function(e){return Array.isArray(e)&&e.every(oe)&&ae(e)?e:null}),ce=T(function(e){return ie(e)&&"errors"in e&&se(e.errors)?{errors:e.errors}:null}),le=function(t){return ce(t)?{errors:t.errors,source:"api"}:{errors:["Responded with a status code outside the 2xx range, and the response body is not recognisable."],source:"decoding"}},S=function(t){this.message=t},ue=function(t){return/application\/[^+]*[+]?(json);?.*/.test(t)},de=function(t){var n=t.headers.get("content-type");return v(n)&&ue(n)},J=function(t){if(de(t))return t.json().catch(function(n){throw new S("unable to parse JSON response.")});throw new S("expected JSON response from server.")},he=function(t){return function(n){return(n.ok?t({response:n}).then(function(r){return{type:"success",status:n.status,response:r,originalResponse:n}}):J(n).then(function(r){return c({type:"error",status:n.status},le(r),{originalResponse:n})})).catch(function(r){if(r instanceof S)return{type:"error",source:"decoding",status:n.status,originalResponse:n,errors:[r.message]};throw r})}},u=function(){return function(t){var n=t.response;return J(n)}},pe=function(t){return function(n){Object.keys(t).forEach(function(r){return n.searchParams.set(r,t[r].toString())})}},me=function(t){return function(n){n.pathname==="/"?n.pathname=t:n.pathname+=t}},ve=function(t){var n=t.pathname,r=t.query;return function(o){var a=new URL(o);return me(n)(a),pe(r)(a),a.toString()}},fe=function(t){var n={};return t.forEach(function(r,o){n[o]=r}),n},ye=function(t){var n=new URL(t),r=n.pathname,o=n.searchParams,a=fe(o);return{query:a,pathname:r==="/"?void 0:r}},l=function(t){return function(n,r){r===void 0&&(r={});var o=t(n),a=o.headers,i=o.query,m=d(o,["headers","query"]);return c({},m,r,{query:i,headers:c({},a,r.headers)})}},s=function(t){return t},Pe=function(t){var n=t.accessKey,r=t.apiVersion,o=r===void 0?"v1":r,a=t.apiUrl,i=a===void 0?"https://api.unsplash.com":a,m=t.headers,f=t.fetch,O=d(t,["accessKey","apiVersion","apiUrl","headers","fetch"]);return function(U){var G=U.handleResponse,V=U.handleRequest;return C(V,function(I){var W=I.pathname,X=I.query,j=I.method,Y=j===void 0?"GET":j,Z=I.headers,L=I.body,ee=I.signal,te=ve({pathname:W,query:X})(i),ne=c({method:Y,headers:c({},m,Z,{"Accept-Version":o},v(n)?{Authorization:"Client-ID "+n}:{}),body:L,signal:ee},O),re=f??fetch;return re(te,ne).then(he(G))})}},F="x-total",Ie=function(t){var n=t.headers.get(F);if(v(n)){var r=parseInt(n);if(Number.isInteger(r))return r;throw new S("expected "+F+" header to be valid integer.")}else throw new S("expected "+F+" header to exist.")},P=function(){return function(t){var n=t.response;return u()({response:n}).then(function(r){return{results:r,total:Ie(n)}})}},K=function(t){return v(t)?{collections:t.join()}:{}},Re=function(t){return v(t)?{topics:t.join()}:{}},h=function(t){var n=t.page,r=t.perPage,o=t.orderBy;return p({per_page:r,order_by:o,page:n})},w="/collections",qe=function(){var e=function(n){var r=n.collectionId;return w+"/"+r+"/photos"};return s({getPathname:e,handleRequest:l(function(t){var n=t.collectionId,r=t.orientation,o=d(t,["collectionId","orientation"]);return{pathname:e({collectionId:n}),query:p(c({},h(o),{orientation:r}))}}),handleResponse:P()})}(),Se=function(){var e=function(n){var r=n.collectionId;return w+"/"+r};return s({getPathname:e,handleRequest:l(function(t){var n=t.collectionId;return{pathname:e({collectionId:n}),query:{}}}),handleResponse:u()})}(),ge=function(){var e=function(){return w};return s({getPathname:e,handleRequest:l(function(t){return t===void 0&&(t={}),{pathname:e(),query:h(t)}}),handleResponse:P()})}(),be=function(){var e=function(n){var r=n.collectionId;return w+"/"+r+"/related"};return s({getPathname:e,handleRequest:l(function(t){var n=t.collectionId;return{pathname:e({collectionId:n}),query:{}}}),handleResponse:u()})}(),g="/photos",Ee=function(){var e=function(){return g};return s({getPathname:function(n){return e()},handleRequest:l(function(t){return t===void 0&&(t={}),{pathname:g,query:p(h(t))}}),handleResponse:P()})}(),Te=function(){var e=function(n){var r=n.photoId;return g+"/"+r};return s({getPathname:e,handleRequest:l(function(t){var n=t.photoId;return{pathname:e({photoId:n}),query:{}}}),handleResponse:u()})}(),we=function(){var e=function(n){var r=n.photoId;return g+"/"+r+"/statistics"};return s({getPathname:e,handleRequest:l(function(t){var n=t.photoId;return{pathname:e({photoId:n}),query:{}}}),handleResponse:u()})}(),Ae=function(){var e=function(){return g+"/random"};return s({getPathname:e,handleRequest:l(function(t){var n=t===void 0?{}:t,r=n.collectionIds,o=n.contentFilter,a=n.topicIds,i=d(n,["collectionIds","contentFilter","topicIds"]);return{pathname:e(),query:p(c({},i,{content_filter:o},K(r),Re(a))),headers:{"cache-control":"no-cache"}}}),handleResponse:u()})}(),Oe={handleRequest:l(function(e){var t=e.downloadLocation,n=ye(t),r=n.pathname,o=n.query;if(!v(r))throw new Error("Could not parse pathname from url.");return{pathname:r,query:p(o)}}),handleResponse:u()},D="/search",Fe=function(){var e=function(){return D+"/photos"};return s({getPathname:function(n){return e()},handleRequest:l(function(t){var n=t.query,r=t.page,o=t.perPage,a=t.orderBy,i=t.collectionIds,m=t.lang,f=t.contentFilter,O=d(t,["query","page","perPage","orderBy","collectionIds","lang","contentFilter"]);return{pathname:e(),query:p(c({query:n,content_filter:f,lang:m,order_by:a},h({page:r,perPage:o}),K(i),O))}}),handleResponse:u()})}(),Be=function(){var e=function(){return D+"/collections"};return s({getPathname:function(n){return e()},handleRequest:l(function(t){var n=t.query,r=d(t,["query"]);return{pathname:e(),query:c({query:n},h(r))}}),handleResponse:u()})}(),$e=function(){var e=function(){return D+"/users"};return s({getPathname:function(n){return e()},handleRequest:l(function(t){var n=t.query,r=d(t,["query"]);return{pathname:e(),query:c({query:n},h(r))}}),handleResponse:u()})}(),A="/users",Ce=function(){var e=function(n){var r=n.username;return A+"/"+r};return s({getPathname:e,handleRequest:l(function(t){var n=t.username;return{pathname:e({username:n}),query:{}}}),handleResponse:u()})}(),De=function(){var e=function(n){var r=n.username;return A+"/"+r+"/photos"};return s({getPathname:e,handleRequest:l(function(t){var n=t.username,r=t.stats,o=t.orientation,a=d(t,["username","stats","orientation"]);return{pathname:e({username:n}),query:p(c({},h(a),{orientation:o,stats:r}))}}),handleResponse:P()})}(),He=function(){var e=function(n){var r=n.username;return A+"/"+r+"/likes"};return s({getPathname:e,handleRequest:l(function(t){var n=t.username,r=t.orientation,o=d(t,["username","orientation"]);return{pathname:e({username:n}),query:p(c({},h(o),{orientation:r}))}}),handleResponse:P()})}(),Ue=function(){var e=function(n){var r=n.username;return A+"/"+r+"/collections"};return s({getPathname:e,handleRequest:l(function(t){var n=t.username,r=d(t,["username"]);return{pathname:e({username:n}),query:h(r)}}),handleResponse:P()})}(),z="/topics",b=function(t){var n=t.topicIdOrSlug;return z+"/"+n},je=s({getPathname:b,handleRequest:function(t){var n=t.page,r=t.perPage,o=t.orderBy,a=t.topicIdsOrSlugs;return{pathname:z,query:p(c({},h({page:n,perPage:r}),{ids:a==null?void 0:a.join(","),order_by:o}))}},handleResponse:P()}),ke=s({getPathname:b,handleRequest:function(t){var n=t.topicIdOrSlug;return{pathname:b({topicIdOrSlug:n}),query:{}}},handleResponse:u()}),xe=function(){var e=C(b,function(t){return t+"/photos"});return s({getPathname:e,handleRequest:function(n){var r=n.topicIdOrSlug,o=n.orientation,a=d(n,["topicIdOrSlug","orientation"]);return{pathname:e({topicIdOrSlug:r}),query:p(c({},h(a),{orientation:o}))}},handleResponse:P()})}(),k;(function(e){e.Afrikaans="af",e.Amharic="am",e.Arabic="ar",e.Azerbaijani="az",e.Belarusian="be",e.Bulgarian="bg",e.Bengali="bn",e.Bosnian="bs",e.Catalan="ca",e.Cebuano="ceb",e.Corsican="co",e.Czech="cs",e.Welsh="cy",e.Danish="da",e.German="de",e.Greek="el",e.English="en",e.Esperanto="eo",e.Spanish="es",e.Estonian="et",e.Basque="eu",e.Persian="fa",e.Finnish="fi",e.French="fr",e.Frisian="fy",e.Irish="ga",e.ScotsGaelic="gd",e.Galician="gl",e.Gujarati="gu",e.Hausa="ha",e.Hawaiian="haw",e.Hindi="hi",e.Hmong="hmn",e.Croatian="hr",e.HaitianCreole="ht",e.Hungarian="hu",e.Armenian="hy",e.Indonesian="id",e.Igbo="ig",e.Icelandic="is",e.Italian="it",e.Hebrew="iw",e.Japanese="ja",e.Javanese="jw",e.Georgian="ka",e.Kazakh="kk",e.Khmer="km",e.Kannada="kn",e.Korean="ko",e.Kurdish="ku",e.Kyrgyz="ky",e.Latin="la",e.Luxembourgish="lb",e.Lao="lo",e.Lithuanian="lt",e.Latvian="lv",e.Malagasy="mg",e.Maori="mi",e.Macedonian="mk",e.Malayalam="ml",e.Mongolian="mn",e.Marathi="mr",e.Malay="ms",e.Maltese="mt",e.Myanmar="my",e.Nepali="ne",e.Dutch="nl",e.Norwegian="no",e.Nyanja="ny",e.Oriya="or",e.Punjabi="pa",e.Polish="pl",e.Pashto="ps",e.Portuguese="pt",e.Romanian="ro",e.Russian="ru",e.Kinyarwanda="rw",e.Sindhi="sd",e.Sinhala="si",e.Slovak="sk",e.Slovenian="sl",e.Samoan="sm",e.Shona="sn",e.Somali="so",e.Albanian="sq",e.Serbian="sr",e.Sesotho="st",e.Sundanese="su",e.Swedish="sv",e.Swahili="sw",e.Tamil="ta",e.Telugu="te",e.Tajik="tg",e.Thai="th",e.Turkmen="tk",e.Filipino="tl",e.Turkish="tr",e.Tatar="tt",e.Uighur="ug",e.Ukrainian="uk",e.Urdu="ur",e.Uzbek="uz",e.Vietnamese="vi",e.Xhosa="xh",e.Yiddish="yi",e.Yoruba="yo",e.ChineseSimplified="zh",e.ChineseTraditional="zh-TW",e.Zulu="zu"})(k||(k={}));var x;(function(e){e.LATEST="latest",e.POPULAR="popular",e.VIEWS="views",e.DOWNLOADS="downloads",e.OLDEST="oldest"})(x||(x={}));var Ne=C(Pe,function(e){return{photos:{get:e(Te),list:e(Ee),getStats:e(we),getRandom:e(Ae),trackDownload:e(Oe)},users:{getPhotos:e(De),getCollections:e(Ue),getLikes:e(He),get:e(Ce)},search:{getCollections:e(Be),getPhotos:e(Fe),getUsers:e($e)},collections:{getPhotos:e(qe),get:e(Se),list:e(ge),getRelated:e(be)},topics:{list:e(je),get:e(ke),getPhotos:e(xe)}}});const N=document.getElementById("diaplay_images"),Me=document.getElementById("categoryTitle"),Je=Ne({accessKey:"9vx8r413brlRKpWFvy4vDW3JgQ1wH9-uB4jlzjDFIIQ"});var E=[];const Q=async e=>{console.log(e);try{const t=await Je.search.getPhotos({query:e,page:1,perPage:16,orientation:"portrait"});if(t.type==="success"){N.innerHTML="";const n=t.response.results,r=n.map(o=>{const a=document.createElement("div");a.classList.add("image_contain_div");const i=`
        <img id=${o.id} class='pic' src=${o.urls.small} />
        <button id=${o.id} class='favouriteBtn'>Add to favourite</button>
        `;a.innerHTML=i,N.appendChild(a)});Me.innerText=e,E=n,console.log(E)}}catch(t){console.error("Error fetching data:",t)}},_=()=>(console.log(E),E),Ke=document.querySelectorAll(".a_tags span");document.querySelector("#display");const ze=document.getElementById("diaplay_images"),Qe=document.getElementById("toggleBtn"),M=document.getElementById("toggle"),_e=document.getElementById("prevBtn"),Ge=document.getElementById("nextBtn"),q=document.querySelector("#popup"),Ve=document.querySelector("#cutBtn");let y=[],B=!1,R=0,$=[];document.addEventListener("DOMContentLoaded",async()=>{await Q("Art"),y=_()});const We=async e=>{await Q(e.target.getAttribute("name")),y=_()};Ke.forEach(e=>{e.addEventListener("click",We)});const H=async e=>{const t=y.find(r=>r.id===e.target.id);if(R=y.findIndex(r=>r.id===t.id),R>=0){const r=document.querySelector(".popup_main");r&&q.removeChild(r)}const n=`
  <div class="popup_main">
          <div class="flex_popup">
            <img
              src=${t.urls.small}
            />
            <div class="flex_info">
              <span><b>Title - </b></span>
              <p>${t.alt_description}</p>
              <span><b>Description -</b></span>
              <p>${t.description}</p>
              <div class='extra_info'>
              <div>
              <span><b>Likes -</b></span>
              <p>${t.likes}</p>
              </div>
              <div>
              <span><b>Color -</b></span>
              <p>${t.color}</p>
              </div>
              <div>
              <span><b>Tags -</b></span>
              <p># ${t.tags[0].title}</p>
              </div>
              </div>
            </div>
          </div>
          <hr>
          <div class="user_info">
            <div>
              <img
                src=${t.user.profile_image.small}
                alt=""
              />
              <span><b>${t.user.name}</b></span>
            </div>
            <p>Location - ${t.user.location}</p>
            <p><a href=${t.user.social.portfolio_url}>Instagram</a> - ${t.user.instagram_username}</p>
            <p>Follow || Donate</p>
          </div>
        </div>
  `;q.insertAdjacentHTML("beforeend",n),q.style.display="flex"};ze.addEventListener("click",async e=>{if(e.target.className==="pic"&&H(e),e.target.className==="favouriteBtn"){const t=JSON.parse(localStorage.getItem("favorites"))||[];if($=t,!await t.find(r=>r.id===e.target.id)){const r=y.find(o=>o.id===e.target.id);$.push(r),localStorage.setItem("favorites",JSON.stringify($))}}});Ve.addEventListener("click",()=>{const e=document.querySelector(".popup_main");e&&q.removeChild(e),q.style.display="none"});Qe.addEventListener("click",()=>{B===!1?(M.style.display="flex",B=!0):(M.style.display="none",B=!1)});_e.addEventListener("click",()=>{if(R>0){const e=y[R-1];H({target:e})}});Ge.addEventListener("click",()=>{if(R<y.length){const e=y[R+1];H({target:e})}});
