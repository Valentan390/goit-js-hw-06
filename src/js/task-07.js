const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
console.log(input);
console.log(span);
console.log(input.value);

const fontSizeControl = Event => {
    span.style.fontSize = Event.currentTarget.value + "px";
    console.log(span.style.fontSize);
}

input.addEventListener("input", fontSizeControl);
