const e=document.querySelector(".gallery");e.style.display="flex",e.style.gap="30px",e.style.flexDirection="column-reverse",e.style.alignItems="center",e.style.listStyle="none";const s=[{url:"https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"White and Black Long Fur Cat"},{url:"https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"Orange and White Koi Fish Near Yellow Koi Fish"},{url:"https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"Group of Horses Running"}].map((e=>{const{url:s,alt:t}=e;return`\n            <li class="gallery-item">\n                <img src="${s}" alt="${t}" width='800'>\n            </li>\n  `}));e.insertAdjacentHTML("beforeend",s.join(""));
//# sourceMappingURL=task-03.7e6ce134.js.map
