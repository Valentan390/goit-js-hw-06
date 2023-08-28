const galleryListEl = document.querySelector('#categories');
console.log(`Number of categories: ${galleryListEl.children.length}`);

const itemEl = document.querySelectorAll('.item');
itemEl.forEach(elem => {
    let category = elem.firstElementChild.textContent;
    let elements = elem.lastElementChild.children.length;
    console.log(`Category: ${category} \nElements: ${elements}`);
    });


