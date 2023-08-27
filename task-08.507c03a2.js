const e=document.querySelector(".login-form");console.log(e);e.addEventListener("submit",(e=>{e.preventDefault();const{elements:{email:l,password:t}}=e.currentTarget;if(""===l.value||""===t.value)return alert("Please fill in all the fields!");const r={Email:l.value,password:Password.value};console.log(r),e.currentTarget.reset()}));
//# sourceMappingURL=task-08.507c03a2.js.map
