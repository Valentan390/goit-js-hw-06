!function(){var t=document.querySelector("#validation-input");console.log(t),console.log(t.getAttribute("data-length"));t.addEventListener("blur",(function(e){e.currentTarget.value.length<t.getAttribute("data-length")?t.classList.add("invalid"):t.classList.replace("invalid","valid"),console.log(e.currentTarget.value.length)}))}();
//# sourceMappingURL=task-06.d9b5cb82.js.map
