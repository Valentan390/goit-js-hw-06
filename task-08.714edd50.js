document.querySelector(".login-form").addEventListener("submit",(function(e){e.preventDefault();var l=e.currentTarget.elements,r=l.email,a=l.password;if(""===r.value||""===a.value)return alert("Please fill in all the fields!");var t={Email:r.value,Password:a.value};console.log(t),e.currentTarget.reset()}));
//# sourceMappingURL=task-08.714edd50.js.map
