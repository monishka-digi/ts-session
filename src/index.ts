const input:HTMLElement = document.getElementById("button")!;
// console.log(input);
input.addEventListener("click", function(){
    console.log("hi")
})

const text: HTMLElement = document.getElementById("text")!

text.addEventListener("change", (e)=>{
    console.log(e.target?.value)
})