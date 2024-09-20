var t=Array.from(document.getElementsByClassName("population"));t=t.map(function(t){return Number(t.textContent.split(",").join(""))});var e=0,o=0;t.forEach(function(t){e+=t,o++});var n=e/o,r=document.querySelector(".total-population"),a=document.querySelector(".average-population");r.textContent=e.toLocaleString(),a.textContent=n.toLocaleString();
//# sourceMappingURL=index.78f507a9.js.map
