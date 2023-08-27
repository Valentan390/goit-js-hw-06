const o=document.querySelector("button.change-color"),e=document.querySelector("body"),t=document.querySelector("span.color");console.log(o),console.log(e),console.log(t),o.addEventListener("click",(o=>{let l=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;console.log(l),e.style.backgroundColor=l,t.textContent=l}));
//# sourceMappingURL=task-09.100e3f67.js.map
