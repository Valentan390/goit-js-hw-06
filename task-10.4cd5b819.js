const e=document.querySelector("#controls").firstElementChild,t=document.querySelector("[data-creaet]"),r=document.querySelector("[data-destroy]"),n=document.querySelector("#boxes");let o=0;e.addEventListener("input",(e=>{o=e.currentTarget.value})),t.addEventListener("click",(()=>(e=>{let t=[];console.log("hi");for(let r=0;r<e;r++){const e=document.createElement("div");e.style.width=30+10*r+"px",e.style.height=30+10*r+"px",e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,t.push(e)}return n.append(...t),t})(o)));r.addEventListener("click",(()=>{n.innerHTML=""}));
//# sourceMappingURL=task-10.4cd5b819.js.map