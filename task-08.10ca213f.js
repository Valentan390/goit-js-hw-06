document.querySelector(".login-form").addEventListener("submit",(e=>{e.preventDefault();const{elements:{email:l,password:t}}=e.currentTarget;if(""===l.value||""===t.value)return alert("Please fill in all the fields!");const r={Email:l.value,Password:t.value};console.log(r),e.currentTarget.reset()}));
//# sourceMappingURL=task-08.10ca213f.js.map
