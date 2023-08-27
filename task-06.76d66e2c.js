const t=document.querySelector("#validation-input");console.log(t),console.log(t.getAttribute("data-length"));t.addEventListener("blur",(e=>{e.currentTarget.value.length<t.getAttribute("data-length")?t.classList.add("invalid"):t.classList.replace("invalid","valid"),console.log(e.currentTarget.value.length)}));
//# sourceMappingURL=task-06.76d66e2c.js.map
