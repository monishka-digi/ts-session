"use strict";
const input = document.getElementById("button");
// console.log(input);
input.addEventListener("click", function () {
    console.log("hi");
});
const text = document.getElementById("text");
text.addEventListener("change", (e) => {
    console.log(e.target?.value);
});
