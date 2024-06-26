var e=document.querySelectorAll("input"),n=function(e){for(var n="",a=0;a<e.length;a++)0===a?n+=e[0].toUpperCase():e[a].match(/[A-Z]/g)?n+=" "+e[a]:n+=e[a];return n};!function(e){e.forEach(function(e){e.placeholder=n(e.name),e.insertAdjacentHTML("beforebegin",'<label for="'.concat(e.id,'" class="field-label">').concat(n(e.name),"</label>"))})}(e);
//# sourceMappingURL=index.70717b14.js.map
